import os, re
from PIL import Image

# 1. Inspect website html
html_path = r'C:\Users\Admin\.gemini\antigravity-ide\brain\dab2e00d-0196-41fe-b790-a2162faa79fa\.system_generated\steps\2588\content.md'
if os.path.exists(html_path):
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()
    imgs = set(re.findall(r'src=["\']([^"\']+)["\']', html))
    print('Found website images:')
    for img in sorted(imgs):
        print(' ', img)

# 2. Inspect ref folder images
ref_dir = r'C:\Jigar_Projects\WebSaurabhInfosys\public\work_ref_image\le_meow'
print('\nRef folder images:')
for f in os.listdir(ref_dir):
    p = os.path.join(ref_dir, f)
    if os.path.isfile(p):
        try:
            im = Image.open(p)
            print(f'  {f}: size={im.size}, mode={im.mode}')
        except Exception as e:
            print(f'  {f}: error {e}')

# 3. Inspect user uploaded images
up_dir = r'C:\Users\Admin\.gemini\antigravity-ide\brain\dab2e00d-0196-41fe-b790-a2162faa79fa\.user_uploaded'
print('\nUser uploaded images:')
for f in sorted(os.listdir(up_dir)):
    if f.startswith('media_1790072'):
        p = os.path.join(up_dir, f)
        im = Image.open(p)
        print(f'  {f}: size={im.size}, mode={im.mode}')
