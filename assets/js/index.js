// ---------------------------------animations banner----------------------------------

$(document).ready(function(){

  gtag('event', 'Landing - Cargar', {
    'event_category': 'Iris - Landing - Cargar'
  });

  let owl = $('.owl-carousel.owl-banner')
  owl.owlCarousel({
    loop: true,
    items:1,
    margin:0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 600
  })

  owl.on("changed.owl.carousel", function(){
    $('.textCarousel').not(".active").removeClass('animate__animated animate__fadeInUp').hide()
    setTimeout(() => {
      $('.owl-item.active .textCarousel').addClass('animate__animated animate__fadeInUp').show()
    }, 550)
  })
})

// -----------------------------------Form-------------------------------------


function dataSubmited(data) {
  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
  };

  const form = document.querySelector('#formSignUp')

  gtag('event', form.email.value, {
    'event_category': 'Iris - Landing - Enviar Formulario'
  });

  fetch("https://prod.infocasas.com.uy/apps/iris/register.php", requestOptions)
  .then((response) => response.json())
  .then((json) => {
    if (json.status === "ok") {
      $('#formSuccess').fadeIn();
    } else {
      $('#formError').fadeIn();
    }
    $('#formSignUp').hide();
  })
  .catch(error => {
    console.log('error', error);
    $('#formSignUp').hide();
    $('#formError').fadeIn();
  });
}

function submited() {
 'use strict'
  const form = document.querySelector('#formSignUp')
  const data = JSON.stringify({
    name: form.name.value,
    realState: form.inmobiliaria.value,
    city: form.city.value,
    email: form.email.value,
    phone: form.phone.value
  })
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }else{
    dataSubmited(data)
  }
  form.classList.add('was-validated')
}

//--------------------------hand-entry--------------------------------

function hand() {
  let container = $("#phone");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  let suma = scroll - heightTop;
  let item = $('.overflow-hidden img')
  if (scroll > heightTop - heightElem) {
    item.removeClass('visually-hidden');
    item.addClass('animate__animated animate__fadeInRight');
  }
}


 $(function () {
  $(window).scroll(function (){
    hand()
  })
})


//--------------------------Launch-Carousel---------------------------

function postsCarousel() {
  var checkWidth = $(window).width();
  var owlPost = $(".lauchContainer");

  owlPost.each(function() {
    if (checkWidth < 768) {
      $(this).addClass('owl-carousel owl-theme')
      $(this).owlCarousel({
        items: 1,
        dots: true,
        nav: false
      })
    } else {

      if (typeof $(this).data('owl.carousel') != 'undefined') {
        $(this).data('owl.carousel').destroy();
      }
      $(this).removeClass('owl-carousel owl-theme')
    }
  })

}
postsCarousel()
$(window).resize(postsCarousel)


// -------------------------------Ingress-carousel------------------------------

let owl = $('.owl-carousel.owl-ingress')
owl.owlCarousel({
  loop: true,
  margin:10,
  nav: false,
  // autoplay: true,
  // autoplayTimeout: 4000,
  responsive:{
    0:{
        items:1,
        nav:true
    },
    600:{
        items:2,
    },
    1000:{
        items:3,
    }
  }
})

// -----------------------------------Bg-Phone-------------------------------------

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
