fetch(
	'https://raw.githubusercontent.com/MrchinFTW/class-work/main/products.json'
)
	.then((response) => response.json())
	.then((data) => {
		productData = data;
		renderPage(productData);
	});

sortProducts.addEventListener('change', (e) => {
	sortValue = e.target.value;
	productData.items.sort(compareFN);
	renderPage(productData);
});

showFiltersBtn.addEventListener('click', () => {
	// TODO: add transition to the toggle
	filtersSection.classList.toggle('hidden');
});

filterByPriceBtn.addEventListener('click', () => {
	let filterMinNumber = filterByPriceInput[0].valueAsNumber;
	let filterMaxNumber = filterByPriceInput[1].valueAsNumber;
	if (filterMaxNumber < filterMinNumber || filterMinNumber < 0) {
		return 0;
	}

	filterByPriceFN(productData, filterMinNumber, filterMaxNumber);
});
