import os
import numpy as np
from PIL import Image, ImageOps

out_dir = '/home/jan/clevier/web/public/brand'
src_65_path = f'{out_dir}/cl-angle-65deg.png'
orig_65 = Image.open(src_65_path).convert('L')
arr = np.array(orig_65)
H, W = arr.shape
black = arr < 128

CHARCOAL = (31, 35, 40, 255)     # #1F2328
EMERALD = (47, 191, 113, 255)    # #2FBF71
WHITE = (255, 255, 255, 255)
DARK_BG = (17, 19, 21, 255)      # #111315

# Partition masks
c_mask = np.zeros((H, W), dtype=bool)
l_mask = np.zeros((H, W), dtype=bool)

for y in range(H):
    split_col = 195 if y < 150 else 184
    c_mask[y, :split_col] = black[y, :split_col]
    l_mask[y, split_col:] = black[y, split_col:]

def make_tall_logo(shift_x=50, stretch_y=80, gap=0):
    new_H = H + stretch_y
    new_W = W + shift_x
    
    # Start with white canvas (RGBA)
    res_arr = np.ones((new_H, new_W, 4), dtype=np.uint8) * 255
    
    # 1. Place C: anchored to baseline, so y moves down by stretch_y
    cy_pts, cx_pts = np.where(c_mask)
    res_arr[cy_pts + stretch_y, cx_pts] = CHARCOAL
    
    # 2. Place L:
    ly_pts, lx_pts = np.where(l_mask)
    
    # For L:
    # y >= 175 is the bottom loop & exit tail -> stays anchored to baseline, so y + stretch_y, x + shift_x
    bottom_l = ly_pts >= 175
    res_arr[ly_pts[bottom_l] + stretch_y, lx_pts[bottom_l] + shift_x] = CHARCOAL
    
    # y < 175 is the top ascender loop -> stays high at top (y, x + shift_x)
    top_l = ly_pts < 175
    res_arr[ly_pts[top_l], lx_pts[top_l] + shift_x] = CHARCOAL
    
    # 3. Bridge the two vertical stems of L across [175, 175 + stretch_y]
    # Sample stem pixels at y=175 in l_mask
    stem_cols = np.where(l_mask[175, :])[0]
    for sy in range(175, 175 + stretch_y):
        res_arr[sy, stem_cols + shift_x] = CHARCOAL
        
    # 4. Bridge the horizontal baseline between C and L
    # Between x=184 and x=184+shift_x at the bottom
    if gap == 0:
        # Sample bottom column at x=183 in C
        bottom_ys = np.where(c_mask[:, 183])[0]
        for sx in range(184, 184 + shift_x):
            res_arr[bottom_ys + stretch_y, sx] = CHARCOAL
    else:
        # Stencil gap: leave empty gap pixels
        bottom_ys = np.where(c_mask[:, 183])[0]
        for sx in range(184 + gap, 184 + shift_x):
            res_arr[bottom_ys + stretch_y, sx] = CHARCOAL
            
    res = Image.fromarray(res_arr)
    # Crop with margin
    gray_res = res.convert('L')
    inv = ImageOps.invert(gray_res)
    bbox = inv.getbbox()
    margin = 25
    bbox = (max(0, bbox[0]-margin), max(0, bbox[1]-margin), min(res.width, bbox[2]+margin), min(res.height, bbox[3]+margin))
    return res.crop(bbox)

# Generate variations
stretches = [
    ('cl-tall-dy35', 45, 35, 0),    # Subtle +15%
    ('cl-tall-dy70', 45, 70, 0),    # Balanced +28% (Sweet spot)
    ('cl-tall-dy100', 45, 100, 0),  # Pronounced +40% (Ascender)
    ('cl-tall-dy140', 45, 140, 0),  # Dramatic +55% (High aesthetic)
    ('cl-tall-dy180', 45, 180, 0),  # Skyline +70%
    ('cl-tall-compact', 25, 80, 0),
    ('cl-tall-balanced', 50, 80, 0),
    ('cl-tall-wide', 75, 80, 0),
    ('cl-tall-ultra', 105, 80, 0),
    ('cl-tall-stencil', 50, 80, 24),
    ('cl-tall-stencil-wide', 75, 80, 36),
]

tall_imgs = {}
for name, sh_x, dy, gap in stretches:
    img = make_tall_logo(sh_x, dy, gap)
    tall_imgs[name] = img
    img.save(f'{out_dir}/{name}.png')

# Colorways on cl-tall-balanced
master_img = tall_imgs['cl-tall-balanced'].convert('L')
m_arr = np.array(master_img)
H_m, W_m = m_arr.shape
black_mask = m_arr < 128
split_x = int(W_m * 0.44)

# Two-Tone: Charcoal C + Emerald L
twotone = np.ones((H_m, W_m, 4), dtype=np.uint8) * 255
twotone[black_mask & (np.arange(W_m)[None, :] < split_x)] = CHARCOAL
twotone[black_mask & (np.arange(W_m)[None, :] >= split_x)] = EMERALD
Image.fromarray(twotone).save(f'{out_dir}/cl-tall-twotone.png')

# Pure Emerald
emerald_img = np.ones((H_m, W_m, 4), dtype=np.uint8) * 255
emerald_img[black_mask] = EMERALD
Image.fromarray(emerald_img).save(f'{out_dir}/cl-tall-emerald.png')

# Dark Mode White & Emerald
dark_we = np.ones((H_m, W_m, 4), dtype=np.uint8)
dark_we[:, :] = DARK_BG
dark_we[black_mask & (np.arange(W_m)[None, :] < split_x)] = WHITE
dark_we[black_mask & (np.arange(W_m)[None, :] >= split_x)] = EMERALD
Image.fromarray(dark_we).save(f'{out_dir}/cl-tall-darkmode-twotone.png')

# Dark Mode Pure White
dark_w = np.ones((H_m, W_m, 4), dtype=np.uint8)
dark_w[:, :] = DARK_BG
dark_w[black_mask] = WHITE
Image.fromarray(dark_w).save(f'{out_dir}/cl-tall-darkmode-white.png')

print('Partitioned Tall L variations generated with 100% precision!')
