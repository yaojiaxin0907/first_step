const slides = document.querySelector('.slides');
let slideWidth = document.querySelector('.slide').offsetWidth;
const numSlides = document.querySelectorAll('.slide').length;
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
function goToSlide(index){
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
    currentSlide = index;
    updateArrows();
    updateDots();
}
function updateArrows(){
    if(currentSlide == 0){
        prevArrow.style.opacity = '0.5';
        prevArrow.style.cursor = 'not-allowed';
    }else{
        prevArrow.style.opacity = '1';
        prevArrow.style.cursor = 'pointer';
    }
    if(currentSlide == numSlides-1){
        nextArrow.style.opacity = '0.5';
        nextArrow.style.cursor = 'not-allowed';
    }else{
        nextArrow.style.opacity = '1';
        nextArrow.style.cursor = 'pointer';
    }
}
function updateDots(){
    dots.forEach((dot,index)=>{
        if(index == currentSlide){
            dot.classList.add('active');
        }else{
            dot.classList.remove('active');
        }
    });
}
prevArrow.addEventListener('click',function(){
    if(currentSlide > 0){
        goToSlide(currentSlide-1);
    }else{
        alert("已经是第一张图片！");
    }
});
nextArrow.addEventListener('click',function(){
    if(currentSlide < numSlides-1){
        goToSlide(currentSlide+1);
    }else{
        alert("已经是最后一张图片！");
    }
});
dots.forEach((dot,index)=>{
    dot.addEventListener('click',function(){
        goToSlide(index);
    });
});
window.addEventListener('resize', function() {  
    slideWidth = document.querySelector('.slider').offsetWidth;
    goToSlide(currentSlide);
});
goToSlide(0);