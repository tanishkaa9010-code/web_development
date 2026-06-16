let inventory = [
    { name: "flour", quantity: 20 },
    { name: "rice", quantity: 5 }
];
function findProductIndex(name) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
            return i;
        }
    }
    return -1;
}
function addProduct(product) {
    if (findProductIndex(product.name) === -1) {
        let newProduct = { name: product.name.toLowerCase(), quantity: product.quantity };
        inventory.push(newProduct);
        console.log(`${product.name.toLowerCase()} added to inventory`);
    }
    else {
        inventory[findProductIndex(product.name)].quantity += product.quantity;
        console.log(` ${product.name.toLowerCase()} quantity updated`);
    }
}

function removeProduct(name, quantity) {
    let index = findProductIndex(name);
    if (index === -1) {
        console.log(`${name} not found`);
    }
    else if (inventory[index].quantity < quantity) {
        console.log(`Not enough ${name} available,remaining pieces: ${inventory[index].quantity}`);
    }
    else {
        inventory[index].quantity -= quantity
        if (inventory[index].quantity === 0) {
            inventory.splice(index, 1);
            console.log(`${name} removed from inventory`);
        }
        else (console.log(`Remaining ${name} pieces: ${inventory[index].quantity}`));

    }
}






addProduct({ name: "sugar", quantity: 10 });
addProduct({ name: "sugar", quantity: 10 });
addProduct({ name: "flour", quantity: 15 });

console.log(findProductIndex("FLOUR"));
console.log(findProductIndex("SUGAR"));
console.log(inventory);