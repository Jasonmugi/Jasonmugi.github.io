
document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function(e) {
    this.classList.toggle( "active" );
    document.querySelector("nav ul").classList.toggle("activate");
    e.stopPropagation();
});
document.querySelector('html').addEventListener('click', function(){
    
    
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