import { WalletCard } from '../../components/WalletCard';
export default function Wallet(){
 return(
  <div className="p-4">
   <WalletCard />
   <div className="flex gap-2 mt-3">
    <button className="bg-blue-600 text-white px-3 py-2 rounded">Add</button>
    <button className="border px-3 py-2 rounded">Withdraw</button>
   </div>
  </div>
 )
}