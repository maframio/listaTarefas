import React, { useState } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons";
import "./App.css";

const API = "http://localhost:5000";

const App = () => {

    const [titulo, setTitulo] = useState("");
    const [tempo, setTempo] = useState("");
    const [tarefas, setTarefas] = useState([]);
    const [carrengando, setCarregando] = useState(false);

    // let messagem = "hello vietnan world";
    // a variavel state atualiza o componente


    const enviar = (e)=>{
        e.preventDefault();// nao permite que a página recarregua após um envio de formulário(tarefa)
    }



    return (
        <div className="app">
            <div className="cabecalho">
                <h1>lista de tarefas</h1>
            </div>

            <div className="formulario">
                <h2>insira a próxima tarefa</h2>
                <form onSubmit={enviar}>
                    <div className="">
                        <label htmlFor="title"> Qual a tarefa?</label>
                        <input type="text" placeholder="digite a tarefa" className="tarefa"></input>
                    </div>
                    <input className="botao" type="Submit" value="enviar"/>
                </form>
            </div>

            <div className="lista">
                <h2>Tarefas</h2>
                {/* maneira de fzer uma condicional mais rapido */}
                {tarefas.length === 0 && <p>não há tarefas</p>} 
                
            </div>
        </div>


    );
};

export default App;