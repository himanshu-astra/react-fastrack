import React from "react";
import ReactDOM from "react-dom/client";

const youtubeTags = ["All", "Dubbing", "Comedy", "Music", "One More"];

// Input of functions: props (Javascript Object)
// Output: HTML(JSX)

// Custom HTML, that you have
// background-color => backgroundColor
// justify-content => justifyContent

// class => class

// Make a Add Component, that takes in 2 arguments num1 and num2, and just shows
// Addition is num1 + num2

// <Add num1="10" num2="20"></Add>
// Addition is 30

function Greet(props) {
  console.log(props.prop3);

  return (
    <div>
      <p>Hello XYZ</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("abhishek"));
root.render(<Greet prop1="Himanshu" prop2="ABC" prop3="DEF"></Greet>);
