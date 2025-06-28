document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const carouselList = carousel.querySelector(".carousel-list");
  const carouselItems = carousel.querySelectorAll(".carousel-item");
  const carouselNav = carousel.querySelector(".carousel-nav");
  const ACTIVE_CLASS = "active";
  let activeIndex;

  // 캐러셀 네비게이션 총 페이지 수
  carouselNav.querySelector(".total").textContent = "/ " + carouselItems.length;
  carouselNav.querySelector(".sr-only-total").textContent = carouselItems.length;

  carousel.addEventListener("click", (e) => {
    const nextBtn = e.target.closest(".next-btn");
    const prevBtn = e.target.closest(".prev-btn");
    const activeItem = carouselList.querySelector("." + ACTIVE_CLASS);
    const navCurrent = carouselNav.querySelector(".current");
    const navSRCurrent = carouselNav.querySelector(".sr-only-current");
    const carouselWidth = Number.parseFloat(getComputedStyle(carouselList).getPropertyValue("--carousel-width"), 10);

    if (nextBtn) {
      const nextItem = activeItem.nextElementSibling;

      activeItem.querySelectorAll(".link").forEach((link) => {
        link.setAttribute("tabindex", "-1");
      });

      if (nextItem === null) {
        activeItem.classList.remove(ACTIVE_CLASS);
        carouselList.firstElementChild.classList.add(ACTIVE_CLASS);
        carouselList.firstElementChild.querySelectorAll(".link").forEach((link) => {
          link.setAttribute("tabindex", "0");
        });
      } else {
        activeItem.classList.remove(ACTIVE_CLASS);
        nextItem.classList.add(ACTIVE_CLASS);
        nextItem.querySelectorAll(".link").forEach((link) => {
          link.setAttribute("tabindex", "0");
        });
      }

      carouselItems.forEach((el, i) => {
        i += 1;

        if (el === activeItem) {
          if (i === carouselItems.length) {
            activeIndex = 0;
          } else {
            activeIndex = i;
          }
        }
      });

      setCarouselListTranslate();
      setNavCurrentNumber();
    }

    if (prevBtn) {
      const prevItem = activeItem.previousElementSibling;

      activeItem.querySelectorAll(".link").forEach((link) => {
        link.setAttribute("tabindex", "-1");
      });

      if (prevItem === null) {
        activeItem.classList.remove(ACTIVE_CLASS);
        carouselList.lastElementChild.classList.add(ACTIVE_CLASS);
        carouselList.lastElementChild.querySelectorAll(".link").forEach((link) => {
          link.setAttribute("tabindex", "0");
        });
      } else {
        activeItem.classList.remove(ACTIVE_CLASS);
        prevItem.classList.add(ACTIVE_CLASS);
        prevItem.querySelectorAll(".link").forEach((link) => {
          link.setAttribute("tabindex", "0");
        });
      }

      carouselItems.forEach((el, i) => {
        i -= 1;

        if (el === activeItem) {
          if (i === -1) {
            activeIndex = carouselItems.length - 1;
          } else {
            activeIndex = i;
          }
        }
      });

      setCarouselListTranslate();
      setNavCurrentNumber();
    }

    // 캐러셀 리스트의 translate 값을 제어하는 함수
    function setCarouselListTranslate() {
      carouselList.style.setProperty("transform", "translateX(-" + carouselWidth * activeIndex + "%)");
    }

    // 현재 페이지 수를 출력해주는 함수
    function setNavCurrentNumber() {
      navCurrent.textContent = activeIndex + 1;
      navSRCurrent.textContent = activeIndex + 1;
    }
  });
});
