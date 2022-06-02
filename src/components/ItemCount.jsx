import React, { useState } from "react";

export default function ItemCount ({ desde, hasta }) {
    const [x, contador] = useState(1)

    console.log('render')
    return(
        
            <>
                <div style={{ border: '1px solid red', height: '80px', width: '180px'}}>{x}
                <br />
                <button
                    onClick={() =>{
                        desde < 6 ? contador(x + 1) : contador(x)
                    }}
                >
                        +
                </button>
                <button
                    onClick={() =>{
                        hasta > 0 ? contador(x - 1) : contador(x)
                    }}
                >
                        -
                </button>
                </div>              
            </>
           
           
        
    )
}