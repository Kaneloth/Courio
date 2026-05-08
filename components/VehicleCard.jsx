export function VehicleCard({vehicle}){
 return(
  <div className="bg-white p-4 shadow rounded mt-2">
   <h3>{vehicle.name}</h3>
   <p>{vehicle.year} • {vehicle.location}</p>
   <p>R {vehicle.weekly_fee}/week</p>
  </div>
 )
}