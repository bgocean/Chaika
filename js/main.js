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

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu__btn");
  const menuList = document.querySelector(".header__menu-mobil");

  menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("menu__list--open");
  });

  document.addEventListener("click", function (e) {
    if (!menuList.contains(e.target) && !menuBtn.contains(e.target)) {
      menuList.classList.remove("menu__list--open");
    }
  });

  menuList.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

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

document.addEventListener("DOMContentLoaded", function () {
  const phoneIconLink = document.querySelector("#phone-icon-link");
  const wrapperMenuMedia = document.querySelector(".wrapper__menu-media");
  const menuTelMedia = document.querySelector(".menu__tel-media");

  phoneIconLink.addEventListener("click", function (e) {
    if (window.innerWidth > 480 && window.innerWidth <= 940) {
      e.preventDefault();
      wrapperMenuMedia.classList.toggle("show");
      menuTelMedia.classList.toggle("show");
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth <= 480 || window.innerWidth > 940) {
      wrapperMenuMedia.classList.remove("show");
      menuTelMedia.classList.remove("show");
    }
  });

  document.addEventListener("click", function (e) {
    if (
      !wrapperMenuMedia.contains(e.target) &&
      !phoneIconLink.contains(e.target)
    ) {
      wrapperMenuMedia.classList.remove("show");
      menuTelMedia.classList.remove("show");
    }
  });

  wrapperMenuMedia.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
