import create from "zustand";
import { v4 as uuid } from "uuid";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

export const useTodos = create(
  devtools(
    persist(
      (set, get) => ({
        todos: [],
        loading: false,
        error: false,

        addTodo: async (title) => {
          set({
            todos: [
              ...get().todos,
              { id: uuid(), title: title, completed: false },
            ],
          });
        },
        toggleTodo: (id) => {
          set({
            todos: [
              ...get().todos.map((todo) => {
                if (todo.id === id) {
                  todo.completed = !todo.completed;
                }

                return todo;
              }),
            ],
          });
        },
        getT0d0s: async () => {
          const res = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=10"
          );
          set({
            todos: await res.json(),
          });
        },
      }),
      {
        name: "todos",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
