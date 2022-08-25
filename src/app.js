
document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function(e) {
    this.classList.toggle( "active" );
    document.querySelector("nav ul").classList.toggle("activate");
    document.querySelector(".bgOverlay").classList.toggle("activate");
    e.stopPropagation();
});
document.querySelector(".bgOverlay").addEventListener('click', function(e){
  document.querySelector("#nav-toggle").classList.toggle("active")
  document.querySelector("nav ul").classList.toggle("activate");
  document.querySelector(".bgOverlay").classList.toggle("activate");
})



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