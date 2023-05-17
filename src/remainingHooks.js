import { createContext, useContext, useState } from "react";

// useState: React tracks some data for us. It provides a mechanism to update the data.
// useEffect: When some data changes, we need to run a function. Sync data with server/localStore.
// useContext:
// useRef:

// Provider(Distributor): Will provide/distribute value to every component that asks for data.
// Consumer: Will ask the data from provider.

// Prop Drilling

// Step 1.
const Theme = createContext(null);

const C = (props) => {
  // Step 3: Consuming the provided data
  const contextData = useContext(Theme);

  return (
    <div>
      <p>The theme is {contextData.theme}</p>
      <p>The count is {props.count}</p>
      <button onClick={contextData.setTheme}>Update Theme</button>
      <button onClick={() => props.setCount(props.count + 1)}>
        Update Count
      </button>
    </div>
  );
};
const B = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex" }}>
        <p>This is B Component: {count}</p>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <C count={count} setCount={setCount} />
    </>
  );
};

const A = () => {
  return (
    <div>
      <p>This is A component</p>
      <B />
    </div>
  );
};

// Setting up provider
const Main = () => {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      {/* Step 2: Creating a provide */}
      <Theme.Provider value={{ theme: theme, setTheme: handleThemeChange }}>
        <A />
      </Theme.Provider>
    </>
  );
};

export default Main;

// HW
// Revise
// Complete your todo
// E-Commerce:
// Display a cart
//     Add to cart https://fakestoreapi.com/
//     Remove from cart

// Main             (theme, setTheme)
//  A                     |
//    B                   |
//      C                 cosume => (theme, setTheme)

// Pass data from Parent component to child component
// Solution 1: use props, pass data with help of props. (Always use this)
// Solution 2: Use context. (Use this only when, props drilling occurs)

// Pass data from child to parent
// Lift state up from child component to parent component.
// In our case, we passed count, setCount from B component(Parent) to Child component C.
// This works because, who-ever has setter function can update state.
