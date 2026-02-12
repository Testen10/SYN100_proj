var slides = document.getElementsByClassName("slide");
var slide=0;
// alret(slides.length);
slides[0].style.display="block";

function changeSlide(){
    for(var i=0; i<slides.length;i++) slides[i].style.display="none";
    slide = (slide+1)%slides.length
    slides[slide].style.display="block";
}