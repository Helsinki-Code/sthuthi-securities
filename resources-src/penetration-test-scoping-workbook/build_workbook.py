#!/usr/bin/env python3
"""Build the branded DOCX and EPUB editions of the scoping workbook."""

from __future__ import annotations

import html
import re
import shutil
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

from docx import Document
from docx.enum.section import WD_ORIENT, WD_SECTION
from docx.enum.style import WD_STYLE_TYPE
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT, WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "manuscript.md"
ASSETS = ROOT / "assets"
DOCX_DRAFT = ROOT / "Penetration-Test-Scoping-Workbook-draft.docx"
DOCX_FINAL = ROOT / "Penetration-Test-Scoping-Workbook.docx"
EPUB_FINAL = ROOT / "Penetration-Test-Scoping-Workbook.epub"
LOGO = ROOT.parents[1] / "brand" / "logo-mark-round.png"

NAVY = "173651"
INK = "15202B"
ORANGE = "DF6845"
GOLD = "C88416"
PALE = "F4F7F8"
WHITE = "FFFFFF"
GRID = "CFD9DF"


def set_cell_shading(cell, color: str) -> None:
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = tc_pr.find(qn("w:shd"))
    if shd is None:
        shd = OxmlElement("w:shd")
        tc_pr.append(shd)
    shd.set(qn("w:fill"), color)


def set_cell_border(cell, color: str = GRID, size: str = "6") -> None:
    tc_pr = cell._tc.get_or_add_tcPr()
    borders = tc_pr.first_child_found_in("w:tcBorders")
    if borders is None:
        borders = OxmlElement("w:tcBorders")
        tc_pr.append(borders)
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        tag = "w:" + edge
        element = borders.find(qn(tag))
        if element is None:
            element = OxmlElement(tag)
            borders.append(element)
        element.set(qn("w:val"), "single")
        element.set(qn("w:sz"), size)
        element.set(qn("w:color"), color)


def add_page_number(paragraph) -> None:
    paragraph.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    run = paragraph.add_run("STHUTHI SECURITIES   •   ")
    run.font.name = "Aptos"
    run.font.size = Pt(8)
    run.font.color.rgb = RGBColor.from_string(NAVY)
    begin = OxmlElement("w:fldChar")
    begin.set(qn("w:fldCharType"), "begin")
    instr = OxmlElement("w:instrText")
    instr.set(qn("xml:space"), "preserve")
    instr.text = " PAGE "
    end = OxmlElement("w:fldChar")
    end.set(qn("w:fldCharType"), "end")
    run._r.extend([begin, instr, end])


def add_bookmark(paragraph, name: str, bookmark_id: int) -> None:
    start = OxmlElement("w:bookmarkStart")
    start.set(qn("w:id"), str(bookmark_id))
    start.set(qn("w:name"), name)
    end = OxmlElement("w:bookmarkEnd")
    end.set(qn("w:id"), str(bookmark_id))
    paragraph._p.insert(0, start)
    paragraph._p.append(end)


def add_internal_link(paragraph, text: str, anchor: str, indent: int = 0) -> None:
    if indent:
        paragraph.paragraph_format.left_indent = Inches(0.25 * indent)
    hyperlink = OxmlElement("w:hyperlink")
    hyperlink.set(qn("w:anchor"), anchor)
    run = OxmlElement("w:r")
    props = OxmlElement("w:rPr")
    color = OxmlElement("w:color")
    color.set(qn("w:val"), ORANGE)
    underline = OxmlElement("w:u")
    underline.set(qn("w:val"), "single")
    props.extend([color, underline])
    text_node = OxmlElement("w:t")
    text_node.text = text
    run.extend([props, text_node])
    hyperlink.append(run)
    paragraph._p.append(hyperlink)


def add_external_link(paragraph, text: str, url: str) -> None:
    part = paragraph.part
    rel_id = part.relate_to(
        url,
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
        is_external=True,
    )
    hyperlink = OxmlElement("w:hyperlink")
    hyperlink.set(qn("r:id"), rel_id)
    run = OxmlElement("w:r")
    props = OxmlElement("w:rPr")
    color = OxmlElement("w:color")
    color.set(qn("w:val"), ORANGE)
    underline = OxmlElement("w:u")
    underline.set(qn("w:val"), "single")
    props.extend([color, underline])
    text_node = OxmlElement("w:t")
    text_node.text = text
    run.extend([props, text_node])
    hyperlink.append(run)
    paragraph._p.append(hyperlink)


INLINE_RE = re.compile(r"(https?://\S+|\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\(https?://[^)]+\))")


def add_inline(paragraph, text: str, size: float | None = None) -> None:
    cursor = 0
    for match in INLINE_RE.finditer(text):
        if match.start() > cursor:
            run = paragraph.add_run(text[cursor : match.start()])
            if size:
                run.font.size = Pt(size)
        token = match.group(0)
        if token.startswith("**"):
            run = paragraph.add_run(token[2:-2])
            run.bold = True
            if size:
                run.font.size = Pt(size)
        elif token.startswith("`"):
            run = paragraph.add_run(token[1:-1])
            run.font.name = "Aptos Mono"
            run.font.color.rgb = RGBColor.from_string(NAVY)
            if size:
                run.font.size = Pt(size)
        elif token.startswith("["):
            label, url = re.match(r"\[([^\]]+)\]\((https?://[^)]+)\)", token).groups()
            add_external_link(paragraph, label, url)
        else:
            cleaned = token.rstrip(".,;)")
            suffix = token[len(cleaned) :]
            add_external_link(paragraph, cleaned, cleaned)
            if suffix:
                paragraph.add_run(suffix)
        cursor = match.end()
    if cursor < len(text):
        run = paragraph.add_run(text[cursor:])
        if size:
            run.font.size = Pt(size)


def heading_inventory(lines: list[str]) -> list[tuple[int, str, str]]:
    result = []
    count = 0
    for line in lines:
        match = re.match(r"^(#{1,3})\s+(.+)$", line)
        if not match:
            continue
        title = match.group(2).strip()
        if title in {
            "Penetration Test Scoping Workbook",
            "Define the targets roles test rules evidence and retesting before an authorized assessment",
            "Table of contents",
        }:
            continue
        count += 1
        result.append((len(match.group(1)), title, f"scope_{count:03d}"))
    return result


def configure_styles(doc: Document) -> None:
    styles = doc.styles
    normal = styles["Normal"]
    normal.font.name = "Aptos"
    normal.font.size = Pt(9.2)
    normal.font.color.rgb = RGBColor.from_string(INK)
    normal.paragraph_format.space_after = Pt(5)
    normal.paragraph_format.line_spacing = 1.08
    for name, size, before, after in (
        ("Title", 28, 0, 10),
        ("Heading 1", 19, 12, 6),
        ("Heading 2", 13, 9, 4),
        ("Heading 3", 10.5, 7, 3),
    ):
        style = styles[name]
        style.font.name = "Aptos Display"
        style.font.size = Pt(size)
        style.font.bold = True
        style.font.color.rgb = RGBColor(0, 0, 0)
        style.paragraph_format.space_before = Pt(before)
        style.paragraph_format.space_after = Pt(after)
        style.paragraph_format.keep_with_next = True
    if "Figure Caption" not in styles:
        cap = styles.add_style("Figure Caption", WD_STYLE_TYPE.PARAGRAPH)
    else:
        cap = styles["Figure Caption"]
    cap.font.name = "Aptos"
    cap.font.size = Pt(8)
    cap.font.italic = True
    cap.font.color.rgb = RGBColor.from_string(NAVY)
    cap.paragraph_format.space_after = Pt(7)


def configure_body_section(section) -> None:
    section.orientation = WD_ORIENT.LANDSCAPE
    section.page_width = Inches(11)
    section.page_height = Inches(8.5)
    section.top_margin = Inches(0.55)
    section.bottom_margin = Inches(0.55)
    section.left_margin = Inches(0.65)
    section.right_margin = Inches(0.65)
    section.header_distance = Inches(0.25)
    section.footer_distance = Inches(0.28)
    section.header.is_linked_to_previous = False
    section.footer.is_linked_to_previous = False
    header = section.header
    p = header.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    if LOGO.exists():
        p.add_run().add_picture(str(LOGO), width=Inches(0.28))
    run = p.add_run("   STHUTHI SECURITIES  /  PENETRATION TEST SCOPING WORKBOOK")
    run.font.name = "Aptos"
    run.font.size = Pt(7.5)
    run.font.bold = True
    run.font.color.rgb = RGBColor.from_string(NAVY)
    add_page_number(section.footer.paragraphs[0])


def add_docx_table(doc: Document, rows: list[list[str]]) -> None:
    cols = max(len(row) for row in rows)
    table = doc.add_table(rows=len(rows), cols=cols)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = True
    table.style = "Table Grid"
    for r_idx, row in enumerate(rows):
        for c_idx in range(cols):
            cell = table.cell(r_idx, c_idx)
            cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
            cell.text = ""
            value = row[c_idx].strip() if c_idx < len(row) else ""
            paragraph = cell.paragraphs[0]
            paragraph.paragraph_format.space_after = Pt(1)
            add_inline(paragraph, value, size=7.2 if cols >= 6 else 8)
            set_cell_border(cell)
            if r_idx == 0:
                set_cell_shading(cell, NAVY)
                for run in paragraph.runs:
                    run.font.bold = True
                    run.font.color.rgb = RGBColor.from_string(WHITE)
            elif r_idx % 2 == 0:
                set_cell_shading(cell, PALE)
    header_row = table.rows[0]._tr
    tr_pr = header_row.get_or_add_trPr()
    repeat = OxmlElement("w:tblHeader")
    repeat.set(qn("w:val"), "true")
    tr_pr.append(repeat)
    doc.add_paragraph().paragraph_format.space_after = Pt(1)


def build_docx() -> None:
    lines = SOURCE.read_text(encoding="utf-8").splitlines()
    inventory = heading_inventory(lines)
    heading_map: dict[str, list[str]] = {}
    for _, title, anchor in inventory:
        heading_map.setdefault(title, []).append(anchor)

    doc = Document()
    configure_styles(doc)
    cover_section = doc.sections[0]
    cover_section.page_width = Inches(8.5)
    cover_section.page_height = Inches(11)
    cover_section.top_margin = Inches(0)
    cover_section.bottom_margin = Inches(0)
    cover_section.left_margin = Inches(0.57)
    cover_section.right_margin = Inches(0.57)
    cover_section.header_distance = Inches(0)
    cover_section.footer_distance = Inches(0)

    cover = ASSETS / "cover.png"
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.space_after = Pt(0)
    p.add_run().add_picture(str(cover), height=Inches(11))
    body_section = doc.add_section(WD_SECTION.NEW_PAGE)
    configure_body_section(body_section)

    in_source_toc = False
    skip_cover_image = True
    table_rows: list[list[str]] = []
    heading_seen: dict[str, int] = {}
    bookmark_id = 1
    previous_was_title = False

    def flush_table() -> None:
        nonlocal table_rows
        if table_rows:
            add_docx_table(doc, table_rows)
            table_rows = []

    for line in lines:
        if skip_cover_image and line.startswith("![Penetration Test Scoping Workbook cover]"):
            skip_cover_image = False
            continue
        if line == "# Penetration Test Scoping Workbook":
            continue
        if line.startswith("## Define the targets roles test rules"):
            continue
        if line == "## Table of contents":
            flush_table()
            in_source_toc = True
            p = doc.add_paragraph("Table of contents", style="Heading 1")
            p.paragraph_format.page_break_before = True
            for level, title, anchor in inventory:
                if level > 2:
                    continue
                entry = doc.add_paragraph()
                add_internal_link(entry, title, anchor, indent=max(0, level - 1))
                entry.paragraph_format.space_after = Pt(1.5)
            continue
        if in_source_toc:
            if line.startswith("# Part I"):
                in_source_toc = False
            else:
                continue

        if re.match(r"^\|.*\|$", line):
            cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
            if all(re.fullmatch(r":?-{3,}:?", cell) for cell in cells):
                continue
            table_rows.append(cells)
            continue
        flush_table()

        if not line.strip():
            continue
        if line.strip() == "---":
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(4)
            p.paragraph_format.space_after = Pt(5)
            run = p.add_run("━" * 80)
            run.font.color.rgb = RGBColor.from_string(GOLD)
            run.font.size = Pt(3)
            continue
        image_match = re.match(r"^!\[([^\]]+)\]\(([^)]+)\)$", line)
        if image_match:
            alt, rel_path = image_match.groups()
            path = ROOT / rel_path
            p = doc.add_paragraph()
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p.paragraph_format.keep_with_next = True
            p.add_run().add_picture(str(path), width=Inches(8.55))
            continue
        heading_match = re.match(r"^(#{1,3})\s+(.+)$", line)
        if heading_match:
            level = len(heading_match.group(1))
            title = heading_match.group(2).strip()
            style_level = min(level, 3)
            p = doc.add_paragraph(title, style=f"Heading {style_level}")
            if level == 1:
                p.paragraph_format.page_break_before = True
            idx = heading_seen.get(title, 0)
            anchors = heading_map.get(title, [])
            if idx < len(anchors):
                add_bookmark(p, anchors[idx], bookmark_id)
                bookmark_id += 1
                heading_seen[title] = idx + 1
            previous_was_title = True
            continue
        if line.startswith("*") and line.endswith("*") and not line.startswith("**"):
            p = doc.add_paragraph(style="Figure Caption")
            add_inline(p, line[1:-1])
            continue
        list_match = re.match(r"^(\s*)[-*]\s+(.*)$", line)
        if list_match:
            text = list_match.group(2)
            checked = re.match(r"\[([ xX])\]\s+(.*)", text)
            p = doc.add_paragraph(style="List Bullet")
            p.paragraph_format.left_indent = Inches(0.25)
            p.paragraph_format.first_line_indent = Inches(-0.16)
            if checked:
                mark = "☒" if checked.group(1).lower() == "x" else "☐"
                add_inline(p, f"{mark} {checked.group(2)}")
            else:
                add_inline(p, text)
            continue
        numbered = re.match(r"^(\d+)\.\s+(.*)$", line)
        if numbered:
            p = doc.add_paragraph(style="List Number")
            p.paragraph_format.left_indent = Inches(0.28)
            add_inline(p, numbered.group(2))
            continue
        p = doc.add_paragraph()
        p.paragraph_format.widow_control = True
        add_inline(p, line)
        previous_was_title = False

    flush_table()
    doc.core_properties.title = "Penetration Test Scoping Workbook"
    doc.core_properties.subject = "Scoping and rules-of-engagement workbook for authorized penetration tests"
    doc.core_properties.author = "Sthuthi Securities, Sthuthi Technologies, LLC"
    doc.core_properties.keywords = "penetration testing, scoping, rules of engagement, cybersecurity, workbook"
    doc.save(DOCX_DRAFT)
    shutil.copy2(DOCX_DRAFT, DOCX_FINAL)


def md_inline_to_html(text: str) -> str:
    escaped = html.escape(text)
    escaped = re.sub(r"`([^`]+)`", r"<code>\1</code>", escaped)
    escaped = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", escaped)
    escaped = re.sub(
        r"\[([^\]]+)\]\((https?://[^)]+)\)",
        r'<a href="\2">\1</a>',
        escaped,
    )
    escaped = re.sub(
        r"(?<![\"'=])(https?://[^\s<]+)",
        lambda m: f'<a href="{m.group(1).rstrip(".,;")}">{m.group(1).rstrip(".,;")}</a>'
        + m.group(1)[len(m.group(1).rstrip(".,;")) :],
        escaped,
    )
    return escaped


def markdown_blocks(lines: list[str]) -> str:
    out: list[str] = []
    table: list[list[str]] = []
    list_kind: str | None = None

    def close_list() -> None:
        nonlocal list_kind
        if list_kind:
            out.append(f"</{list_kind}>")
            list_kind = None

    def flush_table() -> None:
        nonlocal table
        if not table:
            return
        out.append("<table>")
        for r_idx, row in enumerate(table):
            tag = "th" if r_idx == 0 else "td"
            out.append("<tr>" + "".join(f"<{tag}>{md_inline_to_html(c)}</{tag}>" for c in row) + "</tr>")
        out.append("</table>")
        table = []

    for line in lines:
        if re.match(r"^\|.*\|$", line):
            close_list()
            cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
            if all(re.fullmatch(r":?-{3,}:?", cell) for cell in cells):
                continue
            table.append(cells)
            continue
        flush_table()
        if not line.strip():
            close_list()
            continue
        image_match = re.match(r"^!\[([^\]]+)\]\(([^)]+)\)$", line)
        if image_match:
            close_list()
            alt, src = image_match.groups()
            out.append(f'<figure><img src="{html.escape(src)}" alt="{html.escape(alt)}" /></figure>')
            continue
        heading = re.match(r"^(#{1,3})\s+(.+)$", line)
        if heading:
            close_list()
            lvl = len(heading.group(1))
            out.append(f"<h{lvl}>{md_inline_to_html(heading.group(2))}</h{lvl}>")
            continue
        bullet = re.match(r"^\s*[-*]\s+(.*)$", line)
        if bullet:
            if list_kind != "ul":
                close_list()
                list_kind = "ul"
                out.append("<ul>")
            text = re.sub(r"^\[([ xX])\]\s+", lambda m: "☒ " if m.group(1).lower() == "x" else "☐ ", bullet.group(1))
            out.append(f"<li>{md_inline_to_html(text)}</li>")
            continue
        numbered = re.match(r"^\d+\.\s+(.*)$", line)
        if numbered:
            if list_kind != "ol":
                close_list()
                list_kind = "ol"
                out.append("<ol>")
            out.append(f"<li>{md_inline_to_html(numbered.group(1))}</li>")
            continue
        close_list()
        if line == "---":
            out.append("<hr />")
        elif line.startswith("*") and line.endswith("*") and not line.startswith("**"):
            out.append(f'<p class="caption"><em>{md_inline_to_html(line[1:-1])}</em></p>')
        else:
            out.append(f"<p>{md_inline_to_html(line)}</p>")
    flush_table()
    close_list()
    return "\n".join(out)


def build_epub() -> None:
    lines = SOURCE.read_text(encoding="utf-8").splitlines()
    sections: list[tuple[str, list[str]]] = []
    current_title = "Front matter"
    current: list[str] = []
    for line in lines:
        if line.startswith("# ") and current:
            sections.append((current_title, current))
            current_title = line[2:].strip()
            current = [line]
        else:
            if line.startswith("# "):
                current_title = line[2:].strip()
            current.append(line)
    if current:
        sections.append((current_title, current))

    css = f"""
body {{ font-family: sans-serif; color: #{INK}; line-height: 1.45; margin: 5%; }}
h1, h2, h3 {{ color: #000; page-break-after: avoid; }}
h1 {{ border-bottom: 3px solid #{ORANGE}; padding-bottom: .2em; }}
a {{ color: #{ORANGE}; }}
img {{ max-width: 100%; height: auto; }}
figure {{ margin: 1em 0; text-align: center; }}
.caption {{ color: #{NAVY}; font-size: .9em; }}
table {{ border-collapse: collapse; width: 100%; margin: 1em 0; font-size: .82em; }}
th {{ background: #{NAVY}; color: white; }}
th, td {{ border: 1px solid #{GRID}; padding: .35em; vertical-align: top; }}
tr:nth-child(even) td {{ background: #{PALE}; }}
code {{ color: #{NAVY}; background: #{PALE}; padding: .1em .2em; }}
""".strip()

    with zipfile.ZipFile(EPUB_FINAL, "w") as zf:
        zf.writestr("mimetype", "application/epub+zip", compress_type=zipfile.ZIP_STORED)
        zf.writestr(
            "META-INF/container.xml",
            '<?xml version="1.0"?><container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>',
        )
        zf.writestr("OEBPS/styles/book.css", css)

        manifest = ['<item id="css" href="styles/book.css" media-type="text/css"/>']
        spine: list[str] = []
        nav_items: list[str] = []
        for index, (title, section_lines) in enumerate(sections, start=1):
            filename = f"chapter-{index:02d}.xhtml"
            item_id = f"chap{index:02d}"
            body = markdown_blocks(section_lines)
            xhtml = f'''<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en"><head><title>{html.escape(title)}</title><link rel="stylesheet" type="text/css" href="styles/book.css"/></head><body>{body}</body></html>'''
            zf.writestr(f"OEBPS/{filename}", xhtml)
            manifest.append(f'<item id="{item_id}" href="{filename}" media-type="application/xhtml+xml"/>')
            spine.append(f'<itemref idref="{item_id}"/>')
            nav_items.append(f'<li><a href="{filename}">{html.escape(title)}</a></li>')

        for asset in sorted(ASSETS.glob("*.png")):
            asset_id = "img_" + re.sub(r"[^a-z0-9]", "_", asset.stem.lower())
            manifest.append(f'<item id="{asset_id}" href="assets/{asset.name}" media-type="image/png"/>')
            zf.write(asset, f"OEBPS/assets/{asset.name}")

        nav = f'''<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="en"><head><title>Contents</title><link rel="stylesheet" type="text/css" href="styles/book.css"/></head><body><nav epub:type="toc"><h1>Table of contents</h1><ol>{''.join(nav_items)}</ol></nav></body></html>'''
        zf.writestr("OEBPS/nav.xhtml", nav)
        manifest.append('<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>')

        opf = f'''<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="book-id"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="book-id">urn:uuid:sthuthi-penetration-test-scoping-workbook-v1</dc:identifier><dc:title>Penetration Test Scoping Workbook</dc:title><dc:creator>Sthuthi Securities, Sthuthi Technologies, LLC</dc:creator><dc:language>en</dc:language><dc:date>2026-11-04</dc:date><meta property="dcterms:modified">2026-11-04T00:00:00Z</meta></metadata><manifest>{''.join(manifest)}</manifest><spine>{''.join(spine)}</spine></package>'''
        zf.writestr("OEBPS/content.opf", opf)


def validate_epub() -> None:
    with zipfile.ZipFile(EPUB_FINAL) as zf:
        names = zf.namelist()
        if names[0] != "mimetype":
            raise RuntimeError("EPUB mimetype must be the first archive member")
        for name in names:
            if name.endswith((".xml", ".opf", ".xhtml")):
                ET.fromstring(zf.read(name))
        if zf.read("mimetype") != b"application/epub+zip":
            raise RuntimeError("Invalid EPUB mimetype")


if __name__ == "__main__":
    build_docx()
    build_epub()
    validate_epub()
    print(DOCX_FINAL)
    print(EPUB_FINAL)
