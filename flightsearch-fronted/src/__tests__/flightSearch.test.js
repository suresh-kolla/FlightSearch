import React from "react";
import { shallow } from "enzyme";
import FlightSearch from "../Components/FlightSearch";
import { findByTestAttr, checkProps } from "./testUtils";

const defaultProps = {
  SourceCity: "",
  DestinationCity: "",
  TravelDate: "",
  ReturnDate: "",
};

const setup = (props = {}) => {
  console.log(props);
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FlightSearch {...setupProps} />);
};

// describe("jotto", () => {
test("renders with no error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-search");
  expect(component.length).toBe(1);
});
test("renders with state is empty", () => {
  const expectedProps = {
    SourceCity: "",
    DestinationCity: "",
    TravelDate: "",
    ReturnDate: "",
  };
  checkProps(FlightSearch, expectedProps);
});
