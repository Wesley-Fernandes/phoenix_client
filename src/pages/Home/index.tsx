import React, { useState } from 'react'

//components
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { SelectButton } from 'primereact/selectbutton';

//styles
import "./Homepage.scss";

function Home() {
    const options =  ['Fazer login', "Registrar-se"];
    const [option, setOption] = useState(options[0]);
    const phoenixIMG = "https://media1.thehungryjpeg.com/thumbs2/ori_3682055_jn6hd1b2rz7c881e2aeoaujs6oae6tknpydsvo3i_phoenix-esport-mascot-logo-design.png";

  return (
    <main className='Homepage'>
        <img src={phoenixIMG} alt="Imagem da phoenix" />
        <div className="toolbar">
            <SelectButton
                value={option}
                onChange={(e) => setOption(e.target.value)}
                options={options} />
        </div>
        <div className='formularys'>
            {option==='Fazer login'?<LoginForm/>:<RegisterForm/>}
        </div>
    </main>
  )
}

export default Home
