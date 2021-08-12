import React, { useState } from "react";
import "./Eightball.css"

const Eightball = ({answers}) => {
    const randomIdx = () => Math.floor(Math.random () * answers.length) 
    const randomAnswer = answers[randomIdx()]
    const getAnswer = () => {
        setMessage(randomAnswer.msg)
        setColor(randomAnswer.color)
    }
    const [color, setColor] = useState('black')
    const [message, setMessage]  = useState('Think of a Question')
 return (
     <div className={`Eightball-container Eightball-${color}`} onClick={getAnswer}>
         <p>{message}</p>
     </div>
 )
}

export default Eightball
