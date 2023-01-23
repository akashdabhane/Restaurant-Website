console.log("This is me"); 

let mainImage = document.getElementById('mainImage'); 
let image1 = document.getElementById('image1'); 
let image2 = document.getElementById('image2'); 
let image3 = document.getElementById('image3'); 

image1.addEventListener('click',() => {
    document.getElementById('mainImage').src = "/images/food1.png";
}); 

image2.addEventListener('click',() => {
    document.getElementById('mainImage').src = "/images/food3.png"; 
}); 

image3.addEventListener('click',() => {
    document.getElementById('mainImage').src = "/images/food2.jpg"; 
}); 

// function changeImage() {
//     document.getElementById('mainImage').src = "/images/food1.png"; 
// }

// function changeImage2() {
//     document.getElementById('mainImage').src = "/images/food3.png"; 
// }

