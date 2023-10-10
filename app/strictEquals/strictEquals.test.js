import strictEquals from "./strictEquals";

// Given / when / then

describe("Given a strictEquals function", () => {
  describe("When it recieve 1 and 1", () => {
    test("Then it should return true", () => {
      const valueA = 1;
      const valueB = 1;
      const result = true;

      const hasEqualValues = strictEquals(valueA, valueB);

      expect(hasEqualValues).toBe(result);
    });
  });
  describe("When it recieves NaN and NaN", () => {
    test("Then it should return false", () => {
      const valueA = NaN;
      const valueB = NaN;
      const result = false;

      const hasEqualValues = strictEquals(valueA === valueB);

      expect(hasEqualValues).toBe(result);
    });
  });
});
