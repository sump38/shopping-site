const productContainer = document.getElementById("products-container");
const submitBtn = document.getElementById("subminBtn");
const newItemField = document.getElementById("newItemField");
const productsList  = ["Black Tea", "Coffee"];

submitBtn.addEventListener("click",()=>{
    let newItemName = newItemField.value;
    productsList.push(newItemName);
    createNewItem(productsList[productsList.length-1])
    newItemField.value = "";
    newItemField.focus();
})

function createNewItem(item){
    const newDiv = document.createElement("div");
    newDiv.innerText = item;
    newDiv.classList.add("product")
    productContainer.append(newDiv);
    
}

const blackTea = document.createElement("div");
const greenTea = document.createElement("div");

blackTea.innerHTML = productsList[0];
greenTea.innerHTML = productsList[1];


blackTea.classList.add("product");
greenTea.classList.add("product");

productContainer.appendChild(blackTea);
productContainer.appendChild(greenTea);
