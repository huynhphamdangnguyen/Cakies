import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from "../../config/firestore"
import "./AuthDetail.css"

const AuthDetail = () => {
    const [authUser, setAuthUser] = useState(null)
    useEffect (() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        })
        return () => {
            listen();
        }
    }, [])
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("Logout Success")
        }).catch(error => console.log(error))
    }
  return (
    <div>
        {authUser ? <><p>{`Login as ${authUser.email}`}</p> <button className='logout' onClick={userSignOut}>Logout</button></> : <p>Logout</p>}
    </div>
  )
}

export default AuthDetail;