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
    return (
        <div className="app">
            <div className="cabecalho-tarefas">
                <h1>lista de tarefas</h1>
            </div>

            <div className="formulario">
                <p>Formulário</p>
            </div>

            <div className="lista">
                <p>Listas</p>
            </div>
        </div>


    );
};

export default App;