describe("Chapter 2: Challenge", function() {
  describe("Challenge Passes", function() {
    it("Excercise 1 : Has an array called basket", function() {
      expect(typeof basket == "object").toBe(true);
      expect(basket.items).toBeDefined();
      expect(basket.totalPrice).toBeDefined();
    });

    it("Excercise 2 : Can add to the basket", function() {
      var item = { 
        item:"Basket item 1", 
        price: 10.99 
      };

      addItemToBasket(item);

      expect(basket.items[0]).toEqual(item);
    });

    it("Excercise 3 : Can get Total Price of Basket", function() {

      var item = {
        item:"Basket Item 2", 
        price: 10.00 
      }

      addItemToBasket(item);
      
      expect(getBasketTotalPrice()).toEqual("20.99");
    });

    it("Excercise 3 : Can get Total Items in a Basket", function() {
      expect(getBasketTotalItems()).toBe(2);
    });


  });

});
