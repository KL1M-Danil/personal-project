//АНИМАЦИЯ ЗАЯВКИ
var current = null;
document.querySelector("#email").addEventListener("focus", function(e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart"
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart"
    }
  });
});
document.querySelector("#text").addEventListener("focus", function(e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: "easeOutQuart"
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart"
    }
  });
});
document.querySelector("#submit").addEventListener("focus", function(e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: "easeOutQuart"
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart"
    }
  });
});

$(document).ready(function(){
  $('.section').slick({
    infinite: true,
  slidesToShow: 1,
  slidesToScroll: 3
  });
});

//Aнимация появления блоков

var delay = anime({
  targets: "#promo-title",
  opacity: 1,
  delay: 500,
  duration: 3000
});

var delay = anime({
  targets: "#promo-subtitle",
  opacity: 1,
  delay: 1500,
  duration: 3000
});

var delay = anime({
  targets: "#promo-anim",
  opacity: 1,
  delay: 2500,
  duration: 3000
});

var cssProperties = anime({
  targets: "#cert-box",
  opacity: 1,
  delay: 3500,
  duration: 3000
});

const nav = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav-link");
const navLinkA = document.querySelectorAll(".nav-link a");

nav.addEventListener("click", onNavClick);

function onNavClick(event) {
  event.preventDefault();

  nav.classList.toggle("open");
  navList.classList.toggle("nav-open");

  for (let i = 0; i < navLink.length; i += 1) {
    navLink[i].classList.toggle("nav-link-open");
  }
}

// for (let i = 0; i < navLinkA.length; i += 1) {
//   navLinkA[i].addEventListener("click", onNavLinkAClick);

//   function onNavLinkAClick(event) {
//     event.preventDefault();

//     navList.classList.toggle("nav-open");
//   }
// }

$(document).ready(function(){
  $('.tech-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });
});
		

//Заявка

$("body form.form").submit(function() {
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: th.serialize()
  }).done(function() {
    $("body")
      .find(".success")
      .addClass("active")
      .hide()
      .fadeIn();
    setTimeout(function() {
      $("body")
        .find(".success")
        .removeClass("active")
        .fadeOut();
      th.trigger("reset");
    }, 8000);
  });
  return false;
});

// Закрыть попап «спасибо»
$(".js-close-thank-you").click(function() {
  // по клику на крестик
  $(".js-overlay-thank-you").fadeOut();
});

$(document).mouseup(function(e) {
  // по клику вне попапа
  var popup = $(".popup");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $(".js-overlay-thank-you").fadeOut();
  }
});

//Плавность якорей

$(document).ready(function() {
  //ID блока с ссылками #prime_nav
  $("#to-tech").on("click", "a", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1200 мс
    $("body,html").animate({ scrollTop: top }, 1200);
  });
});

//При обновление страници наверх
window.scrollTo(0, 0);
