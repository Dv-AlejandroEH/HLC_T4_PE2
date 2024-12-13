function mostrarChat() {
    const container = document.getElementById('container');
    container.classList.remove('oculto');
}
function ocultarChat() {
    const container = document.getElementById('container');
    container.classList.add('oculto');
}

function enviarMensaje() {
    const input = document.getElementById('input');
    const div = document.createElement('div');
    div.textContent = input.value;
    div.classList.add('mensaje');
    document.getElementById('cuadro').appendChild(div);
    input.value = '';
}

function getRandomBotMessage () {
    const messages = [
        "Camila apruebame",
        "Camila me puedes poner un 10",
        "¡Sería genial tener un 10!",
        "Porfa un 10 Camila",
        "¡Por supuesto que voy a tener un 10!",
        "Solo pido que me pongas un 10",
        "¿Puedes poner un 10 porfa?",
        "¿Me pones un 10?"]

    return messages[Math.floor(Math.random() * messages.length)];
}

function responderMensaje() {
    const div = document.createElement('div');
    div.classList.add('responder');
    let respuesta = getRandomBotMessage();
    div.textContent = respuesta;
    document.getElementById('cuadro').appendChild(div);
}

const cuadro = document.getElementById('cuadro');
cuadro.scrollTop = cuadro.scrollHeight;

document.getElementById('input').addEventListener('keydown', function comprobarEnter(event) {
    if (event.key === 'Enter') {
    event.preventDefault();
    enviarMensaje();
    setTimeout(() => {
        responderMensaje();
    }, 500)
    }
});

function escribirMensaje() {
    enviarMensaje();
    setTimeout(() => {
        responderMensaje();
    }, 500)
}