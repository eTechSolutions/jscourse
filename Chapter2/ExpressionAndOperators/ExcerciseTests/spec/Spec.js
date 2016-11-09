describe("Chapter 2: Expression and operators", function() {
  describe("Assignment", function() {
    it("Use Assignment", function() {
      expect(assignment).toBe("test");
    });
  });

  describe("Comparison", function() {
    it("Greater than used correctly", function() {
      expect(isGreater).toBe(true);
    });

    it("less than used correctly", function() {
      expect(isLess).toBe(false);
    });

    it("equals used correctly", function() {
      expect(equals).toBe(true);
    });

    it("strict equals used correctly", function() {
      expect(strictEquals).toBe(false);
    });
  });

  describe("Logical", function() {
    it("Correct use of &&", function() {
      expect(shouldBeTrue).toBe(true);
      expect(shouldBeFalse).toBe(false);
    });

    it("Correct use of ||", function() {
      expect(shouldBeTrue2).toBe(true);
      expect(shouldBeFalse2).toBe(false);
    });

    it("Correct use of || on other values", function() {
      expect(object).toEqual({});
    });

    it("Correct use of && on other values", function() {
      expect(object2).toEqual(undefined);
    });

    it("Correct use of Not operator", function() {
      expect(falseValue).toBe(false);
    });
  });


  describe("Conditional", function() {
    it("correct use of conditional", function() {
      expect(objectConditional).toEqual({});
    });
  });

  describe("typeof", function() {
    it("typeof object", function() {
      expect(isObject).toEqual(true);
    });

    it("typeof boolean", function() {
      expect(isBoolean).toBe(true);
    });

    it("typeof string", function() {
      expect(isString).toBe(true);
    });
  });

});
