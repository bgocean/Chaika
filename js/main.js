$(document).ready(function () {
  $(".header__menu, .header__menu-mobil, .footer__menu").on(
    "click",
    "a",
    function (event) {
      event.preventDefault();
      let id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    }
  );
});

const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".header__menu-mobil");
const menuMobil = document.querySelector(".header__menu-mobil");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu__list--open");
});

// Модалка
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const btn = document.getElementById("openModal");
  const span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    var iframe = document.getElementById("documentFrame");
    iframe.src = "./files/ДОГОВІР-ОФЕРТА.pdf";
    modal.style.display = "block";
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




// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contactForm");

//   form.addEventListener("submit", async function (e) {
//       e.preventDefault();

//       const formData = new FormData(form);

//       const response = await fetch('send_to_telegram.php', {
//           method: 'POST',
//           body: formData
//       });

//       if (response.ok) {
//           alert('Ваше сообщение отправлено!');
//       } else {
//           alert('Произошла ошибка при отправке сообщения.');
//       }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (e) {
      e.preventDefault(); // Предотвращаем стандартное поведение формы

      // Создаем объект FormData из нашей формы
      const formData = new FormData(form);

      try {
          // Отправляем данные формы на сервер с помощью fetch
          const response = await fetch('send_to_telegram.php', {
              method: 'POST',
              body: formData
          });

          // Проверяем, успешно ли было отправлено сообщение
          if (response.ok) {
              alert('Ваше сообщение отправлено!');
              form.reset(); // Сбрасываем форму после успешной отправки
          } else {
              alert('Произошла ошибка при отправке сообщения.');
          }
      } catch (error) {
          console.error('Error:', error);
          alert('Произошла ошибка при отправке сообщения.');
      }
  });
});

