document.addEventListener("DOMContentLoaded", function () {
// Бургуер меню
document.getElementById('burger').addEventListener('click', function() {
  document.getElementById('menu').classList.add('menu_active')
});

document.getElementById('close').addEventListener('click', function() {
  document.getElementById('menu').classList.remove('menu_active')
});

// Кнопки для художников
const dropdowns = document.querySelectorAll('.dropdown');
const btnsHeader = document.querySelectorAll('.header-bottom__btn');
function openCloseDropdown(btn) {
  const dataIndex = btn.dataset.indexNumber;
  const btns = document.querySelectorAll('.header-bottom__btn');

  for (const dropdown of dropdowns) {
    if (dropdown.dataset.indexNumber === dataIndex) {
      dropdown.classList.toggle('is-active');
    }

    else {
      dropdown.classList.remove('is-active');
    }
  }

  for (const btn of btns) {
    if (btn.dataset.indexNumber !== dataIndex) {
      btn.classList.remove('header-bottom__btn_is-active');
    }
  }
}

for (const btn of btnsHeader) {
  btn.addEventListener('click', function() {
    openCloseDropdown(this);
    this.classList.toggle('header-bottom__btn_is-active');
  })
}

function closeBtnAndDropdown () {
  btnsHeader.forEach(el => el.classList.remove('header-bottom__btn_is-active'));
  dropdowns.forEach(el => el.classList.remove('is-active'));
}

document.addEventListener('click', e => {
  let target = e.target;
    for (const btn of btnsHeader) {
      if(btn == target) {
        its_btnsHeader = true;
        break;
      }
      else {
        its_btnsHeader = false;
      }
    }

    for (const dropdown of dropdowns) {
      if(dropdown == target || dropdown.contains(target)) {
        its_dropdown = true;
        break;
      }
      else {
        its_dropdown = false;
      }
    }

  if (!its_btnsHeader && !its_dropdown) {
    closeBtnAndDropdown();;
  }
})

//  Поиск
document.getElementById('search_btn-1024').addEventListener('click', function() {
  document.getElementById('search-1024').classList.toggle('header-search-1024__input_active'),
  document.querySelector('.header-search-1024').classList.toggle('header__search_wrap_active')
});

const search1024 = document.querySelector('.header-search-1024');
const search1024Btn = document.querySelector('.header-search-1024__btn');

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.header-search-1024')) {
    document.querySelector('.header-search-1024__input').classList.remove('header-search-1024__input_active')
    document.querySelector('.header-search-1024').classList.remove('header__search_wrap_active')
  }
});

document.getElementById('search_btn-768').addEventListener('click', function() {
  document.querySelector('.header-search-768_wrap').classList.add('is-active__header__search_wrap')
});

document.getElementById('search_btn-close').addEventListener('click', function() {
  document.querySelector('.header-search-768_wrap').classList.remove('is-active__header__search_wrap')
});

// Кастомный селект
const element = document.querySelector('#customSelect, #customSelect1');
const choices = new Choices(element, {
  searchEnabled: false,
});

// Слайдер hero
const swiper = new Swiper('.swiper-hero', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

// Слайдер галереи
let gallerySlider = new Swiper(".slides-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery .gallery-right__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery-right__btn-next",
    prevEl: ".gallery-right__btn-prev"
  },

  breakpoints: {
    480: {
      slidesPerView: 2,

      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 36
    },

    1200: {
      slidesPerView: 3,

      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  }
});

// Модальное окно галерея
function galleryModal() {
  const modals = document.querySelectorAll('.modal');
  const paintings = document.querySelectorAll('.gallery__slide');
  const modalsWrap = document.querySelector('.modals__wrap');
  const closeBtns = document.querySelectorAll ('.modal__close-btn');

  function closeModal () {
    modalsWrap.classList.remove('modals__wrap-visable');
    modals.forEach(el => el.classList.remove('modal-visable'));
    document.body.classList.remove('scroll-hidden');
  }

  closeBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
      modalsWrap.classList.remove('modals__wrap-visable');
      e.currentTarget.parentNode.parentNode.classList.remove('modal-visable');

      document.body.classList.remove('scroll-hidden');
    })
  })

  paintings.forEach((el) => {
    el.addEventListener('click', (e) => {
      const path = e.currentTarget.getAttribute('data-path');
      document.querySelector(`[data-target="${path}"]`).classList.add('modal-visable');
      modalsWrap.classList.add('modals__wrap-visable');

      document.body.classList.add('scroll-hidden');

      const modalsWrapClose = document.querySelector('.modals__wrap-visable');
      modalsWrapClose.addEventListener('click', (e) => {
        let target = e.target;

        for(const modal of modals) {
          if(modal == target || modal.contains(target)) {
            its_modal = true;
            break;
          }
          else {
            its_modal = false;
          }
        }

        if (!its_modal) {
          closeModal();
        }
      });
    })
  })


}

galleryModal();

// ----Табы----
document.querySelectorAll('.catalog__tabs-btn').forEach(tubsBtn => {
  tubsBtn.addEventListener('click', event => {
    const path = event.currentTarget.dataset.path;

    document.querySelectorAll('.catalog__content').forEach(tubsContent => {
      tubsContent.classList.remove('catalog__content_active')
    });

    document.querySelectorAll('.catalog__tabs-btn').forEach(tubsBtn => {
      tubsBtn.classList.remove('catalog__tabs-btn_active')
    });

    document.querySelector(`[data-path="${path}"]`).classList.add('catalog__tabs-btn_active');
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content_active');
  })
});

document.querySelectorAll('.accordion__artists').forEach(tubsBtn => {
  tubsBtn.addEventListener('click', event => {
    const path = event.currentTarget.dataset.path
    document.querySelectorAll('.content-left').forEach(tubsContent => {
      tubsContent.classList.remove('content-left_active')
    })

    document.querySelectorAll('.accordion__artists').forEach(tubsBtn => {
      tubsBtn.classList.remove('accordion__artists_active')
    })

    tubsBtn.classList.add('accordion__artists_active')
    document.querySelector(`[data-target="${path}"]`).classList.add('content-left_active')
  })
});

// Аккордионн
$(function () {
  $(".accordion").accordion({
    heightStyle: "content",
    collapsible: true,
  });
});

const accordionElements = document.querySelectorAll('.accordion__element');

for (const accordionElement of accordionElements) {
  accordionElement.addEventListener('click', function() {
    accordionElement.parentNode.classList.toggle('accordion__item-active');

    for (const accordionElement of accordionElements) {
      if (accordionElement !== this) {
        accordionElement.parentNode.classList.remove('accordion__item-active');
      }
    }
  })
}

// Переход по ссылкам плавно
$(document).ready(function(){
  $('body,html').on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

// Слайдер события
let developmentsSlider = new Swiper(".developments__slides-container", {
  spaceBetween: 27,

  pagination: {
    el: ".swiper-pagination"
  },
});

// Слайдер издания
let editionsSlider = new Swiper(".editions__slides-container", {
  pagination: {
    el: ".editions__slider-pagination",
    type: "fraction"
  },

  navigation: {
    nextEl: ".editions__btn-next",
    prevEl: ".editions__btn-prev"
  },

  breakpoints: {

    1200: {
      spaceBetween: 50,

      slidesPerView: 3,

      slidesPerGroup: 3,
    },

    968: {
      spaceBetween: 50,

      slidesPerView: 2,

      slidesPerGroup: 2,
    },

    580: {
      spaceBetween: 34,

      slidesPerView: 2,

      slidesPerGroup: 2,
    }
  },

});

// Чекбоксы
const MOBILE_WIDTH = 580;
let acc;
const accWrap = document.querySelector(".js-accordion-wrap");
const checkboxes = accWrap.querySelector(".js-checkboxes");
const accHeader = accWrap.querySelector(".js-accordion-heading");
const accFilter = document.querySelector('.editions__fieldset');

function sortElems(elems) {
  elems.sort(function (a, b) {
    const valueA = parseInt(a.parentNode.dataset.position);
    const valueB = parseInt(b.parentNode.dataset.position);

    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  });
}

function getWindowWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
}

function removeCheckbox (e) {
  checkboxes.append(e.target.parentElement);
  e.target.removeEventListener('change', removeCheckbox);
}

function onAccordionClick(evt, ui) {
  const checkedBoxes = Array.from(accWrap.querySelectorAll(".js-checkbox"));
  sortElems(checkedBoxes);

  if (!ui.newHeader[0]) {
    checkedBoxes.forEach(function (el) {
      if (el.checked) {
        accFilter.before(el.parentNode);
        el.addEventListener('change', removeCheckbox);
      }
    });
  } else {
    checkedBoxes.forEach(function (el) {
      checkboxes.append(el.parentNode);
      el.removeEventListener('change', removeCheckbox);
    });
  }
}

function checkWindowWidth() {
  const currentWidth = getWindowWidth();
  const checkedBoxes = Array.from(accWrap.querySelectorAll(".js-checkbox"));

  if (currentWidth > MOBILE_WIDTH && acc) {
    acc.accordion("destroy");
    acc = false;
    checkedBoxes.forEach(function (el) {
      checkboxes.append(el.parentNode);
    });
  } else if ((currentWidth <= MOBILE_WIDTH) & !acc) {
    acc = $(".js-accordion").accordion({
      header: '.js-accordion-heading',
      collapsible: true,
      active: false,
      icons: false,
      heightStyle: "auto",
      beforeActivate: function (evt, ui) {
        onAccordionClick(evt, ui);
      }
    });

    checkedBoxes.forEach(function (el) {
      if (el.checked) {
        accFilter.before(el.parentNode);
      }
    });
  }
}

checkWindowWidth();

// Прокрутка на мобильной версии каталог
function scroll() {
  const content = document.querySelector('.catalog__content-left');

  content.scrollIntoView({behavior: "smooth"});
}

function scrolling() {
  const artists = document.querySelectorAll('.accordion__artists');
  const currentWidth = getWindowWidth();
  const MOBILE_WIDTH = 580;

  if (currentWidth < MOBILE_WIDTH) {
    artists.forEach((el) => {
      el.addEventListener('click', scroll);
    })
  }

  if (currentWidth > MOBILE_WIDTH) {
    artists.forEach((el) => {
      el.removeEventListener('click', scroll);
    })
  }
}

scrolling();

// Секция события
function developmentsSection() {
  const TABLET_WIDTH = 968;
  const MOBILE_WIDTH = 580;
  const currentWidth = getWindowWidth();
  const cardLinks = document.querySelectorAll('.developments__card-link');
  const moreEventsBtn = document.querySelector('.developments__card-btn');

  if (currentWidth > TABLET_WIDTH) {
    for (const i in cardLinks) {
      if(i > 2) {
        cardLinks[i].setAttribute('tabindex', '-1');
      }
    }
  }

  if (currentWidth < TABLET_WIDTH && currentWidth > MOBILE_WIDTH) {
    for (const i in cardLinks) {
      if(i > 1) {
        cardLinks[i].setAttribute('tabindex', '-1');
      }
  }
}

  moreEventsBtn.addEventListener('click', function () {
    for (const link of cardLinks) {
      link.setAttribute('tabindex', '0');
    }
  });

  moreEventsBtn.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      moreEventsBtn.click();
    }
  })
}

developmentsSection();

// Секция издания
function editionsSection() {
  const checkBoxes = document.querySelectorAll('.editions__checkbox');

  for (const checkBox of checkBoxes) {
    checkBox.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        checkBox.click();
      }
    })
  }
}

editionsSection();

// Секция проекты
function projectsSection() {
  const markers = document.querySelectorAll('.marker');

  for (const marker of markers) {
    marker.addEventListener('click', function() {
      marker.classList.toggle('marker-active');
      marker.childNodes[1].classList.toggle('tooltip-visable');
    })

    marker.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        marker.click();
      }
    })
  }

  let projectsSlider = new Swiper(".projects__slider-container", {
    navigation: {
      nextEl: ".projects__btn-next",
      prevEl: ".projects__btn-prev"
    },

    breakpoints: {

      1200: {
        spaceBetween: 50,

        slidesPerView: 3,

        slidesPerGroup: 3,
      },


      968: {
        spaceBetween: 50,

        slidesPerView: 2,

        slidesPerGroup: 2,
      },

      580: {
        spaceBetween: 34,

        slidesPerView: 2,

        slidesPerGroup: 2,
      }
    },

  });
}

projectsSection();

// Инициализация "Инпутмаск"
const im = new Inputmask('+7 (999)-999-99-99');
const selectorTellContacts = document.querySelector('.contacts__input_tell');

im.mask(selectorTellContacts);

// Валидация
new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20
    },

    tel: {
      required: true,
      function: (name, vlaue) => {
        const phone = selectorTellContacts.inputmask.unmaskedvalue();

        return Number(phone) && phone.toString().length === 10;
      }
    }
  },

  messages: {
    name: 'Недопустимый формат, имени',
    tel:  'Недопустимый формат, телефона',
  },
  colorWrong: '#D11616',

  submitHandler: function(form) {
    let formData = new FormData(form);

    fetch('mail.php', {
      method: 'POST',
      body: formData
    }).then(() => {
      console.log('Отправлено');
      form.reset();
      modalSent();
    }).catch(() => console.log('Ошибка'));
  }
});

function modalSent() {
  const modalsWrap = document.querySelector('.modal-send-wrap');
  const modalSend = document.querySelector('.modal-send');
  modalsWrap.classList.add('modal-send-wrap-visable');
  modalSend.classList.add('modal-send-visable');
  document.body.classList.add('scroll-hidden');

  setTimeout(function () {
    modalSend.classList.remove('modal-send-visable');
    modalsWrap.classList.remove('modal-send-wrap-visable');
    document.body.classList.remove('scroll-hidden');
  }, 1500)
}

// Карта
ymaps.ready(init);
function init() {
  const mapElem = document.getElementById('map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.758468, 37.601088],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  let myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map__icon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);

  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
}

function moveMape() {
  const MOBILE_MAP = 580;
  const currentWidth = getWindowWidth();
  const map = document.getElementById('map');
  const address = document.querySelector('.contacts__address');
  const wrap = document.querySelector('.contacts__container');

  if (currentWidth < MOBILE_MAP) {
    map.remove();
    address.after(map);
  }

  if (currentWidth > MOBILE_MAP) {
    map.remove();
    wrap.append(map);
  }
}

moveMape();

window.addEventListener("resize", function () {
  checkWindowWidth();
  moveMape();
  developmentsSection();
  scrolling()
});

});







