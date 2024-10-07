/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

// ------------------ Complete the functions written below ------------------------------ //

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */
const logNames = (items) => {
  items.forEach((item) =>console.log(item));
  // TODO: use `forEach`
}

/**
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */
const getUppercaseNames = (items) => {
  let names = items.map((item) =>item.name)
  return names.toString().toUpperCase();
  // TODO: use `map`
}

/**
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */
const getItemById = (items, id) => {
  // TODO: use `find`
  let ourItem = items.find((item) => id === item.id)
  return ourItem
}

/**
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name`
 */
const getItemPriceByName = (items, name) => {
  let ourItem = items.find((item) => name === item.name)
  return ourItem.price
}

/**
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
const getItemsByCategory = (items, category) => {
  let ourFilteredArray = items.filter((item) => category === item.category)
  // TODO: use `filter` 
  let ourNewFilteredArray = getUppercaseNames(ourFilteredArray)
  //ourFilteredArray.map((objectOfItem) => objectOfItem.name)

  return ourNewFilteredArray
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
const countItems = (items) => {
  let reducedItem = items.reduce((accumulator, item)=>accumulator + item.quantity,0)
  return reducedItem
  // TODO: use `reduce`
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
const calculateTotalPrice = (items) => {
  let totalPrice =items.reduce((grandTotal, item)=>grandTotal + (item.price * item.quantity),0)
  return totalPrice

  // TODO: use `reduce`
}

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

/** @type {Item[]} */
const INVENTORY = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

console.log("Welcome! We carry the following items:");
logNames(INVENTORY);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(INVENTORY));

console.log(`In total, we have ${countItems(INVENTORY)} items in stock.`);

const totalCost = calculateTotalPrice(INVENTORY);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(INVENTORY, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(INVENTORY, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(INVENTORY, category));
