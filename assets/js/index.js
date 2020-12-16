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
  margin:5,
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

var canvas = document.getElementById("bgCanvas"),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = 100, // Number of stars
    mouse = {
      x: 0,
      y: 0
    };  // mouse location

// Push stars to array

for (var i = 0; i < x; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1 + 3,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25
  });
}

// Draw the scene

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // ctx.globalCompositeOperation = "lighter";

  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    ctx.fillStyle = "#f6804e";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }

  ctx.beginPath();
  for (var i = 0, x = stars.length; i < x; i++) {
    var starI = stars[i];
    ctx.moveTo(starI.x,starI.y);
    if(distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
    for (var j = 0, x = stars.length; j < x; j++) {
      var starII = stars[j];
      if(distance(starI, starII) < 150) {
        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        ctx.lineTo(starII.x,starII.y);
      }
    }
  }
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#f6804e';
  ctx.stroke();
}

function distance( point1, point2 ){
  var xs = 0;
  var ys = 0;

  xs = point2.x - point1.x;
  xs = xs * xs;

  ys = point2.y - point1.y;
  ys = ys * ys;

  return Math.sqrt( xs + ys );
}

// Update star locations

function update() {
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    s.x += s.vx / FPS;
    s.y += s.vy / FPS;

    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  }
}

// seguir el mouse

// canvas.addEventListener('mousemove', function(e){
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;
// });

// Update and draw

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}

tick();

