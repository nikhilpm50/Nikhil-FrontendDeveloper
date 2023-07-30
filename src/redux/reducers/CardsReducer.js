const initialState = {
  cardsData: [],
  selectedStatus: "All Status",
  selectedType: "All Types",
  selectedLaunchDate: "All Launch Dates",
};
const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARDS_SUCCESS":
      return {
        ...state,
        cardsData: action.payload,
      };
    case "SET_SELECTED_STATUS":
      return {
        ...state,
        selectedStatus: action.payload,
      };
    case "SET_SELECTED_TYPE":
      return {
        ...state,
        selectedType: action.payload,
      };
    case "SET_SELECTED_LAUNCH_DATE":
      return {
        ...state,
        selectedLaunchDate: action.payload,
      };

    default:
      return state;
  }
};

export default cardsReducer;
