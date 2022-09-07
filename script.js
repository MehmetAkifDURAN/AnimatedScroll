var interval;
var scrollTop;
function btnClick() {
    interval = setInterval(scrollToBottom, 50);
    scrollTop = window.pageYOffset;
    let scrollPosition = document.body.scrollTop;
    function scrollToBottom() {
        if (window.pageYOffset < scrollPosition) {
            clearInterval(interval);
        } else {
            window.scrollBy(0, scrollTop + 20);
            scrollPosition += 20;
        }
    }
}

document.body.addEventListener("scroll", function (event) {
    event.preventDefault();
});

function scrollMouseWhell() {
    clearInterval(interval);
}