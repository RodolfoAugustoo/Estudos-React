import React from 'react'
import Filho from './Filho'

/**
 * Passando propriedades de 'pai' para 'filho' usando spread '{...props}'
 * Caso queira que sobrescreva do pai 
 * A propriedade deverá ser atualizada após o 'spread'
 * Senão ele sobressai
 */
export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="Pedro" sobrenome={props.sobrenome} />
            <Filho {...props} />
            <Filho {...props} nome="Carla" />
        </ul>
    </div>
