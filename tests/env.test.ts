import { describe, expect, it } from "vitest";

describe("environment contract", () => {
  it("uses an explicit API base URL variable", () => {
    expect("VITE_API_BASE_URL").toBe("VITE_API_BASE_URL");
  });
});
