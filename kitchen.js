var itemName, manufacture, noOfItems, price, tax;
var arr = [];
var taxJson = { 1: 0.05, 2: 0.12, 3: 0.1 };
function getDetails() {
  itemName = prompt("Add item name");
  manufacture = prompt(
    "Select from the following:1.Raw 2.Manufactured 3.Imported"
  );
  noOfItems = prompt("Add the no of items:");
  price = prompt("Enter price per item");
  tax = taxJson[manufacture] * noOfItems * price;
  createJson();
}
function createJson(){
    var json = {
        Item: itemName,
        TypeofTax: manufacture,
        NoofItems: noOfItems,
        Price: price,
        Tax: tax,
      };
      arr.push(json);
}
function showInventory() {
  console.log(arr);
}
