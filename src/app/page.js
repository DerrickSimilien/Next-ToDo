import TodoList from "@/app/components/TodoList";
import CreateTodo from "@/app/components/CreateTodo";


export default function Home() {
  return (
    <>
    <div className="container">
    <TodoList />
    <CreateTodo />
    </div>
    </>
  )
}
