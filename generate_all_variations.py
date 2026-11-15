import os
import numpy as np
from PIL import Image, ImageOps, ImageDraw

src_path = '/home/jan/clevier/web/brand/cl.jpg'
orig = Image.open(src_path)

out_dir = '/home/jan/clevier/web/public/brand'
os.makedirs(out_dir, exist_ok=True)

CHARCOAL = (31, 35, 40, 255)     # #1F2328
EMERALD = (47, 191, 113, 255)    # #2FBF71
WHITE = (255, 255, 255, 255)
TRANSPARENT = (0, 0, 0, 0)
DARK_BG = (17, 19, 21, 255)      # #111315

def get_base_rotated(angle):
    rot = orig.rotate(-angle, expand=True, resample=Image.Resampling.BICUBIC, fillcolor='white')
    gray = rot.convert('L')
    inv = ImageOps.invert(gray)
    bbox = inv.getbbox()
    margin = 25
    bbox = (max(0, bbox[0]-margin), max(0, bbox[1]-margin), min(rot.width, bbox[2]+margin), min(rot.height, bbox[3]+margin))
    return rot.crop(bbox)

# 1. Base angles
angles = [60, 62, 64, 65, 66, 68]
base_imgs = {}
for a in angles:
    img = get_base_rotated(a)
    base_imgs[a] = img
    img.save(f'{out_dir}/cl-angle-{a}deg.png')

# 2. Separation Helper
def make_separated(angle, shift, split_gap=0):
    img = base_imgs[angle].convert('RGBA')
    arr = np.array(img)
    H, W, _ = arr.shape
    gray = (arr[:, :, 0] < 128).astype(np.uint8)
    
    # Find cut column
    best_x = None
    min_top = 999
    for x in range(W//4, W//2):
        ys = np.where(gray[:, x])[0]
        top_ys = [y for y in ys if y < H * 0.7]
        if len(top_ys) == 0:
            best_x = x
            break
        elif len(top_ys) < min_top:
            min_top = len(top_ys)
            best_x = x
            
    new_W = W + shift
    new_arr = np.ones((H, new_W, 4), dtype=np.uint8) * 255
    
    # C on left
    new_arr[:, :best_x] = arr[:, :best_x]
    
    # L on right
    new_arr[:, best_x + shift:] = arr[:, best_x:]
    
    # Bridge at bottom if split_gap == 0
    split_y = int(H * 0.7)
    bottom_col = arr[split_y:, best_x - 1, :]
    
    if split_gap == 0:
        for sx in range(best_x, best_x + shift):
            new_arr[split_y:, sx, :] = bottom_col
    else:
        # Leave gap between best_x and best_x + split_gap
        bridge_start = best_x + split_gap
        for sx in range(bridge_start, best_x + shift):
            new_arr[split_y:, sx, :] = bottom_col
            
    res = Image.fromarray(new_arr)
    # Re-crop to bounds
    res_gray = res.convert('L')
    res_inv = ImageOps.invert(res_gray)
    bbox = res_inv.getbbox()
    margin = 25
    bbox = (max(0, bbox[0]-margin), max(0, bbox[1]-margin), min(res.width, bbox[2]+margin), min(res.height, bbox[3]+margin))
    return res.crop(bbox)

# Generate separations
sep_specs = [
    ('cl-sep-tight', 65, 20, 0),
    ('cl-sep-balanced', 65, 45, 0),
    ('cl-sep-wide', 65, 70, 0),
    ('cl-sep-ultra', 65, 100, 0),
    ('cl-sep-68deg-balanced', 68, 45, 0),
    ('cl-sep-68deg-wide', 68, 70, 0),
    ('cl-disconnected-stencil', 65, 45, 24),
    ('cl-disconnected-wide', 65, 70, 48),
]

sep_imgs = {}
for name, a, sh, gap in sep_specs:
    s_img = make_separated(a, sh, gap)
    sep_imgs[name] = s_img
    s_img.save(f'{out_dir}/{name}.png')

# 3. Two-Tone and Colors based on cl-sep-balanced
balanced_img = sep_imgs['cl-sep-balanced'].convert('L')
barr = np.array(balanced_img)
H, W = barr.shape
black_mask = barr < 128

# Find bridge center column
# C is left of bridge, L is right
# In balanced_img, the bridge is around x = 200..230
# Let's find horizontal center of the bottom bridge
split_x = W * 0.43

# Two-tone: C Charcoal, L Emerald
twotone = np.ones((H, W, 4), dtype=np.uint8) * 255
twotone[black_mask & (np.arange(W)[None, :] < split_x)] = CHARCOAL
twotone[black_mask & (np.arange(W)[None, :] >= split_x)] = EMERALD
Image.fromarray(twotone).save(f'{out_dir}/cl-twotone-charcoal-emerald.png')

# Two-tone inverse: C Emerald, L Charcoal
twotone_inv = np.ones((H, W, 4), dtype=np.uint8) * 255
twotone_inv[black_mask & (np.arange(W)[None, :] < split_x)] = EMERALD
twotone_inv[black_mask & (np.arange(W)[None, :] >= split_x)] = CHARCOAL
Image.fromarray(twotone_inv).save(f'{out_dir}/cl-twotone-emerald-charcoal.png')

# Pure Emerald
emerald_img = np.ones((H, W, 4), dtype=np.uint8) * 255
emerald_img[black_mask] = EMERALD
Image.fromarray(emerald_img).save(f'{out_dir}/cl-color-emerald.png')

# Pure Charcoal
charcoal_img = np.ones((H, W, 4), dtype=np.uint8) * 255
charcoal_img[black_mask] = CHARCOAL
Image.fromarray(charcoal_img).save(f'{out_dir}/cl-color-charcoal.png')

# Dark Mode White + Emerald
dark_we = np.ones((H, W, 4), dtype=np.uint8)
dark_we[:, :] = DARK_BG
dark_we[black_mask & (np.arange(W)[None, :] < split_x)] = WHITE
dark_we[black_mask & (np.arange(W)[None, :] >= split_x)] = EMERALD
Image.fromarray(dark_we).save(f'{out_dir}/cl-darkmode-white-emerald.png')

# Dark Mode Pure White
dark_w = np.ones((H, W, 4), dtype=np.uint8)
dark_w[:, :] = DARK_BG
dark_w[black_mask] = WHITE
Image.fromarray(dark_w).save(f'{out_dir}/cl-darkmode-pure-white.png')

# Transparent versions with RGBA (great for web and SVG overlay)
trans_charcoal = np.zeros((H, W, 4), dtype=np.uint8)
trans_charcoal[black_mask] = CHARCOAL
Image.fromarray(trans_charcoal).save(f'{out_dir}/cl-sep-balanced-transparent.png')

trans_twotone = np.zeros((H, W, 4), dtype=np.uint8)
trans_twotone[black_mask & (np.arange(W)[None, :] < split_x)] = CHARCOAL
trans_twotone[black_mask & (np.arange(W)[None, :] >= split_x)] = EMERALD
Image.fromarray(trans_twotone).save(f'{out_dir}/cl-twotone-transparent.png')

print('All PNG variations successfully generated!')
