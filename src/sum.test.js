import { expect, test } from "vitest";
import { sum } from "./sum";

test("sum(2, 2) returns 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("sum(-1, 1) returns 0", () => {
  expect(sum(-1, 1)).toBe(0);
});
