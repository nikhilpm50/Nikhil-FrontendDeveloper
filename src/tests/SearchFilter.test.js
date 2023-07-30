import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SearchFilter from "../components/SearchFilter";
import axios from "axios";

import {
  setSelectedStatus,
  setSelectedType,
  setSelectedLaunchDate,
} from "../redux/actions/CardsActions";

const mockStore = configureStore([]);

test("renders SearchFilter component with default values", () => {
  const store = mockStore({
    cards: {
      selectedStatus: "All Status",
      selectedType: "All Types",
      selectedLaunchDate: "All Launch Dates",
    },
  });

  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <SearchFilter />
    </Provider>
  );

  const statusFilter = getByLabelText("Status");
  const typeFilter = getByLabelText("Type");
  const launchDateFilter = getByLabelText("Launch Date");

  expect(statusFilter).toHaveValue("All Status");
  expect(typeFilter).toHaveValue("All Types");
  expect(launchDateFilter).toHaveValue("All Launch Dates");
});

test("dispatches action when changing Status filter", () => {
  const store = mockStore({
    cards: {
      selectedStatus: "All Status",
    },
  });

  const { getByLabelText } = render(
    <Provider store={store}>
      <SearchFilter />
    </Provider>
  );

  const statusFilter = getByLabelText("Status");
  fireEvent.change(statusFilter, { target: { value: "active" } });

  expect(store.getActions()).toEqual([setSelectedStatus("active")]);
});

test("dispatches action when changing Type filter", () => {
  const store = mockStore({
    cards: {
      selectedType: "All Types",
    },
  });

  const { getByLabelText } = render(
    <Provider store={store}>
      <SearchFilter />
    </Provider>
  );

  const typeFilter = getByLabelText("Type");
  fireEvent.change(typeFilter, { target: { value: "Dragon 1.0" } });

  expect(store.getActions()).toEqual([setSelectedType("Dragon 1.0")]);
});

test("dispatches action when changing Launch Date filter", () => {
  const store = mockStore({
    cards: {
      selectedLaunchDate: "All Launch Dates",
    },
  });

  const { getByLabelText } = render(
    <Provider store={store}>
      <SearchFilter />
    </Provider>
  );

  const launchDateFilter = getByLabelText("Launch Date");
  fireEvent.change(launchDateFilter, { target: { value: "2012" } });

  expect(store.getActions()).toEqual([setSelectedLaunchDate("2012")]);
});
