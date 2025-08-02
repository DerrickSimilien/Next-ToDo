'use client';

import { useState } from "react";

export default function CreateTodo() {
  const [todo, setTodo] = useState({
    title: "",
    detail: "",
  });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTodo((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

  return (
    <>
      <form>
        <label>Title:</label>
        <br />
        <input
          type="text"
          value={todo.title}
          onChange={(e) => setTodo({...todo, title: e.target.value})}
        ></input>
        <br />
        <label>Detail:</label>
        <br />
        <textarea
          onChange={(e) => setTodo({...todo, detail: e.target.value})}
          value={todo.detail}
        ></textarea>
      </form>
      <button>Add Todo</button>
      <p>{JSON.stringify(todo)}</p>
    </>
  );
}
