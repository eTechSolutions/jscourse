describe("Chapter 2: Arrays", function() {
  describe("Basic array Operations", function() {
    it("Excercise 1 : Create a function", function() {
      expect(typeof test === "function").toBe(true);
      expect(test()).toBe(undefined);
    });

    it("Excercise 2 : Create a function with a return", function() {
      expect(returnTest(4)).toBe(8);
    });
  });

});
