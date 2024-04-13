import * as React from 'react'; 
import { Box, Container, CssBaseline, Paper, Typography, IconButton, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';


export default function Configuracoes() {
    const handleBack = () => {};
    const [value, setValue] = React.useState(0);

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
                            <ArrowBackIcon 
                                sx={{ fontSize: 35 }} 
                            />
                        </IconButton>

                        <CheckBoxOutlineBlankIcon 
                            sx={{   width: 50, 
                                    height: 100, 
                                    color:'#07382E' 
                                }} 
                        />

                        <Typography 
                            component="h1" 
                            variant="h9" 
                            sx={{ color:'#07382E', 
                                    mt: -1 
                                }}
                        >
                            Nome da Tarefa
                        </Typography>

                        {/* CAMPO DE LEITURA DATA  */}

                        <Box 
                            sx={{   boxShadow: '5', 
                                    width:'100%',
                                    height: '100%', 
                                    borderRadius: '5px', 
                                    marginTop: '5%'
                                    }}
                        >
                            <CalendarMonthIcon/>
                            Data de Conclusão:
                        </Box>

                         {/* CAMPO DE LEITURA ATRIBUIDO  */}

                        <Box 
                            sx={{   boxShadow: '5', 
                                    width:'100%',
                                    height: '100%', 
                                    borderRadius: '5px', 
                                    marginTop: '5%',
                                }}
                        >
                            <GroupIcon/>
                            Atribuido:
                        </Box>


                        

                                        {/* MENU PRINCIPAL   */}

                    <Box 
                        elevation={3}
                        sx={{ 
                            position: 'fixed', 
                            bottom: 0, left: 0, right: 0, 
                            backgroundColor: '#5DA18F' 
                        }} 
                    >

                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        >

                        <BottomNavigationAction 
                            label="Home" 
                            icon={<HomeIcon 
                                sx={{ fill: 'none', 
                                stroke: '#07382E', 
                                strokeWidth: 2 }} 
                                />}
                            sx={{   color: '#07382E', 
                                    fontSize: '1.2rem', 
                                    fontWeight: 'bold',
                                    '& .MuiBottomNavigationLabel': { gap: '10px' } 
                                }}
                        />

                        <BottomNavigationAction 
                            label="Progresso" 
                            icon={<SchoolIcon 
                                sx={{    fill: 'none', 
                                        stroke: '#07382E', 
                                        strokeWidth: 2 
                                }} />}
                            sx={{   color: '#07382E', 
                                    fontSize: '1.2rem', 
                                    fontWeight: 'bold', 
                                    '& .MuiBottomNavigationLabel': { gap: '10px' } 
                                }}
                        />

                        <BottomNavigationAction 
                            label="Avaliação" 
                            icon={<StarIcon 
                            sx={{   fill: 'none', 
                                    stroke: '#07382E', 
                                    strokeWidth: 2 
                            }} />}

                            sx={{   color: '#07382E', 
                                    fontSize: '1.2rem', 
                                    fontWeight: 'bold', 
                                    '& .MuiBottomNavigationLabel': { gap: '10px' } 
                                }}
                        />

                        </BottomNavigation>

                    </Box>

                </Paper>

        </Container>

    );

}