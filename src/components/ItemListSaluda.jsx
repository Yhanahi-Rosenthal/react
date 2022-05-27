import React from "react";

export default function Saludar({tutor, msg}){
    return <div className="div">    
                <p className="saludo">{msg + " " + tutor}</p>
    
            </div>;
}