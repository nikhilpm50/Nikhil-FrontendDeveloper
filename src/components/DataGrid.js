import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../redux/actions/CardsActions";
import SearchFilter from "./SearchFilter";
import dragon1 from "../assets/dragon1.0.webp";
import dragon from "../assets/dragon1.1.jpg";
import dragon2 from "../assets/dragon-2.webp";
import CardPopup from "./CardPopup";

const DataGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsPerPage = 10;

  const dispatch = useDispatch();
  const cardsData = useSelector((state) => state.cards.cardsData);
  const selectedStatus = useSelector((state) => state.cards.selectedStatus);
  const selectedType = useSelector((state) => state.cards.selectedType);
  const selectedLaunchDate = useSelector(
    (state) => state.cards.selectedLaunchDate
  );

  console.log("DataGrid - selectedStatus:", selectedStatus);
  console.log("DataGrid - selectedType:", selectedType);

  useEffect(() => {
    dispatch(fetchCards(selectedStatus, selectedType, selectedLaunchDate));
  }, [dispatch, selectedStatus, selectedType, selectedLaunchDate]);

  // Function to handle pagination when clicking on page numbers
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Filter the cards based on selectedStatus and selectedType
  const filteredCards =
    selectedStatus === "All Status" &&
    selectedType === "All Types" &&
    selectedLaunchDate === "All Launch Dates"
      ? cardsData
      : cardsData.filter((card) => {
          const launchYear = card.original_launch
            ? card.original_launch.slice(0, 4)
            : null;
          return (
            (selectedStatus === "All Status" ||
              card.status === selectedStatus) &&
            (selectedType === "All Types" || card.type === selectedType) &&
            (selectedLaunchDate === "All Launch Dates" ||
              launchYear === selectedLaunchDate)
          );
        });

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
    setShowPopup(false);
  };

  // Get the current cards to display based on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="p-8">
      <SearchFilter />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {currentCards.map((card) => (
          <div
            key={card.id}
            className="bg-white p-4 cursor-pointer shadow-md rounded-lg transform hover:scale-105 duration-200 flex"
            onClick={() => handleCardClick(card)}
          >
            {/* Text Section */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold">
                Serial Number: {card.capsule_serial}
              </h3>
              <p>Capsule ID: {card.capsule_id}</p>
              <p>Status: {card.status}</p>
              <p>Type: {card.type}</p>
              <p>Details: {card.details}</p>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center">
              {card.type === "Dragon 1.0" ? (
                // Condition 1: Dragon 1.0
                <img src={dragon1} alt="Dragon 1.0" className="w-24 h-24" />
              ) : card.type === "Dragon 2.0" ? (
                // Condition 2: Dragon 2.0
                <img src={dragon2} alt="Dragon 2.0" className="w-24 h-24" />
              ) : (
                // Default: Other types
                <img src={dragon} alt="Default" className="w-24 h-24" />
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredCards.length > cardsPerPage && (
        <div className="mt-4 flex items-center justify-center">
          {/* Pagination */}
          {Array.from({
            length: Math.ceil(filteredCards.length / cardsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg focus:outline-none ${
                index + 1 === currentPage
                  ? "text-white bg-blue-500"
                  : "text-gray-700 bg-transparent"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

{showPopup && selectedCard && (
        <CardPopup card={selectedCard} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default DataGrid;
