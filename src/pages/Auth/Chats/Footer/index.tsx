import React, { FormEvent, useRef } from "react";


//styles
import "./Footer.scss";
import { Button } from "primereact/button";
import { useSocketStore } from "../../../../store/store";

export default function Footer() {
  const { savedSocket } = useSocketStore();
  const formComponent = useRef<HTMLFormElement>(null);

  const submitter = async (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      text: { value: string };
    };

    const picture = "https://i.pinimg.com/736x/13/e7/8b/13e78b5d5a1272863c07106a9ff593b9.jpg";
    const text = target.text.value;
    if (text === "") {
      alert("Você não pode enviar 'nada'.");
      return;
    }
    savedSocket.emit("message", { text, picture });
    formComponent?.current?.reset();
  };
  return (
    <form
      className="formulary-chat-message"
      onSubmit={submitter}
      autoComplete="off"
      ref={formComponent}>
      <input
        name="text"
        type="text"
        autoCapitalize="off"
        placeholder="Digite sua mensagem..."/>
      <button type="submit">
        <button>Enviar</button>
      </button>
    </form>
  );
}
