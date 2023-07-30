import React from "react";
import dragon1 from "../assets/dragon1.0.webp";
import dragon from "../assets/dragon1.1.jpg";
import dragon2 from "../assets/dragon-2.webp";

const CardPopup = ({ card, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10 rounded-lg max-w-lg">
        {card.type === "Dragon 1.0" ? (
          // Condition 1: Dragon 1.0
          <img
            src={dragon1}
            alt="Dragon 1.0"
            className="w-64 h-64 mx-auto mb-4"
          />
        ) : card.type === "Dragon 2.0" ? (
          // Condition 2: Dragon 2.0
          <img
            src={dragon2}
            alt="Dragon 2.0"
            className="w-64 h-64 mx-auto mb-4"
          />
        ) : (
          // Default: Other types
          <img src={dragon} alt="Default" className="w-64 h-64 mx-auto mb-4" />
        )}

        <h3 className="text-xl font-semibold mb-2">Serial Number: {card.capsule_serial}</h3>
              <p>Capsule ID: {card.capsule_id}</p>
              <p>Status: {card.status}</p>
              <p>Type: {card.type}</p>
              <p>Details: {card.details}</p>
              <p>Landings: {card.landings}</p>
              <p>Reuse Count: {card.reuse_count}</p>
              <p>Mission Name: {card.missions[0].name}</p>

        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CardPopup;
