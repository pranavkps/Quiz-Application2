import React,{} from "react";

 const LoginPage = ({start}) => {

    return(
        <div  className="join-screen">
            <input type="text" name="name" placeholder="Enter Name"></input>
            <input type="email" name="email" placeholder="Enter Email"></input>
            <button onClick={start} className="submits">START</button>
        </div>
    )
}

export default LoginPage




