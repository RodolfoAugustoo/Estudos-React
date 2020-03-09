import React from 'react'
import ReactDOM from 'react-dom'
import Saudacao from './componentes/Saudacao'


ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" name="Rodolfo" />
    </div>,
    document.getElementById('root')
)