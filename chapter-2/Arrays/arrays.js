var items = ["item1", "item2"];

var itemsConstructor = new Array("item1", "item2");

var emptyArray = new Array(0);

//Array access
    //access at postion
    items[0] //item1

    //Access the length of an array
    items.length //2

    //access last item
    items[items.length-1] //last item = item2

//Array manipulation
    //add an item to end of items
    items.push("item3")// ["item1", "item2", "item3"]

    //remove an item from end
    items.pop() // ["item1", "item2"]

    //remove an item from the front
    items.shift() //["item2"]

    //add an item to the front
    items.unshift("item1") //["item1", "item2"]

// Index of 
    items.indexOf("item1") // 0
    items.indexOf("item4") // -1

// adding 2 arrays together   

var array1 = ["item1", "item2"];
var array2 = ["item3", "item4"];

var joinedArray = array1.contact(array2) // ["item1", "item2", "item3", "item4"]

