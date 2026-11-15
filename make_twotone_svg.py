import numpy as np
from PIL import Image

src = Image.open('/home/jan/clevier/web/public/brand/cl-sep-balanced.png').convert('L')
arr = np.array(src)
H, W = arr.shape
black = arr < 128
split_x = int(W * 0.43)

# C only
c_arr = np.ones((H, W), dtype=np.uint8) * 255
c_arr[black & (np.arange(W)[None, :] < split_x)] = 0
Image.fromarray(c_arr).save('/home/jan/clevier/web/public/brand/temp_c.png')

# L only
l_arr = np.ones((H, W), dtype=np.uint8) * 255
l_arr[black & (np.arange(W)[None, :] >= split_x)] = 0
Image.fromarray(l_arr).save('/home/jan/clevier/web/public/brand/temp_l.png')

print('Split temp masks saved')
