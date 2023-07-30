import axios from "axios";

export const fetchCards = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://api.spacexdata.com/v3/capsules"
      );
      dispatch({ type: "FETCH_CARDS_SUCCESS", payload: response.data });
    } catch (error) {
      console.error("Error fetching cards data:", error);
    }
  };
};

export const setSelectedStatus = (status) => {
  return {
    type: "SET_SELECTED_STATUS",
    payload: status,
  };
};

export const setSelectedType = (type) => {
  return {
    type: "SET_SELECTED_TYPE",
    payload: type,
  };
};

export const setSelectedLaunchDate = (launchDate) => {
  return {
    type: "SET_SELECTED_LAUNCH_DATE",
    payload: launchDate,
  };
};
