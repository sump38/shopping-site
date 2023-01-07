function createItemTemplate(items) {
	let rawTemplate = document.getElementById('itemsTemplate').innerHTML;
	let compiledTemplate = Handlebars.compile(rawTemplate);
	let generatedHTML = compiledTemplate(items);
	return generatedHTML;
}

function renderPage(){
    tempProductArray = productData;
    tempProductArray.items.sort(compareFN);
    productListHtml = createItemTemplate(tempProductArray)

    productContainer.innerHTML = ""
    productContainer.innerHTML = productListHtml;
}

function decrement(event){
    if(event.path[1].childNodes[3].value>0){
        event.path[1].childNodes[3].value--
    }
}

function incrament(event) {
	event.path[1].childNodes[3].value++;
}


function filterByPrice(productList,filterFN){
}

function compareFN(productA,productB) {
    if(sortValue === 'price'){
        return productA.price-productB.price
    }else{
        return productA.itemName.localeCompare(productB.itemName)
    }
}


function filterByName(productList,filterString){
    const productToReturn = []
    productList.filter(elm=>{
        if(elm.itemName.toLowerCase().includes(filterString.toLowerCase())){
            productToReturn.push(elm)
        }
    })
    return productToReturn
}