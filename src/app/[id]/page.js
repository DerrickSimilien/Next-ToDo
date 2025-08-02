// src/app/[id]/page.js
import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function TodoPage({ params }) {
  const { id } = params;

  const docRef = doc(db, "todos", id);
  const docSnap = await getDoc(docRef);
  const todo = docSnap.exists() ? docSnap.data() : null;

  return (
    <div className="container">
      <h1>Todo title: {todo?.title || "Not found"}</h1>
      <h3>Detail: {todo?.detail || "N/A"}</h3>
    </div>
  );
}
