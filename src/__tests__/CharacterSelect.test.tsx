import React from "react";
import { CharacterSelect } from "../components";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Character Select", () => {
  it("Renders", () => {
    render(<CharacterSelect />);
    expect(screen.queryByTestId("character-select")).toBeInTheDocument();
  });
  
  it("Adds NewCharacter when + button is clicked", () => {
    render(<CharacterSelect />);
    fireEvent.click(screen.queryByTestId("add-character-button")); //is queryByTestId the right way to query for the item? : https://testing-library.com/docs/queries/bytestid#api
    expect(screen.getByText("New Character")).toBeInTheDocument();
  });

});
