import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase/Firebase";

const Login = () => {
    const [user,setUser]=useState(null)
    const provider = new GoogleAuthProvider();
    const handleClick=()=>{
        console.log ("Login with google")
        signInWithPopup(auth,provider).then((result)=>{
            console.log(result)
            setUser(result.user)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const handleLogout=()=>{
        setUser(null)
        signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  console.log(error)
});
    }
    return (
        <div>
            
            {
                user?  <button onClick={handleLogout} className="text-2xl p-2 bg-green-600 text-white rounded-xl hover:bg-red-700" >LogOut</button>:
                <button  onClick={handleClick} className="text-2xl p-2 bg-green-600 text-white rounded-xl hover:bg-red-700">Login with google</button>
            }
          
            {
            user && <div><p>Name:{user.displayName}</p>
           <p>Email:{user.email}</p> </div> 
          }
          
            
        </div>
    );
};

export default Login;