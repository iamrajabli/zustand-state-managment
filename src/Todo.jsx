import React from "react";
import { useTodos } from "./store";

import SF from "./SF";
import Button from "./Button";

const Todo = () => {
  const [title, setTitle] = React.useState("");

  const { todos, addTodo, toggleTodo } = useTodos(
    (state) => ({
      todos: state.todos,
      addTodo: state.addTodo,
      toggleTodo: state.toggleTodo,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(title);

    setTitle("");
  };


  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex mt-4">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
              />
              <button className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-yellow-500 hover:bg-teal">
                Add
              </button>
            </div>
          </form>
        </div>
        <div>
          {React.Children.toArray(
            todos.map((todo) => (
              <div className="flex mb-4 items-center gap-2">
                <p
                  className={`w-full text-grey-darkest ${
                    todo.completed ? "line-through" : ""
                  }`}
                >
                  {todo.title}
                </p>
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-yellow-500 hover:bg-teal"
                >
                  {todo.completed ? "Ready" : "Done"}
                </button>
                <button className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-yellow-500 hover:bg-teal">
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <SF />
      <Button>
        Get Todos
      </Button>
    </div>
  );
};

export default Todo;
