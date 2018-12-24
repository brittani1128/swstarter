import React from "react";
import { shallow } from "enzyme";
import Search from "./Search";

describe("Search component", () => {
  it("should render", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });

  //   it("should render form without throwing an error", () => {
  //     expect(
  //       shallow(<Search />)
  //         .find(".search-form")
  //         .exists()
  //     ).toBe(true);
  //   });

  it("should render radio buttons", () => {
    expect(shallow(<Search />).find("input.radio").length).toEqual(4);
  });

  it("should render search input box", () => {
    expect(shallow(<Search />).find("#input").length).toEqual(1);
  });
});
