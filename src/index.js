import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

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

// v can be (X, Y, Z)
// <SlotMachine v1="X" v2="Y" v3="Z" ></SlotMachine> => You Lose
// <SlotMachine v1="X" v2="X" v3="Z" ></SlotMachine> => You Lose
// <SlotMachine v1="Y" v2="Y" v3="Y" ></SlotMachine> => You Win

// If all 3 values are same, You Win!
// If any one value differes You Lose!

// Inline
// Internal
// Extrernal

const youtubeData = ["All", "Comedy", "Action", "Thriller"]; // fetch all tags

// { text }
const YoutubeTag = ({ text }) => {
  return <span className="youtube-tag">{text}</span>;
};

const AllYoutubeTags = ({ ytTags }) => {
  // const finalData = ytTags.map((tag) => <YoutubeTag text={tag} color={myColor} width={myWidth} />);
  // {color: myColor, width: myWidth, text:tag}

  return (
    <div>
      {ytTags.map((tag) => (
        <YoutubeTag text={tag} />
      ))}
    </div>
  );
};

const heroes = [
  {
    firstName: "Bruce",
    lastName: "Wayne",
    alias: "Batman",
  },
  {
    firstName: "Clark",
    lastName: "Kent",
    alias: "Super-man",
  },
  {
    firstName: "Peter",
    lastName: "Parker",
    alias: "Spiderman",
  },
];

// this in function keyword, refers to object calling the function
// this in arrow function, refers to the "lexical" this

<html>
  <body>
    <div></div>
    <div>
      <p>
        <span></span>
      </p>
    </div>
    <div></div>
  </body>
</html>;

// Painting UI to screen is a slow process.
// Solution is Virtual DOM

// Virtual DOM: In memory(RAM) representation of the DOM
// Re-conciliation: How to paint the browser screen with differences found out in diffing process
// Diffing: Compare oldvirtual dom and new virtual dom(with updates)

// Hello My real name is <FullName> Red color
// My superhero name is <alias> blue color

const Counter = () => {
  let [count, setCount] = useState(0); // useState => gives me 2 things
  // current state of component
  // and a function to update said state

  const handleClick = () => {
    console.log("Button was clicked");
    setCount(count + 1);
    // count = count + 1;
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("abhishek"));
root.render(<Counter />);
