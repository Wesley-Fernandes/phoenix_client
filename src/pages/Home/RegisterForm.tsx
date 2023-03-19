import React from 'react'
import "./RegisterForm.scss";

//Components
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import { IHomeProps } from './LoginForm';



export default function RegisterForm({setOption}:IHomeProps) {
  return (
    <form className='formulary animate__animated animate__backInRight'>
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

        <small>Já têm conta?
          <span onClick={()=>{setOption(true)}}>
            Faça o login clicando aqui!
          </span>
        </small>
    </form>
  )
}
