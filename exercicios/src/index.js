import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/Bomdia'

ReactDOM.render(
    <div>
        <Primeiro />
        <BomDia name="Rodolfo" lastname="Augusto" />
    </div>,
    document.getElementById('root')
)