// creating a collapsable text box
let coll = document.querySelectorAll(".collapse");
var i;
console.log(coll);

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", myclick );
}

function myclick() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  console.log(content);
  
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } 
  else {
    content.style.maxHeight = content.scrollHeight + "px";
  } 
}


// creating a "go to top" button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}
