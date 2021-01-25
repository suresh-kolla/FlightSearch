import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import { findByTestAttr, checkProps } from "./testUtils";
import Header from "./../Components/Header";

const setup = (props = {}) => {
  return shallow(<Header {...props} />);
};

test("renders with no error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-header");
  expect(component.length).toBe(1);
});

test("renders Header with out empty", () => {
  const wrapper = setup({ title: "Flight Search" });
  const header = findByTestAttr(wrapper, "header-word");
  expect(header.text().length).not.toBe(0);
});
