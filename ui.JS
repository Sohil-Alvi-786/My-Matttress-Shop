function updateCartCount(){

    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    
    let count = 0;
    
    cart.forEach(item=>{
    count += item.qty;
    });
    
    const cartCount=document.getElementById("cart-count");
    
    if(cartCount){
    
    cartCount.innerText=count;
    
    }
    
    }
    
    updateCartCount();
    window.onscroll = function(){

const btn = document.getElementById("topBtn");

if(!btn) return;

if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){

btn.style.display = "block";

}else{

btn.style.display = "none";

}

}

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
const newsletter = document.getElementById("newsletterForm");

if(newsletter){

newsletter.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("newsletterEmail").value.trim();

if(email===""){

alert("Please enter your email.");

return;

}

alert("Thank you for subscribing!");

newsletter.reset();

});

}
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.toLowerCase().trim();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const productName = card.querySelector("h3");

            if (productName) {

                const name = productName.textContent.toLowerCase();

                if (name.includes(searchText)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            }

        });

    });

}
function searchProducts() {

    const homeSearch = document.getElementById("searchInput");
    const productsSearch = document.getElementById("search");

    const searchText = (
        homeSearch ? homeSearch.value :
        productsSearch ? productsSearch.value : ""
    ).toLowerCase().trim();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const productName = card.querySelector("h3");

        if (productName) {

            const name = productName.textContent.toLowerCase();

            if (name.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        }

    });

}