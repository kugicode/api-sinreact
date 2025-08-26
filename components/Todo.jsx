function Todo({ task, togglePopup }) {
  {
    /* Destructuring */
  }

  function deleteHandler() {
    console.log("Delete", task[0]);
  }
  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <button onClick={() => togglePopup()}>delete</button>
    </div>
  );
}

export default Todo;
