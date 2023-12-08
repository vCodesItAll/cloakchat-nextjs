import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import authService from "../services/auth.service";
import { jwtDecode } from "jwt-decode";
import styles from "../styles/home.module.css";
import Link from "next/link";
import MessageInput from "../components/message_component";
import { WEB_SOC_URL } from "@/services/auth.constants";
import createWebSocket from "@/websocket/createWebSocket";

createWebSocket();

export default function Home() {
  const [ws] = useState(new WebSocket(WEB_SOC_URL));

  ws.onopen = (event) => {
    console.log("open");
  };

  const { state, dispatch } = useGlobalState();
  const router = useRouter();
  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log("send", message);
    ws.send(message);
    ws.send({
      message: message,
      date: new Date(),
    });
  };
  ws.onmessage = (event) => {
    console.log("onmessage", event.data);
    setMessages([...messages, event.data]);
  };

  const msgs = messages.map((m, i) => {
    <li key={i}>{m.data}</li>;
  });

  const handleLogout = () => {
    authService.logout();
    dispatch({ type: "LOGOUT_USER" });
    router.push("/");
  };

  return (
    <>
      <>
        <MessageInput message={message} setMessage={setMessage} />
        <button onClick={sendMessage}>Send Message</button>
        <ul>{msgs}</ul>
        <li className="nav-item">
          <Link href="/" className={styles.logout} onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </>
    </>
  );
}
