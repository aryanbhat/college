const navSlide = () =>{
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-menu");
  const navlinks = document.querySelector("nav-links");
  burger.addEventListener('click',()=>{
    nav.classList.toggle("appear");
    burger.classList.toggle("toggle");
  })
}
navSlide();