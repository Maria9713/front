 
import React, { useState } from 'react';
import { Box, Container, CssBaseline, Paper, Typography, IconButton, Checkbox, Grid, Avatar, Stack } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Fab from '@mui/material/Fab';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import Popup from './Pop_Up_4';

export default function Configuracoes() {
    const handleBack = () => {};
    const [value, setValue] = React.useState(0);

    // POP-UP 
const [openPopup, setOpenPopup] = useState(false);

const handleOpenPopup = () => {
  setOpenPopup(true);
};

const handleClosePopup = () => {
  setOpenPopup(false);
};

    // Lista de usuários atribuídos à tarefa
    const usuariosAtribuidos = [
        { avatar: '/path/to/avatar1.jpg' },
        { avatar: '/path/to/avatar2.jpg' },
        { avatar: '/path/to/avatar3.jpg' }
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

    // Função para renderizar os avatares dos usuários atribuídos à tarefa
    const renderAvatares = (maxAvatares) => {
        const avatares = [];
        const totalUsuarios = usuariosAtribuidos.length; // Número total de usuários atribuídos à tarefa
        const usuariosRestantes = totalUsuarios - maxAvatares; // Número de usuários restantes
        for (let i = 0; i < Math.min(maxAvatares, totalUsuarios); i++) {
            avatares.push(<Avatar key={i} src={usuariosAtribuidos[i].avatar} sx={{ width: 32, height: 32, marginLeft: '-8px' }} />);
        }
        if (usuariosRestantes > 0) {
            avatares.push(<Avatar key={maxAvatares} src={`/path/to/avatar-placeholder.jpg`} sx={{ width: 32, height: 32, marginLeft: '-8px' }} />);
        }
        return avatares;
    };

    const diasRestantes = calcularPrazo();
    const corPrazo = getCorPrazo(diasRestantes);
    const corTexto = corPrazo === '#FF0000' ? '#FFFFFF' : '#000000'; // Se a cor de fundo for vermelha, o texto será branco; caso contrário, será preto

    const maxAvatares = 3; // Máximo de avatares a serem exibidos

    return (

        <Container component="main" maxWidth="xs">

            <CssBaseline />

                <Paper elevation={2} 
                    sx={{   mt: 5, p: 2, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            boxShadow: "0" 
                        }}
                >

                        <IconButton 
                            onClick={handleBack} 
                            sx={{ 
                                alignSelf: 'flex-start' 
                                }}
                        >
                            <ArrowBackIcon sx={{ fontSize: 35 }} />
                        </IconButton>

                        <CheckBoxOutlinedIcon 
                            sx={{   width: 50, 
                                    height: 100, 
                                    color:'#07382E' 
                                }} 
                        />

                        <Typography 
                            component="h1" 
                            variant="h9" 
                            sx={{ color:'#07382E', 
                                    mt: -3 
                                }}
                        >
                            Tarefas
                        </Typography>

                            <Card 
                                sx={{   width: '100%', 
                                        mt: 2, mb:1, mx: 1, 
                                        boxShadow: "3"
                                    }}
                            >

                                <CardContent 
                                    sx={{   padding: '4px 10px', 
                                            display: 'flex', 
                                            flexDirection: 'column' 
                                    }}
                                >
                                    
                                <Grid 
                                    container alignItems="center" 
                                    justifyContent="space-between" 
                                    spacing={1}
                                >
                                    <Grid item>
                                        <Typography variant="h6" component="h2"sx={{ fontSize: '1.2rem' }}>
                                            NOME DA TAREFA
                                        </Typography>
                                    </Grid>

                                    <Grid item>
                                        <Checkbox onClick={handleOpenPopup} sx={{  color: '#07382E' }}/>
                                    </Grid>
                                </Grid>
                                <Popup open={openPopup} handleClose={handleClosePopup} />

                                <Box
                                    sx={{
                                        marginLeft: '2px', // Margem à esquerda
                                        marginTop: '10px', // Espaçamento acima do elemento Box
                                        backgroundColor: corPrazo,
                                        color: corTexto,
                                        padding: '4px',
                                        borderRadius: '5px',
                                        width: 'fit-content', // Largura ajustada ao conteúdo
                                        height: 'fit-content', // Altura ajustada ao conteúdo
                                    }}
                                >
                                    <Typography variant="body2"sx={{ fontSize: '0.70rem' }}>
                                        Termina em {diasRestantes} dias
                                    </Typography>
                                </Box>

                                <Box 
                                    sx={{   display: 'flex', 
                                            alignItems: 'center', 
                                            marginTop: '20px', 
                                            marginBottom: '-10px'
                                    }}
                                >
                                    {usuariosAtribuidos.slice(0, maxAvatares).map((usuario, index) => (
                                        <Avatar
                                            key={index}
                                            src={usuario.avatar}
                                            sx={{ width: 20, height: 20, 
                                                marginLeft: index !== 0 ? '-8px' : '0' 
                                            }} // Ajuste o tamanho e espaçamento dos avatares aqui
                                        />
                                    ))}

                                    <Typography variant="body2" sx={{ fontSize: '0.70rem',marginLeft: '8px' }}>
                                    {usuariosAtribuidos.map(usuario => usuario.nome).join(', ')} e mais {usuariosAtribuidos.length - maxAvatares} pessoas
                                    </Typography>

                                </Box>

                            </CardContent>

                    </Card>
                    
                    <Typography component="h2" variant="h6" sx={{ marginTop: '15px' }}>
                        Tarefas Concluídas
                    </Typography>
                    
                    <Box sx={{ display: 'flex', marginTop: '60%', marginLeft: '65%'  }}>
                        <Fab variant="extended" size="small"  sx={{ borderRadius: '5px',background: "#07382E"}}>
                            <Typography sx={{color:"#ffff"}}>
                            Nova Tarefa
                            </Typography>
                        </Fab>
                    </Box>

                    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#5DA18F' }} elevation={3}>

                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        >

                        <BottomNavigationAction 
                            label="Home" 
                            icon={<HomeIcon sx={{ fill: 'none', stroke: '#07382E', strokeWidth: 2 }} />}
                            sx={{ color: '#07382E', fontSize: '1.2rem', fontWeight: 'bold', '& .MuiBottomNavigationLabel': { gap: '10px' } }}
                        />

                        <BottomNavigationAction 
                            label="Progresso" 
                            icon={<SchoolIcon sx={{ fill: 'none', stroke: '#07382E', strokeWidth: 2 }} />}
                            sx={{ color: '#07382E', fontSize: '1.2rem', fontWeight: 'bold', '& .MuiBottomNavigationLabel': { gap: '10px' } }}
                        />

                        <BottomNavigationAction 
                            label="Avaliação" 
                            icon={<StarIcon sx={{ fill: 'none', stroke: '#07382E', strokeWidth: 2 }} />}
                            sx={{ color: '#07382E', fontSize: '1.2rem', fontWeight: 'bold', '& .MuiBottomNavigationLabel': { gap: '10px' } }}
                        />

                        </BottomNavigation>

                    </Box>
                    

                </Paper>

        </Container>

    );

}