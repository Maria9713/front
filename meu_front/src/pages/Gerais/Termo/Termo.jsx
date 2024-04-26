import * as React from 'react'; 
import {Box,Container,CssBaseline,Paper,Typography,IconButton,Switch,Divider} from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import Button from '@mui/material/Button';



export default function Configuracoes() {

    return (

        <Container component="main" maxWidth="xs">

            <CssBaseline />

                <Paper elevation={2} 
                    sx={{ mt: 5, 
                    p: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    boxShadow: "0" }}
                >

                    <ShieldIcon
                        sx={{   width: 100, 
                                height: 200, 
                                color:'#07382E' 
                            }}
                    >
                    </ShieldIcon>

                    <Typography 
                        component="h1" 
                        variant="h9" 
                        sx={{ color:'#07382E' }} 
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

                    <Button 
                        type="submit" 
                        fullWidth variant="outlined"
                            sx={{ mt: 4, mb: 2, 
                                backgroundColor:"#fff", 
                                color: "#07382E",  
                                borderColor: '#07382E', 
                                '&:hover': {borderColor: '#07382E',  
                                backgroundColor: 'transparent',}, }}
                    >
                        ACEITO
                    </Button>

                </Paper>

        </Container>

    );

}

