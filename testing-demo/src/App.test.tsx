import { describe, it, expect } from "vitest";
import App from "./App";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";


describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
  })

  it("matches the snapshot App component", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  })

  it('should render the search bar', () => {
    render(<App />);
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });
    // Can use "waitFor" to wait for the DOM to update
    // Or 
    waitFor(() =>
      expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument()
    );
  });
});