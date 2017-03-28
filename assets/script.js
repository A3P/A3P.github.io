window.addEventListener("DOMContentLoaded", function() {

});




var scroll_position = 0;
var ticking = false;
var header = document.getElementsByTagName('header')[0];
var heading = document.getElementById('name');

window.addEventListener('scroll', function(e) {
    scroll_position = window.scrollY;
    //Increases performance on browsers by only animating on some scroll events
    // console.log(header.scrollHeight);
    if (!ticking)  {
        window.requestAnimationFrame(function() {
            offsetHeader();
            ticking = false;
        });
    }
    ticking = true;
});

function offsetHeader() {
    heading.style.top = 50 + (50*scroll_position/header.scrollHeight) + "%";
}
