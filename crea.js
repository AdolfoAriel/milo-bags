document.addEventListener('DOMContentLoaded', function() {
    const color1Input = document.getElementById('color1');
    const color2Input = document.getElementById('color2');
    const bagImage = document.getElementById('bagImage');
  
    color1Input.addEventListener('input', updateBagImage);
    color2Input.addEventListener('input', updateBagImage);
  
    function updateBagImage() {
      const color1 = color1Input.value;
      const color2 = color2Input.value;
  
      // Ejemplo de cómo cambiar la imagen de la bolsa según los colores seleccionados
      // Esto puede variar según cómo quieras aplicar los colores a la imagen de la bolsa
      bagImage.src = `imagenes/bolsa_${color1.slice(1)}_${color2.slice(1)}.png`;
    }
  });
  