import React, { useState } from 'react';
import { Box, Button, Container, CssBaseline, Paper, Typography, IconButton, Grid, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Avatar, Menu, MenuItem, Checkbox } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AlarmIcon from '@mui/icons-material/Alarm';
import Popup from './POP-UP1';



export default function Configuracoes() {

    // TESTE POP-UP 
    const [openPopup, setOpenPopup] = useState(false);

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    // Função de retorno de chamada para o botão de voltar
    const handleBack = () => {};
    // Estado e função para atualizar o valor do BottomNavigation
    const [value, setValue] = React.useState(0);
     // Descrição da tarefa
    const descricao = "Descrição do Evento"; 
    // Estado e função para atualizar a lista de usuários atribuídos à tarefa
    const [assignedUsers, setAssignedUsers] = useState(["João", "Maria", "Carlos", "Ana", "Pedro"]);
      // Estado e função para atualizar o elemento de ancoragem do menu de usuários
    const [anchorEl, setAnchorEl] = useState(null);
    // Variável booleana para verificar se o menu de usuários está aberto
    const openMenu = Boolean(anchorEl);
    // Função de retorno de chamada para lidar com o clique no menu
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    // Função de retorno de chamada para lidar com o clique nos itens do menu
    const handleMenuItemClick = (user) => {
        const index = assignedUsers.indexOf(user);
        if (index === -1) {
            setAssignedUsers([...assignedUsers, user]);
        } else {
            const updatedUsers = [...assignedUsers];
            updatedUsers.splice(index, 1);
            setAssignedUsers(updatedUsers);
        }
    };
     // Função de retorno de chamada para fechar o menu
    const handleClose = () => {
        setAnchorEl(null);
    };
    // Componente do menu de usuários atribuídos
    const UserListMenu = () => {
        return (
            <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'user-list-menu',
                }}
            >
                {getAllUsers().map((user, index) => (
                    <MenuItem key={index} onClick={() => handleMenuItemClick(user)}>
                        <Checkbox checked={assignedUsers.includes(user)} />
                        <ListItemText primary={user} />
                    </MenuItem>
                ))}
            </Menu>
        );
    };
    // Função para obter todos os usuários disponíveis
    const getAllUsers = () => {
        // Aqui você deve retornar todos os usuários disponíveis
        // Por enquanto, vamos apenas retornar uma lista fixa
        const allUsers = ['João', 'Maria', 'Carlos', 'Ana', 'Pedro'];
        return allUsers;
    };
     // Componente da lista de tarefas
    const TaskList = () => {
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(!open);
        };
    // Função para renderizar avatares dos usuários atribuídos
    const renderAvatars = () => {
            if (assignedUsers.length === 0) {
                return null;
            } else if (assignedUsers.length === 1) {
                return (
                    <Avatar alt={assignedUsers[0]} src={`https://source.unsplash.com/32x32/?${assignedUsers[0]}`} sx={{ width: 24, height: 24, marginLeft: 10 }} />
                );
            } else {
                return (
                
                    <>
                        {assignedUsers.slice(0, 3).map((user, index) => (
                            <Avatar key={index} alt={user} src={`https://source.unsplash.com/32x32/?${user}`} sx={{ width: 24, height: 24, ml: -1 }} />
                        ))}
                    </>
                );
            }
        };
     
        const summary = renderSummary();

        return (
                <List sx={{ width: '100%' }} component="nav" aria-labelledby="task-list-header">
                <ListItemButton onClick={handleClick} sx={{ pr: -1 }}>
                    <ListItemIcon sx={{ mr: -3 }}>
                        <GroupOutlinedIcon sx={{ color: '#07382E' }} />
                    </ListItemIcon>
                    <ListItemText primary="Convidar:" primaryTypographyProps={{ fontWeight: 'bold' }} />
                    {renderAvatars()}
                    <ListItemText primary={summary} primaryTypographyProps={{ variant: 'body2', fontSize: '0.8rem' }} sx={{ marginLeft: 2 }} />
                    <IconButton onClick={handleMenuClick}>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                </ListItemButton>
                {/* Lista de Usuários (sem avatares) */}
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {getAllUsers().map((user, index) => (
                            <ListItemButton key={index} sx={{ pl: 4 }}>
                                <Checkbox checked={assignedUsers.includes(user)} onClick={() => handleMenuItemClick(user)} />
                                <Avatar alt={user} src={`https://source.unsplash.com/32x32/?${user}`} />
                                <ListItemText primary={user} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>

                <UserListMenu />
            </List>
        );
    };

    const renderSummary = () => {
        if (assignedUsers.length === 0) {
            return "Ninguém atribuído";
        } else if (assignedUsers.length <= 3) {
            return assignedUsers.join(", ");
        } else {
            return `${assignedUsers[0]} e +${assignedUsers.length - 1} pessoas`;
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={2} sx={{ mt: 5, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0" }}>
                <IconButton onClick={handleBack} sx={{ alignSelf: 'flex-start' }}>
                    <ArrowBackIcon sx={{ fontSize: 35 }} />
                </IconButton>
                <EditCalendarIcon sx={{ width: 50, height: 100, color: '#07382E' }} />
                <Typography component="h1" variant="h9" sx={{ color: '#07382E', mt: -1 }}>
                    Novo Evento 
                </Typography>

                {/* CAMPO DE TÍTULO TAREFA  */}
                <Box sx={{ boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', borderRadius: '5px', marginTop: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '-10px' }}>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                            <IconButton disabled>
                                <CreateOutlinedIcon sx={{ color: '#07382E', marginLeft: '60%', alignItems: 'center' }} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '10%', textAlign: 'center', fontWeight: 'bold' }}>
                                Título:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'center', marginTop: '20%', marginLeft: '10%' }}>
                                {/* {task.dueDate} */}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* CAMPO DE  DATA  */}
                <Box sx={{ boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', borderRadius: '5px', marginTop: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '-10px' }}>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                            <IconButton disabled>
                                <CalendarMonthIcon sx={{ color: '#07382E', marginLeft: '60%' }} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '5%', textAlign: 'center', fontWeight: 'bold' }}>
                                Data:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'center', marginTop: '20%', marginLeft: '10%' }}>
                                {/* {task.dueDate} */}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                  {/* CAMPO DE HORA  */}
                  <Box sx={{ boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', borderRadius: '5px', marginTop: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '-10px' }}>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                            <IconButton disabled>
                                <AlarmIcon sx={{ color: '#07382E', marginLeft: '60%' }} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '5%', textAlign: 'center', fontWeight: 'bold' }}>
                                Horario:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'center', marginTop: '20%', marginLeft: '10%' }}>
                                {/* {task.dueDate} */}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* CAMPO DE LEITURA ATRIBUIDOS  */}
                <Box sx={{ boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', borderRadius: '5px', marginTop: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '-10px' }}>
                    <TaskList />
                </Box>

                {/* CAMPO DE  DESCRIÇÃO  */}
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
                        padding: '10px'
                    }}
                >
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                            <IconButton disabled>
                                <EditNoteOutlinedIcon sx={{ color: '#07382E' }} /> 
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Descrição:
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginTop: '2px', marginLeft: '3%' }}> {/* Adicionado marginTop para separar da linha acima */}
                        {descricao}
                    </Typography>
                </Box>

                
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={6}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        sx={{
                            mt: 2,
                            mb: 5,
                            maxWidth: "180px",
                            alignItems: "center",
                            backgroundColor: "#FFFFFF",
                            color: "#07382E",
                            borderColor: "#07382E",
                            "&:hover": { backgroundColor: "#07382E", color: "#FFFFFF" }
                        }}
                        onClick={handleOpenPopup} // Adicione esta linha para abrir o pop-up ao clicar no botão
                    >
                        CRIAR EVENTO
                    </Button>
                </Grid>
            </Grid>
            {/* Componente de pop-up */}
            <Popup open={openPopup} handleClose={handleClosePopup} />
        


                {/* MENU PRINCIPAL   */}
                <Box elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#5DA18F' }}>
                    <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
                        <BottomNavigationAction label="Home" icon={<HomeIcon sx={{ fill: 'none', stroke: '#07382E', strokeWidth: 2 }} />} sx={{ color: '#07382E', fontSize: '1.2rem', fontWeight: 'bold', '& .MuiBottomNavigationLabel': { gap: '10px' } }} />
                        <BottomNavigationAction label="Progresso" icon={<SchoolIcon sx={{ fill: 'none', stroke: '#07382E', strokeWidth: 2 }} />} sx={{ color: '#07382E', fontSize: '1.2rem', fontWeight: 'bold', '& .MuiBottomNavigationLabel': { gap: '10px' } }} />
                        <BottomNavigationAction label="Avaliação" icon={<StarIcon sx={{ fill: 'none', stroke: '#07382E', strokeWidth: 2 }} />} sx={{ color: '#07382E', fontSize: '1.2rem', fontWeight: 'bold', '& .MuiBottomNavigationLabel': { gap: '10px' } }} />
                    </BottomNavigation>
                </Box>

                
            </Paper>
        </Container>
    );
}
