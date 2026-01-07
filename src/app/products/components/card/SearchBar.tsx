"use client";

import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const SearchBar = ({ value, onChange }: Props) => {
  const [localValue, setLocalValue] = useState(value);

  // Sync external value changes (e.g. reset)
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Debounce parent updates
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(localValue);
    }, 300);

    return () => clearTimeout(timeout);
  }, [localValue, onChange]);

  return (
    <div className="flex justify-start w-full">
      <div className="relative w-full md:w-64 lg:w-80">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />

        <input
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          placeholder="Search products..."
          className="w-full border rounded-md pl-9 pr-10 py-2 text-sm outline-none"
        />

        {localValue && (
          <button
            type="button"
            onClick={() => setLocalValue("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
