  // Kreiranje mape
  var map = L.map('map').setView([51.505, -0.09], 13);  // Koordinate centra mape i početni zoom nivo

  // Dodavanje OpenStreetMap sloja
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Dodavanje markera na mapu
  var marker = L.marker([51.505, -0.09]).addTo(map)
      .bindPopup("<b>Hello world!</b><br />I am a popup.")
      .openPopup();