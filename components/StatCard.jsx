export function StatCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition">
      <p className="text-sm text-gray-500">{title}</p>

      <h2 className="text-2xl font-bold mt-1">
        {value}
      </h2>
    </div>
  );
}
