import React from "react";
import ReactDOM from "react-dom/client";

const youtubeTags = ["All", "Dubbing", "Comedy", "Music", "One More"];

const Tags = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
      }}
    >
      <p style={{ color: "white" }}>{text}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("abhishek"));
root.render(
  <div
    style={{
      flex: 1,
      justifyContent: "space-between",
      flexDirection: "row",
      display: "flex",
    }}
  >
    {youtubeTags.map((tag) => (
      <Tags text={tag} />
    ))}
  </div>
);
