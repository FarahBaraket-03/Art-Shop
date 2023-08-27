
import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import auth from "./fire";
import { signInWithEmailAndPassword } from 'firebase/auth';

function App() {
  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [passwordError,setPasswordError]=useState("");
  const [emailError,setEmailError]=useState("");

  const handlelogin=()=>{
    signInWithEmailAndPassword(auth,email,password)
    .catch((err)=>{
      switch(err.code){
        case"auth/invalid-email":
        case "auth/user-disabled":
        case"auth/user-not-found":
        setEmailError(err.message);
        break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
        default:
          setPasswordError(err.message);
          break;


      }

    }
    )
  }

  useEffect(()=>{
    const authListener=()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){setUser(user)}
        else{setUser("")}
      })
    };authListener()
  },[])
const handlelogout=()=>{
  auth.signOut();
}

  return (
    <div className="App">
     {
      user ? (<Dashboard handlelogout={handlelogout} />) :(<div> <Login email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handlelogin={handlelogin}
        emailError={emailError}
        passwordError={passwordError}
      /> </div>)
     }
    </div>
  );
}

export default App;
