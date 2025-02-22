// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigosArray() {
    let amigoIngresado = obtenerDato("amigo").value
    if (!amigoIngresado) {
        return alert("Por favor ingrese un nombre valido")
    }
    amigos.push(amigoIngresado)
    limpiarDatos("amigo")
    actulizarListaAmigos(amigos)
}

function actulizarListaAmigos (array) {
    let lista = obtenerDato("listaAmigos")
    limpiarDatos("listaAmigos")

    for (let i = 0; i < array.length;i++) {
        const nuevoElementoLista = document.createElement("li")
        nuevoElementoLista.textContent = array[i]
        lista.appendChild(nuevoElementoLista)
    }
}   


function sortearAmigo() {
    if (!amigos.length) {
        return alert("Debe primero ingresar nombres para obtener al amigo secreto")
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length)
    let elementoUL = obtenerDato("resultado")
    elementoUL.innerHTML = amigos[indiceAleatorio]
    obtenerDato("reiniciar").removeAttribute("disabled")
}

function obtenerDato(elementoId) {
    return document.getElementById(elementoId)

}

function limpiarDatos(elementoId) {
    let elementoHTML = obtenerDato(elementoId)
    if(elementoHTML.tagName === "INPUT") {
        elementoHTML.value = "";
    } else {
        elementoHTML.innerHTML = ""
    }
}

function reiniciarSorteo() {
    amigos = []
    elementoHTML = obtenerDato("listaAmigos")
    elementoHTML.innerHTML = ""

}

function reiniciarSorteo() {
    
}