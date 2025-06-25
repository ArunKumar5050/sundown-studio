// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
var elemC = document.querySelector('#elem-container');
var fixed = document.querySelector('.fix-image');
elemC.addEventListener('mouseenter', function() {
    // console.log('mouseenter');
    fixed.style.display = 'block'; 

})
elemC.addEventListener('mouseleave', function() {
    // console.log('mouseleave');
    fixed.style.display = 'none'; 
})

var elems = document.querySelectorAll('.elem');
elems.forEach(function(e) {
    e.addEventListener('mouseenter', function() {
        var image = e.getAttribute('data-image');
        fixed.style.backgroundImage = `url(${image})`;
    })
})
