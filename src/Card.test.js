import React from "react";
import { render, fireEvent } from "@testing-library/react";
import image1 from "./image1.jpg";
import Card from "./Card";

describe("card works", function() {
  it("matches snapshot", function () {
    const { container } = render(<Card src={image1} caption="Photo by Richard Pasquarella on Unsplash" currNum={1} currTotal={3}/>);
    expect(container).toMatchSnapshot();
  });

  it("renders without crashing", function () {
    render(<Card src={image1} caption="Photo by Richard Pasquarella on Unsplash" currNum={1} currTotal={3}/>);
  });

  it("has the correct alt text & src", function () {
    const { container, debug } = render(<Card src={image1} caption="Photo by Richard Pasquarella on Unsplash" currNum={1} currTotal={3} />);
    const img = container.querySelector("img");
    debug(img);

    expect(img.getAttribute("caption")).toContain("Photo by Richard Pasquarella on Unsplash");
    expect(img.getAttribute("src")).toContain(image1);
  });
})
