import { useState, useEffect } from "react";

export default function ResizeDOM() {
  const [width1,setWidth1] = useState(window.innerWidth)

  useEffect(()=>{
    const handleResize = ()=>{
      setWidth1(window.innerWidth)
    }
    
    window.addEventListener("resize",handleResize)
    //Clean up function
    return()=>{
      window.removeEventListener("resize",handleResize)
      
    }
  },[])
  console.log(width1);
  return (
    <div>
      <h2>Resize DOM</h2>
      <h1>{width1}</h1>
      {console.log("render")}
    </div>
  );
}
