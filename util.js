

//must have product.title
function createProduct(product) {
    //TODO: add logic to create product function;
    //stub

    const productHTML = document.createElement('div');
    productHTML.innerHTML = product.title;

    return productHTML;
}

function createProductList(productList) {
    const productListElement = document.createElement('div');
    if(productList && productList.length) {
        for(let i=0;i<productList.length;i++) {
            const product = createProduct(productList[i]);
            productListElement.appendChild(product);
        }
    } else {
        productListElement.innerHTML = 'No Items.';
    }
    return productListElement;
}

function createHeader(headerObject) {
    //TODO: add logic

    //stub
    const headerElement = document.createElement('div');
    headerElement.innerHTML = 'HEADER HERE';
    return headerElement;
}
