import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
    Box, 
    Container, 
    CssBaseline, 
    Paper, 
    Typography, 
    Divider, 
    IconButton
} from '@mui/material';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import Popup from "./Avaliacao";

export default function Configuracoes() {

    const [openPopup, setOpenPopup] = useState(false);
    const navigate = useNavigate();

    // Função para voltar para a página inicial
    const handleBack = () => {
        navigate('/');
    };

    // Função para abrir o pop-up
    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    // Função para fechar o pop-up
    const handleClosePopup = () => {
        setOpenPopup(false);
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
                        mt: 5, 
                        p: 2, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        boxShadow: "0" 
                        }}
                >

                                            {/* CABEÇALHO */}
                    <IconButton 
                    onClick={handleBack} 
                    sx={{ 
                        alignSelf: 'flex-start' 
                    }}
                    >
                        <ArrowBackIcon 
                            sx={{ fontSize: 35 }} 
                        />
                    </IconButton>

                    <SettingsIcon 
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
                            mt: 2 
                            }}
                    >
                        Configurações
                    </Typography>

                                            {/* ITENS CONFIGURAÇÕES */}
                    <Box 
                        sx={{ 
                            width: '100%', 
                            mt: 3 
                            }}
                    >
                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                mt: 1, 
                                mb: 1, 
                                textAlign: 'left' 
                                }}
                        >
                            <Link 
                                href="./Central_Ajuda" 
                                color="inherit" 
                                underline="none"
                            >
                                CENTRAL DE AJUDA
                            </Link>
                        </Typography>
                            <Divider />

                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                mt: 1,
                                mb: 1, 
                                textAlign: 'left' 
                                }}
                        >
                            <Link 
                                href="./Termo_2" 
                                color="inherit" 
                                underline="none"
                            >
                                TERMOS E PRIVACIDADE
                            </Link>
                        </Typography>
                            <Divider />

                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                mt: 1, 
                                mb: 1, 
                                textAlign: 'left' 
                                }} 
                        >
                            <Link 
                                onClick={handleOpenPopup}
                                color="inherit" 
                                underline="none"
                                style={{ cursor: 'pointer' }}
                            >
                                AVALIE-NOS
                            </Link>
                        </Typography>
                    </Box>

                    <Popup 
                        open={openPopup} 
                        handleClose={handleClosePopup} 
                    />
                    
                </Paper>
        </Container>
    );
}
