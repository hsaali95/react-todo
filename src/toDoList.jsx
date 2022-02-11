import react from "react";

const ToDoLists = (props) => {
  return (
    <>
      <div>
        <li>{props.text}</li>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          delete
        </button>
      </div>
    </>
  );
};
export default ToDoLists;
