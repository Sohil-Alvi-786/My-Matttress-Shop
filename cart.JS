let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function addToCart(id){

const product = products.find(p=>p.id===id);

const existing = cart.find(item=>item.id===id);

if(existing){

existing.qty++;

}else{

cart.push({
id:product.id,
name:product.name,
price:product.price,
image:product.image,
qty:1
});

}

sessionStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert(product.name + " Added To Cart");

}
function displayCart(){

    const cartItems=document.getElementById("cart-items");
    const totalPrice=document.getElementById("total-price");
    
    if(!cartItems) return;
    
    cartItems.innerHTML="";
    
    let total=0;
    
    cart.forEach((item,index)=>{
    
    total += item.price*item.qty;
    
    cartItems.innerHTML += `
    
    <div class="card">
    
    <img src="${item.image}">
    
    <h3>${item.name}</h3>
    
    <p>₹${item.price}</p>
    
    <p>Quantity : ${item.qty}</p>
    
    <button onclick="increaseQty(${index})">+</button>
    
    <button onclick="decreaseQty(${index})">-</button>
    
    <button onclick="removeItem(${index})">Remove</button>
    
    </div>
    
    `;
    
    });
    
    totalPrice.innerHTML="Total : ₹"+total;
    
    sessionStorage.setItem("cart",JSON.stringify(cart));
    
    updateCartCount();
    
    }
    function increaseQty(index){
        cart[index].qty++;
        displayCart();
        }
        
        function decreaseQty(index){
        
        if(cart[index].qty>1){
        cart[index].qty--;
        }else{
        cart.splice(index,1);
        }
        
        displayCart();
        }
        
        function removeItem(index){
        
        cart.splice(index,1);
        
        displayCart();
        
        }
        displayCart();
