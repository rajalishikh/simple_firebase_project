import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase/Firebase";

const Login = () => {
    const [user2,setUser]=useState(null)
    
    const provider = new GoogleAuthProvider();
    // login with google 
    const handleClick=()=>{
        console.log ("Login with google")
        signInWithPopup(auth,provider).then((result)=>{
            console.log(result)
            setUser(result.user)
        }).catch((error)=>{
            console.log(error)
        })
    }
    // login with github 
    const providerGithub = new GithubAuthProvider();
    const handleClickGithub=()=>{
        console.log("login  Successful with github")
        signInWithPopup(auth, providerGithub)
  .then((result) => {
    const loginGithub=result.user
    
   
   
    console.log(loginGithub)
    setUser(loginGithub.user)
   
    
  }).catch((error) => {
    console.log(error)
    
   
  });
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
                user2?  <button onClick={handleLogout} className="text-2xl p-2 bg-green-600 text-white rounded-xl hover:bg-red-700" >LogOut</button>:
                <div>
                    <button  onClick={handleClick} className="text-2xl p-2 bg-green-600 text-white rounded-xl hover:bg-red-700 mr-2">Login with google</button>
                    <button  onClick={handleClickGithub} className="text-2xl p-2 bg-green-600 text-white rounded-xl hover:bg-red-700">Login with github</button>
                </div>
            }
          
            {
            user2 && <div><p>Name:{user2.displayName}</p>
           <p>Email:{user2.email}</p> </div> 
          }
          
            
        </div>
    );
};

export default Login;