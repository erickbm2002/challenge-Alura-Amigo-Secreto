// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigosArray() {
    let amigoIngresado = document.getElementById("amigo").value

    if (!amigoIngresado) {
        return alert("Por favor ingrese un nombre valido")
    }
    amigos.push(amigoIngresado)
    document.getElementById("amigo").value = "";
    console.log(amigoIngresado)
    actulizarListaAmigos(amigos)
}

function actulizarListaAmigos (array) {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""

    for (let i = 0; i < array.length;i++) {
        const nuevoElementoLista = document.createElement("li")
        nuevoElementoLista.textContent = array[i]
        lista.appendChild(nuevoElementoLista)
    }

    
    
}   