import React from "react";
import { CharacterSelect } from "../components";
import { render } from "@testing-library/react";

describe("Character Select", () => {
  it("Renders a list of characters", () => {
    const { debug } = render(<CharacterSelect />);
    debug();
  });
});
