
// slide foto
document.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 1;
    showDivs(slideIndex);
  
    function plusDivs(n) {
      showDivs((slideIndex += n));
    }
  
    function showDivs(n) {
      var i;
      var imgList = document.getElementsByClassName("img-slideshow");
      if (n > imgList.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = imgList.length;
      }
      for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
      }
      imgList[slideIndex - 1].style.display = "block";
    }
  
    setInterval(function() {
      plusDivs(1);
    }, 2000);
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




 


