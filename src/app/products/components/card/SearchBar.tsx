"use client";

import { Search, X } from "lucide-react";
import { useRef, useEffect } from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
  open: boolean;
  setOpen: (val: boolean) => void;
}

const SearchBar = ({ value, onChange, open, setOpen }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus when opened
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <div className="relative flex items-center">
      {/* Search button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-muted transition"
        aria-label="Open Search"
      >
        <Search size={20} />
      </button>

      {/* Expanding input */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "w-48 ml-2" : "w-0"}`}>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search products..."
          className="w-full border rounded-md px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* Clear */}
      {open && value && (
        <button onClick={() => onChange("")} className="absolute right-2 text-muted-foreground">
          <X size={14} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
