import * as React from 'react'; 
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    CssBaseline,
    Paper,
    Typography,
    IconButton
    } from '@mui/material';


import ShieldIcon from '@mui/icons-material/Shield';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';





export default function Termos_e_Politicas() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/Central_Config');
    };

    return (

        <Container component="main" maxWidth="xs">

            <CssBaseline />

                <Paper elevation={2} 
                    sx={{ 
                        mt: 2, 
                        p: 2, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        boxShadow: "0" 
                    }}
                >
                
                    <IconButton 
                        onClick={handleBack} 
                        sx={{ 
                            alignSelf: 'flex-start',
                            mt: -2
                            }}
                    >
                        <ArrowBackIcon 
                            sx={{ 
                                fontSize: 35 
                            }} 
                        />
                    </IconButton>

                    <ShieldIcon
                        sx={{   
                            width: 100, 
                            height: 200, 
                            color:'#07382E',
                            mt: -5 
                            }}
                    >
                    </ShieldIcon>

                    <Typography 
                        component="h1" 
                        variant="h9" 
                        sx={{ 
                            color:'#07382E',
                            mt: -5 
                        }} 
                    >
                        Termos e Política
                    </Typography>

                    <Box 
                        sx={{   width: '100%', 
                                mt: 3, mx:2 ,
                                overflowY: 'auto', 
                                maxHeight: '390px', 
                                textAlign: 'justify'
                        }}
                    >

                        <Typography 
                            component="" 
                            variant="body1" 
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.vvvLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>

                    </Box>

                </Paper>

        </Container>

    );

}

