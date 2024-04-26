import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
        Button,
        Box,
        Grid,
        Container, 
        CssBaseline, 
        Paper, 
        Typography,  
        IconButton, 
        TextField
        } from '@mui/material';

    
// IMPORTS DE ICONES 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

// IMPORT POP-UP 
import Popup from './POP_UP_HELP';


export default function Central_Ajuda() {
    const [assunto, setAssunto] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Assunto:', assunto);
        console.log('Descrição:', descricao);
        setAssunto('');
        setDescricao('');
    };

    const navigate = useNavigate();
    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const [openPopup, setOpenPopup] = useState(false);
    

    const handleBack = () => {
        navigate('/Central_Config');
    };
    const handleInstagram = () => window.location.href = 'https://www.instagram.com/tccerto.app';
    const handleEmail = () => window.location.href = 'mailto:tccerto.app@outlook.com';
    
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

                    < HelpOutlineOutlinedIcon
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
                        Relatar Problema
                    </Typography>

                    <Typography
                        sx={{
                            mt: 1,
                            textAlign: 'center'
                        }}>
                    Algum Problema com o TCCERTO?<br/>
                        Entre em contato com a gente!
                    </Typography>
                                            {/* CONTATO OUTLOOK  */}
                    <Box 
                        onClick={handleEmail}
                        sx={{ 
                            boxShadow:'2px 0px 12px 5px rgba(0, 0, 0, 0.1)', 
                            width:'100%', 
                            height: '100%', 
                            borderRadius: '5px', 
                            marginTop: '5%', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            padding: '-10px',
                            mt: 2,
                            cursor: 'pointer'
                        }}
                    >
                        <Grid 
                        container alignItems="center" 
                        spacing={1}
                        >
                            <Grid item>
                                <IconButton disabled>
                                < EmailOutlinedIcon
                                    sx={{
                                    color:'#07382E', 
                                    marginLeft: '90%'
                                    }} 
                                    />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <Typography 
                                variant="subtitle1" 
                                gutterBottom
                                hrfe= 'tccerto.app@outlook.com'
                                sx={{ 
                                    marginTop: '5%', 
                                    textAlign: 'Center', 
                                    fontWeight: 'bold',
                                    marginLeft: '20%'
                                    
                                }}
                                >
                                tccerto.app@outlook.com
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                                            {/* CONTATO INSTAGRAM  */}
                    <Box 
                        onClick={handleInstagram} 
                        sx={{ 
                        boxShadow:'2px 0px 12px 5px rgba(0, 0, 0, 0.1)', 
                        width:'100%', 
                        height: '100%', 
                        borderRadius: '5px', 
                        marginTop: '5%', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        padding: '-10px',
                        mt: 1,
                        cursor: 'pointer'
                        }}
                    >
                        <Grid 
                        container alignItems="center" 
                        spacing={1}
                        >

                            <Grid item>
                                <IconButton disabled>
                                < InstagramIcon
                                    sx={{
                                    color:'#07382E', 
                                    marginLeft: '90%'
                                    }} 
                                    />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <Typography 
                                variant="subtitle1" 
                                gutterBottom
                                sx={{ 
                                    marginTop: '5%', 
                                    textAlign: 'Center', 
                                    fontWeight: 'bold',
                                    marginLeft: '80%'
                                    
                                }}
                                >
                                @tccerto.app
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                                            {/* INFORME SEU PROBLEMA  */}
                    <form onSubmit={handleSubmit}>
                    
                        <Box
                            sx={{
                                boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)',
                                width: '180%',
                                height: '80%',
                                borderRadius: '5px',
                                marginTop: '5%',
                                display: 'flex',
                                flexDirection: 'column', 
                                alignItems: 'flex-start', 
                                padding: '10px',
                                marginLeft: "-40%",
                                mt: 2
                            }}
                    >

                        <Grid 
                            container 
                            alignItems="center" 
                            spacing={1}
                        >

                            <Grid item>
                                <Typography 
                                    variant="subtitle1" 
                                    gutterBottom 
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Assunto:
                                </Typography>
                            </Grid>

                        </Grid>

                            <TextField
                                fullWidth
                                value={descricao}
                                onChange={(event) => 
                                setDescricao(event.target.value)}
                                variant="standard"
                            />
                        </Box>

                        <Box
                            sx={{
                                boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)',
                                width: '180%',
                                height: '150%',
                                borderRadius: '5px',
                                marginTop: '5%',
                                display: 'flex',
                                flexDirection: 'column', 
                                alignItems: 'flex-start', 
                                padding: '10px',
                                marginLeft: "-40%",
                                mt:2
                            }}
                    >

                        <Grid 
                            container 
                            alignItems="center" 
                            spacing={1}
                        >

                            <Grid item>
                                <Typography 
                                    variant="subtitle1" 
                                    gutterBottom 
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Descrição:
                                </Typography>
                            </Grid>

                        </Grid>

                            <TextField
                                fullWidth
                                value={assunto}
                                onChange={(event) => 
                                setAssunto(event.target.value)}
                                variant="standard"
                            />
                        </Box> 
                    </form>
                                                                {/* BOTÃO PARA ENVIAR TAREFA  */}
                        <Grid 
                            container 
                            justifyContent="center" 
                            alignItems="center" 
                            spacing={2}
                        >

                            <Grid item xs={6}>
                                <Button
                                    onClick={handleOpenPopup}
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        mt: 5,
                                        mb: 10,
                                        maxWidth: "180px",
                                        alignItems: "center",
                                        backgroundColor: "#FFFFFF",
                                        color: "#07382E",
                                        borderColor: "#07382E",
                                        "&:hover": { 
                                            backgroundColor: "#07382E", 
                                            color: "#FFFFFF" 
                                        }
                                    }}
                                >
                                    ENVIAR
                                </Button>
                            </Grid>

                        </Grid>
                </Paper>
                <Popup 
                open={openPopup} 
                handleClose={handleClosePopup} 
            />
        </Container>
    );
    
}