const rotateBtn = document.querySelector('.rotate-button');
const slides = document.querySelectorAll('.bg-slide');
const totalSlides = slides.length;
let index = 0;

rotateBtn.addEventListener('click', () => {
    slides.forEach(slide => {
        if (slide.classList.contains('active')) {
            slide.classList.add('after-active');
        }
        else {
            slide.classList.remove('after-active');
        }
    })

    slides[index].classList.remove('active');

    index++;

    if (index == totalSlides) {
        index = 0;
    };

    slides[index].classList.add('active');
})



// coupon section statr

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{

        0:{

            items:1
        },
        576:{

            items:2
        },
        992:{
          items:3
        },
        1200:{

            items:4
        }
    }
})
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1500])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })
// coupon section end


//  number counting function

let valueDisplays = document.querySelectorAll(".num");
let interval = 40000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});






