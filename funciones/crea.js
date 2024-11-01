// script.js
document.addEventListener('DOMContentLoaded', () => {
  const imagen = document.getElementById('imagen');
  const colorSelect = document.getElementById('colorSelect');


  const imagenes = {
    Aqua: '/imagenes/imagenes-hilos/Aqua.webp',
    Azulcielo: '/imagenes/imagenes-hilos/Azul-cielo.jpg',
    Azulneblina: '/imagenes/imagenes-hilos/Azul-neblina.webp',
    Bugambilia: '/imagenes/imagenes-hilos/Bugambilia.webp',
    Camel: '/imagenes/imagenes-hilos/Camel.webp',
    Chedron: '/imagenes/imagenes-hilos/Chedron.webp',
    Durazno: '/imagenes/imagenes-hilos/Durazno.webp',
    Ivory: '/imagenes/imagenes-hilos/Ivory.webp',
    Lila: '/imagenes/imagenes-hilos/Lila.webp',
    Listonsuelto: '/imagenes/imagenes-hilos/Liston-suelto.webp',
    Magenta: '/imagenes/imagenes-hilos/Magenta.webp',
    Mostaza: '/imagenes/imagenes-hilos/Mostaza.webp',
    Nude: '/imagenes/imagenes-hilos/Nude.webp',
    Paloderosa: '/imagenes/imagenes-hilos/Palo-de-rosa.webp',
    Rojo: '/imagenes/imagenes-hilos/Rojo.webp',
    Rosapastel: '/imagenes/imagenes-hilos/Rosa-pastel.webp',
    Sepia: '/imagenes/imagenes-hilos/Sepia.webp',
    TyeDie: '/imagenes/imagenes-hilos/Tye-Die.webp',
    Vainilla: '/imagenes/imagenes-hilos/Vainilla.webp',
    Verdeolivo: '/imagenes/imagenes-hilos/Verde-olivo.webp'
};


  colorSelect.addEventListener('change', () => {
      const colorSeleccionado = colorSelect.value;
      if (imagenes[colorSeleccionado]) {
          imagen.src = imagenes[colorSeleccionado];
      } else {
          imagen.src = '/imagenes/imagenes-hilos/Liston-suelto.webp';  // Limpia la imagen si no hay una ruta definida
      }
  });

  // Establecer una imagen predeterminada
  colorSelect.dispatchEvent(new Event('change'));
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const imagen2 = document.getElementById('imagen2');
  const colorSelect2 = document.getElementById('colorSelect2');


  const imagenes = {
    Aqua: '/imagenes/imagenes-hilos/Aqua.webp',
    Azulcielo: '/imagenes/imagenes-hilos/Azul-cielo.jpg',
    Azulneblina: '/imagenes/imagenes-hilos/Azul-neblina.webp',
    Bugambilia: '/imagenes/imagenes-hilos/Bugambilia.webp',
    Camel: '/imagenes/imagenes-hilos/Camel.webp',
    Chedron: '/imagenes/imagenes-hilos/Chedron.webp',
    Durazno: '/imagenes/imagenes-hilos/Durazno.webp',
    Ivory: '/imagenes/imagenes-hilos/Ivory.webp',
    Lila: '/imagenes/imagenes-hilos/Lila.webp',
    Listonsuelto: '/imagenes/imagenes-hilos/Liston-suelto.webp',
    Magenta: '/imagenes/imagenes-hilos/Magenta.webp',
    Mostaza: '/imagenes/imagenes-hilos/Mostaza.webp',
    Nude: '/imagenes/imagenes-hilos/Nude.webp',
    Paloderosa: '/imagenes/imagenes-hilos/Palo-de-rosa.webp',
    Rojo: '/imagenes/imagenes-hilos/Rojo.webp',
    Rosapastel: '/imagenes/imagenes-hilos/Rosa-pastel.webp',
    Sepia: '/imagenes/imagenes-hilos/Sepia.webp',
    TyeDie: '/imagenes/imagenes-hilos/Tye-Die.webp',
    Vainilla: '/imagenes/imagenes-hilos/Vainilla.webp',
    Verdeolivo: '/imagenes/imagenes-hilos/Verde-olivo.webp'
};


  colorSelect2.addEventListener('change', () => {
      const colorSeleccionado = colorSelect2.value;
      if (imagenes[colorSeleccionado]) {
          imagen2.src = imagenes[colorSeleccionado];
      } else {
          imagen2.src = '/imagenes/imagenes-hilos/Liston-suelto.webp';  // Limpia la imagen si no hay una ruta definida
      }
  });

  // Establecer una imagen predeterminada
  colorSelect2.dispatchEvent(new Event('change'));
});

// enviar mensaje
function enviarWhatsApp() {
  const color1 = document.getElementById("colorSelect").value;
  const color2 = document.getElementById("colorSelect2").value;

  const mensaje = `Hola! Me gustaría personalizar mi bolsa con los siguientes colores:\n- Color 1: ${color1}\n- Color 2: ${color2}`;

  const numero = "1234567890"; // Reemplaza con el número de teléfono
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}
