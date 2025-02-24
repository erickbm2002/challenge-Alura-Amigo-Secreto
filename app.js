// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigosArray() {
    let amigoIngresado = obtenerDatoId("amigo").value
    if (!amigoIngresado) {
        return alert("Por favor ingrese un nombre valido")
    }
    amigos.push(amigoIngresado)
    limpiarDatos("amigo")
    actulizarListaAmigos(amigos)
}

function actulizarListaAmigos (array) {
    let lista = obtenerDatoId("listaAmigos")
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
    let elementoUL = obtenerDatoId("resultado")
    elementoUL.innerHTML = amigos[indiceAleatorio]
    obtenerDatoId("reiniciar").removeAttribute("disabled")
}

function obtenerDatoId(elementoId) {
    return document.getElementById(elementoId)

}

function limpiarDatos(elementoId) {
    let elementoHTML = obtenerDatoId(elementoId)
    if(elementoHTML.tagName === "INPUT") {
        elementoHTML.value = "";
    } else {
        elementoHTML.innerHTML = ""
    }
}

function reiniciarSorteo() {
    amigos = []
    document.querySelector("ul").innerHTML = "";
    obtenerDatoId("resultado").textContent = ""

}
