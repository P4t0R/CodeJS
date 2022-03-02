
/*
 ====================================================
||   Name: SuperHero-Finder                         ||
||   Ver: 1.0 - 01/03/2022 - Version inicial        ||
||   Date: 01/03/2022                               ||
||   Author: Patricio Reyes                         ||
||   Github: https://github.com/P4t0R               ||
||   Note: JavaScript + Jquery + Ajax               ||
 ====================================================

Resumen: Se obtienen los datos de la API https://www.superheroapi.com
API: https://www.superheroapi.com
docu: https://www.superheroapi.com/
id: https://www.superheroapi.com/ids.html
Call: https://superheroapi.com/api/access-token/character-id
TOKEN: 4905856019427443
API-https://superheroapi.com/api/4905856019427443/character-id

Buscar por Nombre: https://superheroapi.com/api.php/4905856019427443/search/
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
        //Manejo de errores
        try {
            valueInput > 0 && valueInput <= 731 ? search(valueInput) : searchName(valueInput)
            
            //Esperamos hasta que seleccione un Heroe
            $('body').on('click','.btn-superHero',function(){
                //Heroe Seleccionado
                var $hero = $(this).attr('hero')

                //Funcion de busqueda Heroe Seleecionado
                search($hero)
                })  

        }
        catch (error) {
            console.error(error);
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
          }
    })
})


//Funcion de busqueda por Nombre
function searchName(valueInput){
    $.ajax({
        type: 'GET',
        url: "https://superheroapi.com/api.php/4905856019427443/search/" + valueInput ,
        dataType: 'JSON',

        success: data => {
            console.log(data.response);
            //Comprueba que la respuesta contenga datos
            if (data.response === 'success'){
            let htmlInsert = `<div class="row"><div class="card-columns">`
            //Recorremos lista de resultados
            for(let e of data.results){
                //Declaramos variables de los datos requeridos
                let id = e.id
                let nombre = e.name
                let img = e.image.url
                let conexiones = e.connections['group-affiliation']
                let ocupacion = e.work.occupation
                let priAparicion = e.biography['first-appearance']
                let altura = e.appearance.height.join(" - ")
                let peso = e.appearance.weight.join(" - ")
                let alias = e.biography.aliases.join(", ")
                let publicado = e.biography.publisher

                //Diseñamos tarjeta
                let card = `
                        <div class="card1" style="width: 20rem;">
                            <img class="card-img-top img-fluid" src="${img}" alt="${nombre}">
                            <div class="card-body1">
                                <h4 class="card-title1 font-weight-bold">${nombre}</h4>
                                <h6 class="card-text1 text-capitalize font-weight-bold">${e.biography.alignment} Boy &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Id: ${id}</h6>
                                <br>
                                <br>
                                <p class="card-text1">Aliases: ${alias}</p>
                                <p class="card-text1">Race: ${e.appearance.race}</p>
                                <p class="card-text1">Gender: ${e.appearance.gender} -- ${e.appearance.height[1]} -- ${e.appearance.weight[1]}</p>
                                <p class="card-text1">Place of birth: ${e.biography['place-of-birth']}</p>       
                                <br>
                                <br>                  
                                <a hero="${id}" href="#${id}" class="btn-superHero btn btn-primary">Ver Perfil</a>
                            </div>
                        </div>`
            //Almacenamos texto 
            htmlInsert += card
            }

            //Mostrar
            $('#tabla').show()

            //Ocultar
            $('#heroShow').hide()
            $('#chartContainer').hide()


            //Total de Super heroes encontrados
            $('#totalF').html(`Total de Super Heroes encontrados --> ${data.results.length}`)
            
            //Dibujamos tarjetas
            $('#tabla').html(htmlInsert+'</div></div>')
        }
        else{
            $('#totalF').html(`Super Heroe no encontrado --> ${valueInput}`) }
        }
    })
}


//Funcion de busqueda Heroe Seleecionado
function search(hero){
    $.ajax({
        type: 'GET',
        url: "https://superheroapi.com/api.php/4905856019427443/" + hero ,
        dataType: 'JSON',
        success: data => {
            console.log(data);

            let htmlInsert = `<div class="row"><div class="card-columns">`
            
            //Declaramos variables de los datos requeridos
            let id = data.id
            let nombre = data.name
            let img = data.image.url
            let conexiones = data.connections['group-affiliation']
            let ocupacion = data.work.occupation
            let priAparicion = data.biography['first-appearance']
            let altura = data.appearance.height.join(" - ")
            let peso = data.appearance.weight.join(" - ")
            let alias = data.biography.aliases.join(", ")
            let publicado = data.biography.publisher
            //Variables de Power
            let combat = data.powerstats.combat
            let durability = data.powerstats.durability
            let intelligence = data.powerstats.intelligence
            let power = data.powerstats.power
            let speed = data.powerstats.speed
            let strength = data.powerstats.strength

            //Comprobamos que contenga dato numerico, si es falso asignamos 1
            let regEX = /^[0-9]+$/
            regEX.test(combat)? 1 : combat=1
            regEX.test(durability)? 1 : durability=1
            regEX.test(intelligence)? 1 : intelligence=1
            regEX.test(power)? 1 : power=1
            regEX.test(speed)? 1 : speed=1
            regEX.test(strength)? 1 : strength=1
         
            //Diseñamos tarjeta
            let card = `
                <div class="card bg-card" style="width: 60rem;">
                    <div class="row no-gutters">
                        <div class="col-sm-5">
                            <img class="card-img img-fluid" src="${img}" alt="${nombre}">
                        </div>
                        <div class="col-sm-7">
                            <div class="card-body">
                                <h2 class="card-title text-center font-weight-bold pb-3">${nombre}</h2>
                                <p class="card-text text-capitalize font-weight-bold">${data.biography.alignment} Boy &emsp;&emsp;&emsp;&emsp; Id: ${id}</p>
                                <p class="card-text">Apodos: ${alias}</p>
                                <p class="card-text">Altura: ${altura}</p>
                                <p class="card-text">Peso: ${peso}</p>
                                <p class="card-text">Place of birth: ${data.biography['place-of-birth']}</p>  
                                <p class="card-text">Ocupaión: ${ocupacion}</p>
                                <p class="card-text">Conexiones: ${conexiones}</p>
                                <p class="card-text">Primera Aparición: ${priAparicion}</p>
                                <p class="card-text">Publicado por: ${publicado}</p>   
                                <a href="${img}" class="btn btn-primary">Ver Foto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `

            //Almacenamos texto 
            htmlInsert += card
            
            //Super heroes encontrado
            $('#totalF').html(`Super Heroe encontrado --> ${nombre}`)
            
            //Ocultamos 
            $('#tabla').hide()

            //Mostrar
            $('#heroShow').show()
            $('#chartContainer').show()



            //Dibujamos Heroe
            $('#heroShow').html(htmlInsert+'</div></div>')


            //Diseñamos el grafico
            var chart = new CanvasJS.Chart("chartContainer", {
                theme: "dark2", // "light1", "light2", "dark1", "dark2"
                exportEnabled: true,
                animationEnabled: true,
                title: {
                    text: `Estadísticas de Poder ${nombre}`
                },
                //Datos del grafico
                data: [{
                    type: "pie",
                    startAngle: 25,
                    toolTipContent: "<b>{label}</b>: {y}%",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 18,
                    indexLabel: "{label}  {y}",
                    dataPoints: [
                        { y: `${combat}`, label: "Combate" },
                        { y: `${durability}`, label: "Durabilidad" },
                        { y: `${intelligence}`, label: "Inteligencia" },
                        { y: `${power}`, label: "Poder" },
                        { y: `${speed}`, label: "Velocidad" },
                        { y: `${strength}`, label: "Fuerza" }
                    ]
                }]
            })
            //Dibuja Grafico
            chart.render();
        }
    })
}
