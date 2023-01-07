const productContainer = document.getElementById("products-container");
const submitBtn = document.getElementById("subminBtn");
const newItemField = document.getElementById("newItemField");
const sortProducts = document.getElementById('sortProducts')
const filterBtn = document.getElementById('filterSubmit')
let productListHtml, tempProductArray;
let productData;
sortValue = 'price'


fetch('https://raw.githubusercontent.com/MrchinFTW/class-work/main/products.json')
    .then((response) => response.json())
    .then((data) =>{
        productData = data;
        productListHtml =  createItemTemplate(data)
        renderPage()
    });



sortProducts.addEventListener('change',(e)=>{
  let returnArr
    sortValue = e.target.value 
    productData.items.sort(compareFN)
    productListHtml = createItemTemplate(tempProductArray)
    renderPage()
})


