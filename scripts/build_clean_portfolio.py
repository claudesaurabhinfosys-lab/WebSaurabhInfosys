import os, math
from PIL import Image, ImageFilter, ImageDraw, ImageFont

scratch = r'C:\Users\Admin\.gemini\antigravity-ide\brain\dab2e00d-0196-41fe-b790-a2162faa79fa\scratch'
out_dir = r'C:\Jigar_Projects\WebSaurabhInfosys\public\images\work\le-meow'
os.makedirs(scratch, exist_ok=True)
os.makedirs(out_dir, exist_ok=True)

# 1. Colors
BG_IVORY = (252, 249, 244)       # Pure luxury warm ivory
CURVE_ACCENT = (244, 235, 222)   # Soft champagne curve accent
INK_DARK = (30, 22, 14)          # Deep warm espresso ink
GOLD_ACCENT = (184, 134, 11)     # Muted luxury gold
MUTED_TEXT = (117, 104, 90)      # Muted subline

# 2. Load Phone Assets
phone_home = Image.open(os.path.join(scratch, 'clean_phone_home_270.png')).convert('RGBA')
phone_eco  = Image.open(os.path.join(scratch, 'clean_phone_eco.png')).convert('RGBA')
phone_cat  = Image.open(os.path.join(scratch, 'clean_phone_cat.png')).convert('RGBA')
phone_book = Image.open(os.path.join(scratch, 'clean_phone_book.png')).convert('RGBA')
phone_myb  = Image.open(os.path.join(scratch, 'clean_phone_myb.png')).convert('RGBA')

# 3. Load Logo
# Metallic logo crop
logo_raw = Image.open(os.path.join(scratch, 'logo_metallic_crop.png')).convert('RGBA')
# Make logo background transparent
# background in logo_metallic_crop is around (251, 243, 235)
lw, lh = logo_raw.size
logo_trans = Image.new('RGBA', (lw, lh), (0, 0, 0, 0))
for y in range(lh):
    for x in range(lw):
        r, g, b, a = logo_raw.getpixel((x, y))
        # Gold ink is darker than bg: r ~ 180, g ~ 130, b ~ 40
        # Bg is r > 240, g > 230, b > 220
        diff = max(0, 245 - r) + max(0, 238 - g) + max(0, 225 - b)
        if diff > 35:
            alpha = min(255, int(diff * 2.2))
            logo_trans.putpixel((x, y), (r, g, b, alpha))

logo_box = logo_trans.getbbox()
if logo_box:
    logo_clean = logo_trans.crop(logo_box)
else:
    logo_clean = logo_trans
logo_clean.save(os.path.join(scratch, 'logo_extracted_gold.png'))

def draw_shadow(canvas, x, y, w, h, radius=25, opacity=45):
    # Draw soft realistic drop shadow
    pad = radius * 2
    s_mask = Image.new('RGBA', (w + pad * 2, h + pad * 2), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(s_mask)
    s_draw.rounded_rectangle([pad, pad, pad + w, pad + h], radius=radius, fill=(20, 15, 10, opacity))
    s_blurred = s_mask.filter(ImageFilter.GaussianBlur(radius // 1.5))
    canvas.paste(s_blurred, (x - pad + 5, y - pad + 15), s_blurred)

def add_curve_bg(canvas, w, h, curve_color=CURVE_ACCENT):
    # Draw subtle modern organic curved surface on right/center (like ttac)
    mask = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(mask)
    # Elliptical curve on right side
    cx = int(w * 0.72)
    cy = int(h * 0.5)
    rx = int(w * 0.45)
    ry = int(h * 0.65)
    draw.ellipse([cx - rx, cy - ry, cx + rx, cy + ry], fill=curve_color + (255,))
    # Soften curve edge
    blurred = mask.filter(ImageFilter.GaussianBlur(15))
    canvas.paste(blurred, (0, 0), blurred)

def get_font(size, bold=False):
    # Try system fonts
    font_paths = [
        r'C:\Windows\Fonts\seguiemj.ttf',
        r'C:\Windows\Fonts\segoeui.ttf',
        r'C:\Windows\Fonts\arial.ttf'
    ]
    if bold:
        font_paths = [r'C:\Windows\Fonts\segoeuib.ttf', r'C:\Windows\Fonts\arialbd.ttf'] + font_paths
    for p in font_paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except:
                pass
    return ImageFont.load_default()

# =========================================================================
# IMAGE 1: 01.webp (1080 x 763) - COVER CARD
# =========================================================================
print('Creating 01.webp...')
c01 = Image.new('RGBA', (1080, 763), BG_IVORY + (255,))
add_curve_bg(c01, 1080, 763)

# Place Logo on Left
# Scale logo to nice header size (width ~260)
w_l = 260
h_l = int(logo_clean.height * (w_l / logo_clean.width))
logo_s = logo_clean.resize((w_l, h_l), Image.Resampling.LANCZOS)
c01.paste(logo_s, (80, 200), logo_s)

# Text below logo
d01 = ImageDraw.Draw(c01)
f_title = get_font(28, bold=True)
f_sub = get_font(18, bold=False)
f_tag = get_font(14, bold=True)

d01.text((80, 200 + h_l + 25), "Lifestyle Ecosystem", fill=INK_DARK, font=f_title)
d01.text((80, 200 + h_l + 65), "Services, Bookings & Concierge", fill=MUTED_TEXT, font=f_sub)

# Pill tag
pill_y = 200 + h_l + 115
d01.rounded_rectangle([80, pill_y, 80 + 155, pill_y + 34], radius=17, fill=(244, 236, 222))
d01.text((95, pill_y + 8), "SINGAPORE • APP", fill=GOLD_ACCENT, font=f_tag)

# Right Side: Two phones overlapping (Back: Ecosystem, Front: Home)
# Target phone height: 600px
target_hp = 600
scale_hp = target_hp / phone_home.height
wp = int(phone_home.width * scale_hp)

# Back phone (Ecosystem)
scale_eco = target_hp / phone_eco.height
wp_eco = int(phone_eco.width * scale_eco)
p_eco_s = phone_eco.resize((wp_eco, target_hp), Image.Resampling.LANCZOS)

# Front phone (Home)
p_home_s = phone_home.resize((wp, target_hp), Image.Resampling.LANCZOS)

# Position:
# Back phone at x = 700, y = 100
# Front phone at x = 520, y = 140
x_back = 690
y_back = 90
x_front = 510
y_front = 135

# Shadows
draw_shadow(c01, x_back, y_back, wp_eco, target_hp, radius=20, opacity=35)
c01.paste(p_eco_s, (x_back, y_back), p_eco_s)

draw_shadow(c01, x_front, y_front, wp, target_hp, radius=24, opacity=50)
c01.paste(p_home_s, (x_front, y_front), p_home_s)

c01_rgb = c01.convert('RGB').filter(ImageFilter.UnsharpMask(radius=1.0, percent=115, threshold=2))
c01_rgb.save(os.path.join(out_dir, '01.webp'), 'WEBP', quality=96)
c01_rgb.save(os.path.join(scratch, 'preview_clean_01.png'))
print('Saved 01.webp')

# =========================================================================
# IMAGE 2: 02.webp (1920 x 900) - PANORAMIC SHOWCASE BANNER
# =========================================================================
print('Creating 02.webp...')
c02 = Image.new('RGBA', (1920, 900), BG_IVORY + (255,))
add_curve_bg(c02, 1920, 900)

# Left Hero text & Logo
w_l2 = 280
h_l2 = int(logo_clean.height * (w_l2 / logo_clean.width))
logo_s2 = logo_clean.resize((w_l2, h_l2), Image.Resampling.LANCZOS)
c02.paste(logo_s2, (120, 220), logo_s2)

d02 = ImageDraw.Draw(c02)
f_title2 = get_font(38, bold=True)
f_sub2 = get_font(20, bold=False)
f_tag2 = get_font(15, bold=True)

d02.text((120, 220 + h_l2 + 30), "One Lifestyle Ecosystem", fill=INK_DARK, font=f_title2)
d02.text((120, 220 + h_l2 + 85), "Beauty • Home Services • Education • Childcare", fill=MUTED_TEXT, font=f_sub2)

pill_y2 = 220 + h_l2 + 140
d02.rounded_rectangle([120, pill_y2, 120 + 200, pill_y2 + 38], radius=19, fill=(244, 236, 222))
d02.text((138, pill_y2 + 9), "EXPLORE 5 BRANDS", fill=GOLD_ACCENT, font=f_tag2)

# Right Side: 3 phones fan showcase (Ecosystem, Home, Booking)
target_hp2 = 680

# Phone 1: Eco
s_p1 = target_hp2 / phone_eco.height
w_p1 = int(phone_eco.width * s_p1)
p1_s = phone_eco.resize((w_p1, target_hp2), Image.Resampling.LANCZOS)

# Phone 2: Home (Center)
s_p2 = target_hp2 / phone_home.height
w_p2 = int(phone_home.width * s_p2)
p2_s = phone_home.resize((w_p2, target_hp2), Image.Resampling.LANCZOS)

# Phone 3: Booking
s_p3 = target_hp2 / phone_book.height
w_p3 = int(phone_book.width * s_p3)
p3_s = phone_book.resize((w_p3, target_hp2), Image.Resampling.LANCZOS)

# Positions:
x_p1 = 920
y_p1 = 120

x_p3 = 1480
y_p3 = 120

x_p2 = 1200 # Center overlapping
y_p2 = 90

draw_shadow(c02, x_p1, y_p1, w_p1, target_hp2, radius=20, opacity=35)
c02.paste(p1_s, (x_p1, y_p1), p1_s)

draw_shadow(c02, x_p3, y_p3, w_p3, target_hp2, radius=20, opacity=35)
c02.paste(p3_s, (x_p3, y_p3), p3_s)

draw_shadow(c02, x_p2, y_p2, w_p2, target_hp2, radius=26, opacity=55)
c02.paste(p2_s, (x_p2, y_p2), p2_s)

c02_rgb = c02.convert('RGB').filter(ImageFilter.UnsharpMask(radius=1.0, percent=115, threshold=2))
c02_rgb.save(os.path.join(out_dir, '02.webp'), 'WEBP', quality=96)
c02_rgb.save(os.path.join(scratch, 'preview_clean_02.png'))
print('Saved 02.webp')

# =========================================================================
# IMAGE 3: 03.webp (900 x 640) - GALLERY 1: ECOSYSTEM & DISCOVERY
# =========================================================================
print('Creating 03.webp...')
c03 = Image.new('RGBA', (900, 640), BG_IVORY + (255,))
add_curve_bg(c03, 900, 640)

d03 = ImageDraw.Draw(c03)
f_gtitle = get_font(26, bold=True)
f_gsub = get_font(16, bold=False)

d03.text((60, 40), "One Lifestyle Ecosystem", fill=INK_DARK, font=f_gtitle)
d03.text((60, 75), "Explore multi-brand services and instant category search", fill=MUTED_TEXT, font=f_gsub)

# Two phones side by side: Eco & Cat
target_hg = 480
s_eco3 = target_hg / phone_eco.height
w_eco3 = int(phone_eco.width * s_eco3)
p_eco3 = phone_eco.resize((w_eco3, target_hg), Image.Resampling.LANCZOS)

s_cat3 = target_hg / phone_cat.height
w_cat3 = int(phone_cat.width * s_cat3)
p_cat3 = phone_cat.resize((w_cat3, target_hg), Image.Resampling.LANCZOS)

# Center them
total_wg = w_eco3 + w_cat3 + 40
x_g0 = (900 - total_wg) // 2
y_g = 130

draw_shadow(c03, x_g0, y_g, w_eco3, target_hg, radius=20, opacity=40)
c03.paste(p_eco3, (x_g0, y_g), p_eco3)

draw_shadow(c03, x_g0 + w_eco3 + 40, y_g, w_cat3, target_hg, radius=20, opacity=40)
c03.paste(p_cat3, (x_g0 + w_eco3 + 40, y_g), p_cat3)

c03_rgb = c03.convert('RGB').filter(ImageFilter.UnsharpMask(radius=1.0, percent=115, threshold=2))
c03_rgb.save(os.path.join(out_dir, '03.webp'), 'WEBP', quality=96)
c03_rgb.save(os.path.join(scratch, 'preview_clean_03.png'))
print('Saved 03.webp')

# =========================================================================
# IMAGE 4: 04.webp (900 x 640) - GALLERY 2: BOOKING & MANAGEMENT
# =========================================================================
print('Creating 04.webp...')
c04 = Image.new('RGBA', (900, 640), BG_IVORY + (255,))
add_curve_bg(c04, 900, 640)

d04 = ImageDraw.Draw(c04)
d04.text((60, 40), "Seamless Booking & Management", fill=INK_DARK, font=f_gtitle)
d04.text((60, 75), "Instant appointment confirmation and real-time activity tracking", fill=MUTED_TEXT, font=f_gsub)

# Two phones side by side: Booking & My Bookings
s_book4 = target_hg / phone_book.height
w_book4 = int(phone_book.width * s_book4)
p_book4 = phone_book.resize((w_book4, target_hg), Image.Resampling.LANCZOS)

s_myb4 = target_hg / phone_myb.height
w_myb4 = int(phone_myb.width * s_myb4)
p_myb4 = phone_myb.resize((w_myb4, target_hg), Image.Resampling.LANCZOS)

total_wg4 = w_book4 + w_myb4 + 40
x_g4 = (900 - total_wg4) // 2

draw_shadow(c04, x_g4, y_g, w_book4, target_hg, radius=20, opacity=40)
c04.paste(p_book4, (x_g4, y_g), p_book4)

draw_shadow(c04, x_g4 + w_book4 + 40, y_g, w_myb4, target_hg, radius=20, opacity=40)
c04.paste(p_myb4, (x_g4 + w_book4 + 40, y_g), p_myb4)

c04_rgb = c04.convert('RGB').filter(ImageFilter.UnsharpMask(radius=1.0, percent=115, threshold=2))
c04_rgb.save(os.path.join(out_dir, '04.webp'), 'WEBP', quality=96)
c04_rgb.save(os.path.join(scratch, 'preview_clean_04.png'))
print('Saved 04.webp')

print('All 4 clean portfolio images created successfully!')
