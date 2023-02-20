import React from "react";
import { CharacterSelect } from "../components";
import { render, screen } from "@testing-library/react";

describe("Character Select", () => {
  it("Renders", () => {
    render(<CharacterSelect />);
    expect(screen.queryByTestId("character-select")).toBeInTheDocument();
  });
  

});
