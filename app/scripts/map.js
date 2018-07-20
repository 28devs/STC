const loc = [
  59.94777449,
  30.2728923,
  'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="37" height="52"><path fill="#26A88A" fill-rule="evenodd" d="M30.732,5.327 C27.332,1.890 22.810,-0.007 18.000,-0.007 C13.185,-0.007 8.665,1.890 5.262,5.327 C-1.029,11.694 -1.812,23.667 3.570,30.924 L18.000,51.995 L32.402,30.953 C37.809,23.667 37.024,11.694 30.732,5.327 L30.732,5.327 ZM18.165,24.687 C14.539,24.687 11.590,21.704 11.590,18.037 C11.590,14.374 14.539,11.392 18.165,11.392 C21.787,11.392 24.736,14.374 24.736,18.037 C24.736,21.704 21.787,24.687 18.165,24.687 L18.165,24.687 Z"/></svg>'
];

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(loc[0], loc[1]),
    styles: [
      {
        stylers: [
          {
            saturation: -100
          }
        ]
      }
    ]
  });

  var markersBounds = new google.maps.LatLngBounds();
  var markerPosition = new google.maps.LatLng(loc[0], loc[1]);

  markersBounds.extend(markerPosition);

  var marker = new google.maps.Marker({
    position: markerPosition,
    map: map,
    icon: {
      anchor: new google.maps.Point(16, 16),
      url: loc[2]
    }
  });
}
