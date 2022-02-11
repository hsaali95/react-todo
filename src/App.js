import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ToDoLists from "./toDoList";

function App() {
  const [inputList, setInputList] = useState("apple");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
    // console.log(event.target.value);
  };

  const listOfItems = () => {
    // oldItems array ko access kar raha ha
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("aahhah");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>todo app</h1>
          <br />
          <input
            type="text"
            placeholder="Enter todo"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>add</button>

          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval, index) => {
              return (
                <ToDoLists
                  text={itemval}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
