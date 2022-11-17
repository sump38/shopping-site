const productContainer = document.getElementById("products-container");
const submitBtn = document.getElementById("subminBtn");
const newItemField = document.getElementById("newItemField");


fetch('http://localhost:3000/items')
    .then((response) => response.json())
    .then((data) =>{
       
        createNewItem(data)
    });

function createNewItem(items){
    for (let i = 0; i < items.length; i++) {
        //create and modify the elements.
        const colDIV = document.createElement("div");
        colDIV.classList.add("col");
        const cardDIV = document.createElement("div");
        cardDIV.classList.add("card", "mb-4", "rounded-3", "shadow-sm");
        const cardHeaderDIV = document.createElement("div");
        cardHeaderDIV.classList.add("card-header","py-3");
        const cardTitle = document.createElement("h1");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = items[i].itemName
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const cardImage = document.createElement("img");
        cardImage.classList.add("img-thumbnail", "img-fluid");
        cardImage.setAttribute("src",items[i].image)
        const priceTitle = document.createElement("h1");
        priceTitle.classList.add("card-title");
        priceTitle.innerText = items[i].price;
        const kgSmall = document.createElement("small");
        kgSmall.classList.add("text-muted", "fw-light");
        kgSmall.innerText = "$/kg"
        const itemDescription = document.createElement("p");
        itemDescription.innerText = items[i].description;
        
            //append section
        productContainer.appendChild(colDIV)
        colDIV.appendChild(cardDIV)
        cardDIV.appendChild(cardHeaderDIV)
        cardDIV.appendChild(cardBody);
        cardHeaderDIV.appendChild(cardTitle);
        cardBody.appendChild(cardImage);
        cardBody.appendChild(priceTitle);
        cardBody.appendChild(itemDescription)
        priceTitle.appendChild(kgSmall);
    }
}
