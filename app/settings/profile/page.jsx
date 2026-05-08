"use client";
import { useState } from "react";

export default function Profile(){
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");

 return(
  <div className="p-4 space-y-3">
   <h1 className="text-xl font-bold">Profile</h1>
   <input value={name} onChange={e=>setName(e.target.value)} className="border p-2 rounded-2xl w-full" placeholder="Full Name" />
   <input value={email} onChange={e=>setEmail(e.target.value)} className="border p-2 rounded-2xl w-full" placeholder="Email" />
  </div>
 )
}