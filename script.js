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
        "Creo que no.",
        "¡Totalmente!",
        "Eso suena interesante.",
        "No estoy seguro de entender, ¿puedes explicar más?",
        "¡Qué genial!",
        "Hmm, déjame pensar...",
        "¡Por supuesto!",
        "No sé, pero suena divertido.",
        "¿Puedes decirme más?",
        "Eso es un misterio para mí.",
        "¡Me encanta hablar contigo!"]

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