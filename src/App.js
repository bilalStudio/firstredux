import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import {
  addList,
  removeItem,
  removedoneItem,
  addListdone,
} from "./action/index";
import { useState } from "react";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  console.log("Counter from reducer", counter);
  const [todo, setTodo] = useState("");
  const handleChanges = (e) => {
    if (e.target.value === "") {
      alert("plz enter value");
    } else {
      setTodo(e.target.value);
    }
  };
  const dispatch = useDispatch();
  const donebtn = (e) => {
    dispatch(addListdone(e));
    dispatch(removeItem(e))
  };
  const deletebtndone = (e) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(removedoneItem(e));
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  const deletebtn = (e) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(removeItem(e));
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => handleChanges(e)} />
      <button onClick={() => dispatch(addList(todo))}>Add</button>
      <h3>Todo List</h3>
      {counter.todoList?.map((todo) => (
        <ul>
          <li>
            {todo}{" "}
            <button
              style={{
                backgroundColor: "red",
                padding: "6px",
                color: "white",
                marginRight: "4px",
              }}
              onClick={() => {
                deletebtn(todo);
              }}
            >
              delete
            </button>
            <button
              style={{
                backgroundColor: "green",
                padding: "6px",
                color: "white",
                marginRight: "4px",
              }}
              onClick={() => {
                donebtn(todo);
              }}
            >
              Done
            </button>
          </li>
        </ul>
      ))}
      Done List
      <br />
      {counter.doneList?.map((todo) => (
        <ul>
          <li>
            {todo}{" "}
            <button
              style={{
                backgroundColor: "red",
                padding: "6px",
                color: "white",
                marginRight: "4px",
              }}
              onClick={() => {
                deletebtndone(todo);
              }}
            >
              delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
