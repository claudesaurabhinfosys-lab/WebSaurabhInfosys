import sys
import os
from PIL import Image

def slice_behance(image_path: str, slug: str):
    if not os.path.exists(image_path):
        print(f"Error: File not found: {image_path}")
        return

    out_dir = os.path.join(os.path.dirname(__file__), "..", "public", "images", "work", slug)
    os.makedirs(out_dir, exist_ok=True)

    print(f"Opening: {image_path}")
    img = Image.open(image_path).convert("RGB")
    w, h = img.size
    print(f"Original size: {w} x {h}")

    def fit_crop(crop_box, target_w, target_h, bg_color):
        cropped = img.crop(crop_box)
        cw, ch = cropped.size
        scale = min(target_w / cw, target_h / ch)
        nw, nh = int(cw * scale), int(ch * scale)
        resized = cropped.resize((nw, nh), Image.Resampling.LANCZOS)
        canvas = Image.new("RGB", (target_w, target_h), bg_color)
        paste_x = (target_w - nw) // 2
        paste_y = (target_h - nh) // 2
        canvas.paste(resized, (paste_x, paste_y))
        return canvas

    # Sample dominant/edge colors
    bg_top = img.getpixel((20, min(100, h - 1)))
    bg_mid = img.getpixel((20, int(h * 0.5)))
    bg_bottom = img.getpixel((20, min(int(h * 0.85), h - 1)))

    print(f"Detected background tones: top={bg_top}, mid={bg_mid}, bottom={bg_bottom}")

    # 1. 01.webp: Hero Cover (1080 x 763) -> Top ~10-15% of presentation
    h1 = int(h * 0.12)
    c1 = fit_crop((0, 0, w, h1), 1080, 763, bg_top)
    p1 = os.path.join(out_dir, "01.webp")
    c1.save(p1, "WEBP", quality=95)
    print(f"Saved: {p1} ({os.path.getsize(p1)} bytes)")

    # 2. 02.webp: Wide Showcase Banner (1920 x 900) -> Next major showcase (~15% to 35%)
    h2_start = int(h * 0.14)
    h2_end = int(h * 0.38)
    c2 = fit_crop((0, h2_start, w, h2_end), 1920, 900, bg_top)
    p2 = os.path.join(out_dir, "02.webp")
    c2.save(p2, "WEBP", quality=95)
    print(f"Saved: {p2} ({os.path.getsize(p2)} bytes)")

    # 3. 03.webp: Gallery Left (900 x 640) -> Middle section (~40% to 65%)
    h3_start = int(h * 0.40)
    h3_end = int(h * 0.65)
    c3 = fit_crop((0, h3_start, w, h3_end), 900, 640, bg_mid)
    p3 = os.path.join(out_dir, "03.webp")
    c3.save(p3, "WEBP", quality=95)
    print(f"Saved: {p3} ({os.path.getsize(p3)} bytes)")

    # 4. 04.webp: Gallery Right (900 x 640) -> Lower section (~68% to 92%)
    h4_start = int(h * 0.68)
    h4_end = int(h * 0.92)
    c4 = fit_crop((0, h4_start, w, h4_end), 900, 640, bg_bottom)
    p4 = os.path.join(out_dir, "04.webp")
    c4.save(p4, "WEBP", quality=95)
    print(f"Saved: {p4} ({os.path.getsize(p4)} bytes)")

    print(f"\nAll 4 slices saved successfully to: {out_dir}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python scripts/slice-project.py <image_path> <project_slug>")
    else:
        slice_behance(sys.argv[1], sys.argv[2])
