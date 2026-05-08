import Link from 'next/link'

export default function Settings(){
 return(
  <div className="p-4 space-y-3">
   <h1 className="text-xl font-bold">Settings</h1>

   <Link href="/settings/profile">
    <div className="bg-white p-4 rounded-2xl shadow-md">Profile</div>
   </Link>

   <Link href="/settings/plan">
    <div className="bg-white p-4 rounded-2xl shadow-md">Plan</div>
   </Link>

   <Link href="/settings/security">
    <div className="bg-white p-4 rounded-2xl shadow-md">Security</div>
   </Link>
  </div>
 )
}