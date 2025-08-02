function MyContact() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Contact Me</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Enter your name:</label>
          <input type="text" placeholder="Enter name" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Enter your email:</label>
          <input type="email" placeholder="Enter email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Enter any query:</label>
          <input type="text" placeholder="Enter query" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}

export { MyContact };
