// Central_Tarefa.js
import React, { useState } from 'react';
import { Container, CssBaseline, Paper, Typography, Fab, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Card_Tarefas from './Card_Tarefas'; 
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import MainMenu from '../../Gerais/Home/Menu.Principal'; 

export default function Central_Tarefa() {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const handleNovaTarefa = () => {
        navigate('/Criar_Tarefa');
    };

    const handleHome = () => {
        navigate('/');
    };

    const handleProgresso = () => {
        navigate('/');
    };

    const handleAvaliacao = () => {
        navigate('/');
    };

    // Lista de usuários atribuídos à tarefa
    const usuariosAtribuidos = [
        { avatar: '/path/to/avatar1.jpg', nome: 'Nome 1' },
        { avatar: '/path/to/avatar2.jpg', nome: 'Nome 2' },
        { avatar: '/path/to/avatar3.jpg', nome: 'Nome 3' }
    ];

    // Função para calcular a cor com base no período restante
    const getCorPrazo = (diasRestantes) => {
        if (diasRestantes <= 7) {
            return '#FF0000'; // Vermelho para menos de 7 dias
        } else if (diasRestantes <= 14) {
            return '#FFFF00'; // Amarelo para menos de 14 dias
        } else {
            return '#00FF00'; // Verde para mais de 14 dias
        }
    };

    // Função para calcular o período restante
    const calcularPrazo = () => {
        // Aqui você pode implementar a lógica para calcular os dias restantes até o término da tarefa
        // Por simplicidade, retornarei um número aleatório entre 1 e 30 para demonstração
        return Math.floor(Math.random() * 30) + 1;
    };

    const diasRestantes = calcularPrazo();
    const corPrazo = getCorPrazo(diasRestantes);
    const corTexto = corPrazo === '#FF0000' ? '#FFFFFF' : '#000000';

    const maxAvatares = 3;

    return (
        <Container 
            component="main" 
            maxWidth="xs"
        >
            <CssBaseline />
            <Paper 
                elevation={2} 
                sx={{ 
                    mt: 5, 
                    p: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    boxShadow: "0" 
                    }}
            >

                {/* CABEÇALHO */}
                <CheckBoxOutlinedIcon 
                    sx={{ 
                        width: 50, 
                        height: 100, 
                        color: '#07382E' 
                        }} 
                />
                <Typography 
                    component="h1" 
                    variant="h9" 
                    sx={{ 
                        color: '#07382E', 
                        mt: -3 
                        }}
                >
                    Tarefas
                </Typography>

                {/* RENDERIZAÇÃO DO TASKCARD COM EVENTO DE CLIQUE */}
                <Card_Tarefas
                    nomeTarefa="Nome da Tarefa"
                    corPrazo={corPrazo}
                    corTexto={corTexto}
                    diasRestantes={diasRestantes}
                    usuariosAtribuidos={usuariosAtribuidos}
                    maxAvatares={maxAvatares}
                    onClick={() => handleCardClick(taskId)} // Aqui precisamos ajustar para a taskId correta
                />
                <Typography 
                    component="h2" 
                    variant="h6" 
                    sx={{ 
                        marginTop: '15px' 
                        }}
                >
                    Tarefas Concluídas
                </Typography>

                {/* BOTÃO DE CRIAR TAREFA */}
                <Box 
                    sx={{ 
                        position: 'fixed', 
                        mt: 60, 
                        marginLeft: '20%' 
                        }}
                >
                    <Fab
                        onClick={handleNovaTarefa}
                        variant="extended"
                        size="small"
                        sx={{
                            borderRadius: '5px',
                            backgroundColor: "#07382E !important",
                            '&:hover': {
                                backgroundColor: "#5DA18F !important",
                            }
                        }}
                    >
                        <Typography 
                            sx={{ 
                                color: "#ffffff !important" 
                                }}
                        >
                            Nova Tarefa
                        </Typography>
                    </Fab>
                </Box>

                {/* MENU PRINCIPAL */}
                <MainMenu 
                    value={value} 
                    onChange={(event, newValue) => 
                    setValue(newValue)} 
                />
            </Paper>
        </Container>
    );
}
