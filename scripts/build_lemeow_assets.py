import os
from PIL import Image, ImageFilter, ImageDraw, ImageFont

scratch = r'C:\Users\Admin\.gemini\antigravity-ide\brain\dab2e00d-0196-41fe-b790-a2162faa79fa\scratch'
out_dir = r'C:\Jigar_Projects\WebSaurabhInfosys\public\images\work\le-meow'
os.makedirs(scratch, exist_ok=True)
os.makedirs(out_dir, exist_ok=True)

up_dir = r'C:\Users\Admin\.gemini\antigravity-ide\brain\dab2e00d-0196-41fe-b790-a2162faa79fa\.user_uploaded'
ref_dir = r'C:\Jigar_Projects\WebSaurabhInfosys\public\work_ref_image\le_meow'

# Source paths
path_lifestyle = os.path.join(up_dir, 'media_1790072897593.png')
path_home      = os.path.join(up_dir, 'media_1790072906938.png')
path_ecosystem = os.path.join(up_dir, 'media_1790072902257.png')
path_categories= os.path.join(up_dir, 'media_1790072912182.png')
path_booking   = os.path.join(up_dir, 'media_1790072916627.png')
path_mybookings= os.path.join(ref_dir, 'unnamed (4).png')
path_deals     = os.path.join(ref_dir, 'unnamed (1) (1).png')
path_trust     = os.path.join(ref_dir, 'unnamed (2) (1).png')

BG_COLOR = (252, 247, 241) # Luxury warm ivory cream

def apply_unsharp(im):
    return im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=130, threshold=2))

# ==========================================
# 1. GENERATE 01.webp (1080 x 763)
# ==========================================
print('Building 01.webp candidates...')
canvas_01 = Image.new('RGB', (1080, 763), BG_COLOR)

# Load lifestyle and home
im_life = Image.open(path_lifestyle).convert('RGB')
im_home = Image.open(path_home).convert('RGB')

# Scale lifestyle to fit height nicely (e.g. height 723, with 20px padding)
target_h_01 = 715
scale_life = target_h_01 / im_life.height
w_life = int(im_life.width * scale_life)
h_life = target_h_01
im_life_scaled = im_life.resize((w_life, h_life), Image.Resampling.LANCZOS)

# Scale home to same height
scale_home = target_h_01 / im_home.height
w_home = int(im_home.width * scale_home)
h_home = target_h_01
im_home_scaled = im_home.resize((w_home, h_home), Image.Resampling.LANCZOS)

# Placement:
# Total width of both = w_life + w_home = 398 + 391 = ~789
# Canvas width = 1080. Remaining = 291 px.
# We can distribute with generous padding or center them beautifully!
gap = 50
total_w = w_life + w_home + gap
x_start = (1080 - total_w) // 2
y_start = (763 - target_h_01) // 2

# Paste both
canvas_01.paste(im_life_scaled, (x_start, y_start))
canvas_01.paste(im_home_scaled, (x_start + w_life + gap, y_start))

# Also add subtle corner floral decorative accents if available from edges
canvas_01_sharp = apply_unsharp(canvas_01)
canvas_01_sharp.save(os.path.join(scratch, 'candidate_01.png'))
print('Saved candidate_01.png')

# ==========================================
# 2. GENERATE 02.webp (1920 x 900)
# ==========================================
print('Building 02.webp candidate...')
canvas_02 = Image.new('RGB', (1920, 900), BG_COLOR)

# 4 screens panorama: Ecosystem, Home (center hero), Categories, Booking
screens_02 = [
    Image.open(path_ecosystem).convert('RGB'),
    Image.open(path_home).convert('RGB'),
    Image.open(path_categories).convert('RGB'),
    Image.open(path_booking).convert('RGB')
]

# Height target: 820px, 40px top/bottom padding
target_h_02 = 820
scaled_02 = []
total_w_02 = 0
for sc in screens_02:
    s = target_h_02 / sc.height
    w = int(sc.width * s)
    sc_s = sc.resize((w, target_h_02), Image.Resampling.LANCZOS)
    scaled_02.append(sc_s)
    total_w_02 += w

gap_02 = (1920 - total_w_02) // 5
curr_x = gap_02
y_02 = (900 - target_h_02) // 2

for sc_s in scaled_02:
    canvas_02.paste(sc_s, (curr_x, y_02))
    curr_x += sc_s.width + gap_02

canvas_02_sharp = apply_unsharp(canvas_02)
canvas_02_sharp.save(os.path.join(scratch, 'candidate_02.png'))
print('Saved candidate_02.png')

# ==========================================
# 3. GENERATE 03.webp (900 x 640) - Gallery 1
# ==========================================
print('Building 03.webp candidate...')
canvas_03 = Image.new('RGB', (900, 640), BG_COLOR)

# Gallery 1: Ecosystem + Categories
screens_03 = [
    Image.open(path_ecosystem).convert('RGB'),
    Image.open(path_categories).convert('RGB')
]

target_h_03 = 590
scaled_03 = []
total_w_03 = 0
for sc in screens_03:
    s = target_h_03 / sc.height
    w = int(sc.width * s)
    sc_s = sc.resize((w, target_h_03), Image.Resampling.LANCZOS)
    scaled_03.append(sc_s)
    total_w_03 += w

gap_03 = (900 - total_w_03) // 3
curr_x = gap_03
y_03 = (640 - target_h_03) // 2

for sc_s in scaled_03:
    canvas_03.paste(sc_s, (curr_x, y_03))
    curr_x += sc_s.width + gap_03

canvas_03_sharp = apply_unsharp(canvas_03)
canvas_03_sharp.save(os.path.join(scratch, 'candidate_03.png'))
print('Saved candidate_03.png')

# ==========================================
# 4. GENERATE 04.webp (900 x 640) - Gallery 2
# ==========================================
print('Building 04.webp candidate...')
canvas_04 = Image.new('RGB', (900, 640), BG_COLOR)

# Gallery 2: Booking + My Bookings
screens_04 = [
    Image.open(path_booking).convert('RGB'),
    Image.open(path_mybookings).convert('RGB')
]

target_h_04 = 590
scaled_04 = []
total_w_04 = 0
for sc in screens_04:
    s = target_h_04 / sc.height
    w = int(sc.width * s)
    sc_s = sc.resize((w, target_h_04), Image.Resampling.LANCZOS)
    scaled_04.append(sc_s)
    total_w_04 += w

gap_04 = (900 - total_w_04) // 3
curr_x = gap_04
y_04 = (640 - target_h_04) // 2

for sc_s in scaled_04:
    canvas_04.paste(sc_s, (curr_x, y_04))
    curr_x += sc_s.width + gap_04

canvas_04_sharp = apply_unsharp(canvas_04)
canvas_04_sharp.save(os.path.join(scratch, 'candidate_04.png'))
print('Saved candidate_04.png')
