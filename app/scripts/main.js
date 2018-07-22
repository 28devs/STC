//
// Dots generate for sliders
//

const sliderDotBlocks = document.querySelectorAll(
  '[data-glide-el="controls[nav]"]:not([data-glide-generate-false])'
);

if (sliderDotBlocks) {
  sliderDotBlocks.forEach(function(dotBlock) {
    let sliderSlides = dotBlock.parentNode.parentNode.querySelector(
      '.glide__slides'
    );

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
          let bullets = document.querySelectorAll('.glide__bullet');
          bullets.forEach(function(elem) {
            elem.classList.remove('glide__bullet--active');
          });

          let activeBullet = document.querySelector(
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
    let bullets = document.querySelectorAll('.glide__bullet');
    bullets.forEach(function(elem) {
      elem.classList.remove('glide__bullet--active');
    });

    let activeBullet = document.querySelector(
      '.glide__bullet[data-glide-dir="=' + resultSliderG.index + '"]'
    );
    activeBullet.classList.add('glide__bullet--active');
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
//
//

const galleryBtn = document.querySelector('.gallery__btn');

if (galleryBtn) {
  const galleryBlock = document.querySelector('.gallery');

  galleryBtn.addEventListener('click', function() {
    galleryBlock.classList.remove('gallery--mobile-hide');
    galleryBtn.style.display = 'none';
  });
}
