'use strict';
let dropCard = document.getElementById("dropCard");
function dropDownBox() {
    dropCard.classList.toggle('drop-card-active');
}

let activeMenu = document.getElementById('navbar');
let buttonScroll = document.getElementById('btnscroll');
let progressBar = document.getElementById('progressBar');
let FIRST_PAGE_MIN_SCROLL = 60;
document.addEventListener("scroll", function(event){
    let scrollOffset = window.pageYOffset;
    if(scrollOffset >= FIRST_PAGE_MIN_SCROLL) {
        activeMenu.classList.add("active-scroll-menu");
        buttonScroll.style.bottom = "15px";
        let xOffSet = scrollOffset / 4;
        progressBar.style.width = `${xOffSet}px`;
    } else {
        activeMenu.classList.remove("active-scroll-menu");
        buttonScroll.style.bottom = "-50px";
    }
})

document.addEventListener("DOMContentLoaded", function() {
    var demo = new Moovie({
      selector: "#videoNews",
      dimensions: {
           width: "100%"
      }
    });
 });

 document.addEventListener("DOMContentLoaded", function() {
    var demo = new Moovie({
      selector: "#videoNews2",
      dimensions: {
           width: "100%"
      }
    });
 });