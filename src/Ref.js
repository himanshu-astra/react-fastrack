import React, { useEffect, useState } from "react";

const Form = () => {
  const [count, setCount] = useState(0);
  const inputRef = React.useRef(null); // Create a ref, initailize with null

  useEffect(
    // Effect Function
    function sideEffect() {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      // Alternate way
      // const inputBox = document.getElementById("my-input");
      // inputBox.focus();

      console.log("Side effect Ran: ", count);
      // Cleanup function
      return () => {
        console.log("Side effect cleanup: ", count);
      };
    },
    [count]
  );

  return (
    <>
      <form>
        <input ref={inputRef} id="my-input" />
      </form>
      <p>Count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default Form;

// useRef was created and set to null
// Form was shown on screen
// ref was set to the actual element on HTML DOM
// Effect Callback (sideEffect) is run. In our case this was focussed

// Increment button was clicked, Form is re-rendered.
// Cleanup function is run.
// Next effect is run.
