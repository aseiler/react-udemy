import './App.css'
import React from 'react'

import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Diretapai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMebro from './components/basicos/FamiliaMembro'


export default (props) => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
            <Card titulo="#11 - Componente Controlado" color="#E45F56">
                <Input></Input>
                </Card>
            <Card titulo="#10 - Comunicação indireta" color="#8BAD39">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                    <Diretapai></Diretapai>
                </Card>
                <Card titulo="#08 - Renderizacao Condicional" color="#982395">
                    <ParOuImpar numero={21} />
                    <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                </Card>
                <Card titulo="#07 - Desafio Repeticao" color="#3A9AD9">
                    <TabelaProdutos />
                </Card>
                <Card titulo="#06 - Repeticao" color="#FF4C65">
                    <ListaAlunos />
                </Card>
                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro />
                </Card>
                <Card titulo="#02 - Desafio Aleatório" color="#E8B71A">
                    <Aleatorio
                        max={78}
                        min={2}
                    />
                </Card>
                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#04 - Com parametro" color="#FA6900" >
                    <ComParametro
                        titulo="Segundo Componente"
                        aluno="Pedro Silva"
                        nota={9.3}
                    />
                </Card>

                <Card titulo="#05 - Componoente com Filhos" color="#00C8F8" >
                    <Familia sobrenome="Silva">
                        <FamiliaMebro nome="Pedro" ></FamiliaMebro>
                        <FamiliaMebro nome="Ana"  ></FamiliaMebro>
                        <FamiliaMebro nome="Gustavo" ></FamiliaMebro>

                    </Familia>
                </Card>
            </div>
        </div>
    )

}