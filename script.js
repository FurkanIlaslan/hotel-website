// ! Navbar scroll olayı için;
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 100) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// ! Swiper.js ile ilgili;
let swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
  },
});

// ! Counter Kısmı
document.addEventListener("DOMContentLoaded", ()=> {
    function counter(id,start,end,duration){
        let obj = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration/range));
        let timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step)
    }

    counter("count1",0,100,3000);
    counter("count2",0,200,3000);
    counter("count3",0,300,3000);
    counter("count4",0,400,3000);
})


// ! Our-Partners
let ourPartnerSwiper = new Swiper(".our-partner",{
  slidesPerView : 6,
  spaceBetween : 30,
  loop:true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    991: {
      slidesPerView: 5,
      spaceBetween: 10
    }, 
    767: {
      slidesPerView: 3,
      spaceBetween: 10
    },   
    320: {
      slidesPerView: 2,
      spaceBetween: 8
    }
  }
})
