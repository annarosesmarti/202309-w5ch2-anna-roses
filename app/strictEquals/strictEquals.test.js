import strictEquals from "./strictEquals";

// Given / when / then

describe("Given a strictEquals function", () => {
  describe("When it recieve 1 and 1", () => {
    test("Then it should return true", () => {
      const valueA = 1;
      const valueB = 1;
      const result = true;

      const hasEqualsValues = strictEquals(valueA, valueB);

      expect(hasEqualsValues).toBe(result);
    });
  });
});
