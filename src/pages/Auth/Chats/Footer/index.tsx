import React, { FormEvent } from "react";

//components
import { InputText } from "primereact/inputtext";

//styles
import "./Footer.scss";
import { Button } from "primereact/button";
import { useSocketStore } from "../../../../store/store";

export default function Footer() {
  const { savedSocket } = useSocketStore();

  const submitter = async (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      text: { value: string };
    };

    const picture = "https://i.pinimg.com/736x/13/e7/8b/13e78b5d5a1272863c07106a9ff593b9.jpg"
    const text = target.text.value;
    if(text===""){
      alert("Você não pode enviar 'nada'.");
      return
    }
    savedSocket.emit("message", {text, picture});
  };
  return (
    <form className="FooterComponent" onSubmit={submitter}>
      <InputText name="text" type={"text"} />
      <Button label="Enviar" type="submit" />
    </form>
  );
}
