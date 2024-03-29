/*Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
45.
Entrada:Grados Kelvin: 318.15
Salida:Grados Fahrenheit: 113. 
 14.
Entrada:Grados Kelvin: 287.15
Salida:Grados Fahrenheit: 57.2. 

Pruébalo con los valores numéricos que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjuntar el link.*/


function tempConverter (){
    let tempC;
    
    while (true){
        tempC = prompt("Ingrese la temperatura en °C");

        if (!isNaN(tempC)){
            tempC = parseFloat(tempC);
            break;
        } else { 
            alert ("Por favor, ingrese un número válido");
        }
    } 

    let celsiusFarenheit =((tempC *(9/5)) + 32);
    let celsiusKelvin = (tempC + 273.15);    

    console.log("°F=", celsiusFarenheit);
    console.log("°K=", celsiusKelvin);
}
   
    tempConverter();


