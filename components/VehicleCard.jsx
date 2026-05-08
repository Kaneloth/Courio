import { supabase } from "../lib/supabase";

export function VehicleCard({ vehicle }) {

  async function requestVehicle() {
    await supabase.from("requests").insert({
      vehicle_id: vehicle.id,
    });

    alert("Request sent!");
  }

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition mt-2">
      <h3 className="font-semibold">{vehicle.name}</h3>
      <p className="text-sm text-gray-500">
        {vehicle.year} • {vehicle.location}
      </p>
      <p className="font-semibold">R {vehicle.weekly_fee}/week</p>

      <button
        onClick={requestVehicle}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-2xl shadow-md hover:shadow-xl active:scale-95 transition"
      >
        Request Vehicle
      </button>
    </div>
  );
}
