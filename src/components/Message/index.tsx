import React from 'react'

//styles
import "./Message.scss"
function Message({informations}:any) {
  const id = true;
  return (
    <>
    {
      id===true?(
      <li className="MessageBox-Mine">
        <div className='MessageComponents'>
          <div className='Message-Container-Info'>
            <span className='Message-Author-Name'>
              Eu
            </span>
            <img src={informations.picture} alt="picture"/>
            <span className='Message-Send-Time'>
              12:38 AM
            </span>
          </div>

          <p className='Message-Text-Box'>
            {informations.text}
          </p>
      </div>
    </li>


    ):(

      <li className="MessageBox-others">
        <div className='MessageComponents'>
          <p className='Message-Text-Box'>
            {informations.text}
          </p>

          <div className='Message-Container-Info'>
            <span className='Message-Author-Name'>
              {informations.author}
            </span>
            <img src={informations.picture} alt="picture"/>
            <span className='Message-Send-Time'>
              12:38 AM
            </span>
          </div>
        </div>
      </li>
    )
    }
</>
  )
}

export default Message
