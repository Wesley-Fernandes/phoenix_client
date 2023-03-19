import React, { useState } from 'react'

//components
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { SelectButton } from 'primereact/selectbutton';

//styles
import "./Homepage.scss";

function Home() {
    const [option, setOption] = useState<boolean>(true);
    const phoenixIMG = "https://media1.thehungryjpeg.com/thumbs2/ori_3682055_jn6hd1b2rz7c881e2aeoaujs6oae6tknpydsvo3i_phoenix-esport-mascot-logo-design.png";

  return (
    <main className='Homepage'>
        <img src={phoenixIMG} alt="Imagem da phoenix" />
        <div className='formularys'>
            {option?<LoginForm setOption={setOption}/>:<RegisterForm setOption={setOption}/>}
        </div>
    </main>
  )
}

export default Home
