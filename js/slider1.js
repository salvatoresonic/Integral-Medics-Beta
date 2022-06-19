const slider = document.querySelector("#slider1");
let sliderSection = document.querySelectorAll(".slider__section1");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn__left1");
const btnRight = document.querySelector("#btn__right1");

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

function Next () {
    let sliderSectionFirst = document.querySelectorAll(".slider__section1")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1.5s";
    

    setTimeout(function(){ 
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },1500);
}


function Prev () {
    let sliderSection = document.querySelectorAll(".slider__section1");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    console.log(sliderSectionLast)
    slider.style.marginLeft = "0";
    slider.style.transition = "all 1.5s";

    setTimeout(function(){ 
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },1500);
}




btnRight.addEventListener("click", function(){
    Next();
});

btnLeft.addEventListener("click", function(){
    Prev();
});


setInterval(function(){
    Next();
},8000);