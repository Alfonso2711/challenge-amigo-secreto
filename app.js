let amigos = [];
let sorteoRealizado = false;

// FUNCION EXTRA: Nombre reptido en la lista de amigos
function nombreRepetido(nombre) {
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i].toLowerCase() === nombre.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function agregarAmigo() {
    //verificar si ya se habia sorteado un amigo
    if (sorteoRealizado) {
        console.log("Reiniciando el sorteo de amigos.");
        reiniciarSorteo();

    } 

    // Obtener el elemento de la lista
    const nombreUsuario = document.getElementById("amigo").value.trim();

    // Validar la entrada
    if (nombreUsuario === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Verificar si el nombre ya existe
    if (nombreRepetido(nombreUsuario)) {
        alert(`El nombre: ${nombreUsuario} ya existe en la lista de amigos.`);
        document.getElementById("amigo").value = "";
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombreUsuario);

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    console.log(`Tu amigo: ${nombreUsuario} se agregó`);
    mostrarAmigos();
}

function mostrarAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo amigos y agregar cada nombre como <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0){
        alert("No hay amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
    console.log(`El amigo secreto es: ${amigoSorteado}`);
    document.getElementById("listaAmigos").innerHTML = "";
    sorteoRealizado = true;
}


function reiniciarSorteo(){
    document.getElementById("resultado").innerHTML = "";
    amigos = [];
    sorteoRealizado = false;
}