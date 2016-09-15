var ws = new WebSocket("ws://node-js-apocalypson.c9users.io/websockets:"+process.env.PORT);

ws.onopen = function() {
    setTitle("Connected to Cyber chat");
};

ws.onclose = function() {
    setTitle("Disconnected");
};

ws.onmessage = function(payload) {
    printMessage(payload.data);
}

document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');
    ws.send(input.value);
    input.value = '';
};

function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}
