

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
            fadeBorders();
            ticking = false;
        });
    }
    ticking = true;
});

function offsetHeader() {
    heading.style.top = 50 + (50*scroll_position/header.scrollHeight) + "%";
}

function fadeBorders() {
    heading.style.borderImageSource =
        "linear-gradient(" +
        (135) +  "deg," +
        " #6f3824 " + ( 100 - 400*scroll_position/header.scrollHeight) + "% ," +
        "transparent " + ( 150 - 150*scroll_position/header.scrollHeight) + "% )";

    header.style.borderImageSource =
        "linear-gradient(" +
        (135) +  "deg," +
        " #6f3824 " + ( 0 + 50*scroll_position/header.scrollHeight) + "% ," +
        "transparent " + ( 10 + 90*scroll_position/header.scrollHeight) + "% )";

}
