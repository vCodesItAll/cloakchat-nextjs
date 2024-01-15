import { WEB_SOC_URL } from "@/services/auth.constants";

const createWebSocket = () => {
    // const ws = new WebSocket("wss://8000-vanessadick-cloakchatfa-9f77pe9ilo5.ws-us106.gitpod.io/");
    const ws = new WebSocket(WEB_SOC_URL);
    ws.addEventListener("open", (event) => {
        ws.send("hi");
    });

    ws.addEventListener("message", (event) => {
        console.log(event.data);
    })
};

export default createWebSocket;

