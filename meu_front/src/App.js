import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./protectedRouter";
import api from './api.js';

// Importe suas páginas aqui
import Login from "./pages/Login/Login";
import Termo from "./pages/Termo/Termo.jsx";
import Validacao1 from "./pages/VALICACAO/Validacao.jsx";
import Validacao2 from "./pages/VALICACAO/Validacao2.jsx";
import Validacao3 from "./pages/VALICACAO/validacao3.jsx";
import Redefinir1 from "./pages/ESQUECI_SENHA/Redefinir.jsx";
import Redefinir2 from "./pages/ESQUECI_SENHA/Redefinir2.jsx";
import Redefinir3 from "./pages/ESQUECI_SENHA/Redefinir 3.jsx";
import GrupoCriado from "./pages/Grupo_Criado/GrupoCriado.jsx";
import Convitee from "./pages/CONVITE_GRUPO/Convite.jsx";
import Convite2 from "./pages/CONVITE_GRUPO/Convite2.jsx";
import Home from "./pages/Home/Home.jsx";
import Menu1  from "./pages/Home/Menu.Principal.jsx";
import Tarefa1 from "./pages/TAREFAS/Tarefas1.jsx";
import Detalhes from "./pages/TAREFAS/Tarefas2.jsx";
import Criar_Tarefa from "./pages/TAREFAS/Tarefa3.jsx";
import Concluida from "./pages/TAREFAS/Tarefas4.jsx";
import Teste from "./pages/Teste.jsx";
import Eventos from "./pages/CALENDARIO/Eventos1.jsx";
import Criar_Evento from "./pages/CALENDARIO/Eventos2.jsx";
import Dt_Evento from "./pages/CALENDARIO/Eventos3.jsx";



function App() {
    useEffect(() =>{
        api.get('usuarios').then(res=>{
            console.log(res);
        })
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/Termo" element={<Termo />} />
                    <Route path="/Validacao1" element={<Validacao1 />} />
                    <Route path="/Validacao2" element={<Validacao2 />} />
                    <Route path="/Validacao3" element={<Validacao3 />} />
                    <Route path="/Redefinir1" element={<Redefinir1 />} />
                    <Route path="/Redefinir2" element={<Redefinir2 />} />
                    <Route path="/Redefinir3" element={<Redefinir3 />} />
                    <Route path="/GrupoCriado" element={<GrupoCriado />} />
                    <Route path="/Convitee" element={<Convitee />} />
                    <Route path="/Convite2" element={<Convite2 />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Menu1" element={<Menu1 />} />
                    <Route path="/Tarefa1" element={<Tarefa1 />} />
                    <Route path="/Detalhes" element={<Detalhes />} />
                    <Route path="/Criar_Tarefa" element={<Criar_Tarefa />} />
                    <Route path="/Concluida" element={<Concluida />} />
                    <Route path="/Teste" element={<Teste />} />
                    <Route path="/Eventos" element={<Eventos/>} />
                    <Route path="/Criar_Evento" element={<Criar_Evento/>} />
                    <Route path="/Dt_Evento" element={<Dt_Evento/>} />


                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
