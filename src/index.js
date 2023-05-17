import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import Pokemon from "./Pokemon";
import SelectPokemon from "./SelectPokemon";
import TodoList from "./TodoList";
import Main from "./remainingHooks";
import Form from "./Ref";

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
const YoutubeTag = (props) => {
  return <span className="youtube-tag">{props.text}</span>;
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

// import {useState} from 'react';
const Counter = () => {
  const [userNum, setUserNum] = useState(0);

  const handleChange = (e) => {
    setUserNum(parseInt(e.target.value));
  };

  const handleAdd10 = () => {
    const newRes = userNum + 10;
    setUserNum(newRes);
  };

  return (
    <div>
      <p>Addition is {userNum}</p>
      <input type="number" onChange={handleChange} value={userNum} />
      <button onClick={handleAdd10}>Add 10</button>
    </div>
  );
};

// HOMEWORK

// 2 input box with add, subtract, multiply, divide buttons

// Calculator like windows (1, 2, 3 ... ) are buttons

// If you are doing the same thing again and again
// Some compute is very slow

// const arr = [11, -12, 34, 74, 95];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Effect => Synchronise UI with data
function Calculator() {
  // Save a value between re-renders (function run/calls)
  let [result, setResult] = useState("");

  let count = 0;
  count++;

  console.log("Function ran", count);

  // Use name atribute to get the name of target, and use a common function by giving each button a name
  // which corresponds to thier value (example: name="100" for <button>100</button>)
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const calculateResult = () => {
    // eslint-disable-next-line no-eval
    const finalRes = eval(result);
    console.log(finalRes);
  };

  // hello, last character remove
  // hello, first character remove
  // [11, -12, 34, 74, 95] => elements ka sum
  // [11, -12, 34, 74, 95] => even elements ka sum
  // [11, -12, 34, 74, 95] => if number odd, add the number, if number is even subtract the number
  // 11 - 12 -34 -74 + 95

  const backspace = () => {
    const backspacedResult = result;
    let localRes = "";
    for (let i = 0; i <= backspacedResult.length - 2; i++) {
      localRes += backspacedResult[i];
    }
    setResult(localRes);
  };

  // Solution 1: Attach one unique function to each button
  const click7 = () => {
    setResult(result.concat(7));
  };

  const click8 = () => {
    setResult(result.concat(8));
  };

  const click9 = () => {
    setResult(result.concat(9));
  };

  return (
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button className="highlight" onClick={clear} id="clear">
          Clear
        </button>
        <button className="highlight" onClick={backspace} id="backspace">
          {"<-"}
        </button>
        <button className="divide" name="/" onClick={handleClick}>
          &divide;
        </button>
        <button className="divide" name="+" onClick={handleClick}>
          +
        </button>
        <button className="divide" name="-" onClick={handleClick}>
          -
        </button>
        <button className="divide" name="*" onClick={handleClick}>
          *
        </button>
        <button className="divide" name="=" onClick={calculateResult}>
          =
        </button>
        <div>
          <button onClick={click7}>7</button>
          <button onClick={click8}>8</button>
          <button onClick={click9}>9</button>
        </div>
        <div>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
        </div>
        <div>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
        </div>
      </div>
    </div>
  );
}

const currentPokemom = {
  id: 133,
  name: "Eevee",
  type: "normal",
  base_experience: 65,
};

const root = ReactDOM.createRoot(document.getElementById("abhishek"));
// root.render(
//   <Pokemon
//     id={currentPokemom.id}
//     name={currentPokemom.name}
//     type={currentPokemom.type}
//     base_experience={currentPokemom.base_experience}
//   />
// );

const EffectDemo = () => {
  const res = fetch("https://jsonplaceholder.typicode.com/todos", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res));

  return <p>Loading..</p>;
};

const usefulData = "darkTheme"; // theme
root.render(<Form />);
