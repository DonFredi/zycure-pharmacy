// components/ui/Loader.tsx
export default function Loader({ message }: { message: string }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-[50vh]">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      {message}
    </div>
  );
}
