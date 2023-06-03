import React from "react";
import Sidebar from "./Components/Sidebar";
import Table from "./Components/Table";

export default function App() {
  return (
    <div class="flex min-h-screen flex-row bg-gray-100 text-gray-800">
      <Sidebar />
      <main class="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
        <div className="flex flex-row justify-between align-middle">
          <span class="text-xl font-bold mt-2 ml-4">Orders</span>
          <button class="bg-blue-600 w-32 h-10 flex text-white justify-around align-middle text-sm/6 py-2 px-2 rounded-xl ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add Order
          </button>
        </div>
        <hr class="mt-2 mb-2 mx-0" />
        <div class="flex items-center justify-center text-center text-lg font-bold ">
          <Table />
        </div>
      </main>
    </div>
  );
}
