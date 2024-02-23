class Alumno {
    constructor(nombre, segNombre, apellidoP, apellidoM, edad, idAlumno) {
        this.nombre = nombre;
        this.segNombre = segNombre;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.edad = edad;
        this.materiasInscritas = [];
        this.grupo = null;
        this.idAlumno = idAlumno;
    }
}

class Grupo {
    constructor(idGrupo) {
        this.idGrupo = idGrupo;
        this.promedio = 0;
    }
}

class Materia{
    constructor(nombre, calificaciones) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }
}

const altaAlumno = document.getElementById('formulario')                   //Crea una constante que lee lo que hay en la forma "formulario"

altaAlumno.addEventListener("submit", function(event){                     //Crea un evento que se activa al presionar el botón
    event.preventDefault();                                                //Previene que se recargue la pagina

    const name = document.getElementById("nombre").value                                   
    const sName = document.getElementById("segNombre").value
    const lName1 = document.getElementById("apellidoP").value
    const lName2 = document.getElementById("apellidoM").value
    const age = document.getElementById("edad").value                       //Lee lo que hay escrito en los recuadro en tiempo real
    const id = getId();                                                     //Llama a la función "getID"
    
    let dataAlumno = new Alumno(name, sName, lName1, lName2, age, id)           //Acomoda los datos leídos anteriormente en la clase "Alumno"

    let parseArray = JSON.parse(localStorage.getItem("hola")) || [];        //Obtiene los valores del Local Storage(hola) y los regresa a objetos, si no hay ningún valor, crea un array vacio
    parseArray.push(dataAlumno);                                            //"Sube" los datos al array 'Alumno'
    let arrayJSON = JSON.stringify(parseArray);                             //Tranforma los objetos a formato "string" 
    localStorage.setItem("hola", arrayJSON)                                 //Guarda en el Local Storage 

    let tablaref = document.getElementById("tabla1");
    let newTable = tablaref.insertRow(-1);

    let newref = newTable.insertCell(0)
    newref.textContent = name

    newref = newTable.insertCell(1)
    newref.textContent = sName

    newref = newTable.insertCell(2)
    newref.textContent = lName1

    newref = newTable.insertCell(3)
    newref.textContent = lName2

    newref = newTable.insertCell(4);
    newref.textContent = age;

    let materiaCell = newTable.insertCell(5);
    let materia = document.createElement("input");
    materiaCell.appendChild(materia);

    let calificacionCell = newTable.insertCell(6);
    let calificacion = document.createElement("input");
    calificacionCell.appendChild(calificacion);

    let inscripcionCell = newTable.insertCell(7);
    let inscribir = document.createElement("button");
    inscribir.textContent = "Inscibir";
    inscripcionCell.appendChild(inscribir);

    inscribir.addEventListener("click", (event) => {
        
        const nombreEE = materia.value
        const calificaciónEE = calificacion.value
        let experienciaEducativa = new Materia(nombreEE, calificaciónEE)
        let materiaArray = JSON.parse(localStorage.getItem("EE")) || [];        
        materiaArray.push(experienciaEducativa);                                            
        let materiaJSON = JSON.stringify(materiaArray);                          
        localStorage.setItem("EE", materiaJSON); 
    })
})

const limpiar = document.getElementById('borrar')                           //Crea una constante que lee lo que hay en la forma "borrar"

limpiar.addEventListener("submit", function(event){                         //Crea un evento que se activa al presionar el botón
    event.preventDefault();

    localStorage.clear();                                                   //Limpia el Local Storage
})

function getId() {
    let lastId = localStorage.getItem("ultimoID") || "-1";                  //Obtiene los valores del Local Storage(ultimoID), si no hay ningún valor, le da valor de -1
    let newId = JSON.parse(lastId) + 1;                                     //Regresa a objeto los valores obtenidos y le suma 1
    localStorage.setItem("ultimoID", JSON.stringify(newId));                //Transforma a string el valor anterior y lo guarda en el Local Storage(ultimoID)
    return newId;                                                           //Regresa el valor guardado
}





/*function arrayMaterias() {
    let arrayEE = JSON.parse(localStorage.getItem("EE")) || [];                 
    //arrayEE.push(experienciaEducativa);                                                                 
    localStorage.setItem("EE", JSON.stringify(arrayEE));  
    return arrayEE;   
} */