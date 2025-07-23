"use client";
import { useEffect, useState } from "react";

const codeLines = [
  "function Portfolio() {",
  "  return (",
  "    <div>",
  "      Hallo, ich bin Mikheil – Webentwickler aus Wien!",
  "      // Hier entsteht Ihr nächstes Projekt.",
  "    </div>",
  "  );",
  "}",
];

export default function AnimatedCodeEditor() {
  const [displayed, setDisplayed] = useState([""]);
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    if (line < codeLines.length) {
      if (char < codeLines[line].length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => {
            const newLines = [...prev];
            newLines[line] = (newLines[line] || "") + codeLines[line][char];
            return newLines;
          });
          setChar((c) => c + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setDisplayed((prev) => [...prev, ""]);
        setLine((l) => l + 1);
        setChar(0);
      }
    }
  }, [line, char]);

  return (
    <div className="max-w-4xl mx-auto mt-12 rounded-xl bg-[#18122B] border border-purple-800 shadow-lg overflow-hidden relative">
      <div className="flex items-center gap-2 px-4 py-2 bg-[#2A1454] border-b border-purple-800">
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-400"></span>
        <span className="ml-4 text-purple-200 text-xs">portfolio.jsx</span>
      </div>
      {/* Dekoratives Next.js-Logo mittig rechts */}
      <img
        src="/frontendIcons/nextjs.png"
        alt="Next.js Logo"
        className="absolute top-1/2 right-32 w-28 h-28 opacity-20 pointer-events-none select-none -translate-y-1/2 animate-spin-slow"
        style={{ zIndex: 2 }}
      />
      <pre className="p-6 text-sm text-purple-100 font-mono leading-relaxed min-h-[180px]">
        {displayed.map((l, i) => (
          <div key={i}>
            {l}
            {i === displayed.length - 1 && line < codeLines.length ? (
              <span className="animate-pulse text-purple-400">|</span>
            ) : null}
          </div>
        ))}
      </pre>
    </div>
  );
} 