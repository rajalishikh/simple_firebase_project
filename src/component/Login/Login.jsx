import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/Firebase";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const handleClick=()=>{
        console.log ("Login with google")
        signInWithPopup(auth,provider).then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div>
            <button  onClick={handleClick} className="text-2xl p-2 bg-green-600 text-white rounded-xl hover:bg-red-700">Login with google</button>
            
        </div>
    );
};

export default Login;