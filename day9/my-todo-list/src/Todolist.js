function TodoList() {
  const todos = [
    "go to college",
    "completed given task",
    "come to home",
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-green-600">✅ Completed Todos</h2>
      <ul className="list-disc list-inside space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="text-gray-700">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
