function PendingList() {
  const pending = [
    "go to market",
    "completed task given as homework",
    "doing other work",
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-red-600">⏳ Pending Todos</h2>
      <ul className="list-disc list-inside space-y-2">
        {pending.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PendingList;
