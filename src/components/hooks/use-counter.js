import { useState, useEffect } from "react";

// const useCounter = (counterUpdateFn) => {
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
      //   setCounter(counterUpdateFn());
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);
  return counter;
};

export default useCounter;

// use - keyword

// ~~ CREATING A CUSTOMREACT HOOKS ~~
// Always starts with "use"
// STEP: 1
// 1.1 Copy code from ForwardCounter.js (useState and useEffect), not the code where we return JSX and added inside the "useCounter".
// GO TO ForwardCounter.js

// CAME FROM ForwardCounter.js
// STEP 3:
// 3.1 Add "return counter". I can return whatever you wanna return in your custom hooks. In that case return a number, because "useState(0)" number
// 3.2 And therefore in component, where I call custom hook, I can use that returned value
// GO TO ForwardCounter.js
// ~~ CREATING A CUSTOMREACT HOOKS ~~

// ~~ CONFIGURING CUSTOM HOOKS ~~
// Custom hooks accepts a parameter like other functions.
// STEP: 1
// 1.1 First argument: "counterUpdateFn" based on "setCounter"
// 1.2 Change parameter in "setCounter(counterUpdateFn())" OR
// 1.3 OR. Add as parameter "forwards = true" as a default value
// 1.4 Add "ifcheck" -> if forwards set "true", then "+ 1", else "- 1"
// STEP 2:
// 2.1 Either way, now we have a dependency in this effect in our custom hook, because the parameter which I'm using in here ("forwards") that is a dependency. It's not defined inside of the EFFECT function, It's not defined outside of our custom HOOK -> it's a value that we get as a parameter (in "useCounter = (forwards = true) =>") --- >>> should add forwards as a dependency. So this effect will rerun whenever this dependency changes
// GO TO BackwardCounter.js --->>>>
// ~~ CONFIGURING CUSTOM HOOKS ~~
