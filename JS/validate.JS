const checkoutForm=document.getElementById("checkoutForm");

if(checkoutForm){

    checkoutForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();
const phone=document.getElementById("phone").value.trim();
const email=document.getElementById("email").value.trim();
const address=document.getElementById("address").value.trim();
const city=document.getElementById("city").value.trim();
const pincode=document.getElementById("pincode").value.trim();

if(name=="" || phone=="" || email=="" || address=="" || city=="" || pincode==""){

alert("Please fill all fields");

return;

}

alert("🎉 Order Placed Successfully!");

sessionStorage.removeItem("cart");

window.location.href="index.html";

});

}
const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const subject=document.getElementById("subject").value.trim();
const message=document.getElementById("message").value.trim();

if(name==="" || email==="" || subject==="" || message===""){
alert("Please fill all fields.");
return;
}

alert("Message Sent Successfully!");

contactForm.reset();

});

}
