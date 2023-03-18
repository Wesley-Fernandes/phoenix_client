import React from 'react'

//styles
import "./Message.scss"
function Message({informations}:any) {
  return (
    <div className='MessageBox'>
      <img src={informations.picture} alt="picture"/>
      <span className='MessageAuthor'>{informations.author}</span>
      <p>{informations.text}</p>
    </div>
  )
}

export default Message
