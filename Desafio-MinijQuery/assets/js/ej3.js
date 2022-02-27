//Desarrollo ej3

/* 
3. Dar un estilo a los elementos pares e impares de la lista al pasar el mouse sobre la caja roja y 
que vuelva a la normalidad cuando el mouse deje la caja (hint: mouseover(), mouseleave())
*/

//Esperamos que el sitio cargue
$(document).ready(()=>{
    $('.btn-n1').on('mouseover', function(){
        $('.imp').css('padding', '50px').css('background-color', 'brown', '!important')
        $('.par').css('padding', '50px').css('background-color', 'blueviolet', '!important')
    })
    
    $('.btn-n1').on('mouseleave', function(){
        $('.imp').css('padding', '1rem').css('background-color', 'transparent', '!important')
        $('.par').css('padding', '1rem').css('background-color', 'transparent', '!important')
    })
})

