import TodoList from "./Todolist";
import PendingList from "./Pendinglist";

function App() {
  return (
    <div className="p-6 min-h-screen bg-gray-100 text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        📝 My Todo List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TodoList />
        <PendingList />
      </div>
    </div>
  );
}

export {App};
