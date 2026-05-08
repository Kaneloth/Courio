"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function Auth() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const router = useRouter();

 async function login() {
  await supabase.auth.signInWithPassword({ email, password });
  router.push("/");
 }

 return (
  <div className="flex justify-center mt-20">
   <div className="bg-white p-6 rounded-2xl shadow-md w-80">
    <h2 className="font-bold mb-4">Courio</h2>
    <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="w-full border p-2 mb-2 rounded-2xl" />
    <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="w-full border p-2 mb-3 rounded-2xl" />
    <button onClick={login} className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow-md hover:shadow-xl active:scale-95 transition w-full">Login</button>
   </div>
  </div>
 )
}