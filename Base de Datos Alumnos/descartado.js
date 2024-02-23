//let dataAlumno = new Alumno(altaAlumno)

    //let leerData = dataToString(dataAlumno);

    /*const name = document.getElementById("nombre").value
    const sName = document.getElementById("segNombre").value
    const lName1 = document.getElementById("apellidoP").value
    const lName2 = document.getElementById("apellidoM").value
    const age = document.getElementById("edad").value*/

    //saveData(dataAlumno)

    /*function dataToString (dataAlumno) {
    const name = document.getElementById("nombre").value
    const sName = document.getElementById("segNombre").value
    const lName1 = document.getElementById("apellidoP").value
    const lName2 = document.getElementById("apellidoM").value
    const age = document.getElementById("edad").value

    let dataAlumno = new Alumno(name, sName, lName1, lName2, age)
}*/

/*function saveData(dataAlumno) {
    let parseArray = JSON.parse(localStorage.getItem("hola")) || [];
    parseArray.push(dataAlumno);
    let arrayJSON = JSON.stringify(parseArray);
    localStorage.setItem("hola", arrayJSON)
}*/

let dataAlumno = new Alumno(name, sName, lName1, lName2, age, id, EEinscritas)           //Acomoda los datos leídos anteriormente en la clase "Alumno"

    let parseArray = JSON.parse(localStorage.getItem("hola")) || [];        //Obtiene los valores del Local Storage(hola) y los regresa a objetos, si no hay ningún valor, crea un array vacio
    parseArray.push(dataAlumno);                                            //"Sube" los datos al array 'Alumno'
    let arrayJSON = JSON.stringify(parseArray);                             //Tranforma los objetos a formato "string" 
    localStorage.setItem("hola", arrayJSON)  