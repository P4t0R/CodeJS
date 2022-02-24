
//Datos en lista de objetos
var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

//Escribiendo contenido
document.write('<h1>Estadisticas centro medico ñuñoa</h1>'); 


//1.Agregar datos en Traumatología
traumatologia.push(
    {hora: '9:00',  especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA',     rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '9:30',  especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE',     rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00',  especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA',     rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30',  especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA',     rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00',  especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE',     rut: '14345656-6', prevision: 'FONASA'}
    )

//Ordenamos la lista de objetos por hora - Se crea nueva lista ordenada
var ordertraumatologia = traumatologia.sort(function(a, b){ 
    if (parseInt(a.hora.replace(':','')) > parseInt(b.hora.replace(':',''))) {
        return 1;
    }
});


//2. Eliminar el primer y último elemento del arreglo de Radiología.
//elimina 1er elemento
radiologia.shift()
//elimina el ultimo elemento
radiologia.pop()

//3. Imprimir en HTML
//lista de consultas médicas de Dental
document.write(`<div class="alert alert-info mt-5" role="alert">
                    <p class="pt-1">Lista de consultas médicas Dental: </p> 
                `);

for (let objeto of dental) {
    document.write(`
    <p class="alert2">${objeto.hora} - ${objeto.especialista} - ${objeto.paciente} - ${objeto.rut} - ${objeto.prevision} </p>
    `)
}

document.write('</div>')


//4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.
document.write(`<div class="alert alert-info mt-5" role="alert">
                    <p class="pt-1">Listado total de todos los pacientes: </p> 
                `);
let cnt = 1
//Capturamos los pacientes de las 3 listas
for (let elemtObject of [radiologia, traumatologia, dental]){
    
    for (let objeto of elemtObject) {
        document.write(`
        <p class="alert2">${cnt++} - ${objeto.paciente}</p>
        `)
    }
}
document.write('</div>')



//5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental.
document.write(`<div class="alert alert-info mt-5" role="alert">
                    <p class="pt-1">Lista Dental pacientes isapre : </p> 
                `);

for (let objeto of dental) {
    if (objeto.prevision == 'ISAPRE') {
        document.write(`
            <p class="alert2">${objeto.paciente} - ${objeto.prevision} </p>
        `)
    }
}
document.write('</div>')


//6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología.
document.write(`<div class="alert alert-info mt-5" role="alert">
                    <p class="pt-1">Lista Traumatología pacientes fonasa : </p> 
                `);

for (let objeto of traumatologia) {
    if (objeto.prevision == 'FONASA') {
        document.write(`
            <p class="alert2">${objeto.paciente} - ${objeto.prevision} </p>
        `)
    }
}
document.write('</div>')


//Función crea table 
function tablas(listaObjeto, nombreLista){
    //Dibujando tablas
    document.write('<div class="tabla">')
    document.write(`<h3>${nombreLista}</h3>`)

    //Columnas tabla
    document.write(`
        <table class="table">
        <thead class="thead-dark">
            <tr class="size_txt">
            <th scope="col">#</th>
            <th scope="col">Hora</th>
            <th scope="col">Especialista</th>
            <th scope="col">Paciente</th>
            <th scope="col">Rut</th>
            <th scope="col">Previsión</th>
            </tr>
        </thead>
    `)

    //Poblando Filas tabla
    for(let objeto of listaObjeto){
        document.write(`
            <tbody>
            <tr>
                <th scope="row">${listaObjeto.indexOf(objeto)+1}</th>
                <th>${objeto.hora}</th>
                <td>${objeto.especialista}</td>
                <td>${objeto.paciente}</td>
                <td>${objeto.rut}</td>
                <td>${objeto.prevision}</td>
            </tr>
            `)
    }

    document.write(`
        </tbody>
        </table>
        `)
    
    document.write('</div>')
}


//Llamando tablas
tablas(radiologia,'Radiología')
tablas(ordertraumatologia,'Traumatología')
tablas(dental,'Dental')


