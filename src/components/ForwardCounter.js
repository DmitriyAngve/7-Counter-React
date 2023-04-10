// import { useState, useEffect } from "react";
import useCounter from "./hooks/use-counter";
import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter();

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000000);

  //   return () => clearInterval(interval);
  // }, []);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;

// ~~ CREATING A CUSTOMREACT HOOKS ~~
// CAME FROM use-counter.js
// STEP 2:
// 2.1 Import "useCounter" into ForwardCounter.js
// 2.2 Call "useCounter" like other hooks
// 2.3 If I call "useCounter" like a custom hook, the state created in file from where it was exported HOOK, will be tied with file where HOOK will be called. If you use a custom hooks in multiple components EVERY component will receive its OWN STATE. Custom hook does not mean that we share state or effect across components

// CAME FROM use-counter.js
// STEP 4:
// 4.1 "const counter = useCounter()" set it equal to calling used counter since use counter returns to counter i can store it in a constant of this component.
// 4.2 And now I can rid of all that old code in here and "import"
// ~~ CREATING A CUSTOMREACT HOOKS ~~
