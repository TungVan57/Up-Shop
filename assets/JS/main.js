// Slider

    const btnPre = document.querySelector('#previous');
    const btnNext = document.querySelector('#next')

    const slides=document.querySelectorAll('.slide');
    
    let activeIndex = 0;
    console.log(slides)
    function changeSlide(page){
        
        slides[activeIndex].classList.remove('active');
        activeIndex +=page;
        
        if(activeIndex === -1){
            activeIndex = slides.length - 1;
        }
        if(activeIndex === slides.length ){
           
            activeIndex = 0;
        }
        slides[activeIndex].classList.add('active');
        console.log(slides)
        console.log(activeIndex)
    }
    btnPre.addEventListener('click',function(){
        changeSlide(-1)
    })
    btnNext.addEventListener('click',function(){
        changeSlide(1)
    })
    
// !Slider