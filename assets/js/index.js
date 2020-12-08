// ---------------------------------OwlCarousel----------------------------------


// ---------------------------------animations banner----------------------------------

$(document).ready(function(){
  let owl = $('.owl-carousel')
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

