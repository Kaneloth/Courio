import { WalletCard } from '../components/WalletCard'
import { StatCard } from '../components/StatCard'
import { VehicleCard } from '../components/VehicleCard'
import { vehicles, user } from '../lib/mockData'

export default function Home() {
 return (
  <div className="p-4 space-y-4">
   <h1 className="text-xl font-bold">Welcome</h1>

   <WalletCard />

   <div className="grid grid-cols-2 gap-3">
    {user.role !== 'driver' && <StatCard title="My Vehicles" value="2" />}
    <StatCard title="Active Assignments" value="0" />
    <StatCard title="Available Vehicles" value={vehicles.length} />
    <StatCard title="Rating" value="N/A" />
   </div>

   {vehicles.map(v => (
    <VehicleCard key={v.id} vehicle={v} />
   ))}
  </div>
 )
}