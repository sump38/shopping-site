// const { Handlebars } = require("./handlebars-v4.7.7");

const productsContainer = document.getElementById('products-container');
const submitBtn = document.getElementById('subminBtn');
const newItemField = document.getElementById('newItemField');

fetch(
	'https://raw.githubusercontent.com/MrchinFTW/class-work/main/products.json'
)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		const items = createNewItem(data);
		productsContainer.innerHTML = items;
	});

function decrement(event) {
	if (event.path[1].childNodes[3].value > 0) {
		event.path[1].childNodes[3].value--;
	}
}

function incrament(event) {
	event.path[1].childNodes[3].value++;
}
