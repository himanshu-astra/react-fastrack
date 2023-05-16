import { createContext, useContext } from "react";

// useState: React tracks some data for us. It provides a mechanism to update the data.
// useEffect: When some data changes, we need to run a function. Sync data with server/localStore.
// useContext:
// useRef:

// Provider(Distributor): Will provide/distribute value to every component that asks for data.
// Consumer: Will ask the data from provider.

// Prop Drilling
const Theme = createContext(null);

const C = () => {
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
const Main = (props) => {
  return (
    <>
      <Theme.Provider value={props.usefulData}>
        <A />
      </Theme.Provider>
    </>
  );
};

export default Main;
