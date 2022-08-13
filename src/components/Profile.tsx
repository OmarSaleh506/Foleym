import React from 'react'
import { getAuth, signOut } from "firebase/auth";
export default function Profile() {
  const auth = getAuth();
  return (
    <div>
      <p>profile</p>
      <button onClick={()=> signOut(auth)}>LogOut</button>
    </div>
  )
}
