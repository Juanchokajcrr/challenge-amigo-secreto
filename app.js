let listaAmigos = [];

function agregarAmigo(amigo) {
    let amigoAgregado = document.getElementById('amigo').value;
    if (amigoAgregado === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        listaAmigos.push(amigoAgregado);
        console.log(listaAmigos);
        actualizarListaAmigos();
        limpiarCaja();
        return;
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
    return;
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    // Limpiar la lista existente
    lista.innerHTML = ''; 
    for (let i = 0; i < listaAmigos.length; i++) {
        const elemento = document.createElement("li");
        elemento.textContent = listaAmigos[i];
        lista.appendChild(elemento);
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Por favor, agregue al menos un amigo.');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[indiceAleatorio];
        asignarTextoElemento('#resultado', `El amigo secreto sorteado es: ${amigoSorteado}`);
    }
}