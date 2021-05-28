const shoppingList = [
    {
        id: 1,
        name: "milk",
        price: 3
    },
    {
        id: 2,
        name: "bread",
        price: 3.50
    },
    {
        id: 3,
        name: "eggs",
        price: 2
    },
    {
        id: 4,
        name: "bananas",
        price: 1.50
    }
]

const calcNextId = (arr) => {
    let lastIndex = arr.length - 1;
    if (lastIndex < 0) {
        return 1;
    }

    let lastId = arr[lastIndex].id;
    return lastId + 1;
}

const addGroceryItem = (arr, obj) => {
    let nextId = calcNextId(arr);

    obj.id = nextId;
    arr.push(obj);
}

const groundBeef = {
    name: "ground beef",
    price: 5
}

const craftBeer = {
    name: "six-pack of craft beer",
    price: 10
}

const porkRoast = {
    name: "pork roast",
    price: 16
}

const parmesanCheese = {
    name: "parmesan cheese",
    price: 4
}

const greekYogurt = {
    name: "family-size Greek yogurt",
    price: 6.50
}

addGroceryItem(shoppingList, craftBeer)
addGroceryItem(shoppingList, porkRoast)
addGroceryItem(shoppingList, parmesanCheese)
addGroceryItem(shoppingList, greekYogurt)
addGroceryItem(shoppingList, groundBeef)

for (let item of shoppingList) {
    if (item.price > 8) {
        console.log(item);
    }
}
