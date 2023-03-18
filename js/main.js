function areaTriangulo(){
    var b;
    var h;
    var area;
    
    b = parseInt(prompt("Ingrese la base "));
    h = parseInt(prompt("Ingrese la altura"));
    
    area = b*h/2;
    
    alert("El area del triangulo es: " + area);
}

function Suma(){
    var A;
    var B;
    var suma;

A = parseInt(prompt("Por favor ingrese el primer valor"));
B = parseInt(prompt("Por favor ingrese el segundo valor"));

suma = A + B;

alert ("El resultado de la suma es: " + suma)
}

function saludo(){
    alert("Hola bienvenido a este web side")
}

// Quitar una clase remove
// Colocar una clase add
// Poner y quitar toggle
// getElementById CAPTURAR ELEMENTOS  
function circulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("circulo");

}

function rectangulo(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("rectangulo");
}

function imagen(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("imagen");
}

function mtop(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("mtop");
}

function mleft(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("mleft");
}  

function mrigth(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("mright");
}  

function mbottom(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("mbottom");
}  

function mdiagonal(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("mdiagonal");
} 

function cvalores(){
    var nombre;
    var color;

    nombre = prompt("Por favor ingrese su nombre")
    color = prompt("Por favor ingrese un color de la siguiente lista: Rojo, Verde, Azul")

    document.getElementById("figura").innerHTML = nombre;

    if (color == "Rojo") {
        document.getElementById("figura").style.background = "red";
        
    }
    else if (color == "Verde") {
        document.getElementById("figura").style.background = "green";
        
    }
    else{
        document.getElementById("figura").style.background = "blue";
    }
}

// Algoritmos
function suma(){
    var A = 0;
    var B = 0;
    var suma = 0;

    alert("Algoritmo que suma dos valores ingresados por el usuario");

    A = parseInt(prompt("Ingrese el primer valor a sumar"));
    B = parseInt(prompt("Ingrese el segundo valor a sumar"));

    suma = A + B;

    alert("El resultado de la operación es: " + suma) 
}

function operaciones(){
    var A = 0;
    var B = 0;
    var suma = 0;
    var resta = 0;
    var multiplicacion = 0;
    var division = 0;

    alert("Algoritmo que realiza operaciones basicas dos valores")

    A = parseInt(prompt("Ingresa el primer valor"))
    B = parseInt(prompt("Ingresa el segundo valor"))

    suma = A + B;
    resta = A - B;
    multiplicacion = A * B;
    division = A / B;

    alert("El resultado de su suma es: " + suma)
    alert("El resultado de su resta es: " + resta)
    alert("El resultado de su multiplicacion es: " + multiplicacion)
    alert("El resultado de su division es: " + division)
}

function promedio(){
    var A = 0;
    var B = 0;
    var C = 0;
    var D = 0;
    var E = 0;
    var F = 0;
    var G = 0;
    var promedio = 0;
    var resultado = 0;

    alert("Algoritmo que saca el promedio de notas de los estudiantes para saber si aprobaron o no")

    A = parseInt(prompt("Nota 1:"))
    B = parseInt(prompt("Nota 2:"))
    C = parseInt(prompt("Nota 3:"))
    D = parseInt(prompt("Nota 4:"))
    E = parseInt(prompt("Nota 5:"))
    F = parseInt(prompt("Nota 6:"))
    G = parseInt(prompt("Nota 7:"))
    
    resultado = A + B + C + D + E + F + G;
    promedio = resultado / 7;

    if (promedio >=6.2 ){
        alert("El estudiante aprobo: " + promedio)
    }

    else if(promedio <=6.1){
        alert("El estudiante no aprobo: " + promedio)
    }

}

function area(){
    var B;
    var H;
    var area;

    alert("Algoritmo para calcular el área de un triangulo ")

    B = parseInt(prompt("Ingrese la base:"))
    H = parseInt(prompt("Ingrese la altura:"))

    area = B * H /2;

    alert("El área de un triangulo es: " + area)

}

function pdr(){

    var capital = 0;
    var tiempo = 0;
    var mes = 0;
    var interes = 0;
    var inversion = 0;
    var total = 0;
   

    alert("Algoritmo que calcula la ganancia de inversión en un banco")

    capital = parseInt(prompt("Ingresa la cantidad a invertir:"))
    tiempo = parseInt(prompt("Ingresa los años a inventir:"))

    interes = (capital * 1.7) / 100;

    mes = tiempo * 12;

   inversion = interes * mes;

   total = capital + inversion;

    
    alert("El capital que invirtio es: " + capital+"\n Los años de inversión son: " + tiempo+"\n Su ganacia mesual es: " + interes+"\n su total ganado en interes es: "+inversion + "\n Su total a retirar es: " + total);
}

function descuento(){
 var precio = 4500;
 var kilos =0;
 var descuento = 0;
 var compra = 0;
 var total = 0;


   alert("Algoritmo que indica couento debe pagar en su compra en una fruteria")

   kilos = parseInt(prompt("Ingrese numero de kilos de compra:"))

    if(kilos <=2){
        descuento = 0;
        total = precio * kilos;

        alert("Su compra es de: " + total);
    }
    if ((kilos >=3)&&(kilos <=5)){
        
        compra = precio *kilos;
        descuento = (compra*10) /100;
        total = compra - descuento
        alert("Su compra es de: " + total+"\n El descuento fué de: "+descuento);
    }

    if ((kilos >=6)&&(kilos <=10)){
        
        compra = precio * kilos;
        descuento = (compra * 15) /100;
        total = compra - descuento
        alert("Su compra es de: " + total+"\n El descuento fué de: "+descuento);
    }

    if (kilos >=10){
        
        compra = precio * kilos;
        descuento = (compra * 20) /100;
        total = compra - descuento
        alert("Su compra es de: " + total+"\n El descuento fué de: "+descuento);
    }
   

}


// - Realizar un algoritmo de operaciones básicas que capture dos valores y nos arroje el resultados de la suma, resta, multiplicación y división de los dos valores.

// - El colegio A B C Requiere un sistema que le permita calcular el promedio de un alumno que tiene 7 calificaciones estas serán en una escala de 1 a 10 en donde aprueba si el promedio es >= a 6.2

// - Realizar un algoritmo que calcule el área de un triangulo ingresado los valores.

// - Inversión de capital un individuo desea invertir su capital en un banco y requiere 
//saber cuanto dinero ganara en N numero de años teniendo en cuenta que el banco paga
// un interés en 1,7% mensual
// Entrada capital, años 
// El porcentaje debe estar en años. 

// - Descuento venta una fruteria vende manzanas a 4.500 Kilo realice un algoritmo que permita saber al vendedor cuanto debe pagar un cliente teniendo en cuenta que la fruteria
// tiene la siguiente tabla de descuentos.  


