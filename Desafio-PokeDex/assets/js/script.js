


//https://www.superheroapi.com
//4905856019427443




$(document).ready(() =>{

    $('form').submit(()=> {
        event.preventDefault()
        //capturamos el texto ingresado en el formulario
        let valueInput = $('#inValue').val()
        console.log(valueInput);


        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + valueInput,
            type: 'GET',
            dataType: 'JSON',
            success: data => {
                console.log(data)    //verifica que se reciben datos
                //declara variables data recibida
                let nombre = data.name
                let img = data.sprites.front_default
                let peso = data.weight
      
                $('#pokeinfo').html(` 
                          <div class="text-center">
                              <h3>${nombre}</h3>
                              <img src="${img}">
                              <h6>Peso: ${peso}</h6>
                          </div>
                `)

                //Ajustando modelo de datos al grafico
                let estadisticas = []
                data.stats.forEach(function(s){
                    estadisticas.push({
                        label : s.stat.name,
                        y : s.base_stat
                    })

                })

                //COnfiguracion grafico
                let config = {
                    animationEnabled : true,
                    title : {
                        text : "Estadisticas"
                    },
                    axisY : {
                        title : "Valor"
                    },
                    axisX : {
                        title : "Estadisticas"
                    },
                    data : [
                        {
                            type : "column",
                            dataPoints : estadisticas
                        }
                    ]
                }


                //Renderizar grafico
                let chart = new CanvasJS.Chart('pokeStats', config)
                chart.render()


            }
        })
    })
})


//https://canvasjs.com/javascript-charts/

