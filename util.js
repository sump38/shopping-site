function createNewItem(items) {
	let rawTemplate = document.getElementById('itemsTemplate').innerHTML;
	let compiledTemplate = Handlebars.compile(rawTemplate);
	let generatedHTML = compiledTemplate(items);
	return generatedHTML;
}

function filterElement(productList){
    

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