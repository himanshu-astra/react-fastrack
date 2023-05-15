import { useEffect, useState } from "react";
import "./TodoList.css";

const Todo = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.completed);

  console.log(props);

  async function updateTodoStatus() {
    const paylad = {
      id: props.id,
      completed: !isCompleted,
    };

    console.log("Before isCompleted: ", isCompleted); // false
    setIsCompleted(!isCompleted);
    // SetState does immediately update state,
    // It waits for multiple updates and batches them together to finally update the state
    console.log("After isCompleted: ", isCompleted); // false
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${props.id}`,
        {
          method: "PUT",
          body: JSON.stringify(paylad),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
    } catch (err) {
      console.error("Cannot update todo: ", err);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid black",
        paddng: 4,
      }}
      className="hover"
      onClick={updateTodoStatus}
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

  const fetchedData = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  return (
    <div>
      <p>{loading ? "Loding..." : "Loaded data from server"}</p>
      <Todo {...fetchedData} />
    </div>
  );
}

export default TodoList;

// Homework
// List all todos
// Create a dropdown with following states. All, completed, incomplete.
// Update the todos on server, based on User state: https://jsonplaceholder.typicode.com/guide/
//      Tick  => network request to mark todo as completed should be run.
//      Cross => network requet to mark todo as incomplete should be run.
