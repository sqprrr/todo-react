export default function Filters({ filter, setFilter }) {
  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)} className="mb-4 p-2">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
  );
}
