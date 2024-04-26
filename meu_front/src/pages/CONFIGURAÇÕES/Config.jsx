import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Box, Container, CssBaseline, Paper, Typography, 
        Divider, IconButton, } from '@mui/material';
import Link from '@mui/material/Link';
       
        

        
       

// IMPORTS DE ICONES 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';

// IMPORTS ICONES MENU 
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';



export default function CriarEvento() {
    const navigate = useNavigate();

    const handleBack = () => {'/'};

    return (
        <Container 
            component="main" 
            maxWidth="xs"
        >
            <CssBaseline />
                <Paper 
                    elevation={2} 
                    sx={{
                        mt: -2, 
                        p: 2, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        boxShadow: "0" 
                        }}
                >
                                            {/* INICIO CABEÇALHO  */}
                    <IconButton 
                        onClick={handleBack} 
                        sx={{ 
                            alignSelf: 'flex-start' 
                        }}
                    >
                        <ArrowBackIcon 
                            sx={{ 
                                fontSize: 35 
                            }} 
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
                                        {/* ITENS CONFIGURAÇÕES  */}
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
                            href="#" 
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
                            href="#" 
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
                            href="#" 
                            color="inherit" 
                            underline="none"
                        >
                            AVALIE-NOS
                        </Link>
                    </Typography>

                </Box>

            </Paper>
        </Container>
    );
    
}
