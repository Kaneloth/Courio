import { WalletCard } from '../../components/WalletCard';
export default function Wallet(){
 return(
  <div className="p-4">
   <WalletCard />
   <div className="flex gap-2 mt-3">
    <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow-md hover:shadow-xl active:scale-95 transition">Add</button>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow-md hover:shadow-xl active:scale-95 transition">Withdraw</button>
   </div>
  </div>
 )
}
