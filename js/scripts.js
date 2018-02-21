$(function () {
    var carouselList = $("#carousel ul");
    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first"),
            lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({ marginLeft: 0 });
    }
    function changeSlide() {
        carouselList.animate({ 'marginLeft': -400 }, 1700, moveFirstSlide);
    }
    window.setInterval(changeSlide, 4000);
});