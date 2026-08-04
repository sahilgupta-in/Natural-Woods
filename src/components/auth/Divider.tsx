export default function Divider() {
  return (
    <div className="my-7 flex items-center">
      <div className="h-px flex-1 bg-gray-200" />

      <span className="px-4 text-sm uppercase tracking-widest text-gray-400">
        OR
      </span>

      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
}