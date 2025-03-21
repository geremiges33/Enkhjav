import { useState } from "react";

export default function Home() {
  const [grid, setGrid] = useState(true);
  const data = [
    {
      id: 1,
      title: "Test 1",
      description:
        "Lorem ipsum dolor sit  amet, consectetur adipiscingelit.",
    },
    {
      id: 1,
      title: "Test 1",
      description:
        "Lorem ipsum dolor sit  amet, consectetur adipiscingelit.",
    },
    {
      id: 1,
      title: "Test 1",
      description:
        "Lorem ipsum dolor sit  amet, consectetur adipiscingelit.",
    },
    {
      id: 1,
      title: "Test 1",
      description:
        "Lorem ipsum dolor sit  amet, consectetur adipiscingelit.",
    },
  ];
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify between mb-6">
        <h1 className="text-3xl font-bold">Niitleluud</h1>
        <button
          onClick={() => setGrid(!grid)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ">
            {grid ? "jagsaalt" : "Grid view"}
        </button>
        </div>
          <div
          className={grid == true ? "grid grid-cols-1 sm:grid-cols-2 gap-6" : "space-y-4"}>
          {data.map((items) => (
            <div key={items.id} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-4">
              <h2 className="text-xl font-semibold mb-2">{items.title}</h2>
              <p className="text-gray-600">{items.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
}