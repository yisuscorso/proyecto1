class Persona {
    constructor(nombre, apellido, curso) {
        this.nombre = nombre
        this.apellido = apellido
        this.curso = curso
    }
}

const persona1 = new Persona(prompt("Bienvenido al sistema de registro. Por favor, ingresa un nombre"), 
prompt("ahora, introduce tu apellido"), prompt("Que curso estás realizando"))

console.log(persona1)

// nombre = prompt("Introduce tu nombre")

let nota1, nota2, nota3, nota4;
let dato1, dato2, dato3, dato4, media;
dato1 = window.prompt("Vamos a comprobar cual es la valoración final sobre tu curso. Ingresa la nota de ingles:");
nota1 = parseInt(dato1);
dato2 = window.prompt("Ingresa la nota de matemáticas:");
nota2 = parseInt(dato2);
dato3 = window.prompt("Ingresa la nota de latin:");
nota3 = parseInt(dato3);
dato4 = window.prompt("Ingresa la nota de historia del arte:");
nota4 = parseInt(dato4);

media = (nota1 + nota2 + nota3 + nota4)/3;

if (media <5) {
    resultado = "Suspendido"
} else {
    resultado = "Aprobado. ¡Felicidades!, tu esfuerzo ha merecido la pena"
}

alert(`${persona1.nombre}, la valoración, teniendo en cuenta las notas de todas las asignaturas cursadas es: ${resultado}`)

