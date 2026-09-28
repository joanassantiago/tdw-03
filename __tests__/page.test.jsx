import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/page";

test("Page renders the heading", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", { level: 1, name: /to get started/i }),
  ).toBeDefined();
});
