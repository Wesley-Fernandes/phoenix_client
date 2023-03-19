import React from 'react'
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import "./LoginForm.scss"

export interface IHomeProps{
  setOption: (value: boolean) =>void;
}
export default function LoginForm({setOption}:IHomeProps) {
  return (
    <form className='formulary animate__animated animate__backInLeft'>
        <h1>Fazer Login</h1>

        <InputText
          name='email'
          type="email"
          style={{width: "100%"}}
          placeholder="Digite o email..." />

        <InputText
          name='passoword'
          type="email"
          style={{width: "100%"}}
          placeholder="Digite a sua senha..."/>

        <Button
          label='Entrar'
          type='submit'/>

        <small>Não têm conta?
          <span onClick={()=>{setOption(false)}}>
            Clique aqui!
          </span>
        </small>
        
    </form>
  )
}
