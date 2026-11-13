let shoppinglist = ["Bread", "Milk", "Sugar", "Rice"];

console.log("Shopping List:", shoppinglist);

console.log("First item:", shoppinglist[0]);
console.log("Last item:", shoppinglist[shoppinglist.length - 1]);
shoppinglist.push("Cooking Oil");
console.log("After adding Cooking Oil:", shoppinglist);

shoppinglist.shift();
console.log("After removing the first item:", shoppinglist);

let sugarIndex = shoppinglist.indexOf("Sugar");
if (sugarIndex !== -1) {
    shoppinglist[sugarIndex] = "Tea Leaves";
}
console.log("After replacing Sugar with Tea Leaves:", shoppinglist);

console.log("Total items in the shopping list:", shoppinglist.length);