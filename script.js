const productContainer = document.getElementById("products-container");
const submitBtn = document.getElementById("subminBtn");
const newItemField = document.getElementById("newItemField");


fetch('http://127.0.0.1:5500/products.json')
    .then((response) => response.json())
    .then((data) =>{
       createNewItem(data)
    });

function createNewItem(items){
    for (let i = 0; i < items.length; i++) {
        const itemDiv = document.createElement("div")
        itemDiv.innerText = items[i].itemName;
        itemDiv.classList.add("product");
        productContainer.append(itemDiv)
    }
}


// const blackTea = document.createElement("div");
// const greenTea = document.createElement("div");

// blackTea.innerHTML = productsList[0];
// greenTea.innerHTML = productsList[1];


// blackTea.classList.add("product");
// greenTea.classList.add("product");

// productContainer.appendChild(blackTea);
// productContainer.appendChild(greenTea);
