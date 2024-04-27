import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Typography, IconButton } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// IMPORT ICONES
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

// IMPORT ICONES MENU 
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

export default function Modelo() {
    const [value, setValue] = useState(0); // Estado para controlar o valor selecionado do BottomNavigation

    const handleDownload = (fileNumber) => {
        // Lógica para baixar o arquivo
        // Por exemplo, você pode usar a API do navegador para baixar um arquivo
        // Aqui está um exemplo simples:
        const url = `URL_DO_ARQUIVO_${fileNumber}_PARA_DOWNLOAD`;
        const link = document.createElement('a');
        link.href = url;
        link.download = `nome_do_arquivo_${fileNumber}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };

    const handleProgresso = () => {
        navigate('/');
    };

    const handleAvaliacao = () => {
        navigate('/');
    };

    return (
        <Container 
            component="main" 
            maxWidth="xs"
        >
            <CssBaseline />
            <Paper 
                elevation={2} 
                sx={{ 
                    mt: 7, 
                    p: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    boxShadow: "0" 
                    }}
            >
                <DescriptionOutlinedIcon 
                    sx={{ 
                        width: 100, 
                        height: 100, 
                        color: '#07382E' 
                        }} 
                />

                <Typography 
                    component="h1" 
                    variant="h9" 
                    sx={{ 
                        color: '#07382E', 
                        mt: 2, 
                        fontSize: '1.5em' 
                        }}
                >
                    Modelo Documentação
                </Typography>

                <Typography 
                    component="h1" 
                    variant="h9"
                    sx={{ 
                        color: '#000', 
                        mt: 2, 
                        fontSize: '1.2em', 
                        marginLeft: '-65%' 
                        }}
                >
                    Orientações
                </Typography>

                <Box 
                    sx={{ 
                        display: 'flex', 
                        width: '92%', 
                        mt: 2
                        }}
                >
                    <Typography 
                        component="body" 
                        variant="h3" 
                        sx={{ 
                            textAlign: 'JUSTIFY', 
                            fontSize: '0.9em', 
                            width: '100%' 
                            }}
                    >
                        Disponibilizamos dois arquivos já formatados conforme as normas da ABNT, 
                        prontos para receber as ideias brilhantes do seu projeto.<br/> 
                        Siga os passos do Manual e eleve seu TCC a novos patamares.
                    </Typography>
                </Box>

                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        marginTop: '5%', 
                        width: '100%' 
                        }}
                >
                    <Box 
                        sx={{ 
                            mt:2,
                            width: '100%', 
                            boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                            borderRadius: '5px', 
                            padding: '10px', 
                            marginBottom: '10px' 
                            }}
                    >
                        <IconButton 
                            onClick={() => 
                            handleDownload(1)}
                        >
                            <FileDownloadOutlinedIcon 
                                sx={{ 
                                    color: '#07382E' 
                                    }} 
                            />
                        </IconButton>
                    </Box>

                    <Box 
                        sx={{ 
                            mt:2,
                            width: '100%', 
                            boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                            borderRadius: '5px', 
                            padding: '10px' 
                            }}
                    >
                        <IconButton 
                            onClick={() => 
                            handleDownload(2)}
                        >
                            <FileDownloadOutlinedIcon 
                                sx={{ 
                                    color: '#07382E' 
                                    }} 
                            />
                        </IconButton>
                    </Box>
                </Box>
                
                {/* MENU PRINCIPAL  */}
                <Box elevation={3}>
                    <BottomNavigation
                        sx={{ 
                            position: 'fixed', 
                            bottom: 0, 
                            left: 0, 
                            right: 0, 
                            backgroundColor: '#5DA18F80', 
                            height: '9%' 
                        }}
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction 
                            onClick={handleHome}
                            label="Home" 
                            icon={<HomeIcon 
                                sx={{ 
                                    fill: value === 0 ? '#07382E' : 'none', 
                                    stroke: '#07382E', 
                                    strokeWidth: 2, 
                                    fontSize: '2rem' 
                                }} 
                                />}
                            sx={{ 
                                color:  '#07382E', 
                                fontSize: '3em', 
                                fontWeight: 'bold', 
                                '& .MuiBottomNavigationLabel': { 
                                    gap: '10x' 
                                } 
                            }}
                        />

                        <BottomNavigationAction 
                            onClick={handleProgresso}
                            label="Progresso" 
                            icon={<SchoolIcon 
                                sx={{ 
                                    fill: value === 1 ? '#07382E' : 'none', 
                                    stroke: '#07382E', 
                                    strokeWidth: 2, 
                                    fontSize: '2rem' 
                                }} 
                                />}
                            sx={{ 
                                color: '#07382E', 
                                fontSize: '2rem', 
                                fontWeight: 'bold', 
                                '& .MuiBottomNavigationLabel': { 
                                    gap: '10px' 
                                } 
                            }}
                        />
                        <BottomNavigationAction 
                            onClick={handleAvaliacao}
                            label="Avaliação" 
                            icon={<StarIcon 
                                sx={{ 
                                    fill: value === 2 ? '#07382E' : 'none', 
                                    stroke: '#07382E', 
                                    strokeWidth: 2, 
                                    fontSize: '2rem' 
                                }}
                            />}
                            sx={{ 
                                color: '#07382E', 
                                fontSize: '2rem', 
                                fontWeight: 'bold', 
                                '& .MuiBottomNavigationLabel': { 
                                    gap: '10px' 
                                } 
                            }}
                        />
                    </BottomNavigation>
                </Box>
            </Paper>
        </Container>
    );
}
