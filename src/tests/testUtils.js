import configureStore from "redux-mock-store";

export const createMockStore = (state) => {
  const mockStore = configureStore([]);
  return mockStore(state);
};
