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




/*WhatsApp me anchor */
document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var message = document.getElementById("messageInput").value;
  var encodedMessage = encodeURIComponent(message);
  var whatsappLink = "https://wa.me/2348029675288/?text=" + encodedMessage;
  // Replace 'whatsapp-number' with your WhatsApp phone number, including the country code.
  // For example, if your WhatsApp number is +1234567890, the link would be: https://wa.me/1234567890/?text=...
  
  window.location.href = whatsappLink;
});



AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 200,
  once: true
}, );