const prompt = require("prompt-sync")(); 
/*seguir = prompt("Bienvenido a la calculadora, quiere seguir? s/n: ");
if (seguir == "s") {
    opcion = prompt("1.- suma, 2.- resta 3.- Multiplicacion 4.- Division, que quiere hacer? ");
    if (opcion == 1) {
        console.log("esto es suma ")
        n1 = parseInt(prompt("Ingrese número 1: "));
        n2 = parseFloat(prompt("Ingrese número 2: "));
        resultado = n1 + n2;
        console.log(resultado);
    }
    else if (opcion == 2) {
    console.log(" Esto es resta")
    n1 = parseInt(prompt("Ingrese número 1: "));
    n2 = parseFloat(prompt("Ingrese número 2: "));
    resultado = n1 - n2;
    console.log(resultado)
    }
    else if (opcion == 3) {
    console.log(" Esto es Multiplicación ")
    n1 = parseInt(prompt("Ingrese número 1: "));
    n2 = parseFloat(prompt("Ingrese número 2: "));
    resultado = n1 * n2;
    console.log(resultado)
    }
    else 
    console.log(" Esto es division ")
    n1 = parseInt(prompt("Ingrese número 1: "));
    n2 = parseFloat(prompt("Ingrese número 2: "));
    resultado = n1 / n2;
    console.log(resultado)
}*/
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error("No se puede dividir entre cero");
    }
}

while (true) {
    console.log("Operaciones disponibles:");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicación");
    console.log("4. División");
    console.log("5. Salir");

    const opcion = prompt("Selecciona una operación (1/2/3/4/5):");

    if (opcion === '5') {
        console.log("¡Hasta luego!");
        break;
    }

    try {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));

        switch (opcion) {
            case '1':
                console.log("Resultado:", suma(num1, num2));
                break;
            case '2':
                console.log("Resultado:", resta(num1, num2));
                break;
            case '3':
                console.log("Resultado:", multiplicacion(num1, num2));
                break;
            case '4':
                console.log("Resultado:", division(num1, num2));
                break;
            default:
                console.log("Opción inválida. Por favor, selecciona una opción válida.");
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
}



