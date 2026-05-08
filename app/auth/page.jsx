'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Auth(){
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 const login=async()=>{
  await supabase.auth.signInWithPassword({email,password});
 };
 return(
  <div className="flex justify-center mt-20">
   <div className="bg-white p-6 rounded shadow w-80">
    <h2 className="font-bold mb-4">Courio</h2>
    <input className="w-full border p-2 mb-2" onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
    <input className="w-full border p-2 mb-2" type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
    <button onClick={login} className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
   </div>
  </div>
 )
}