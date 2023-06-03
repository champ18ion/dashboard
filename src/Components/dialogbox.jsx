import React, { useState } from "react";

const DialogBox = ({ order, onClose, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(order.quantity);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSave = () => {
    onQuantityChange(order.brand_name,quantity);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-1/3 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium mb-4">Edit Quantity</h2>
        <label className="block mb-2">
          Quantity:
          <input
            type="number"
            className="border border-gray-300 rounded-md w-full py-1 px-2"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </label>
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
