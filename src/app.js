const navToggle = document.querySelector("#nav-toggle");
const navUl = document.querySelector("nav ul");
const bgOverlay = document.querySelector(".bgOverlay");

navToggle.addEventListener("click", function (e) {
  navToggle.classList.toggle("active");
  navUl.classList.toggle("activate");
  bgOverlay.classList.toggle("activate");
  e.stopPropagation();
});

document.querySelector(".bgOverlay").addEventListener("click", function (e) {
  navToggle.classList.toggle("active");
  navUl.classList.toggle("activate");
  bgOverlay.classList.toggle("activate");
});

window.addEventListener("scroll", () => {
  if (
    window.scrollY > window.innerHeight / 20 &&
    document.querySelector("#nav-toggle").classList.contains("active")
  ) {
    navToggle.classList.remove("active");
    navUl.classList.remove("activate");
    bgOverlay.classList.remove("activate");
    console.log("crossed half of viewport!!!");
  }
});

/*
;(function ($) {
    $(function () {
      // DOM Ready
      // Insert all scripts here
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
        $("nav ul").toggle("activate");
      });
      $('#nav-toggle').on('click', function(){
        
      })
    })
})(jQuery)
*/
