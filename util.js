const productContainer = document.getElementById('products-container');
const submitBtn = document.getElementById('subminBtn');
const newItemField = document.getElementById('newItemField');
const sortProducts = document.getElementById('sortProducts');
const filtersSection = document.getElementById('filtersSection');
const showFiltersBtn = document.getElementById('showFiltersBtn');
const filterByPriceInput =
	document.getElementsByClassName('filterByPriceInput');
const filterByPriceBtn = document.getElementById('filterByPriceBtn');
const filterByNameInput = document.getElementById('filterByNameInput');
let productListHtml,
	tempProductArray,
	productData,
	sortValue = 'price';

function jsonFormating(nonFormatedObj) {
	let productData = JSON.stringify({ items: nonFormatedObj });
	return JSON.parse(productData);
}

function renderPage(items) {
	if (Array.isArray(items)) {
		items = jsonFormating(items);
	}
	items.items.sort(compareFN);

	let rawTemplate = document.getElementById('itemsTemplate').innerHTML;
	let compiledTemplate = Handlebars.compile(rawTemplate);
	let generatedHTML = compiledTemplate(items);

	productContainer.innerHTML = '';
	productContainer.innerHTML = generatedHTML;
}

function decrement(event) {
	if (event.path[1].childNodes[3].value > 0) {
		event.path[1].childNodes[3].value--;
	}
}

function incrament(event) {
	event.path[1].childNodes[3].value++;
}

function filterByPriceFN(productList, nimNumber, maxNumber) {
	tempProductArray = productList.items.filter((product) => {
		if (product.price >= nimNumber && product.price <= maxNumber)
			return product;
	});
	if (tempProductArray.length >= 1) {
		renderPage(tempProductArray);
	}
}

function compareFN(productA, productB) {
	if (sortValue === 'price') {
		return productA.price - productB.price;
	}
	return productA.itemName.localeCompare(productB.itemName);
}

function filterByNameFN(productList, filterString) {
	let productsToReturn = [];
	productList.items.filter((elm) => {
		if (elm.itemName.toLowerCase().includes(filterString.toLowerCase())) {
			productsToReturn.push(elm);
		}
	});
	renderPage(productsToReturn);
}
