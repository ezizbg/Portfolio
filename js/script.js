// Меню бургер

const iconBurger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__top-menu");
if (iconBurger) {
  iconBurger.addEventListener("click", function (e) {
    iconBurger.classList.toggle("_x");
    menu.classList.toggle("_x");
    document.body.classList.toggle("_lock");
  });
}

/*------------------------------------------------------------------------------------------------------------------*/

// Прокрутка при клике

const menuLinks = document.querySelectorAll(
  ".header__top-menu-link[data-goto], .header__bottom-scroll[data-goto]"
);
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (iconBurger.classList.contains("_x")) {
        iconBurger.classList.remove("_x");
        menu.classList.remove("_x");
        document.body.classList.remove("_lock");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

/*------------------------------------------------------------------------------------------------------------------*/

//Инициализация Slider Swiper

new Swiper(".works__container", {
  spaceBetween: 80,

  autoHeight: true,

  slidesPerView: 3,

  loop: true,

  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },

  speed: 1000,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 2,
    },

    1150: {
      slidesPerView: 3,
    },
  },
});

const images = document.querySelectorAll(".works__slider-slide img");
images.forEach(function (image) {
  image.setAttribute("width", "380");
  image.setAttribute("height", "220");
});

/*------------------------------------------------------------------------------------------------------------------*/

//Анимация при прокрутке

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 200);
}

/*------------------------------------------------------------------------------------------------------------------*/
