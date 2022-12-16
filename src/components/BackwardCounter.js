import { useState, useEffect } from "react";
import Card from "./Card";
import useCounter from "./hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(false);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;

// ~~ CONFIGURING CUSTOM HOOKS ~~
// CAME FROM use-counter.js
// STEP 3:
// 3.1 import "useCounter"
// 3.2 Call "useCounter" and pass "false" as a argument here, because here we don't wanna go forwards, we gonna backwards (we didn't an argument in the ForwardCounter because we got a default value in the custom hook)
// 3.3 Let's extract "counter"
// 3.4 Rid other logic.
// ~~ CONFIGURING CUSTOM HOOKS ~~
