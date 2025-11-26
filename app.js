function menu() {
    let pages = document.getElementById('pages');

    if (pages.style.display === "block") {
        pages.style.display = "none";
    } else {
        pages.style.display = "block"

    }
};

/*let products = [{
    Name: "Smart Watch Ultra 3",
    Price: "200",
    Image: "Assets/e523dc116788e6efca014015d9bb336e.jpg",
    Category: "Smart Watches"
},
{
    Name: "Round Shaped Smart Watch",
    Price: "500",
    Image: "Assets/d8f3985a861b5589ab6f63e9afc7641e.jpg",
    Category: "Smart Watches"
}, {
    Name: "Ultra Pro Smart Watch",
    Price: "800",
    Image: "Assets/a2ddcdc7a486a9ddbe635c2c35f23110.jpg",
    Category: "Smart Watches"
},
{
    Name: "Iphone 14 Pro Max",
    Price: "1700",
    Image: "Assets/26be56634ad9773c9d8f6315cac2cba7.jpg",
    Category: "Mobile Phones"
},
{

    Name: "Iphone 17 Pro Max",
    Price: "2500",
    Image: "Assets/5d79c8c9106006a4c2bc62e153d55f77.jpg",
    Category: "Mobile Phones"
},
{
    Name: "Samsung S24 Ultra",
    Price: "2000",
    Image: "Assets/24223258deb2711a6cfb6ffe2ba3b5e9.jpg",
    Category: "Mobile Phones"
}, {
    Name: "DELL E-255 4th-Gen PC",
    Price: "2500",
    Image: "Assets/e25b8cc2108e29e17e9deeebc31242a3.jpg",
    Category: "Computers"
}, {
    Name: "Acer 5th-Gen Core i7 Laptop",
    Price: "2000",
    Image: "Assets/a57f7940a24d9ddbbe2aa4e72f5c48f5.jpg",
    Category: "Laptops"
}, {
    Name: "Audionic high bass Headphone",
    Price: "900",
    Image: "Assets/bf39d41a46c0297570f83350c2066f70.jpg",
    Category: "Headphones"
}, {
    Name: "Kotion Gaming HeadSet",
    Price: "1100",
    Image: "Assets/55ff44650711ea60c9e7c17f9927cc3a.jpg",
    Category: "Headphones"
}, {
    Name: "Xbox Dual Sensor Controller", 
    Price: "1500",
    Image: "Assets/e10fc3b40a282173d7504b0d3c6c990c.jpg",
    Category: "Accesories"
}];*/

let storage = JSON.parse(localStorage.getItem('Products'));
console.log(storage);
let card = document.getElementById("card");

if (storage) {
    for (i = 0; i < 6; i++) {
        console.log(storage[i], 'storage');
        card.innerHTML += `
<div id = "products">
   <img src="${storage[i].Image}" class="product-img"/>
   <div class="card-title">
                <b><h4 class="card-name">${storage[i].Name}</h4>
                <p class="card-text">Price: $${storage[i].Price}</p></b>
                </div>
<div class="product-reviews">
                    <div class="product-stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>  
                    </div>
                    <p>4.5+ Reviews</p>
                </div>                
                </div>
`
    };
    let productsDiv = document.getElementById("products");

    let viewBtn = document.createElement("button");
    viewBtn.setAttribute("id", "viewBtn");
    viewBtn.innerHTML = "View More";
    productsDiv.appendChild(viewBtn);
viewBtn.addEventListener("click", function(){
    for (i = 0; i < storage.length; i++) {
        console.log(storage[i], 'storage');
        card.innerHTML += `
<div id = "products">
   <img src="${storage[i].Image}" class="product-img"/>
   <div class="card-title">
                <b><h4 class="card-name">${storage[i].Name}</h4>
                <p class="card-text">Price: $${storage[i].Price}</p></b>
                </div>
<div class="product-reviews">
                    <div class="product-stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>  
                    </div>
                    <p>4.5+ Reviews</p>
                </div>                
                </div>
`
    };
    viewBtn.innerHTML = "View less";
})


} else {
    card.innerHTML = `
<h3>No products found!</h3>`
};
