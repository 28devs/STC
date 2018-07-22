//
//jquery parents() pure js

Element.prototype.parents = function(selector) {
  var elements = [];
  var elem = this;
  var ishaveselector = selector !== undefined;

  while ((elem = elem.parentElement) !== null) {
    if (elem.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    if (!ishaveselector || elem.matches(selector)) {
      elements.push(elem);
    }
  }

  return elements;
};

//
// Dots generate for sliders
//

const sliderDotBlocks = document.querySelectorAll(
  '[data-glide-el="controls[nav]"]:not([data-glide-generate-false])'
);

if (sliderDotBlocks) {
  sliderDotBlocks.forEach(function(dotBlock) {
    let prentNode = dotBlock.parents('.glide')[0];
    let sliderSlides = prentNode.querySelector('.glide__slides');

    for (let i = 0; i < sliderSlides.children.length; i++) {
      let sliderDot = document.createElement('div');
      sliderDot.classList.add('glide__bullet');
      sliderDot.setAttribute('data-glide-dir', '=' + i);

      dotBlock.appendChild(sliderDot);
    }
  });
}

//
// Open/close mobile menu
//

const toggleMobileMenu = function() {
  document.querySelector('.menu-top').classList.toggle('menu-top-click');
  document.querySelector('.menu-middle').classList.toggle('menu-middle-click');
  document.querySelector('.menu-bottom').classList.toggle('menu-bottom-click');
};

const closeMobileMenu = function() {
  document.querySelector('.menu-top').classList.remove('menu-top-click');
  document.querySelector('.menu-middle').classList.remove('menu-middle-click');
  document.querySelector('.menu-bottom').classList.remove('menu-bottom-click');
};

const headerMenu = document.querySelector('.header__mobile-menu');

if (headerMenu) {
  headerMenu.addEventListener('click', function() {
    document.querySelector('.header').classList.toggle('header--open');

    toggleMobileMenu();
  });
}

//
// Minify header when page scroll
//

const stickyNav = document.querySelector('.header');

if (stickyNav) {
  stickyNav.classList.add('header--is-load');

  const headerScroll = function() {
    if (stickyNav) {
      this.scrollY < 10
        ? stickyNav.classList.remove('header--minify')
        : stickyNav.classList.add('header--minify');
    }

    if (window.innerWidth < 1200) {
      stickyNav.classList.remove('header--open');
      closeMobileMenu();
    }
  };
  headerScroll();

  window.addEventListener('scroll', headerScroll);
  window.addEventListener('resize', headerScroll);
}

//
// Services slider
//

const servicesSlider = document.querySelector('.services__slider .glide');

if (servicesSlider) {
  var servicesSliderInit = false;

  const servicesSliderFn = function() {
    if (window.innerWidth < 768) {
      if (!servicesSliderInit) {
        servicesSliderInit = new Glide(servicesSlider, {
          perView: 1
        });

        servicesSliderInit.on('move', function() {
          let prentsNode = servicesSliderInit.selector;
          let bullets = prentsNode.querySelectorAll('.glide__bullet');
          bullets.forEach(function(elem) {
            elem.classList.remove('glide__bullet--active');
          });

          let activeBullet = prentsNode.querySelector(
            '.glide__bullet[data-glide-dir="=' + servicesSliderInit.index + '"]'
          );
          activeBullet.classList.add('glide__bullet--active');
        });

        servicesSliderInit.mount();
      }
    } else {
      // destroy slider if init
      if (typeof servicesSliderInit === 'object') {
        servicesSliderInit.destroy();
        servicesSliderInit = false;
      }
    }
  };

  servicesSliderFn();
  window.addEventListener('resize', servicesSliderFn);
}

//
// Result slider
//

const resultSlider = document.querySelector('.results__slider .glide');

if (resultSlider) {
  const resultSliderG = new Glide(resultSlider, {
    perView: 1,
    gap: 0
  });

  resultSliderG.on('move', function() {
    let prentsNode = resultSliderG.selector;
    let bullets = prentsNode.querySelectorAll('.glide__bullet');
    bullets.forEach(function(elem) {
      elem.classList.remove('glide__bullet--active');
    });
    let activeBullet = prentsNode.querySelector(
      '.glide__bullet[data-glide-dir="=' + resultSliderG.index + '"]'
    );
    activeBullet.classList.add('glide__bullet--active');

    let currentCount = prentsNode.querySelector('.glide__count-current');
    currentCount.innerHTML = resultSliderG.index + 1;
  });

  resultSliderG.mount();
}

//
// Offices slider
//

const officesSlider = document.querySelector('.offices__slider');

if (officesSlider) {
  var officesSliderInit = false;

  const officesSliderFn = function() {
    if (window.innerWidth < 768) {
      if (!officesSliderInit) {
        officesSliderInit = new Glide(officesSlider, {
          perView: 1
        });

        officesSliderInit.on('move', function() {
          let bullets = officesSlider.querySelectorAll('.offices__bullet');
          bullets.forEach(function(elem) {
            elem.classList.remove('glide__bullet--active');
          });

          let activeBullet = officesSlider.querySelector(
            '.offices__bullet[data-glide-dir="=' +
              officesSliderInit.index +
              '"]'
          );
          activeBullet.classList.add('glide__bullet--active');
        });

        officesSliderInit.mount();
      }
    } else {
      // destroy slider if init
      if (typeof officesSliderInit === 'object') {
        officesSliderInit.destroy();
        officesSliderInit = false;
      }
    }

    officesSlider.style.marginBottom =
      -officesSlider.querySelector('.offices__item-content').clientHeight +
      'px';
  };

  officesSliderFn();
  window.addEventListener('resize', officesSliderFn);
}

//
// Gallery show more img btn
//

const galleryBtn = document.querySelector('.gallery__btn');

if (galleryBtn) {
  const galleryBlock = document.querySelector('.gallery');

  galleryBtn.addEventListener('click', function() {
    galleryBlock.classList.remove('gallery--mobile-hide');
    galleryBtn.style.display = 'none';
  });
}

//
// Team slider
//

const teamSlider = document.querySelector('.team__slider');

if (teamSlider) {
  var teamSliderInit = false;
  const teamSliderPrev = document.querySelector('.team__slider-prev');
  const teamSliderNext = document.querySelector('.team__slider-next');

  teamSliderPrev.addEventListener('click', function() {
    teamSliderInit.go('<');
  });

  teamSliderNext.addEventListener('click', function() {
    teamSliderInit.go('>');
  });

  const teamSliderFn = function() {
    if (window.innerWidth < 768) {
      if (!teamSliderInit) {
        teamSliderInit = new Glide(teamSlider, {
          perView: 2,
          bound: true,
          gap: 20,
          peek: 20,
          breakpoints: {
            439: {
              perView: 1
            }
          }
        });

        teamSliderInit.on('move', function() {
          let prentsNode = teamSliderInit.selector;
          let bullets = prentsNode.querySelectorAll('.glide__bullet');
          bullets.forEach(function(elem) {
            elem.classList.remove('glide__bullet--active');
          });

          let activeBullet = prentsNode.querySelector(
            '.glide__bullet[data-glide-dir="=' + teamSliderInit.index + '"]'
          );
          activeBullet.classList.add('glide__bullet--active');
        });

        teamSliderInit.mount();
      }
    } else {
      // destroy slider if init
      if (typeof teamSliderInit === 'object') {
        teamSliderInit.destroy();
        teamSliderInit = false;
      }
    }
  };

  teamSliderFn();
  window.addEventListener('resize', teamSliderFn);
}

//
// Init smoth scroll
//

var scroll = new SmoothScroll('.scroll-to[href*="#"]');

//
// Modals
//

function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function closeModal() {
  eventFire(document.querySelector('.basicLightbox '), 'click');
}

const getTargetHTML = function(elem) {
  let id = elem.getAttribute('data-show-id');

  const target = document.querySelector(`[data-id="${id}"]`);

  return target.outerHTML;
};

document.querySelectorAll('[data-show-id]').forEach(function(elem) {
  const html = getTargetHTML(elem);
  elem.onclick = basicLightbox.create(html).show;
});

//
// Forms demo
//

const forms = document.querySelectorAll('form');

const formSubmitFn = function(e) {
  e.preventDefault();

  this.classList.add('form--loading');

  setTimeout(() => {
    this.classList.remove('form--loading');
    this.classList.add('form--success');
  }, 2000);
};

if (forms.length) {
  forms.forEach(function(form) {
    form.addEventListener('submit', formSubmitFn);
  });
}
