import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

describe("carousel works", function() {
  it("matches snapshot", function () {
    const { container } = render(<Carousel />);
    expect(container).toMatchSnapshot();
  });

  it("renders without crashing", function () {
    render(<Carousel />);
  });

  it("works when you click on the right arrow", function () {
    const { queryByTestId, queryByAltText } = render(<Carousel />); // in notes we have { container, debug } = render(<component />); what is this here?

    // expect the first image to show, but not the second
    expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
    expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

    // move forward in the carousel
    const rightArrow = queryByTestId("right-arrow");

    fireEvent.click(rightArrow);

    // expect the second image to show, but not the first
    expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
    expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

    fireEvent.click(rightArrow);

    expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
    expect(queryByAltText("Photo by Josh Post on Unsplash")).toBeInTheDocument();
    expect(rightArrow).not.toBeInTheDocument();
  });



})
