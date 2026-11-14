// Turns any pasted block of text into a list of item names.
// Plain JavaScript with no React, so it's easy to test and reuse.
//
//   parseList("- Milk\n2. eggs, bread\n\n• green onions")
//   → ["Milk", "eggs", "bread", "green onions"]

// Items are separated by new lines, commas or semicolons.
const SEPARATORS = /[\n,;]+/;

// Things at the start of an item that aren't part of its name:
//   bullets      "- milk"   "* milk"   "• milk"
//   numbering    "1. milk"  "2) milk"  "(3) milk"
//   checkboxes   "[ ] milk" "[x] milk"
// Numbering needs a space after it so "1.5 kg rice" keeps its number.
const LEADING_MARKER = /^(?:[-*•·▪–—+]+\s*|\(?\d+[.)]\s+|\[[ xX]?\]\s*)/;

export function parseList(text) {
  return text
    .split(SEPARATORS)
    .map((line) => line.trim().replace(LEADING_MARKER, "").trim())
    .filter((name) => name !== "");
}
