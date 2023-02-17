import { forwardRef } from 'react'
import React  from 'react'
import './message.css'
const Message = forwardRef( ({messege  , username } , ref) => {
  const isUser = username === messege.username;
  console.log(isUser)
  return (
    <div ref={ref} className= {isUser ? "container": "" }>
    <div className={isUser ? "host_user" : "message"}>
      {!isUser &&`${messege.username} : `}  {messege.messege}

     </div>

    </div>

    )
})

export default Message