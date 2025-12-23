import ArrowUp from "@/components/icons/ArrowUp";

const CategoryDrop = ({ name, onClick }: { name: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-row justify-between items-center rounded-sm border border-foreground p-1 md:px-4 md:py-3 gap-2"
    >
      {name}
      <ArrowUp />
    </button>
  );
};
export default CategoryDrop;
