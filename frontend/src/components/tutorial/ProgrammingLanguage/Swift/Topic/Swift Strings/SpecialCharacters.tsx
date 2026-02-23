import React from "react";

const SwiftStringsSpecialCharacters: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Strings: Special Characters
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Use escape sequences inside strings: <code>\n</code> (newline), <code>\t</code> (tab), <code>\"</code> (quote), <code>\\</code> (backslash).
    </p>

    {/* Escapes */}
    <h2 className="text-2xl font-bold  mt-6">Escapes</h2>
    <p className=" leading-relaxed mt-3">
      Escape special characters with backslashes to represent newlines, tabs, quotes, or backslashes themselves.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`print("Hello\\nSwift")
print("A\\tB\\tC")
print("\\"quoted\\"")
print("\\\\")`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example demonstrates using escape sequences for newlines, tabs, quotes, and backslashes.
    </p>

    {/* Multiline Strings */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Multiline Strings</h2>
    <p className=" leading-relaxed mt-3">
      Use triple quotes <code>"""</code> for multiline string literals. Indentation before closing quotes is ignored.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let poem = """
Roses are red,
Violets are blue.
"""
print(poem)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example demonstrates creating multiline strings using triple quotes.
    </p>
  </>
);

export default SwiftStringsSpecialCharacters;
