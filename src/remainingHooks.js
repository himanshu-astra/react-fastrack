// useState: React tracks some data for us. It provides a mechanism to update the data.
// useEffect: When some data changes, we need to run a function. Sync data with server/localStore.
// useContext:
// useRef:

const C = (props) => {
  return <p>The theme is {props.usefulData}</p>;
};
const B = (props) => {
  return (
    <div>
      <p>This is B Component</p>
      <C usefulData={props.theme} />
    </div>
  );
};

const A = (props) => {
  return (
    <div>
      <p>This is A component</p>
      <B theme={props.usefulData} />
    </div>
  );
};

const Main = (props) => {
  return <A usefulData={props.usefulData} />;
};

export default Main;
