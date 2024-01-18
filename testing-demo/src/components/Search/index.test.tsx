import Search from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("Search", () => {
  it("calls the onChange callback handler", async () => {
    // IN Jest
    // const onChange = jest.fn();
    // Vitest
    const onChange = vi.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );
    
    // Called one time
    // fireEvent.change(screen.getByRole("textbox"), {
    //   target: { value: "JavaScript" },
    // });

    // expect(onChange).toHaveBeenCalledTimes(1);

    // VS the userEvent which is more like a real user
    await userEvent.type(screen.getByRole("textbox"), "JavaScript");

    expect(onChange).toHaveBeenCalledTimes(10);
  });
});
