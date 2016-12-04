describe("Chapter 2: Arrays", function() {
  describe("Basic array Operations", function() {
    it("Excercise 1 : Created an array", function() {
      expect(array).toEqual(["item1","item2"])
    });

    it("Excercise 2 :Get First Item from the array", function() {
      expect(item1).toEqual("item1")
    });

    it("Excercise 3 :Get the length of the array", function() {
      expect(arrayLength).toEqual(2)
    });

    it("Excercise 4 :Remove last item from the array", function() {
      expect(removeArray).toEqual(["item1"])
    });

    it("Excercise 5 :Add 'item3' to the array", function() {
      expect(addToArray).toEqual(["item1", "item2", "item3"])
    });
  });

  describe("Excercise 6 :Advanced array Operations", function() {
    it("Get index of an item", function() {
      expect(GetArrayIndex("item1")).toEqual(0);
      expect(GetArrayIndex("item4")).toEqual(-1);
    });

    it("Excercise 7 :Add 2 arrays together", function() {
      expect(fooBarFruitBaket).toEqual(["banana", "orange","Grapes", "Apple"]);
    });

  });
});
