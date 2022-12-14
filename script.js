const productContainer = document.getElementById("products-container");
const headerContainer = document.getElementById('header');

let productsArray = [];
const headerData = {
    title: 'My Shopping Site'
};

function onDataSuccess(data) {
    productsArray = data;
    renderPage();
    console.log('DATA SUCCESS');
}

function onDataFailed(error) {
    console.log('DATA FAILED');
}

function onDataDone(data) {
    console.log('PROMISE FINALLY');
}

function renderPage() {
    const productsHTML = createProductList(productsArray);
    productContainer.innerHTML = '';
    productContainer.appendChild(productsHTML);

    const headerHTML = createHeader(headerData);
    headerContainer.innerHTML = '';
    headerContainer.appendChild(headerHTML);
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

renderPage();




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
