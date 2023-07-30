import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DataGrid from "../components/DataGrid";

const mockStore = configureStore([]);

test("renders DataGrid component with default values", () => {
  const store = mockStore({
    cards: {
      selectedStatus: "All Status",
      selectedType: "All Types",
      selectedLaunchDate: "All Launch Dates",
      cardsData: [
        {
          id: 1,
          capsule_serial: "C102",
          capsule_id: "dragon1",
          status: "retired",
          type: "Dragon 1.0",
          details: "Test details 1",
          original_launch: "2012-05-02T07:44:00.000Z",
        },
        {
          id: 2,
          capsule_serial: "C103",
          capsule_id: "dragon2",
          status: "active",
          type: "Dragon 2.0",
          details: "Test details 2",
          original_launch: "2015-07-18T09:21:00.000Z",
        },

      ],
    },
  });

  render(
    <Provider store={store}>
      <DataGrid />
    </Provider>
  );

  expect(screen.getByLabelText("Status")).toHaveValue("All Status");
  expect(screen.getByLabelText("Type")).toHaveValue("All Types");
  expect(screen.getByLabelText("Launch Date")).toHaveValue("All Launch Dates");


});
