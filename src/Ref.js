import React, { useEffect } from "react";

const Form = () => {
  const inputRef = React.useRef(null); // Create a ref, initailize with null

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // Alternate way
    // const inputBox = document.getElementById("my-input");
    // inputBox.focus();
  }, []);

  return (
    <form>
      <input ref={inputRef} id="my-input" />
    </form>
  );
};

export default Form;
