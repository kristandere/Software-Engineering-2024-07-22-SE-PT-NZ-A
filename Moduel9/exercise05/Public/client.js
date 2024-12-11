const socket = io();

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messagesDiv = document.getElementById('messages');
const usersList = document.getElementById('users');
const typingDiv = document.getElementById('typing');

const nicknameModal = document.getElementById('nickname-modal');
const nicknameInput = document.getElementById('nickname-input');
const nicknameSubmit = document.getElementById('nickname-submit');

let typing = false;
let timeout = undefined;


nicknameSubmit.addEventListener('click', () => {
    const nickname = nicknameInput.value.trim();
    if (nickname) {
        socket.emit('set nickname', nickname);
        nicknameModal.style.display = 'none';
    }
});


messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = messageInput.value.trim();
    if (msg) {

        appendMessage('You', msg, 'your');
        socket.emit('chat message', msg);
        messageInput.value = '';
        socket.emit('stop typing');
        typing = false;
    }
});


messageInput.addEventListener('input', () => {
    if (!typing) {
        typing = true;
        socket.emit('typing');
        timeout = setTimeout(stopTyping, 3000);
    } else {
        clearTimeout(timeout);
        timeout = setTimeout(stopTyping, 3000);
    }
});

function stopTyping() {
    typing = false;
    socket.emit('stop typing');
}

function appendMessage(nickname, msg, type = 'other') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    if (type === 'your') {
        messageElement.innerHTML = `<span class="nickname">You:</span> ${msg}`;
    } else {
        messageElement.innerHTML = `<span class="nickname">${nickname}:</span> ${msg}`;
    }
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}


function updateUsers(users) {
    usersList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        usersList.appendChild(li);
    });
}


socket.on('user connected', (nickname) => {
    const info = document.createElement('div');
    info.classList.add('message');
    info.style.fontStyle = 'italic';
    info.textContent = `${nickname} has connected.`;
    messagesDiv.appendChild(info);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

socket.on('user disconnected', (nickname) => {
    const info = document.createElement('div');
    info.classList.add('message');
    info.style.fontStyle = 'italic';
    info.textContent = `${nickname} has disconnected.`;
    messagesDiv.appendChild(info);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

socket.on('chat message', ({ nickname, msg }) => {
    appendMessage(nickname, msg);
});

socket.on('your message', ({ msg }) => {

});

socket.on('typing', (nickname) => {
    typingDiv.textContent = `${nickname} is typing...`;
});

socket.on('stop typing', (nickname) => {
    typingDiv.textContent = '';
});

socket.on('update user list', (users) => {
    updateUsers(users);
});

socket.on('nickname changed', ({ oldName, newName }) => {
    const info = document.createElement('div');
    info.classList.add('message');
    info.style.fontStyle = 'italic';
    info.textContent = `${oldName} is now known as ${newName}.`;
    messagesDiv.appendChild(info);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
