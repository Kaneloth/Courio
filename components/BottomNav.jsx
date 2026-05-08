"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav(){
 const path = usePathname();
 const link = (p)=> path===p?"text-blue-600":"text-gray-500";

 return(
  <div className="fixed bottom-0 w-full bg-white border-t flex justify-around p-3">
   <Link href="/" className={link("/")}>Home</Link>
   <Link href="/search" className={link("/search")}>Search</Link>
   <Link href="/track" className={link("/track")}>Track</Link>
   <Link href="/wallet" className={link("/wallet")}>Wallet</Link>
   <Link href="/settings" className={link("/settings")}>Settings</Link>
  </div>
 )
}