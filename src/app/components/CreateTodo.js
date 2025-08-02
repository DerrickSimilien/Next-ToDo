'use client';

import { useState } from "react";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function CreateTodo() {
  const [todo, setTodo] = useState({
    title: "",
    detail: "",
  });

  async function handleSubmit(e) {
    e.preventDefault(); // ✅ Prevent page reload

    if (!todo.title.trim()) {
      alert("Title is required!");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "todos"), todo);
      console.log("Document written with ID:", docRef.id);
      setTodo({ title: "", detail: "" }); // Clear form
    } catch (error) {
      console.error("Error adding document:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <br />
        <input
          type="text"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <br />
        <label>Detail:</label>
        <br />
        <textarea
          onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
          value={todo.detail}
        ></textarea>
        <button type="submit">Add Todo</button>
      </form>
      <p>{JSON.stringify(todo)}</p>
    </>
  );
}
