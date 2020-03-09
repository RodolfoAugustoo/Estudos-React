import React from 'react'
import ReactDOM from 'react-dom'
import  Multi,{ BoaNoite } from './componentes/Multiplos'


ReactDOM.render(
    <div>
        <Multi.BoaTarde name="Rodolfo" />
        <BoaNoite name="Michele" />
    </div>,
    document.getElementById('root')
)