import React, { useState } from "react";

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <span className="flex justify-center ">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          onClick={openModal}
        >
          Terms and Conditions
        </button>
        {isOpen && (
          <span className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <span className="flex flex-col p-5 gap-5 bg-white rounded-lg w-2/6">
              This data is for educational purposes only. Do not use this data
              for trading purposes. We are not responsible for any losses
              incurred by you.
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                onClick={closeModal}
              >
                Close
              </button>
              {children}
            </span>
          </span>
        )}
      </span>
    </>
  );
};

export default Modal;
