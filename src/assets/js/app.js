'use strict';
let scrollAnimate = document.getElementById('scrollAnimate');
let bgScroll = scrollAnimate.querySelector(".bg-scroll");
let treeLeft = document.getElementById('tree1');
let treeRight = document.getElementById('tree2');
let cloadLeft = document.getElementById('cload1');
let cloadRight = document.getElementById('cload2');
let sun = document.getElementById('sun');
let school = document.getElementById('school');
let START_SCROLL_TREE = 107;
let END_SCROLL_TREE = 438;
let SUN_SCROLL_END = 800;
let CLOAD_SCROLL_END = 650;
let BG_SCROLL_START = 180;
let OP_SCROLL_END = 190;
let SCHOOL_SCALE_START = 700;


document.addEventListener('scroll', function(event){
    let scrollOffset = window.pageYOffset;
    if(scrollOffset >= START_SCROLL_TREE && scrollOffset <= END_SCROLL_TREE) {
        let tran = scrollOffset;
        treeLeft.style.left = `-${tran}px`;
        treeRight.style.right = `-${tran}px`;
        let sunScale = scrollOffset / 10;
        let opSun = START_SCROLL_TREE / scrollOffset;
        sun.style.transform = `translateY(${sunScale}px)`;
    }
    if(scrollOffset >= 0 && scrollOffset <= CLOAD_SCROLL_END){
        let cloadTran = scrollOffset;
        cloadLeft.style.transform = `translateX(-${cloadTran}px)`;
        cloadRight.style.transform = `translateX(${cloadTran}px)`;
    }
    if(scrollOffset >= BG_SCROLL_START) {
        let bgScale = scrollOffset / BG_SCROLL_START;
        bgScroll.style.transform = `scale(${bgScale})`;
    }
    if(scrollOffset >= OP_SCROLL_END) {
        let bgOP =  BG_SCROLL_START / scrollOffset;
        bgScroll.style.opacity = `${bgOP}`;
        sun.style.opacity = `${bgOP}`;
    }
    if(scrollOffset <= SCHOOL_SCALE_START) {
        let schoolOp = scrollOffset / SCHOOL_SCALE_START;
        school.style.transform = `scale(${schoolOp})`;
    }
    console.log(scrollOffset);
})