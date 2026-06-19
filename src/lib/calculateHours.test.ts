import { describe, expect, it } from "vitest";
import { calculateHours } from "./calculateHours";

describe("calculateHours", () => {
  it("calculates 09:00 to 17:00 as 8 hours", () => {
    expect(calculateHours("09:00", "17:00")).toBe(8);
  });

  it("calculates 05:00 to 13:30 as 8.5 hours", () => {
    expect(calculateHours("05:00", "13:30")).toBe(8.5);
  });
});
