
// Parallax Effect + GSAP Animated Swiper

const swiper = new Swiper('.mySwiper',{
  loop:true,
  speed:1000,
  grabCursor:true,
  autoplay:{ delay:3000, disableOnInteraction:false },
  pagination:{el:'.swiper-pagination',clickable:true},
  navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},
  on:{
    slideChangeTransitionStart(){
      gsap.fromTo('.swiper-slide-active .slide-content h2',{y:60,opacity:0},{y:0,opacity:1,duration:.8});
      gsap.fromTo('.swiper-slide-active .slide-content p',{y:40,opacity:0},{y:0,opacity:1,duration:.8,delay:.15});
      gsap.fromTo('.swiper-slide-active .slide-content button',{scale:0,opacity:0},{scale:1,opacity:1,duration:.5,delay:.35,ease:'back.out(1.7)'});
    },
    progress(swiper){
      swiper.slides.forEach(slide=>{
        const img = slide.querySelector('.slide-inner img');
        const progress = slide.progress;
        gsap.to(img,{x: progress * 120, duration:0.6, ease:'power2.out'});
      });
    }
  }
});
      gsap.fromTo('.swiper-slide-active .slide-content p',{y:40,opacity:0},{y:0,opacity:1,duration:.8,delay:.15});
      gsap.fromTo('.swiper-slide-active .slide-content button',{scale:0,opacity:0},{scale:1,opacity:1,duration:.5,delay:.35,ease:'back.out(1.7)'});
 
      gsap.fromTo('.swiper-slide-active .slide-content p',{y:40,opacity:0},{y:0,opacity:1,duration:.8,delay:.15});
      gsap.fromTo('.swiper-slide-active .slide-content button',{scale:0,opacity:0},{scale:1,opacity:1,duration:.5,delay:.35,ease:'back.out(1.7)'});

