function createNewItem(items) {
	var rawTemplate = document.getElementById('itemsTemplate').innerHTML;
	var compiledTemplate = Handlebars.compile(rawTemplate);
	var generatedHTML = compiledTemplate(items);
	return generatedHTML;
}

function sortByPrice() {}
