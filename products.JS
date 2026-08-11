const products = [

{
id:1,
name:"Memory Foam Mattress",
price:12999,
image:"IMAGES/Memory-Foam.jpg",
description:"Premium memory foam mattress with excellent back support and comfortable sleep."
},

{
id:2,
name:"Orthopedic Mattress",
price:15999,
image:"IMAGES/orthopedic.jpg",
description:"Orthopedic mattress specially designed for spine support and healthy posture."
},

{
id:3,
name:"Luxery Mattress",
price:18999,
image:"IMAGES/luxery mattress.jpg",
description:"Luxery mattress with premium fabric and extra comfort for better sleep."
},

{
id:4,
name:"Spring Mattress",
price:14999,
image:"IMAGES/Spring.webp",
description:"Spring mattress with breathable material and long-lasting durability."
}

];
    
    const container=document.getElementById("products-container");
    
    if(container){
    
    products.forEach(product=>{
    
    container.innerHTML+=`
    
    <div class="card">
    
    <img src="${product.image}">
    
    <h3>${product.name}</h3>
    
    <p>₹${product.price}</p>
    
    <button onclick="addToCart(${product.id})">Add To Cart</button>

<button onclick="viewProduct(${product.id})">View Details</button>
    
    </div>
    
    `;
    
    });
    
    }
    function viewProduct(id){

sessionStorage.setItem("selectedProduct",id);

window.location.href="product.html";

}
const details = document.getElementById("product-details");

if(details){

const id = Number(sessionStorage.getItem("selectedProduct"));

const product = products.find(p => p.id === id);

if(product){

details.innerHTML = `
<div class="product-details">

<img src="${product.image}">

<div class="product-info">

<h1>${product.name}</h1>

<h2>Price : ₹${product.price}</h2>

<p>${product.description}</p>

<button onclick="addToCart(${product.id})" class="btn">
Add To Cart
</button>

<a href="products.html" class="btn">
Back To Products</a>

</div>

</div>
`;

}

}
function searchProducts(){

const search = document.getElementById("search").value.toLowerCase();

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

const name = card.querySelector("h3").innerText.toLowerCase();

if(name.includes(search)){
card.style.display="block";
}else{
card.style.display="none";
}

});

}
function filterProducts(category){

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

const name = card.querySelector("h3").innerText;

if(category==="all"){
card.style.display="block";
}
else if(name.includes(category)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}
function sortProducts(){

const value = document.getElementById("sort").value;

if(value==="default"){
location.reload();
return;
}

if(value==="low"){
products.sort((a,b)=>a.price-b.price);
}

if(value==="high"){
products.sort((a,b)=>b.price-a.price);
}

const container=document.getElementById("products-container");

container.innerHTML="";

products.forEach(product=>{

container.innerHTML += `

<div class="card">

<img src="${product.IMAGES}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">Add To Cart</button>

<button onclick="viewProduct(${product.id})">View Details</button>

</div>

`;

});

}