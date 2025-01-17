import { useState } from "react";
import { useDispatch } from "react-redux";
import {login} from "../../redux/apiCalls.js";

const Login = ()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const dispatch= useDispatch();
    const handleClick=(e)=>{
        e.preventDefault();
        login(dispatch,{username,password})
    }
    return(
        <div style={{height:"100vh",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
            <input style={{height:20,padding:10,marginBottom:10}} type="text" placeholder="username" onChange={(e)=>{
                setUsername(e.target.value);
            }}/>
            <input style={{height:20,padding:10,marginBottom:10}} type="password" placeholder="password" onChange={e=>{
                setPassword(e.target.value);
            }}/>
            <button style={{height:40,padding:10,width:100 }} onClick={handleClick}>Login</button>
        </div>
    )
}
export default Login;