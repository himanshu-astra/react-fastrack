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

const C = () => {
  // Step 3: Consuming the provided data
  const contextData = useContext(Theme);
  return <p>The theme is {contextData}</p>;
};
const B = () => {
  return (
    <div>
      <p>This is B Component</p>
      <C />
    </div>
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
  return (
    <>
      {/* Step 2: Creating a provide */}
      <Theme.Provider value={{ theme: props.usefulData, updateTheme }}>
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
