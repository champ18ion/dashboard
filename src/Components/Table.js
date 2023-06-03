import React, { useState } from "react";
import initialOrdersData from "../data.json";
import photo from "../assets/photo1.png";
import photo2 from "../assets/Photo.png";
import plus from "../assets/Plus.png";
import minus from "../assets/minus.png";
import Dropdown from "./Dropdown.jsx";
import DialogBox from "./dialogbox";

const OrderListComponent = () => {

  const [ordersData, setOrdersData] = useState(initialOrdersData); // Replace initialOrdersData with your initial order data
  const [statusFilter, setStatusFilter] = useState(""); // State to store the selected status filter
  const [sortOption, setSortOption] = useState(""); // State to store the selected sort option
  const [editDialogVisible, setEditDialogVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to handle status filter change
  const handleStatusFilterChange = (value) => {
    setStatusFilter(value);
  };

  // Function to handle sort option change
  const handleSortOptionChange = (value) => {
    setSortOption(value);
  };

  // Filter the orders based on the selected status
  const filteredOrders = statusFilter
    ? ordersData.orders.filter((order) => order.status === statusFilter)
    : ordersData.orders;

  // Sort the orders based on the selected sort option
  const sortedOrders = sortOption
    ? [...filteredOrders].sort((a, b) => {
        if (sortOption === "priceLowToHigh") {
          return a.price - b.price;
        } else if (sortOption === "priceHighToLow") {
          return b.price - a.price;
        } else if (sortOption === "oldestToNewest") {
          return new Date(a.placed_on) - new Date(b.placed_on);
        } else if (sortOption === "newestToOldest") {
          return new Date(b.placed_on) - new Date(a.placed_on);
        } else {
          return 0;
        }
      })
    : filteredOrders;

  const statusOptions = [
    { label: "All", value: "" },
    { label: "Pending", value: "Pending" },
    { label: "Shipped", value: "Shipped" },
    { label: "Delivered", value: "Delivered" },
  ];

  const priceSortOptions = [
    { label: "None", value: "" },
    { label: "Price: Low to High", value: "priceLowToHigh" },
    { label: "Price: High to Low", value: "priceHighToLow" },
  ];

  const dateSortOptions = [
    { label: "None", value: "" },
    { label: "Oldest to Newest", value: "oldestToNewest" },
    { label: "Newest to Oldest", value: "newestToOldest" },
  ];

  const openEditDialog = (order) => {
    setSelectedOrder(order);
    setEditDialogVisible(true);
  };

  const closeEditDialog = () => {
    setEditDialogVisible(false);
    setSelectedOrder(null);
  };

  const handleQuantityChange = (orderName, newQuantity) => {
  const updatedOrdersData = {
    ...ordersData,
    orders: ordersData.orders.map((order) => {
      if (order.brand_name === orderName) {
        return { ...order, quantity: newQuantity };
      }
      return order;
    }),
  };

  setOrdersData(updatedOrdersData);
};


  return (
    <div class="overflow-hidden rounded-xl border border-gray-200 shadow-md m-5 w-11/12">
      <table className='mt-0 w-full flex justify-between'>
          <thead class="bg-white border-b border-gray-100 w-full ">
          <tr className="flex flex-row justify-between">
            <th scope="col" class="px-6 py-2 font-small text-gray-900">
              <span className="text-bold text-lg/8"> Confirmed </span>{" "}
              <span className="text-gray-500">238</span>
            </th>
            <th>
              <img src={plus} className="p-2"></img>
            </th>
          </tr>
        </thead>
        </table>
      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-white">
          <tr>
            <th scope="col" class="px-6 py-2 font-medium text-gray-900">
              <form>
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:outline-none"
                    placeholder="Search "
                    required
                  ></input>
                </div>
              </form>
            </th>
            <th scope="col" class="px-6 py-3 font-medium text-gray-900">
              <Dropdown
                name="ACTIVE ORDERS"
                options={statusOptions}
                onSelect={handleStatusFilterChange}
              />
            </th>
            <th scope="col" class="px-6 py-2 font-medium text-gray-900">
              <Dropdown
                name="PRICING"
                options={priceSortOptions}
                onSelect={handleSortOptionChange}
              />
            </th>
            <th scope="col" class="px-6 py-2 font-medium text-gray-900">
              <Dropdown
                name="PLACED ON"
                options={dateSortOptions}
                onSelect={handleSortOptionChange}
              />
            </th>
            <th scope="col" class="px-6 py-2 font-medium text-gray-900">
              options
            </th>
          </tr>
        </thead>
        <tbody class=" divide-gray-100 border-t border-gray-100">
          {sortedOrders.map((order, index) => (
            <tr class="hover:bg-gray-50" key={index}>
              <th class="flex gap-8 px-6 py-1 font-normal text-gray-900 ">
                <div class="relative h-8 w-16  flex flex-row gap-2">
                  <input type="radio"></input>
                  <img
                    class="h-10 w-full rounded-sm object-cover object-center"
                    src={order.quantity > 2 ? photo: photo2}
                    alt="thumbnail"
                  />``
                </div>
                <div class="text-sm ">
                  <div class="font-medium text-gray-700">
                    {order.brand_name}
                  </div>
                  <div class="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td class="px-6 py-4">
                <span class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold">
                  {order.quantity}
                </span>
              </td>
              <td class="px-6 py-4 text-xs font-semibold">{order.price}</td>
              <td class="px-6 py-4">
                <div class="flex gap-2">
                  <span class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold">
                    {order.placed_on}
                  </span>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex justify-start gap-4">
                  <a x-data="{ tooltip: 'Edit' }" onClick={() => openEditDialog(order)} href="#">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994ZM5 9.99994C3.89543 9.99994 3 10.8954 3 11.9999C3 13.1045 3.89543 13.9999 5 13.9999C6.10457 13.9999 7 13.1045 7 11.9999C7 10.8954 6.10457 9.99994 5 9.99994ZM19 9.99994C17.8954 9.99994 17 10.8954 17 11.9999C17 13.1045 17.8954 13.9999 19 13.9999C20.1046 13.9999 21 13.1045 21 11.9999C21 10.8954 20.1046 9.99994 19 9.99994Z"
                        fill="#828282"
                      />
                    </svg>
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editDialogVisible && (
        <DialogBox
          order={selectedOrder}
          onClose={closeEditDialog}
          onQuantityChange={handleQuantityChange}
        />
      )}
          <table className='mt-8 w-full flex justify-between'>
          <thead class="bg-white border-b border-gray-100 w-full ">
          <tr className="flex flex-row justify-between">
            <th scope="col" class="px-6 py-2 font-small text-gray-900">
              <span className="text-bold text-lg/8"> Confirmed </span>{" "}
              <span className="text-gray-500">238</span>
            </th>
            <th>
              <img src={minus} className="p-2"></img>
            </th>
          </tr>
        </thead>
        </table>
    </div>
  );
};

export default OrderListComponent;
