import { vehicles } from '../../lib/mockData';
import { VehicleCard } from '../../components/VehicleCard';
export default function Search(){
 return(
  <div className="p-4">
   <h1 className="font-bold">Find Vehicles</h1>
   {vehicles.map(v=> <VehicleCard key={v.id} vehicle={v} />)}
  </div>
 )
}