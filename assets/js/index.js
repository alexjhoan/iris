// ---------------------------------OwlCarousel----------------------------------

// $('.owl-carousel').owlCarousel({
//   loop: true,
//   items:1,
//   margin:0,
//   // autoplay: true,
//   // autoplayTimeout: 4000,
// })

// ---------------------------------animations banner----------------------------------

$(document).ready(function(){
  let owl = $('.owl-carousel.owl-banner')
  owl.owlCarousel({
    loop: true,
    items:1,
    margin:0,
    // autoplay: true,
    // autoplayTimeout: 4000,
  })

  // owl.on("changed.owl.carousel", function(){
  //   $('.textCarousel').not(".active").removeClass('animate__animated animate__fadeInUp')
  //   // $('.textCarousel').not(".active").addClass('visually-hidden')
  //   setTimeout(() => {
  //     // $('.owl-item.active .textCarousel').removeClass('visually-hidden')
  //     $('.owl-item.active .textCarousel').addClass('animate__animated animate__fadeInUp')
  //   }, 10)
  // })
})

// -----------------------------------Form-------------------------------------

function submited() {
 'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
          console.log('enviadooo')
        }
        form.classList.add('was-validated')
      }, false)
    })
}

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
    radius: Math.random() * 1 + 8,
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

// -------------------------------Ingress-carousel------------------------------

let owl = $('.owl-carousel.owl-ingress')
owl.owlCarousel({
  loop: true,
  items:3,
  margin:5,
  // autoplay: true,
  // autoplayTimeout: 4000,
})

// ------------------------------Amenities-Parallax-----------------------------

function amenities() {
  let container = $("#amenities");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  let suma = scroll - heightTop;
  if (scroll > heightTop - heightElem && scroll < heightTop + heightElem) {
    let el = $("#edfAmenities");
    el.css({
      transform: "translateY(calc(-30px + " + 0.15 * suma + "px))"
    });
  }
  if (scroll > heightTop - heightElem && scroll < heightTop + heightElem) {
    let el = $("#linea-turquesa");
    el.css({
      transform: "translateY(calc(-30px + " + 0.08 * suma + "px))"
    });
  }
}

// ---------------------------title-hidden--------------------------

// determina si un elemento comienza a ser visible
function isElementVisible(container) {
  let viewScrollTop = $(window).scrollTop(); // distancia de scroll superior
  let viewBottom = viewScrollTop + $(window).height(); // distancia de scroll + el alto actual de window (lo no visible por scroll + lo visible)
  let topElemD = $(container).offset().top + 250; // distancia desde el elemento hasta el tope superior del viewport
  return topElemD < viewBottom;
}

