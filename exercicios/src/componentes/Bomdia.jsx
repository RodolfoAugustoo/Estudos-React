import React from 'react'

export default props => [
    /**
     * Quando usar um array é recomendado usar 'keys'
     * Assim o programa terá mais facilidade de saber
     * Exatamente aonde tem que atualizar
     */
    <h1 key='h1'>Bom dia {props.name} {props.lastname}!</h1>,
    <h2 key='h2'>Que Deus o abençoe!</h2>
]

/**
 * <div>
 *  <h1>Bom dia {props.name} {props.lastname}!</h1>
 *  <h2>Que Deus o abençoe!</h2>
 * </div>
 */

/**
 * Solução para ter mais de uma tag sem ter que usar o '<div>'
 * Em alguns casos o div pode dificultar o layout
 */

/*<React.Fragment>
    <h1>Bom dia {props.name} {props.lastname}!</h1>
    <h2>Que Deus o abençoe!</h2>
</React.Fragment> 
 */