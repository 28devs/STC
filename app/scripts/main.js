//
// About certs slider
//

const servicesSlider = document.querySelector('.services__slider .glide');

if (servicesSlider) {
  var servicesSliderInit = false;

  const servicesSliderFn = function() {
    if (window.innerWidth < 768) {
      if (!servicesSliderInit) {
        servicesSliderInit = new Glide(servicesSlider, {
          perView: 1,
          breakpoints: {
            385: {
              perView: 1
            }
          }
        }).mount();
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