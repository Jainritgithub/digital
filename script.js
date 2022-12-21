function swiper(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        grabCursor: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
}

swiper();

gsap.from("#img1",{
    opacity: 0,
    delay:0.3,
    y: 60,
    ease: Circ.easeInOut,
    duration: 1
})
gsap.from("#image img",{
    opacity: 0,
    delay: 0.3,
    x: 60,
    ease: Circ.easeInOut,
    duration: 1
})

gsap.from("#image2 img",{
    opacity: 0,
    delay: 0.3,
    y: -60,
    ease: Circ.easeInOut,
    duration: 1
})

gsap.from("#section2 h4",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#section2 h4 ",
        scroller: "body",
        start:"top 80%",
        
    }
})

gsap.from("#section2 h1",{
  opacity: 0,
  duration: 1,
  scrollTrigger: {
      trigger:"#section2 h1 ",
      scroller: "body",
      start:"top 75%",
     
  }
})

gsap.from("#about-us",{
  opacity: 0,
  duration: 1,
  scrollTrigger: {
      trigger:"#about-us ",
      scroller: "body",
      start:"top 80%",
     
  }
})

gsap.from("#section3 .a",{
  opacity: 0,
  duration: 1,
    y: 60,
  scrollTrigger: {
      trigger:"#section3 .a",
      scroller: "body",
      start:"top 70%",
     
  }
})

gsap.from("#section3 .b",{
  opacity: 0,
  duration: 1,
    x: -60,
  scrollTrigger: {
      trigger:"#section3 .b",
      scroller: "body",
      start:"top 70%",
     
  }
})
gsap.from("#section3 .c",{
  opacity: 0,
  duration: 1,
    y: 60,
  scrollTrigger: {
      trigger:"#section3 .c",
      scroller: "body",
      start:"top 70%",
     
  }
})
gsap.from("#section3 .d",{
  opacity: 0,
  duration: 1,
    x: 60,
  scrollTrigger: {
      trigger:"#section3 .d",
      scroller: "body",
      start:"top 70%",
     
  }
})
gsap.from("#section3 #right h1",{
  opacity: 0,
  duration: 1,
    y: 60,
  scrollTrigger: {
      trigger:"#section3 #right h1",
      scroller: "body",
      start:"top 80%",
     
  }
})
gsap.from("#section3 #right p",{
  opacity: 0,
  duration: 1,
    x: -60,
  scrollTrigger: {
      trigger:"#section3 #right p",
      scroller: "body",
      start:"top 80%",
     
  }
})
gsap.from("#section3 #right h3",{
  opacity: 0,
  duration: 1,
    y: -60,
  scrollTrigger: {
      trigger:"#section3 #right h3",
      scroller: "body",
      start:"top 80%",
     
  }
})
gsap.from("#section4 #upper h1",{
  opacity: 0,
  duration: 1,
    y: 60,
  scrollTrigger: {
      trigger:"#section4 #upper h1",
      scroller: "body",
      start: "top 80%", 
  }
})
gsap.from("#section4 #bottom",{
  opacity: 0,
  duration: 1,
    y: 60,
  scrollTrigger: {
      trigger:"#section4 #bottom",
      scroller: "body",
      start: "top 75%",
  }
})