//Desarrollo Desafío - Cachipún contra la máquina


/*
Requerimientos 
1. Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es decir, cuántas veces deberá jugar contra la computadora. Por cada juego, se debe mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta dependiendo de las veces que haya indicado el usuario que desea jugar. 
2. Solicitar al usuario que indique su jugada. Las opciones son las siguientes: ● Piedra ● Papel ● Tijera 
3. Generar una jugada automática para la máquina usando la función Math.random() de Javascript. 
4. Definir a un ganador considerando la jugada del usuario y la generada automáticamente para la máquina. 
5. Indicar el resultado de la partida dependiendo del caso: ● Felicitar al ganador en caso de ser el usuario. ● Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea la que gane. ● Declarar un empate.
*/

//Variables auxiliares
var cnt = 0;
var manos = ['Piedra','Papel','Tijera']

//Historial de Usuario y Maquina
var hUser = []
var hMaq = []
//Historial de resultados
var resultados = []


//Solicitud de dato al usuario
var juegos = parseInt(prompt('Cuántas veces desea jugar?'));

//Ciclo while
while(cnt < juegos){

    while(true == true){
        //Jugada usuario
        var jugadaUsuario = parseInt(prompt('Seleecione su jugada: \n\n \
                                    Opción \t\t\t Jugada \n\n \
                                    \t 1 \t   --> \t Piedra  \n \
                                    \t 2 \t   --> \t Papel \n \
                                    \t 3 \t   --> \t Tijera \n\n\n'));
        //Comprueba la opción ingresada                            
        if(jugadaUsuario == 1 || jugadaUsuario == 2 || jugadaUsuario == 3 ){
            break;
        }
        alert('Debe ingresar una opción correcta (1 --> 2 --> 3)');
    }

    //Jugada maquina aleatoria
    var jugadaMaquina = Math.floor(Math.random()*3) + 1;  //sumamos 1 para dejarla en el mismo rango de la jugada del usuario (1,2,3)

    //Creamos un historial de jugadas
    hUser.push(jugadaUsuario);
    hMaq.push(jugadaMaquina);

    //Llamado a la función
    win(jugadaUsuario, jugadaMaquina);

    //Aumentamos contador
    cnt++;
}



//Tabla de resultados
document.write('<div class="c2">')
document.write('<h3 class="py-5 px-5 text-center bg-warning font-weight-bold">Resumen del Juego</h3>')

document.write('\
            <table class="table table-hover table-dark">\
            <thead>\
                <tr>\
                <th scope="col"># Juego</th>\
                <th scope="col">Jugador</th>\
                <th scope="col">Maquina</th>\
                <th scope="col">Resultado</th>\
                </tr>\
            </thead>\
            <tbody>\
            ')

for(var i=0; i<juegos; i++) {
    document.write(`\
                <tr>\
                <th scope="row">${i+1}</th>\
                <td>${manos[hUser[i]-1]}</td>\
                <td>${manos[hMaq[i]-1]}</td>\
                <td>${resultados[i]}</td>\
                </tr>\
                `)
            }

document.write('\
            </tbody>\
            </table>\
            ')


//Ganador final
var emp = 0
var gana = 0
var pierde = 0

for (var valor of resultados) {
    if(valor=='Empate'){
        emp++; }
    if(valor=='Gana'){
        gana++; }
    if(valor=='Pierde'){
        pierde++; }
}

//Comprueba el ganador
if(gana > pierde){
    document.write(`<h3 class="py-5 px-5 text-center bg-success">Felicitaciones ganaste el juego con ${gana} victorias !</h3>`) }
    
if(pierde > gana){
    document.write(`<h3 class="py-5 px-5 text-center bg-danger">Perdiste el Juego,te derrotaron en ${pierde} ocaciones !</h3>`) }

if(gana == pierde){
    document.write(`<h3 class="py-5 px-5 text-center bg-secondary">Fue un juego reñido Empataron!, cada uno obtuvo ${gana} victorias y ${emp} empates</h3>`) }
    
document.write('</div>')






//Función, tambien guardamos resultados en variable [resultados]
function win(jugadaUsuario,jugadaMaquina){

        //Empate
        if(jugadaUsuario==jugadaMaquina){
            alert('Wow Empataron ya que ambos elijieron --> ' + manos[jugadaUsuario-1]);
            resultados.push('Empate');
        }

        //Jugador elije Piedra
        if(jugadaUsuario==1){
            if(jugadaMaquina==2){
                alert('Buuh Perdiste!, ya que la maquina eligió \t --> \t' + manos[jugadaMaquina-1])
                resultados.push('Pierde') }  
            if(jugadaMaquina==3){
                alert('Felicitaciones Ganaste!, ya que la maquina eligió \t --> \t' + manos[jugadaMaquina-1])
                resultados.push('Gana') }
            }
      
        //Jugador elije Papel
        if(jugadaUsuario==2){
            if(jugadaMaquina==1){
                alert('Felicitaciones Ganaste!, ya que la maquina eligió \t --> \t' + manos[jugadaMaquina-1])
                resultados.push('Gana') }
            if(jugadaMaquina==3){
                alert('Buuh Perdiste!, ya que la maquina eligió \t --> \t' + manos[jugadaMaquina-1]) 
                resultados.push('Pierde') }
            }
    
        //Jugador elije Tijera
        if(jugadaUsuario==3){
            if(jugadaMaquina==1){
                alert('Buuh Perdiste!, ya que la maquina eligió \t --> \t' + manos[jugadaMaquina-1]) 
                resultados.push('Pierde') }
            if(jugadaMaquina==2){
                alert('Felicitaciones Ganaste!, ya que la maquina eligió \t --> \t' + manos[jugadaMaquina-1])
                resultados.push('Gana') }
            }
}








