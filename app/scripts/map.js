const marker =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='110' fill='none'%3E%3Cg filter='url%28%23filter0_d%29'%3E%3Cpath fill='url%28%23paint0_linear%29' d='M25 0C11.2149 0 0 11.3726 0 25.3512C0 42.6992 22.3726 68.1671 23.3251 69.2428C24.2198 70.2533 25.7818 70.2515 26.6749 69.2428C27.6274 68.1671 50 42.6992 50 25.3512C49.9997 11.3726 38.7849 0 25 0ZM25 38.1062C18.0644 38.1062 12.422 32.3843 12.422 25.3512C12.422 18.3181 18.0645 12.5965 25 12.5965C31.9355 12.5965 37.5779 18.3183 37.5779 25.3514C37.5779 32.3845 31.9355 38.1062 25 38.1062Z' transform='translate%2820 10%29'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' width='90' height='110' x='0' y='0' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0'/%3E%3CfeOffset dy='10'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeColorMatrix values='0 0 0 0 0.0117647 0 0 0 0 0.435294 0 0 0 0 0.960784 0 0 0 0.4 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear' x2='1' gradientTransform='matrix%280 70 -50 0 50 0%29' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23147DFF'/%3E%3Cstop offset='1' stop-color='%23036FF5'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E";

const loc = [53.501001, 49.27306, marker];

const loc1 = [53.2033534, 50.1436397, marker];

const loc2 = [54.7140382, 55.998835, marker];

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(54.692204, 52.908029),
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 13
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#000000'
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#144b53'
          },
          {
            lightness: 14
          },
          {
            weight: 1.4
          }
        ]
      },
      {
        featureType: 'administrative.country',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'administrative.country',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'administrative.province',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'administrative.province',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'administrative.neighborhood',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            color: '#08304b'
          },
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'landscape.natural.landcover',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'landscape.natural.terrain',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#0c4152'
          },
          {
            lightness: 5
          }
        ]
      },
      {
        featureType: 'poi.attraction',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi.business',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi.government',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi.place_of_worship',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#000000'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#0b434f'
          },
          {
            lightness: 25
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#000000'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#0b3d51'
          },
          {
            lightness: 16
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            color: '#146474'
          },
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'transit.line',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'transit.station',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'transit.station.airport',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'transit.station.bus',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'transit.station.rail',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          {
            color: '#021019'
          },
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      }
    ]
  });

  var markersBounds = new google.maps.LatLngBounds();
  var markerPosition = new google.maps.LatLng(loc[0], loc[1]);
  var marker1Position = new google.maps.LatLng(loc1[0], loc1[1]);
  var marker2Position = new google.maps.LatLng(loc2[0], loc2[1]);

  markersBounds.extend(markerPosition);
  markersBounds.extend(marker1Position);
  markersBounds.extend(marker2Position);

  new google.maps.Marker({
    position: markerPosition,
    map: map,
    icon: {
      size: new google.maps.Size(90, 110),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(45, 90),
      url: loc[2]
    }
  });

  new google.maps.Marker({
    position: marker1Position,
    map: map,
    icon: {
      size: new google.maps.Size(90, 110),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(45, 90),
      url: loc1[2]
    }
  });

  new google.maps.Marker({
    position: marker2Position,
    map: map,
    icon: {
      size: new google.maps.Size(90, 110),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(45, 90),
      url: loc2[2]
    }
  });
}
