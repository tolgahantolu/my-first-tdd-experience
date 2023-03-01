import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyDialog from "./MyDialog";

describe("MyDialog", () => {
  it("should wrap child text", () => {
    render(<MyDialog>Hello</MyDialog>);
    expect(screen.getByRole("textbox")).toHaveTextContent("Hello");
  });
});
