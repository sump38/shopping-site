const productContainer = document.getElementById("products-container");
const headerContainer = document.getElementById('header');

const productsArray = [];
const headerData = {
    title: 'My Shopping Site'
};

function onDataSuccess(data) {
    console.log('DATA SUCCESS');
}

function onDataFailed(error) {
    console.log('DATA FAILED');
}

function onDataDone(data) {
    console.log('PROMISE FINALLY');
}




const responsePromise = fetch('http://localhost:3000/products');
const dataPromise = responsePromise.then( response => {
    return response.json();
});
dataPromise
    .then(onDataSuccess)
    .catch(onDataFailed)
    .finally(onDataDone);

console.log('code still running');



const productsHTML = createProductList(productsArray);
productContainer.appendChild(productsHTML);

const headerHTML = createHeader(headerData);
headerContainer.appendChild(headerHTML);



// for(let i=0; i<productsArray.length;i++) {

//     const productDIV = document.createElement("div");
//     productDIV.classList.add("product");

//     const productNameDIV = document.createElement("div");
//     productNameDIV.innerHTML = productsArray[i].name;
//     productDIV.appendChild(productNameDIV);

//     const productAmountDIV = document.createElement("div");
//     productAmountDIV.innerHTML = "Amount: " + productsArray[i].amount;
//     productDIV.appendChild(productAmountDIV);

//     productContainer.appendChild(productDIV);

// }
