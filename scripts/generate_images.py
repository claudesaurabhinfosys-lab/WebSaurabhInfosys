import os
from PIL import Image, ImageFilter
import sys

def get_slug(folder_name):
    mappings = {
        'ai_assist': 'ai-assist',
        'barcode': 'barcode-scanner',
        'contractor_easy': 'contractor-easy',
        'flpl': 'flpl',
        'helping_hands': 'helping-hands',
        'knoc_knoc': 'knock-knock',
        'pot': 'pots',
        'retirement': 'retirement-planning',
        'subrate': 'subrate',
        'volest': 'volest'
    }
    return mappings.get(folder_name, folder_name)

def get_bg_color(img):
    # Sample corners to get bg color
    w, h = img.size
    samples = [
        img.getpixel((0, 0)),
        img.getpixel((w-1, 0)),
        img.getpixel((0, h-1)),
        img.getpixel((w-1, h-1))
    ]
    # Return the most common color or average
    return max(set(samples), key=samples.count)

def fit_crop(img, target_w, target_h, bg_color):
    cw, ch = img.size
    scale = min(target_w / cw, target_h / ch)
    nw, nh = int(cw * scale), int(ch * scale)
    resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
    
    canvas = Image.new('RGB', (target_w, target_h), bg_color)
    paste_x = (target_w - nw) // 2
    paste_y = (target_h - nh) // 2
    canvas.paste(resized, (paste_x, paste_y))
    return canvas

def find_safe_cut(img, start_y, min_h, max_h):
    """
    Finds a horizontal slice starting near start_y that has a uniform color across the row,
    avoiding cutting through content.
    """
    w, h = img.size
    best_y = start_y
    min_var = float('inf')
    
    # We want a cut roughly around start_y (within a window)
    window = min(500, h - start_y)
    
    # Check pixels in center column to find background gaps
    for y in range(start_y, min(start_y + window, h)):
        # Sample a few pixels across the row
        row_colors = [img.getpixel((x, y)) for x in range(0, w, max(1, w//10))]
        # Calculate variance
        var = sum([sum((c1 - c2)**2 for c1, c2 in zip(row_colors[0], color)) for color in row_colors])
        if var < min_var:
            min_var = var
            best_y = y
            if var == 0:
                break
    return best_y

def process_project(folder_path, out_dir):
    os.makedirs(out_dir, exist_ok=True)
    files = os.listdir(folder_path)
    
    cover_file = None
    long_file = None
    
    # Identify files
    for f in files:
        if 'Y3Jvc' in f:
            cover_file = f
            
    for f in files:
        if f != cover_file:
            long_file = f
            
    if not cover_file and len(files) > 0:
        # Fallback based on size
        sizes = [(f, os.path.getsize(os.path.join(folder_path, f))) for f in files]
        sizes.sort(key=lambda x: x[1])
        cover_file = sizes[0][0]
        long_file = sizes[-1][0] if len(sizes) > 1 else None
        
    print(f"Processing: cover={cover_file}, long={long_file}")
    
    # 01.webp (1080 x 763)
    if cover_file:
        img = Image.open(os.path.join(folder_path, cover_file)).convert('RGB')
        bg = get_bg_color(img)
        res = fit_crop(img, 1080, 763, bg)
        # unsharp mask
        res = res.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3))
        res.save(os.path.join(out_dir, '01.webp'), 'WEBP', quality=95)
        
    # 02, 03, 04 from long image
    if long_file:
        long_img = Image.open(os.path.join(folder_path, long_file)).convert('RGB')
        lw, lh = long_img.size
        
        # 02.webp (1920 x 900) - Banner (Top)
        # Ratio is 1920/900 = 2.133
        target_ratio_02 = 1920 / 900
        crop_h_02 = int(lw / target_ratio_02)
        
        # Check if long_img has some margins we need to keep or if we just crop top
        crop_02 = long_img.crop((0, 0, lw, crop_h_02))
        bg_02 = get_bg_color(crop_02)
        res_02 = fit_crop(crop_02, 1920, 900, bg_02)
        res_02 = res_02.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3))
        res_02.save(os.path.join(out_dir, '02.webp'), 'WEBP', quality=95)
        
        # 03.webp (900 x 640) - Gallery 1 (Middle)
        target_ratio_gal = 900 / 640
        crop_h_gal = int(lw / target_ratio_gal)
        
        start_y_03 = find_safe_cut(long_img, crop_h_02, 0, lh)
        end_y_03 = min(lh, start_y_03 + crop_h_gal)
        crop_03 = long_img.crop((0, start_y_03, lw, end_y_03))
        bg_03 = get_bg_color(crop_03)
        res_03 = fit_crop(crop_03, 900, 640, bg_03)
        res_03 = res_03.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3))
        res_03.save(os.path.join(out_dir, '03.webp'), 'WEBP', quality=95)
        
        # 04.webp (900 x 640) - Gallery 2 (Lower)
        start_y_04 = find_safe_cut(long_img, end_y_03, 0, lh)
        end_y_04 = min(lh, start_y_04 + crop_h_gal)
        crop_04 = long_img.crop((0, start_y_04, lw, end_y_04))
        bg_04 = get_bg_color(crop_04)
        res_04 = fit_crop(crop_04, 900, 640, bg_04)
        res_04 = res_04.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3))
        res_04.save(os.path.join(out_dir, '04.webp'), 'WEBP', quality=95)

def main():
    base_dir = r'C:\Jigar_Projects\WebSaurabhInfosys\public\work_ref_image'
    out_base = r'C:\Jigar_Projects\WebSaurabhInfosys\public\images\work'
    
    for d in os.listdir(base_dir):
        path = os.path.join(base_dir, d)
        if os.path.isdir(path):
            slug = get_slug(d)
            out_dir = os.path.join(out_base, slug)
            print(f"--- Project: {slug} ---")
            try:
                process_project(path, out_dir)
            except Exception as e:
                print(f"Error processing {slug}: {e}")

if __name__ == '__main__':
    main()
