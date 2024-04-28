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
import GroupsIcon from '@mui/icons-material/Groups';

export default function Geral_Equipe() {

    const navigate = useNavigate();

    // Função para voltar para a página inicial
    const handleBack = () => {
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

                    <GroupsIcon
                        sx={{ 
                            width: 130, 
                            height: 130, 
                            color: '#07382E' 
                            }} 
                    />

                    <Typography 
                        component="h1" 
                        variant="h9" 
                        sx={{ 
                            color: '#07382E', 
                            mt: -1,
                            textAlign:'center'
                            }}
                    >
                        Gerenciamento de Equipe
                    </Typography>

                                            {/* INFORMAÇÃO EQUIPE */}
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
                                textAlign: 'left',
                                fontWeight: 'bold' 
                                }}
                        >
                            <Link 
                                href="/Info_Equipe" 
                                color="inherit" 
                                underline="none"
                            >
                                Informações da Equipe
                            </Link>
                        </Typography>
                            <Divider />
                                            {/* CONVIDAR MEMBRO  */}
                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                mt: 1,
                                mb: 1, 
                                textAlign: 'left' ,
                                fontWeight: 'bold'
                                }}
                        >
                            <Link 
                                href="/Convitee" 
                                color="inherit" 
                                underline="none"
                            >
                                Convidar Membro
                            </Link>
                        </Typography>
                            <Divider />
                                            {/* REMOVER MEMBRO  */}
                            <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                mt: 1,
                                mb: 1, 
                                textAlign: 'left',
                                fontWeight: 'bold'
                                }}
                        >
                            <Link 
                                href="/Remover_Membro" 
                                color="inherit" 
                                underline="none"
                            >
                                Remover Membro
                            </Link>
                        </Typography>
                            <Divider />
                                            {/* DESFAZER EQUIPE  */}
                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                mt: 1, 
                                mb: 1, 
                                textAlign: 'left' 
                                }} 
                        >
                            <Link 
                                href="/Desfazer_Equipe"
                                color="inherit" 
                                underline="none"
                                style={{ 
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                Desfazer Equipe
                            </Link>
                        </Typography>
                    </Box>
                    
                </Paper>
        </Container>
    );
}
