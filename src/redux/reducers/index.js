import { combineReducers } from "redux";
import cardsReducer from "./CardsReducer";

const rootReducer = combineReducers({
  cards: cardsReducer,
});

export default rootReducer;
