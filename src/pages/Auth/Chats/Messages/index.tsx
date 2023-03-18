import React, { useEffect, useState, useRef} from "react";
import { io } from "socket.io-client";
import Message from "../../../../components/Message";
import { useSocketStore } from "../../../../store/store";

//styles
import "./Messages.scss";

export interface IMessage{

  text: string;
  author: string;
  id: number;
  picture: string;

}

export default function Messages() {
  const {savedSocket} = useSocketStore();
  const [messages, setMessages ]= useState<any>([]);
  const newMarker = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    savedSocket?.on("new_message", (newMessage:any)=>{
      setMessages((current:any)=>[...current, newMessage]);

    });
    return ()=> savedSocket?.off("new_message");
  }, [savedSocket]);

  useEffect(()=>{
    newMarker.current?.scrollTo({top: newMarker.current.scrollHeight});
  }, [messages])
  return (
    <div className="MessagesComponents" ref={newMarker}>
        {messages.map((message:IMessage) => (
          <Message key={message.id} informations={message} />
        ))
        }
    </div>
  );
}
