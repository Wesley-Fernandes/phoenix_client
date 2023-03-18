import React from 'react'
import "./RegisterForm.scss";

//Components
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

export default function RegisterForm() {
  return (
    <form className='formulary'>
        <h1>Crie sua conta</h1>
        <InputText
          key={'nickname'}
          name='nickname'
          type="nickname"
          style={{width: "100%"}}
          placeholder="Digite o seu apelido..."/>
        <InputText
          key={'email'}
          name='email'
          type="email"
          style={{width: "100%"}}
          placeholder="Digite o seu e-mail..."/>
        <InputText
          key={'password'}
          name='password'
          type="password"
          style={{width: "100%"}}
          placeholder="Digite a sua senha..."/>
        <InputText
          key={'password'}
          name='password'
          type="date"
          style={{width: "100%"}}
          placeholder="Digite a sua senha..."/>
        <Button label='Registrar-se'/>
    </form>
  )
}
