import React, { useEffect } from "react";
import Messages from "./Messages";
import Footer from "./Footer"

//styles
import "./Chat.scss";
import { useSocketStore } from "../../../store/store";
import { io } from "socket.io-client";

//functions


export default function Chats() {

  const {setSocket, savedSocket} = useSocketStore();
  const SocketListener = async () => {
    const socket = await io("http://localhost:3001");
    socket.emit("set_username", "Wesley");
    if(savedSocket===null){
      setSocket(socket);
    }
  };

 useEffect(()=>{
  SocketListener()
 }, [])

  return (
    <div className="ChatPage">
      <Messages />
      <Footer />
    </div>
  );
}
