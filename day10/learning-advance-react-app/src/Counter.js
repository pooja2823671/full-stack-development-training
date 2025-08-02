import { useState } from "react";

function Counter(){
      //here count is a simple variable which does not provide memory
      //let count=0;

    //count is a state which provide memory and function setCount to update state
    let[count,setCount]=useState(0);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click me</button>
            <button onClick={()=>setCount(count-1)}>Click me</button>
        </div>
    )
}
export{Counter};