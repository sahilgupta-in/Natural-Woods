interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function CollectionFilter({
  search,
  setSearch,
}: Props) {
  return (
    <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:justify-between">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-lg border px-5 py-3 outline-none"
      />

      <select className="rounded-lg border px-5 py-3">
        <option>Newest</option>
       
      </select>

    </div>
  );
}