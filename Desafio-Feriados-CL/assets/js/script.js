
/*
 ====================================================
||   Name: Festivos-CL                              ||
||   Ver: 1.0                                       ||
||   Date: 26/02/2022                               ||
||   Author: Patricio Reyes                         ||
||   Github: https://github.com/P4t0R               ||
||   Note: JavaScript + Jquery + Ajax               ||
 ===================================================

 Resumen: Se obtienen los datos de la API https://apis.digital.gob.cl/fl/feriados/ 
 ya que esta se encuentra actualizada.
*/


//Esperamos que el documento este cargado
$(document).ready(() =>{

    //Busqueda en Google NavBar
    $('#google').click(()=> {
        event.preventDefault()
        let busqueda = $('#busqGoogle').val()
        window.open('http://google.com/search?q='+busqueda)
        
    })

    //API
    $('form').submit(()=> {
        event.preventDefault()
        //capturamos el texto ingresado en el formulario
        let valueInput = $('#inValue').val()
    
        //Capturamos info de la API
        $.ajax({
            url: "https://apis.digital.gob.cl/fl/feriados/" + valueInput,
            type: 'GET',
            dataType: 'JSON',
            success: data => {
                //Se comprueba que data posea contenido
                data.length > 0 ? funcion1() : funcion2()

                function funcion1() {
                    //Total de encontrados
                    $('#totalF').html(`Total Feriados ${valueInput} --> ${data.length}`)

                    //Creamos String para Dibujamos Boostrap Table
                    let htmlInsert= `                         
                    <div class="Tabla">                          
                    <table class="table table-striped table-light">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    `
                    //Iteramos sobre la data recibida de la API
                    for(let i of data){
                        //Asignamos variables
                        let nombre = i.nombre
                        let fecha = i.fecha
                        let tipo = i.tipo
                        let filas =  `
                            <tr>
                                <th scope="row">${data.indexOf(i)+1}</th>
                                <td>${nombre}</td>
                                <td>${fecha}</td>
                                <td>${tipo}</td>
                            </tr>
                        `
                        //Actualizamos contenido del String
                        htmlInsert += filas
                    }

                    //Agregamos el String que sera reconocido como codigo HTML
                    $('#tabla').html(htmlInsert + `</tbody></table></div>`)
                }

                function funcion2(){
                    //Total de encontrados
                    $('#totalF').html(`No se encontraron días feriados en la fecha consultada.`)
                }
            }
        })
    })
})


