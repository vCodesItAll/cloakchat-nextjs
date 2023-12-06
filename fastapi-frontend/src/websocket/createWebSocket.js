

const createWebSocket = () => {
    const ws = new WebSocket("ws://localhost:8000/ws");
    // const ws = new WebSocket("wss://8000-vanessadick-cloakchatfa-9f77pe9ilo5.ws-us106.gitpod.io/ws");
    
}

export default createWebSocket;

// function (!isOpen(socket)) return