"use client";
import { useState } from "react";
import { Search } from "lucide-react"; // example icon

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-2">
      {/* Search Icon */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 rounded-full hover:bg-gray-200 transition"
        aria-label="Toggle search"
      >
        <Search size={20} />
      </button>

      {/* Expanding Input */}
      {open && (
        <input
          type="text"
          placeholder="Search products..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="transition-all duration-300 border rounded-md px-3 py-2 w-40 md:w-64"
          autoFocus
        />
      )}
    </div>
  );
};

export default SearchBar;
