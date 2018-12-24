import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import App from "./App";

// test instance methods
// shallow.instance
// look up way to mock out context
//

describe("App component", () => {
  it("should render", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleSelect", () => {
    const mockFunction = jest.fn();
    it("should set the state of searchQuery to event value", () => {});
    // test state change
    const instance = shallow(<App handleSubmit={mockFunction} />).instance();
    instance.setState = sinon.spy();
    instance.handleSelect();
    expect(instance.setState.calledWith({}));
  });

  describe("handleSubmit", () => {
    // test selectquery function called
    const mockFunction = jest.fn();
    it("should call selectQuery when clicked", () => {
      const spy = sinon.spy();
    });
  });

  //   describe("search input", () => {
  //     it("should respond to change event and change state of searchQuery", () => {
  //       const wrapper = shallow(<App />);
  //       wrapper
  //         .find("#input")
  //         .simulate("change", { target: { name: "input", value: "yoda" } });
  //       expect(wrapper.state("resultSearchQuery")).toEqual("yoda");
  //     });
  //   });
});
