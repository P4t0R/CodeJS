//Desarrollo ej1

/*
1. Al hacer click sobre la caja que dice "haz click", aumenta el tamaño y el color de la caja que dice "cambiame" 
(sólo utiliza jQuery). Siente la libertad de agregar las clases o ids que sean necesarios 
(no modificar estructura html entregada).
*/

//Esperamos que el sitio cargue
$(document).ready(()=>{
    $('#hazClick').click(()=>{
        $('#cambiame').css('padding', '100px').css('font-size', '100px').css('background-color', 'rgb(205, 255, 216)', '!important')
    })
})
