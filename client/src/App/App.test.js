import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import App from "./App";

describe("App component", () => {
  it("should render", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleSelect", () => {
    it("should set the state of searchQuery to event.target.value", () => {
      const eventMock = { target: { value: "test" } };
      const instance = shallow(<App />).instance();
      instance.setState = sinon.spy();
      instance.handleSelect(eventMock);
      expect(instance.setState.calledWith({ searchQuery: "test" })).toEqual(
        true
      );
    });
  });

  describe("handleDetails", () => {
    it("should set the state of resultIndex to dataset index", () => {
      const eventMock = { target: { dataset: { index: 1 } } };
      const instance = shallow(<App />).instance();
      instance.setState = sinon.spy();
      instance.handleDetails(eventMock);
      expect(instance.setState.calledWith({ resultIndex: 1 })).toEqual(true);
    });
  });

  describe("handleInputChange", () => {
    it("should set the state of resultSearchQuery to event.target.value", () => {
      const eventMock = { target: { value: "yoda" } };
      const instance = shallow(<App />).instance();
      instance.setState = sinon.spy();
      instance.handleInputChange(eventMock);
      expect(
        instance.setState.calledWith({ resultSearchQuery: "yoda" })
      ).toEqual(true);
    });
  });

  describe("handleSubmit", () => {
    const eventMock = {
      preventDefault: () => {}
    };
    it("should call selectQuery", () => {
      const instance = shallow(<App />).instance();
      const spy = sinon.spy(instance, "selectQuery");
      instance.handleSubmit(eventMock);
      expect(spy.called).toEqual(true);
    });
  });
});
