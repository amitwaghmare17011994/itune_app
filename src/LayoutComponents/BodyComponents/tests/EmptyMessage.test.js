import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmptyMessage from "../EmptyMessage";

test("renders a message", () => {
  const {  getByText } = render(
    <EmptyMessage msg="Songs Not Found For Searched Term" />
  );
  expect(getByText("Songs Not Found For Searched Term")).toBeInTheDocument();
});
