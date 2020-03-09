import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        /**
         * Resolvendo problema do props ser apenas leitura
         */
        tipo: "Fala",
        nome: "Rodolfo"
    }

    /**
     * Função que recebe o evento
     */
    setTipo(e){
        //mostra o valor que está no input junto com o onChange
        //console.log(e.target.value)

        //Não funcionao pq o 'props' não pode ser alterado - somente leitura
        //this.props.tipo = e.target.value

        /**
         * Para 'contornar' a situação de não poder atualizar o 'tipo'
         * Faremos o seguinte 
         */
      
        /**
         * O state é referente ao obj que está trabalhando
         * Cada obj tem o seu 'state'
         */

        /*
        O componente é atualizado somente depois que o 'state' é alterado
        let i = 1
        setInterval(() => 
            this.setState({ tipo: ++i}), 2000 
        )
        */
        this.setState({ tipo: e.target.value})        
    }

    setNome (e){
        this.setState ({nome: e.target.value})
    }
    
    
    render() {
        /**
         * No caso da 'class', para acessar um componente usa-se o 'this.props'
         */
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} 
                    onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="Nome..." value={nome}
                    onChange={e => this.setNome(e)} />
            </div>
        )
    }
}