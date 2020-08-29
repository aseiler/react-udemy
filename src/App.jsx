import React from 'react'
import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default (props) => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro />
            </Card>
            <Card titulo="#02 - Desafio Aleatório">
                <Aleatorio
                    max={78}
                    min={2}
                />
            </Card>
            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#04 - Com parametro">
                <ComParametro
                    titulo="Segundo Componente"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

        </div>
    )

}