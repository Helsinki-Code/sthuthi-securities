#!/usr/bin/env python3
"""Create compact contact sheets for visual QA of every rendered page."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageOps


ROOT = Path(__file__).resolve().parent
RENDERED = ROOT / "qa" / "rendered"
pages = sorted(
    RENDERED.glob("page-*.png"),
    key=lambda path: int(path.stem.split("-")[-1]),
)

for sheet_index in range(0, len(pages), 8):
    batch = pages[sheet_index : sheet_index + 8]
    canvas = Image.new("RGB", (2400, 1700), "#cfd9df")
    draw = ImageDraw.Draw(canvas)
    for slot, path in enumerate(batch):
        image = Image.open(path).convert("RGB")
        image.thumbnail((570, 760), Image.Resampling.LANCZOS)
        x = 15 + (slot % 4) * 595
        y = 55 + (slot // 4) * 815
        framed = ImageOps.expand(image, border=2, fill="#173651")
        canvas.paste(framed, (x, y))
        draw.text((x, 18 + (slot // 4) * 815), path.stem.replace("page-", "Page "), fill="#15202b")
    output = RENDERED / f"contact-{sheet_index // 8 + 1:02d}.png"
    canvas.save(output, quality=92)
    print(output)
