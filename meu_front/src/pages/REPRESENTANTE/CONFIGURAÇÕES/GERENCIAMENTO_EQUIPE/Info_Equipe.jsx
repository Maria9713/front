import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
    Box, 
    Container, 
    CssBaseline, 
    Paper, 
    Typography, 
    Divider, 
    IconButton,
    Grid,
    Button
} from '@mui/material';
import { List, ListItem, ListItemAvatar, Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const members = [
    { id: 1, name: 'Usuário 1', avatarSrc: '/avatar1.jpg' },
    { id: 2, name: 'Usuário 2', avatarSrc: '/avatar2.jpg' },
    { id: 3, name: 'Usuário 3', avatarSrc: '/avatar3.jpg' },
    // Adicione mais membros conforme necessário
];

export default function Info_Equipe() {
    const navigate = useNavigate();
    // Função para voltar para a página inicial
    const handleBack = () => {
        navigate('/Central_Equipe');
    };

    const [value, setValue] = React.useState(0);
    const descricao = "Descrição do Grupo"; // Definindo a descrição aqui


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

                    <Stack 
                        direction="row" 
                        spacing={2}
                    >
                            <Avatar
                                alt="img grupo"
                                src="/static/images/avatar/1.jpg"
                                sx={{ 
                                width: 100, 
                                height: 100, 
                                border: '2px solid #07382E' 
                                }}
                            />
                </Stack>

                    <Typography 
                        component="h1" 
                        variant="h9" 
                        sx={{ 
                            color: '#07382E', 
                            mt: 2,
                            textAlign:'center',
                            fontSize: '1.8em'
                            }}
                    >
                        Nome da Equipe
                    </Typography>

                <Box 
                    sx={{ 
                        textAlign: 'left' 
                        }}
                >
                    <Typography 
                        component="h2" 
                        variant="subtitle1" 
                        sx={{ 
                            color: '#07382E',
                            mt: 2,
                            fontSize: '1.4em',
                            fontWeight: 'bold',
                            marginLeft: '-115%' 
                            }}
                    >
                        Descrição:
                    </Typography>
                </Box>

                <Box
                    sx={{
                    boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)',
                    width: '100%',
                    height: '100%',
                    borderRadius: '5px',
                    marginTop: '5%',
                    display: 'flex',
                    flexDirection: 'column', 
                    alignItems: 'flex-start', 
                    padding: '10px',
                    mt: 0.5,
                    }}
                >
                    <Grid 
                    container 
                    alignItems="center" 
                    spacing={1}
                    >
                        <Typography 
                        variant="body1" 
                        paragraph 
                        sx={{ 
                            textAlign: 'left', 
                            marginTop: '10px', 
                            marginLeft: '3%' 
                        }}
                        > 
                        {descricao}
                        </Typography>
                    </Grid>
                </Box>
                                            {/* MEMBROS */}
                <Box 
                    sx={{ 
                        textAlign: 'left' 
                        }}
                >
                    <Typography 
                        component="h2" 
                        variant="subtitle1" 
                        sx={{ 
                            color: '#07382E',
                            mt: 2,
                            fontSize: '1.4em',
                            fontWeight: 'bold',
                            marginLeft: '-30%' 
                            }}
                    >
                        Membros:
                    </Typography>

                    <List >
                        {members.map(member => (
                        <ListItem 
                        key={member.id}
                        >
                            <ListItemAvatar>
                                <Avatar 
                                    alt={member.name} 
                                    src={member.avatarSrc}
                                    sx={{ width: 50, height: 50 }}
                                />
                            </ListItemAvatar>
                            <Box ml={8}>
                            <Typography 
                                variant="subtitle1">
                                {member.name}
                            </Typography>
                            </Box>
                        </ListItem>
                        ))}
                    </List>
                </Box>
                            {/* BOTÃO PARA EDITAR INFORMAÇÕES  */}
                <Box
                sx={{
                    width: '100%',
                    height: '100%'
                }}>
                    <Button
                            href={'/Edt_Equipe'}
                            type="submit"
                            fullWidth
                            variant="outlined"
                            sx={{
                            mt: 2,
                            mb: 5,
                            maxWidth: "100%",
                            backgroundColor: "transparent",
                            color: "#FF0000",
                            borderColor: "#FF0000",
                            "&:hover": {
                                
                                backgroundColor: "#FF0000",
                                color: "#FFFFFF",
                                borderBlockColor: 'transparent'
                            }
                            }}
                        >
                            Editar Informações
                        </Button>
                </Box>
            </Paper>
        </Container>
    )
}