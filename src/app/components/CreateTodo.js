'use client';

import { useState } from "react";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";

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

async function handleSubmit() {
    const docRef = await addDoc(collection(db, "todos"), todo) 
}

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
         <button onClick={handleSubmit} >Add Todo</button>
      </form>
      <p>{JSON.stringify(todo)}</p>
    </>
  );
}
