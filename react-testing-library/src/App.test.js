import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders component correctly", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    const imageElements = screen.getAllByRole("img");
    const headerElements = screen.getAllByRole("banner");

    expect(linkElement).toBeInTheDocument();
    expect(imageElements).toHaveLength(1);
    expect(imageElements[0]).toHaveAttribute("src", "logo.svg");
    expect(headerElements).toHaveLength(1);
    expect(headerElements[0]).toHaveTextContent(
      "Edit src/App.js and save to reload."
    );
    expect(screen).toMatchSnapshot();
  });
});
