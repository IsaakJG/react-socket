import { useState, useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState("");

  const sendMessage = () => {
    console.log("helllloooooo", message);
    socket.emit("send message", {
      message: message,
    });
  };

  useEffect(() => {
    socket.on("received message", (data) => {
      console.log(data, "<<< LINE 18 APP");
      setReceivedMessage(data.message);
    });
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="message..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></input>
      <button onClick={sendMessage}>Send</button>
      <p>Message: {receivedMessage}</p>
    </>
  );
};

export default Chat;
