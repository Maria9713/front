import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./protectedRouter";
import api from './api.js';

// Importe suas páginas aqui
import Login from "./pages/Gerais/Login/Login.jsx";

import Termo from "./pages/Gerais/Termo/Termo.jsx";

import Validacao1 from "./pages/Gerais/VALICACAO/Validacao.jsx";
import Validacao2 from "./pages/Gerais/VALICACAO/Validacao2.jsx";
import Validacao3 from "./pages/Gerais/VALICACAO/validacao3.jsx";

import Redefinir1 from "./pages/Gerais/ESQUECI_SENHA/Redefinir.jsx";
import Redefinir2 from "./pages/Gerais/ESQUECI_SENHA/Redefinir2.jsx";
import Redefinir3 from "./pages/Gerais/ESQUECI_SENHA/Redefinir 3.jsx";

import GrupoCriado from "./pages/REPRESENTANTE/Grupo_Criado/GrupoCriado.jsx";
import Convitee from "./pages/REPRESENTANTE/CONVITE_GRUPO/Convite.jsx";
import Convite2 from "./pages/REPRESENTANTE/CONVITE_GRUPO/Convite2.jsx";

import Home from "./pages/Home/Home.jsx";
import Menu1  from "./pages/Home/Menu.Principal.jsx";

import Central_Tarefas from "./pages/REPRESENTANTE/TAREFAS/Tarefas1.jsx";
import Criar_Tarefa from "./pages/REPRESENTANTE/TAREFAS/Tarefa3.jsx";
import Detalhes from "./pages/REPRESENTANTE/TAREFAS/Tarefas2.jsx";
import Edt_Tarefa from "./pages/REPRESENTANTE/TAREFAS/Tarefas5.jsx";
import Concluida from "./pages/REPRESENTANTE/TAREFAS/Tarefas4.jsx";

import Eventos from "./pages/REPRESENTANTE/CALENDARIO/Eventos1.jsx";
import CriarEvento from "./pages/REPRESENTANTE/CALENDARIO/Eventos2.jsx";
import Dt_Evento from "./pages/REPRESENTANTE/CALENDARIO/Eventos3.jsx";
import Edt_Evento from "./pages/REPRESENTANTE/CALENDARIO/Eventos4.jsx";

import Central_Config from "./pages/CONFIGURAÇÕES/Config.jsx";
import Central_Ajuda from "./pages/CONFIGURAÇÕES/Central_Ajuda.jsx";
import Termo_2 from "./pages/CONFIGURAÇÕES/Termo_2.jsx";

import Modelo from "./pages/Gerais/MODELO/Modelo.jsx";

import Central_Equipe from "./pages/GERENCIAMENTO_EQUIPE/Gerenciamento.jsx";
import Info_Equipe from "./pages/GERENCIAMENTO_EQUIPE/Info_Equipe.jsx";
import Edt_Equipe from "./pages/GERENCIAMENTO_EQUIPE/EDITAR EQUIPE/Edt_Equipe.jsx";
import Remover_Membro from "./pages/GERENCIAMENTO_EQUIPE/REMOVER MEMBRO/Remover_Membro.jsx";
import Desfazer_Equipe from "./pages/GERENCIAMENTO_EQUIPE/DESFAZER EQUIPE/Desfazer_Equipe.jsx";

import Orçamento from  "./pages/Orçamento/Orcamento.jsx";
import Orçamento2 from  "./pages/Orçamento/Orçamento2.jsx";

import Teste from "./pages/Teste.jsx";



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

                    <Route path="/Central_Tarefas" element={<Central_Tarefas />} />
                    <Route path="/Criar_Tarefa" element={<Criar_Tarefa />} />
                    <Route path="/Detalhes" element={<Detalhes />} />
                    <Route path="/Edt_Tarefa" element={<Edt_Tarefa />} />
                    <Route path="/Concluida" element={<Concluida />} />

                    <Route path="/Eventos" element={<Eventos/>} />
                    <Route path="/CriarEvento" element={<CriarEvento/>} />
                    <Route path="/Dt_Evento" element={<Dt_Evento/>} />
                    <Route path="/Edt_Evento" element={<Edt_Evento />} />

                    <Route path="/Central_Config" element={<Central_Config />} />
                    <Route path="/Central_Ajuda" element={<Central_Ajuda />} />
                    <Route path="/Termo_2" element={<Termo_2 />} />

                    <Route path="/Modelo" element={<Modelo />} />

                    <Route path="/Central_Equipe" element={<Central_Equipe />} />
                    <Route path="/Info_Equipe" element={<Info_Equipe />} />
                    <Route path="/Edt_Equipe" element={<Edt_Equipe />} />
                    <Route path="/Remover_Membro" element={<Remover_Membro />} />
                    <Route path="/Desfazer_Equipe" element={<Desfazer_Equipe />} />

                    <Route path="/Orçamento" element={<Orçamento />} />
                    <Route path="/Orçamento2" element={<Orçamento2 />} />

                    <Route path="/Teste" element={<Teste />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
