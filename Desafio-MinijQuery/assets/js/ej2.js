//Desarrollo ej2

/* 
2. Dar vida al menú, incorporando la funcionalidad de que se oculte y muestre las opciones
a partir de un click en el icono de la hamburguesa, utiliza algún efecto para que el cambio sea suave.
*/

//Esperamos que el sitio cargue
$(document).ready(()=>{
    $('#btn-n1').click(()=>{
        $('#opciones').toggle(1000)
    })
})
