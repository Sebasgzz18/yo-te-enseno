from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
NAVY = (10, 24, 48)
NAVY_DARK = (5, 11, 22)
LIME = (198, 250, 60)
ORANGE = (255, 122, 41)
WHITE = (255, 255, 255)

img = Image.new("RGB", (W, H), NAVY)

# Radial-ish glow blobs (soft blurred circles) to echo the site's hero background
glow = Image.new("RGB", (W, H), NAVY)
glow_draw = ImageDraw.Draw(glow)
glow_draw.ellipse([W - 520, -260, W + 40, 320], fill=(int(LIME[0]*0.35+NAVY[0]*0.65), int(LIME[1]*0.35+NAVY[1]*0.65), int(LIME[2]*0.35+NAVY[2]*0.65)))
glow_draw.ellipse([-260, H - 420, 260, H + 160], fill=(int(ORANGE[0]*0.3+NAVY[0]*0.7), int(ORANGE[1]*0.3+NAVY[1]*0.7), int(ORANGE[2]*0.3+NAVY[2]*0.7)))
glow = glow.filter(ImageFilter.GaussianBlur(90))
img = Image.blend(img, glow, 0.9)

draw = ImageDraw.Draw(img)

# Faint grid
grid_color = (255, 255, 255, 14)
grid_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(grid_layer)
step = 48
for x in range(0, W, step):
    gdraw.line([(x, 0), (x, H)], fill=grid_color, width=1)
for y in range(0, H, step):
    gdraw.line([(0, y), (W, y)], fill=grid_color, width=1)
img = Image.alpha_composite(img.convert("RGBA"), grid_layer).convert("RGB")
draw = ImageDraw.Draw(img)

FONT_DIR = "C:/Windows/Fonts/"
headline_font = ImageFont.truetype(FONT_DIR + "segoeuib.ttf", 66)
sub_font = ImageFont.truetype(FONT_DIR + "segoeui.ttf", 30)
badge_font = ImageFont.truetype(FONT_DIR + "segoeuib.ttf", 22)

margin = 72

# Logo badge (white rounded rect + logo)
logo = Image.open("public/brand/logo.png").convert("RGBA")
badge_w, badge_h = 230, 74
badge = Image.new("RGBA", (badge_w, badge_h), (0, 0, 0, 0))
bdraw = ImageDraw.Draw(badge)
bdraw.rounded_rectangle([0, 0, badge_w, badge_h], radius=18, fill=(255, 255, 255, 242))
logo_ratio = logo.width / logo.height
target_h = badge_h - 24
target_w = int(target_h * logo_ratio)
logo_resized = logo.resize((target_w, target_h), Image.LANCZOS)
badge.paste(logo_resized, ((badge_w - target_w) // 2, (badge_h - target_h) // 2), logo_resized)
img.paste(badge, (margin, 56), badge)

# Small eyebrow badge
eyebrow_text = "ESCUELA DE MANEJO EN MONTERREY"
draw.text((margin, 168), eyebrow_text, font=badge_font, fill=LIME)

# Headline (two lines, second line partly lime)
draw.text((margin, 210), "Perdemos el miedo,", font=headline_font, fill=WHITE)
draw.text((margin, 286), "ganamos confianza", font=headline_font, fill=LIME)
draw.text((margin, 362), "al volante.", font=headline_font, fill=WHITE)

# Subtext
draw.text(
    (margin, 452),
    "Clases personalizadas · instructores certificados · autos con doble pedal",
    font=sub_font,
    fill=(255, 255, 255, 200),
)

# Mascot on the right
mascot = Image.open("public/brand/mascot.png").convert("RGBA")
target_h = 620
target_w = int(mascot.width * (target_h / mascot.height))
mascot_resized = mascot.resize((target_w, target_h), Image.LANCZOS)
img.paste(mascot_resized, (W - target_w + 40, H - target_h), mascot_resized)

img = img.convert("RGB")
img.save("public/og-image.jpg", quality=90)
print("saved", img.size)
