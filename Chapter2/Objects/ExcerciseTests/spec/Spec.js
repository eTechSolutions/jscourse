describe("Chapter 2: Challenge", function() {
  describe("Challenge Passes", function() {
    it("Excercise 1 : Has firstName property", function() {
      expect(person.firstName).toBe("test");
    });

    it("Excercise 2 : Has lastName property", function() {
      expect(person.lastName).toBe("person");
    });

    it("Excercise 3 : Has walk method", function() {
      expect(person.walk()).toBe("walking");
    });

    it("Excercise 4 : Has age property", function() {
      expect(person.age).toBe(24);
    });
  });

});
