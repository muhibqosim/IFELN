function myFunction(x) {
  x.classList.toggle("change");
}

function toggleMenu() {
  var menu = document.getElementById("mobile-menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}


/* =========================
   GALLERY STARTS HERE
========================= */

let galleryImages = [];
let galleryCurrentIndex = 0;

// Fetch images from API
function fetchImages() {
  const url = "https://galleria.sgm.ng/cDf3jbbZaDWWvdLT7";
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      
      if (Array.isArray(data) && data.length > 0) {
        galleryImages = data.filter(img => img && img.trim() !== "");
        updateGallery();
      } else {
        console.log("No images found yet.");
      }
      
    })
    .catch(error => console.error("Error fetching images:", error));
}


// Update gallery slider
function updateGallery() {
  const slider = document.getElementById("gallery-slider");
  
  if (!slider) return;
  
  slider.innerHTML = "";
  
  galleryImages.forEach((imageUrl, index) => {
    
    let img = document.createElement("img");
    
    img.src = imageUrl;
    img.alt = "Jurivex Gallery Image";
    
    // Hide image until it fully loads
    img.style.display = "none";
    
    img.className = "w-full h-96 md:h-[500px] object-cover rounded-lg";
    
    // Show image only after it has loaded
    img.onload = function() {
      if (index === 0) {
        img.style.display = "block";
        galleryCurrentIndex = 0;
      }
    };
    
    slider.appendChild(img);
  });
}

// Next slide
function nextSlide() {
  const slides = document.querySelectorAll("#gallery-slider img");
  
  if (slides.length <= 1) return;
  
  slides[galleryCurrentIndex].style.display = "none";
  
  galleryCurrentIndex = (galleryCurrentIndex + 1) % slides.length;
  
  slides[galleryCurrentIndex].style.display = "block";
}


// Previous slide
function prevSlide() {
  const slides = document.querySelectorAll("#gallery-slider img");
  
  if (slides.length <= 1) return;
  
  slides[galleryCurrentIndex].style.display = "none";
  
  galleryCurrentIndex = (galleryCurrentIndex - 1 + slides.length) % slides.length;
  
  slides[galleryCurrentIndex].style.display = "block";
}


// Auto slide every 3 seconds (only if more than one image exists)
setInterval(() => {
  if (galleryImages.length > 1) {
    nextSlide();
  }
}, 3000);

// Refresh images every 60 seconds (so new Google Photos images appear automatically)
setInterval(fetchImages, 60000);


// Load images immediately when page loads
document.addEventListener("DOMContentLoaded", fetchImages);


/* =========================
   GALLERY ENDS HERE
========================= */



//JS TYPEWR

const swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 1000,
});






AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 200,
  once: true
}, );