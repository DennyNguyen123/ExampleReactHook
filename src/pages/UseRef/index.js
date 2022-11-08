import React,{useState,useRef,useEffect} from "react";
import {Button} from "reactstrap"
const ExampleUseRef = () => {
  const [num,setNum] = useState(60);
  let interval = useRef()
  let h1ref = useRef()
  
  console.log("Re-mount");
  useEffect(()=>{
    console.log(h1ref);
  },[h1ref])

  useEffect(() => {
    console.log("call back effect")
    return () => {
        console.log("Clean up");
    };
  }, [num]);

  const handleStart=()=>{
    interval.current = setInterval(()=>{
        setNum(prenum=>prenum-1)
    },1000)
  }
  const handleStop=()=>{
    clearInterval(interval.current)
  }
  return (
    <div>
      <h2 ref={h1ref}>{num}</h2>
      <Button onClick={handleStart}>Start</Button>
      <Button onClick={handleStop}>Stop</Button>
      {console.log("Render")}
    </div>
  );
};

export {ExampleUseRef};
