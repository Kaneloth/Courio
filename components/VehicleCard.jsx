export function VehicleCard({ vehicle }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition mt-2">
      <h3 className="font-semibold text-lg">{vehicle.name}</h3>

      <p className="text-sm text-gray-500">
        {vehicle.year} • {vehicle.location}
      </p>

      <p className="font-semibold mt-1">
        R {vehicle.weekly_fee}/week
      </p>

      {/* Button */}
      <div className="mt-3">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow-md hover:shadow-xl active:scale-95 transition">
          Request Vehicle
        </button>
      </div>
    </div>
  );
}
