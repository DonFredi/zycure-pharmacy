"use client";

import { useCategories } from "@/hooks/useCategory";

interface Props {
  onSelect: (category: string | undefined) => void;
}

const MobileCategorySearch = ({ onSelect }: Props) => {
  const { categories } = useCategories();

  return (
    <div className="block md:hidden">
      <select className="w-3/4 border rounded-md px-3 py-2" onChange={(e) => onSelect(e.target.value || undefined)}>
        <option value="">Search by category...</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.title}>
            {cat.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MobileCategorySearch;
