import { navProductData } from "./Data/NavProductData.js";

import { bannerSliderData } from "./Data/bannerSliderData.js";

import { productsData } from "./Data/productsData.js";


// Nav product container js start*************
let navProductList = document.querySelector(".nav-product-list");
// console.log(navProductData)
let navProductListHTML = '';

navProductData.map(data => {
    navProductListHTML += `
    <div class="nav-product-item">
    <div class="nav-product-image">
        <img src="${data.url}" alt="">
    </div>
    <p>${data.text}</p>
</div>
    `
});

navProductList.innerHTML = navProductListHTML;

// Nav product container js end*************

// Banner slider conatiner js start********************

let bannerSliderList = document.querySelector(".banner-slider-list");
let bannerSliderListHTML = '';

bannerSliderData.map(data1 => {
    bannerSliderListHTML += `
    <div class="banner-slider-items">
      <img src="${data1.url}" alt="">
    </div>
    `
});

bannerSliderList.innerHTML = bannerSliderListHTML;


//    button functionality

let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");

let start = 0;
let end = -300;

prevBtn.addEventListener("click", handlePrevBtn);
nextBtn.addEventListener("click", handleNextBtn);

function handlePrevBtn() {
    let allItemsImage = document.querySelectorAll(".banner-slider-list");
    console.log(allItemsImage)
    if (start < 0)
        start += 100
    allItemsImage.forEach(item => {
        item.style.transform = `translateX(${start}%)`
    })
};

function handleNextBtn() {

    let allItemsImage = document.querySelectorAll(".banner-slider-list");
    console.log(allItemsImage)
    if (start > end)
        start -= 100
    allItemsImage.forEach(item => {
        item.style.transform = `translateX(${start}%)`
    })
};

function renderBannerSlider() {
    if (start > end) {
        handleNextBtn()
    }
    else {
        start = 100;
    }
}
setInterval(renderBannerSlider, 5000)
// Banner slider conatiner js end ********************


// *************************Products category start*******************

const mensClothing = productsData.filter((item) => item.category === "men's clothing");
const womensClothing = productsData.filter((item) => item.category === "women's clothing");
const electronics = productsData.filter((item) => item.category === "electronics");
const jewelery = productsData.filter((item) => item.category === "jewelery");

let mensProductItemList = document.querySelector(".mensProduct-item-list");
let mensProductItemListHTML = '';

 mensClothing.map(data => {
        mensProductItemListHTML += `
    <div class="product-item">
        <div class="product-image">
        <img src="${data.image}" alt="">
       </div>

    <div class="product-detail">
        <div class="product-title">
          <p>${data.title}</p>
        </div>
        <div class="price">
          <p> ₹${data.price} </p>
        </div>
    </div>
    </div>
      
   `
});
mensProductItemList.innerHTML = mensProductItemListHTML;

// womens category 

let womensProductItemList = document.querySelector(".womensProduct-item-list");
let womensProductItemListHTML = '';

 womensClothing.map(data => {
        womensProductItemListHTML += `
    <div class="product-item">
        <div class="product-image">
        <img src="${data.image}" alt="">
       </div>

    <div class="product-detail">
        <div class="product-title">
          <p>${data.title}</p>
        </div>
        <div class="price">
          <p> ₹${data.price} </p>
        </div>
    </div>
    </div>
      
   `
});
womensProductItemList.innerHTML = womensProductItemListHTML;

// electronics products 

let electronicsProductItemList = document.querySelector(".electronicsProduct-item-list");
let electronicsProductItemListHTML = '';

 electronics.map(data => {
    electronicsProductItemListHTML += `
    <div class="product-item">
        <div class="product-image">
        <img src="${data.image}" alt="">
       </div>

    <div class="product-detail">
        <div class="product-title">
          <p>${data.title}</p>
        </div>
        <div class="price">
          <p> ₹${data.price} </p>
        </div>
    </div>
    </div>
      
   `
});
electronicsProductItemList.innerHTML = electronicsProductItemListHTML;

// jewelery products

let jeweleryProductItemList = document.querySelector(".jeweleryProduct-item-list");
let jeweleryProductItemListHTML = '';

jewelery.map(data => {
    jeweleryProductItemListHTML += `
    <div class="product-item">
        <div class="product-image">
        <img src="${data.image}" alt="">
       </div>

    <div class="product-detail">
        <div class="product-title">
          <p>${data.title}</p>
        </div>
        <div class="price">
          <p> ₹${data.price} </p>
        </div>
    </div>
    </div>
      
   `
});
jeweleryProductItemList.innerHTML = jeweleryProductItemListHTML;
    // *************************Products category end*******************