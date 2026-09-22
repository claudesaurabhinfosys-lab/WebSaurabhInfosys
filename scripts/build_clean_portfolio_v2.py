import os
from PIL import Image, ImageFilter, ImageDraw, ImageFont

scratch = r'C:\Users\Admin\.gemini\antigravity-ide\brain\dab2e00d-0196-41fe-b790-a2162faa79fa\scratch'
out_dir = r'C:\Jigar_Projects\WebSaurabhInfosys\public\images\work\le-meow'
os.makedirs(scratch, exist_ok=True)
os.makedirs(out_dir, exist_ok=True)

up_dir = r'C:\Users\Admin\.gemini\antigravity-ide\brain\dab2e00d-0196-41fe-b790-a2162faa79fa\.user_uploaded'
ref_dir = r'C:\Jigar_Projects\WebSaurabhInfosys\public\work_ref_image\le_meow'

# 1. Colors
BG_COLOR = (251, 247, 242)      # Ultra clean luxury warm ivory
PANEL_BG = (244, 238, 230)      # Subtle warm champagne panel
INK_DARK = (28, 20, 14)          # Deep rich espresso
GOLD_TEXT = (180, 130, 25)       # Rich luxury gold
MUTED_TEXT = (120, 110, 100)     # Clean muted gray-brown

# 2. Prepare Flawless Transparent Gold Logo
im_logo = Image.open(os.path.join(scratch, 'logo_flawless.png')).convert('RGBA')
lw, lh = im_logo.size
logo_clean = Image.new('RGBA', (lw, lh), (0, 0, 0, 0))
for y in range(lh):
    for x in range(lw):
        r, g, b, _ = im_logo.getpixel((x, y))
        br = (r + g + b) // 3
        # Background is around 245
        if br < 225:
            # Gold stroke
            alpha = min(255, int((235 - br) * 2.8))
            # Keep gold color
            logo_clean.putpixel((x, y), (r, g, b, alpha))

logo_bbox = logo_clean.getbbox()
if logo_bbox:
    logo_clean = logo_clean.crop(logo_bbox)
logo_clean.save(os.path.join(scratch, 'logo_final_transparent.png'))
print('Prepared logo_final_transparent.png:', logo_clean.size)

# 3. Clean Phone Extraction Helper
def get_clean_phone(img_path, crop_box, r=55):
    im = Image.open(img_path).convert('RGBA')
    crop = im.crop(crop_box)
    w, h = crop.size
    mask = Image.new('L', (w, h), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([0, 0, w - 1, h + r], radius=r, fill=255)
    crop.putalpha(mask)
    return crop

# Extract phones
phone_home = get_clean_phone(up_dir + r'\media_1790072906938.png', (60, 270, 500, 1024), r=55)
phone_eco  = get_clean_phone(up_dir + r'\media_1790072902257.png', (65, 275, 510, 1024), r=55)
phone_cat  = get_clean_phone(up_dir + r'\media_1790072912182.png', (62, 320, 514, 1024), r=55)
phone_book = get_clean_phone(up_dir + r'\media_1790072916627.png', (65, 265, 510, 1024), r=55)
phone_myb  = get_clean_phone(ref_dir + r'\unnamed (4).png', (80, 290, 685, 1365), r=70)

def paste_phone_with_shadow(canvas, phone, x, y, shadow_blur=16, shadow_opacity=40, offset_y=12):
    pw, ph = phone.size
    # Shadow mask from phone alpha
    pad = shadow_blur * 2
    s_canvas = Image.new('RGBA', (pw + pad * 2, ph + pad * 2), (0, 0, 0, 0))
    # Extract alpha from phone
    alpha = phone.split()[3]
    # Tinted shadow image
    shadow_tint = Image.new('RGBA', (pw, ph), (30, 22, 14, shadow_opacity))
    shadow_tint.putalpha(alpha)
    s_canvas.paste(shadow_tint, (pad, pad), shadow_tint)
    s_blurred = s_canvas.filter(ImageFilter.GaussianBlur(shadow_blur / 2))
    canvas.paste(s_blurred, (x - pad + 4, y - pad + offset_y), s_blurred)
    canvas.paste(phone, (x, y), phone)

def get_font(size, bold=False):
    font_paths = [r'C:\Windows\Fonts\segoeui.ttf', r'C:\Windows\Fonts\arial.ttf']
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
# 1. 01.webp (1080 x 763) - COVER CARD
# =========================================================================
print('Generating clean 01.webp...')
c01 = Image.new('RGBA', (1080, 763), BG_COLOR + (255,))

# Add subtle clean geometric card backdrop on right (solid pastel, NO blurry smudges!)
d01 = ImageDraw.Draw(c01)
d01.rounded_rectangle([440, 40, 1040, 723], radius=32, fill=PANEL_BG + (255,))

# Logo on left
target_lw = 270
scale_l = target_lw / logo_clean.width
target_lh = int(logo_clean.height * scale_l)
logo_01 = logo_clean.resize((target_lw, target_lh), Image.Resampling.LANCZOS)
c01.paste(logo_01, (75, 230), logo_01)

# Text below logo
f_title01 = get_font(30, bold=True)
f_sub01 = get_font(18, bold=False)
f_pill = get_font(13, bold=True)

d01.text((75, 230 + target_lh + 24), "Lifestyle Ecosystem", fill=INK_DARK, font=f_title01)
d01.text((75, 230 + target_lh + 68), "On-Demand Services & Booking", fill=MUTED_TEXT, font=f_sub01)

# Pill tag
py = 230 + target_lh + 120
d01.rounded_rectangle([75, py, 75 + 175, py + 34], radius=17, fill=(240, 230, 215))
d01.text((92, py + 8), "SINGAPORE • MOBILE APP", fill=GOLD_TEXT, font=f_pill)

# Two Phones on right side
# Height: 580px
h_p = 580
s_home = h_p / phone_home.height
w_home = int(phone_home.width * s_home)
p_home_s = phone_home.resize((w_home, h_p), Image.Resampling.LANCZOS)

s_eco = h_p / phone_eco.height
w_eco = int(phone_eco.width * s_eco)
p_eco_s = phone_eco.resize((w_eco, h_p), Image.Resampling.LANCZOS)

# Position: Eco behind, Home in front
paste_phone_with_shadow(c01, p_eco_s, 690, 85, shadow_blur=16, shadow_opacity=35)
paste_phone_with_shadow(c01, p_home_s, 510, 125, shadow_blur=22, shadow_opacity=50)

final_01 = c01.convert('RGB').filter(ImageFilter.UnsharpMask(radius=1.0, percent=115, threshold=2))
final_01.save(os.path.join(out_dir, '01.webp'), 'WEBP', quality=96)
final_01.save(os.path.join(scratch, 'v2_01.png'))
print('Saved 01.webp')

# =========================================================================
# 2. 02.webp (1920 x 900) - SHOWCASE BANNER
# =========================================================================
print('Generating clean 02.webp...')
c02 = Image.new('RGBA', (1920, 900), BG_COLOR + (255,))

d02 = ImageDraw.Draw(c02)
# Solid pastel background container on the right
d02.rounded_rectangle([820, 50, 1870, 850], radius=40, fill=PANEL_BG + (255,))

# Left branding & copy
target_lw2 = 320
scale_l2 = target_lw2 / logo_clean.width
target_lh2 = int(logo_clean.height * scale_l2)
logo_02 = logo_clean.resize((target_lw2, target_lh2), Image.Resampling.LANCZOS)
c02.paste(logo_02, (100, 240), logo_02)

f_title02 = get_font(38, bold=True)
f_sub02 = get_font(20, bold=False)
f_pill02 = get_font(14, bold=True)

d02.text((100, 240 + target_lh2 + 30), "One Lifestyle Ecosystem", fill=INK_DARK, font=f_title02)
d02.text((100, 240 + target_lh2 + 86), "Services, experiences and solutions in one app", fill=MUTED_TEXT, font=f_sub02)

py2 = 240 + target_lh2 + 145
d02.rounded_rectangle([100, py2, 100 + 190, py2 + 38], radius=19, fill=(240, 230, 215))
d02.text((120, py2 + 9), "EXPLORE 5 BRANDS", fill=GOLD_TEXT, font=f_pill02)

# Right: 3 phones showcase (Eco, Home, Booking)
hp2 = 680
w_p_eco = int(phone_eco.width * (hp2 / phone_eco.height))
p_eco_s2 = phone_eco.resize((w_p_eco, hp2), Image.Resampling.LANCZOS)

w_p_home = int(phone_home.width * (hp2 / phone_home.height))
p_home_s2 = phone_home.resize((w_p_home, hp2), Image.Resampling.LANCZOS)

w_p_book = int(phone_book.width * (hp2 / phone_book.height))
p_book_s2 = phone_book.resize((w_p_book, hp2), Image.Resampling.LANCZOS)

paste_phone_with_shadow(c02, p_eco_s2, 890, 120, shadow_blur=18, shadow_opacity=35)
paste_phone_with_shadow(c02, p_book_s2, 1440, 120, shadow_blur=18, shadow_opacity=35)
paste_phone_with_shadow(c02, p_home_s2, 1165, 85, shadow_blur=24, shadow_opacity=55)

final_02 = c02.convert('RGB').filter(ImageFilter.UnsharpMask(radius=1.0, percent=115, threshold=2))
final_02.save(os.path.join(out_dir, '02.webp'), 'WEBP', quality=96)
final_02.save(os.path.join(scratch, 'v2_02.png'))
print('Saved 02.webp')

# =========================================================================
# 3. 03.webp (900 x 640) - GALLERY 1: ECOSYSTEM & CATEGORIES
# =========================================================================
print('Generating clean 03.webp...')
c03 = Image.new('RGBA', (900, 640), BG_COLOR + (255,))

d03 = ImageDraw.Draw(c03)
# Clean card panel background
d03.rounded_rectangle([40, 30, 860, 610], radius=28, fill=PANEL_BG + (255,))

f_gtitle = get_font(26, bold=True)
f_gsub = get_font(15, bold=False)

d03.text((65, 50), "Brand Directory & Category Discovery", fill=INK_DARK, font=f_gtitle)
d03.text((65, 86), "Unified access to Meow Aesthetics, Renovations, Future Labs, and SureHands", fill=MUTED_TEXT, font=f_gsub)

hg = 460
w_geco = int(phone_eco.width * (hg / phone_eco.height))
p_geco_s = phone_eco.resize((w_geco, hg), Image.Resampling.LANCZOS)

w_gcat = int(phone_cat.width * (hg / phone_cat.height))
p_gcat_s = phone_cat.resize((w_gcat, hg), Image.Resampling.LANCZOS)

# Position centered
tot_w3 = w_geco + w_gcat + 45
x3_0 = (900 - tot_w3) // 2
y3 = 135

paste_phone_with_shadow(c03, p_geco_s, x3_0, y3, shadow_blur=16, shadow_opacity=40)
paste_phone_with_shadow(c03, p_gcat_s, x3_0 + w_geco + 45, y3, shadow_blur=16, shadow_opacity=40)

final_03 = c03.convert('RGB').filter(ImageFilter.UnsharpMask(radius=1.0, percent=115, threshold=2))
final_03.save(os.path.join(out_dir, '03.webp'), 'WEBP', quality=96)
final_03.save(os.path.join(scratch, 'v2_03.png'))
print('Saved 03.webp')

# =========================================================================
# 4. 04.webp (900 x 640) - GALLERY 2: INSTANT BOOKING & SCHEDULE
# =========================================================================
print('Generating clean 04.webp...')
c04 = Image.new('RGBA', (900, 640), BG_COLOR + (255,))

d04 = ImageDraw.Draw(c04)
# Clean card panel background
d04.rounded_rectangle([40, 30, 860, 610], radius=28, fill=PANEL_BG + (255,))

d04.text((65, 50), "Instant Booking & Schedule Tracking", fill=INK_DARK, font=f_gtitle)
d04.text((65, 86), "Book services in seconds with real-time appointment status updates", fill=MUTED_TEXT, font=f_gsub)

w_gbook = int(phone_book.width * (hg / phone_book.height))
p_gbook_s = phone_book.resize((w_gbook, hg), Image.Resampling.LANCZOS)

w_gmyb = int(phone_myb.width * (hg / phone_myb.height))
p_gmyb_s = phone_myb.resize((w_gmyb, hg), Image.Resampling.LANCZOS)

tot_w4 = w_gbook + w_gmyb + 45
x4_0 = (900 - tot_w4) // 2

paste_phone_with_shadow(c04, p_gbook_s, x4_0, y3, shadow_blur=16, shadow_opacity=40)
paste_phone_with_shadow(c04, p_gmyb_s, x4_0 + w_gbook + 45, y3, shadow_blur=16, shadow_opacity=40)

final_04 = c04.convert('RGB').filter(ImageFilter.UnsharpMask(radius=1.0, percent=115, threshold=2))
final_04.save(os.path.join(out_dir, '04.webp'), 'WEBP', quality=96)
final_04.save(os.path.join(scratch, 'v2_04.png'))
print('Saved 04.webp')

print('All 4 clean portfolio images created with 100% precision!')
