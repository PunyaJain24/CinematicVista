// src/components/Notification.js
import React from "react";

const Notification = ({ isVisible, message, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 right-0 mx-[23%] w-[50%] bg-red-500 text-white p-4 flex justify-between items-center z-50">
            <span>{message}</span>
            <button onClick={onClose} className="bg-white text-red-500 px-4 py-2 rounded">
                OK
            </button>
        </div>
    );
};

export default Notification;
