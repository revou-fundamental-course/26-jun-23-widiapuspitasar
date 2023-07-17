
  // Slide Comment
  document.addEventListener("DOMContentLoaded", function() {
var slideIndex = 1;
showDivs(slideIndex);

function plusDives(n){
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var slideList = document.getElementsByClassName("slide");
  if(n > slideList.length) slideIndex = 1;
  else if(n < 1) slideIndex = slideList.length;

  for(i = 0; i < slideList.length; i++){
    slideList[i].style.display = "none";
  }

  slideList[slideIndex - 1].style.display = "block";
}

setInterval(()=>{
  plusDives(1);
},3000 );
});

  
// fungsi validasi form
function validasi() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var interested = document.getElementById("interested").value;

  if (nama === "" || email === "" || interested === "") {
      alert('You must fill in the data completely!');
  } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address!');
  } else {
      alert('Success!');
  }
}
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//  SMOOTH SCROLLING 

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});

// slider our package
document.addEventListener("DOMContentLoaded", function() {
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

});

