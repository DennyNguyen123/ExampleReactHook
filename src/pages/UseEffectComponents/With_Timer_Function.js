import { useState, useEffect } from "react";

export default function With_Timer_Function () {
  const [countdown, setCountdown] = useState(180);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prev) => --prev);
      console.log("countdown");
    }, 1000);

    return()=> clearInterval(timerId)
  }, []);
  return (
    <div>
      <h2>Resize DOM</h2>
      <h1>{countdown}</h1>
      {/* {console.log("render")} */}
    </div>
  );
}
