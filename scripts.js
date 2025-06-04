/* 

Variables: Son un fragmento de memoria donde almacenamos información. 
Pueden ser números, información sobre un usuario, varios usuarios, p
roductos en un carrito de compras de Amazon o incluso texto.

Función: es un fragmento de código que no se ejecuta por sí solo. 
Solo se ejecuta cuando le damos una orden. Esta orden puede ser al hacer 
clic en un botón o incluso dentro de nuestro código.

document => HTML
querySelector
*/
let circulo = document.querySelector(".circulo")
let imagen = document.querySelector(".starbucks-img")

function cambiarColor(color){
    circulo.style.background = color
}

function cambiarImagen(src){
    imagen.src = src
}





