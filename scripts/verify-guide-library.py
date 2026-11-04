#!/usr/bin/env python3
"""Verify the published Sthuthi guide editions and report counts."""

from __future__ import annotations

import json
import zipfile
from pathlib import Path

from PIL import Image
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
MANIFEST = json.loads((ROOT / "resources-src" / "guide-manifest.json").read_text())


def words(text: str) -> int:
    return len(text.split())


def verify() -> None:
    rows = []
    for item in MANIFEST:
        slug = item["slug"]
        base = item["file"]
        public = ROOT / "public" / "resources" / slug
        dist = ROOT / "dist" / "resources" / slug
        for directory in (public, dist):
            assert directory.is_dir(), directory
            for extension in ("pdf", "docx", "epub", "md"):
                file = directory / f"{base}.{extension}"
                assert file.is_file() and file.stat().st_size > 1000, file
        markdown = (public / f"{base}.md").read_text(encoding="utf-8")
        count = words(markdown)
        assert count >= 9000, (slug, count)
        with zipfile.ZipFile(public / f"{base}.docx") as archive:
            assert archive.testzip() is None
            assert "word/document.xml" in archive.namelist()
        with zipfile.ZipFile(public / f"{base}.epub") as archive:
            assert archive.testzip() is None
            assert archive.read("mimetype") == b"application/epub+zip"
        pdf = PdfReader(public / f"{base}.pdf")
        assert len(pdf.pages) >= 35, (slug, len(pdf.pages))
        cover = Image.open(public / "assets" / "cover.png")
        assert cover.size == (1086, 1448), (slug, cover.size)
        rows.append((slug, count, len(pdf.pages)))
    print("slug\twords\tPDF pages")
    for slug, count, pages in rows:
        print(f"{slug}\t{count}\t{pages}")


if __name__ == "__main__":
    verify()
