const productContainer = document.getElementById("products-container");
const submitBtn = document.getElementById("subminBtn");
const newItemField = document.getElementById("newItemField");
const select = document.getElementById('sortSelect')
const filterBtn = document.getElementById('filterSubmit')


fetch('https://raw.githubusercontent.com/MrchinFTW/class-work/main/products.json')
    .then((response) => response.json())
    .then((data) =>{
        const generatedHTML = createNewItem(data)
        productContainer.innerHTML = generatedHTML;
    });


function decrement(event){
    if(event.path[1].childNodes[3].value>=0){
        event.path[1].childNodes[3].value--
    }
}

function incrament (event){
event.path[1].childNodes[3].value++
}
