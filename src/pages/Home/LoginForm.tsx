import React from 'react'
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import "./LoginForm.scss"
export default function LoginForm() {
  return (
    <form className='formulary'>
        <h1>Fazer Login</h1>
        <InputText name='email' type="email" style={{width: "100%"}} />
        <InputText name='email' type="email" style={{width: "100%"}} />
        <Button label='Entrar'/>
    </form>
  )
}
