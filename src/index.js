import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

const YoutubeTag = ({ text }) => {
  return <span className="youtube-tag">{text}</span>;
};

const AllYoutubeTags = ({ ytTags }) => {
  const finalData = [];

  for (let i = 0; i < ytTags.length; i++) {
    // i = 1
    // ytTags[1] = "Comedy"
    // <YoutubeTag text="Comedy" />

    const UI = <YoutubeTag text={ytTags[i]} />;
    finalData.push(UI);
  }

  return <div>{finalData}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("abhishek"));
root.render(<AllYoutubeTags ytTags={youtubeData} randomData="123" />);
