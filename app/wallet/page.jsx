import { WalletCard } from '../../components/WalletCard'

export default function Wallet(){
 return(
  <div className="p-4 space-y-3">
   <WalletCard />
   <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow-md">Add Funds</button>
  </div>
 )
}