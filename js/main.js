$(document).ready(function () {
  $(
    ".header__menu, .header__menu-mobil, .content__btn-contacts, .content__btn-services, .footer__menu"
  ).on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".header__menu-mobil");
const menuMobil = document.querySelector(".header__menu-mobil");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu__list--open");
});

// Модалка
// document.addEventListener("DOMContentLoaded", function () {
//   const modal = document.getElementById("modal");
//   const btn = document.getElementById("openModal");
//   const span = document.getElementsByClassName("close")[0];

//   btn.onclick = function () {
//     var iframe = document.getElementById("documentFrame");
//     iframe.src = "./files/ДОГОВІР-ОФЕРТА.pdf";
//     modal.style.display = "block";
//   };

//   span.onclick = function () {
//     modal.style.display = "none";
//   };

//   window.onclick = function (event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };
// });
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const btn = document.getElementById("openModal");
  const span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.open("./files/ДОГОВІР-ОФЕРТА.pdf", "_blank");
    } else {
      let iframe = document.getElementById("documentFrame");
      iframe.src = "./files/ДОГОВІР-ОФЕРТА.pdf?nocache=" + new Date().getTime();
      modal.style.display = "block";
    }
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("send_to_telegram.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Ваше повідомлення відправлено!");
        form.reset();
      } else {
        alert("Сталася помилка при відправленні повідомлення.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Сталася помилка при відправленні повідомлення.");
    }
  });
});

// Мобильное меню с номером телефона
document.addEventListener("DOMContentLoaded", function () {
  const phoneIconLink = document.querySelector("#phone-icon-link");
  const wrapperMenuMedia = document.querySelector(".wrapper__menu-media");
  const menuTelMedia = document.querySelector(".menu__tel-media");

  phoneIconLink.addEventListener("click", function (e) {
    // Проверяем размер экрана
    if (window.innerWidth > 480 && window.innerWidth <= 940) {
      e.preventDefault();
      wrapperMenuMedia.classList.toggle("show");
      menuTelMedia.classList.toggle("show");
    }
  });

  // Скрываем меню, если экран за пределами диапазона при изменении размера окна
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 480 || window.innerWidth > 940) {
      wrapperMenuMedia.classList.remove("show");
      menuTelMedia.classList.remove("show");
    }
  });
});
