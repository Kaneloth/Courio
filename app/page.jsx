import { WalletCard } from '../components/WalletCard'
import { StatCard } from '../components/StatCard'
import { VehicleCard } from '../components/VehicleCard'
import { user, vehicles } from '../lib/mockData'

export default function Home(){
 const isOwner = user.role !== 'driver'
 return (
  <div className="p-4 space-y-4">
   <h1 className="text-xl font-bold">Welcome</h1>
   <WalletCard />
   <div className="grid grid-cols-2 gap-3">
    {isOwner && <StatCard title="My Vehicles" value="2" />}
    <StatCard title="Active Assignments" value="0" />
    <StatCard title="Available Vehicles" value={vehicles.length} />
    <StatCard title="Rating" value="N/A" />
   </div>
   {isOwner && (
    <div className="flex gap-2">
    <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow-md hover:shadow-xl active:scale-95 transition">Add Vehicle</button>
     <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow-md hover:shadow-xl active:scale-95 transition">View Requests</button>
    </div>
   )}
   {vehicles.map(v=> <VehicleCard key={v.id} vehicle={v} />)}
  </div>
 )
}
