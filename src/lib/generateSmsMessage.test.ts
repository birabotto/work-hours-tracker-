import { describe, expect, it } from "vitest";
import { generateSmsMessage } from "./generateSmsMessage";

describe("generateSmsMessage", () => {
  it("generates SMS summary with total hours", () => {
    const message = generateSmsMessage([
      {
        id: "1",
        work_date: "2026-06-01",
        start_time: "09:00",
        end_time: "17:00",
      },
    ]);

    expect(message).toContain("2026-06-01");
    expect(message).toContain("09:00 - 17:00");
    expect(message).toContain("Total hours worked: 8h");
  });
});
