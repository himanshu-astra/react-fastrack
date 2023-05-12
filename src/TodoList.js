import { useEffect, useState } from "react";
import "./TodoList.css";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const jsonRes = await res.json();
  console.log(jsonRes);
  return jsonRes;
}

const Todo = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.completed);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid black",
        paddng: 4,
      }}
      className="hover"
      onClick={() => setIsCompleted(!isCompleted)}
    >
      {isCompleted ? (
        <strike>
          <h6 style={{ margin: 2 }}>{props.title}</h6>
        </strike>
      ) : (
        <h6 style={{ margin: 2 }}>{props.title}</h6>
      )}
      <h6 style={{ margin: 2 }}>{isCompleted ? "✔" : "✖"}</h6>
    </div>
  );
};

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Used to access server data (Network call inside effect)
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const jsonRes = await res.json();
        setTodos(jsonRes);
      } catch (err) {
        console.error("Cannot fetch data: ", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // fetchData()

  return (
    <div>
      <p>{loading ? "Loding..." : "Loaded data from server"}</p>
      <Todo title={"React is not a nice library"} completed={false} />
    </div>
  );
}

export default TodoList;

// List all todos
// Create a dropdown with following states. All, completed, incomplete.
// Update the todos on server, based on User state: https://jsonplaceholder.typicode.com/guide/
//      Tick  => network request to mark todo as completed should be run.
//      Cross => network requet to mark todo as incomplete should be run.
