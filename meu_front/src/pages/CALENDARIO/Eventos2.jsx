import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {TextField, Box, Button, Container, CssBaseline, Paper, Typography, 
        IconButton, Grid, List, ListItemButton, ListItemIcon, ListItemText, 
        Collapse, Avatar, Menu, MenuItem, Checkbox } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// IMPORTS DE ICONES 
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AlarmIcon from '@mui/icons-material/Alarm';

// IMPORTS ICONES MENU 
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

// IMPORT POP-UP 
import Popup from './POP-UP1';

export default function CriarEvento() {
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [descricao, setDescricao1] = useState('');
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Título:', titulo);
        console.log('Data :', data);
        console.log('Hora :', hora);
        console.log('Descrição:', descricao);
        setTitulo('');
        setData('');
        setHora('');
        setDescricao1('');
    };

    const [openPopup, setOpenPopup] = useState(false);

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const handleBack = () => {};

    const [value, setValue] = React.useState(0);
    
    const [assignedUsers, setAssignedUsers] = 
    useState(["João", "Maria", "Carlos", "Ana", "Pedro"]);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

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

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    <MenuItem 
                        key={index} 
                        onClick={() => 
                        handleMenuItemClick(user)}
                    >
                        <Checkbox 
                            checked={assignedUsers.includes(user)} 
                        />
                        <ListItemText primary={user} />
                    </MenuItem>
                ))}
            </Menu>
        );
    };

    const getAllUsers = () => {
        const allUsers = [
            'João', 
            'Maria', 
            'Carlos', 
            'Ana', 
            'Pedro'
        ];
        return allUsers;
    };

    const TaskList = () => {
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(!open);
        };

        const renderAvatars = () => {
            if (assignedUsers.length === 0) {
                return null;
            } else if (assignedUsers.length === 1) {
                return (
                    <Avatar
                        alt={assignedUsers[0]}
                        src={`https://source.unsplash.com/32x32/?${assignedUsers[0]}`}
                        sx={{
                            width: 24,
                            height: 24,
                            marginLeft: 10
                        }}
                    />
                );
            } else {
                return (
                    <>
                        {assignedUsers.slice(0, 3).map((user, index) => (
                            <Avatar
                                key={index}
                                alt={user}
                                src={`https://source.unsplash.com/32x32/?${user}`}
                                sx={{
                                    width: 24,
                                    height: 24,
                                    ml: -1
                                }}
                            />
                        ))}
                    </>
                );
            }
        };

        const summary = renderSummary();

        return (
            <List 
                sx={{ width: '100%' }} 
                component="nav" 
                aria-labelledby="task-list-header"
            >
                <ListItemButton 
                    onClick={handleClick} 
                    sx={{ pr: -0 }}
                >
                    <ListItemIcon 
                        sx={{ mr: -3 }}>
                        <GroupOutlinedIcon 
                        sx={{ color: '#07382E' }}/>
                    </ListItemIcon>

                    <ListItemText 
                        primary="Convidar:" 
                        primaryTypographyProps={{ 
                            fontWeight: 'bold' 
                            }} 
                    />
                        {renderAvatars()}
                    <ListItemText 
                        primary={summary} 
                        primaryTypographyProps={{ 
                            variant: 'body2', 
                            fontSize: '0.79rem' 
                            }} 
                        sx={{ 
                            marginLeft: 1 
                            }} 
                    />
                    <IconButton 
                    onClick={handleMenuClick}>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                </ListItemButton>

                <Collapse 
                    in={open} 
                    timeout="auto" 
                    unmountOnExit
                >
                    <List 
                    component="div" 
                    disablePadding
                    >
                        {getAllUsers().map((user, index) => (
                            <ListItemButton     
                                key={index} 
                                sx={{ pl: 4 }}
                            >
                                <Checkbox 
                                    checked={assignedUsers.includes(user)} 
                                    onClick={() => 
                                    handleMenuItemClick(user)} 
                                />
                                <Avatar 
                                    alt={user} 
                                    src={`https://source.unsplash.com/32x32/?${user}`}
                                />
                                <ListItemText 
                                    primary={user} 
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </List>
        );
    };

    const renderSummary = () => {
        if (assignedUsers.length === 0) {
            return "Ninguém atribuído";
        } else if (assignedUsers.length <= 3) {
            return assignedUsers.join(", ");
        } else {
            return `${assignedUsers[0]} 
            e +${assignedUsers.length - 1} pessoas`;
        }
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
                    mt: -2, 
                    p: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    boxShadow: "0" 
                    }}
            >
                <IconButton 
                    onClick={handleBack} 
                    sx={{ alignSelf: 'flex-start' }}
                >
                    <ArrowBackIcon 
                        sx={{ fontSize: 35 }} 
                    />
                </IconButton>

                <EditCalendarIcon 
                    sx={{ 
                        width: 50, 
                        height: 100, 
                        color: '#07382E' 
                        }} 
                />

                <Typography 
                    component="h1" 
                    variant="h9" 
                    sx={{ 
                        color: '#07382E', 
                        mt: -1 
                        }}
                >
                    Novo Evento
                </Typography>

                <form 
                    onSubmit={handleSubmit}
                >
                                            {/* CAMPO TITULO EVENTO  */}
                    <Box 
                        sx={{ 
                            boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                            width: '100%', 
                            height: '100%', 
                            borderRadius: '5px', 
                            marginTop: '5%', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            padding: '-10px' 
                            }}
                    >
                        <Grid 
                            container 
                            alignItems="center" 
                            spacing={1}
                        >

                            <Grid item>
                                <IconButton disabled>
                                    <CreateOutlinedIcon 
                                        sx={{ 
                                            color: '#07382E', 
                                            marginLeft: '60%', 
                                            alignItems: 'center' 
                                            }} 
                                    />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <Typography 
                                    variant="subtitle1" 
                                    gutterBottom 
                                    sx={{ 
                                        marginTop: '10%', 
                                        textAlign: 'center', 
                                        fontWeight: 'bold' 
                                        }}
                                >
                                        Título:
                                </Typography>
                            </Grid>

                            <Grid item>
                                <TextField 
                                    fullWidth 
                                    value={titulo}
                                    onChange={(event) =>
                                    setTitulo(event.target.value)} 
                                    variant="standard" 
                                />
                            </Grid>

                        </Grid>
                    </Box>
                                                    {/* CAMPO DATA EVENTO  */}
                    <Box 
                        sx={{ 
                            boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)',
                            width: '100%', 
                            height: '100%', 
                            borderRadius: '5px', 
                            marginTop: '5%', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            padding: '-10px' 
                            }}
                    >
                        <Grid 
                            container 
                            alignItems="center" 
                            pacing={1}
                        >

                            <Grid item>
                                <IconButton disabled>
                                    <CalendarMonthIcon 
                                        sx={{ 
                                            color: '#07382E',
                                            marginLeft: '60%' 
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
                                        textAlign: 'center', 
                                        fontWeight: 'bold' 
                                        }}
                                >
                                        Data:
                                </Typography>
                            </Grid>

                            <Grid item>
                                <TextField 
                                    fullWidth 
                                    type="date" 
                                    value={data} 
                                    onChange={(event) => 
                                    setData(event.target.value)} 
                                    variant="standard" 
                                />
                            </Grid>
                        </Grid>
                                                {/* CAMPO HORARIO  */}
                    </Box>
                    <Box 
                        sx={{ 
                            boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                            width: '100%', 
                            height: '100%', 
                            borderRadius: '5px', 
                            marginTop: '5%', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            padding: '-10px' 
                        }}
                    >
                        <Grid 
                            container 
                            alignItems="center" 
                            spacing={1}
                        >
                            <Grid item>
                                <IconButton disabled>
                                    <AlarmIcon 
                                        sx={{ 
                                            color: '#07382E', 
                                            marginLeft: '60%' 
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
                                        textAlign: 'center', 
                                        fontWeight: 'bold' 
                                        }}
                                >
                                        Horario:
                                </Typography>
                            </Grid>

                            <Grid item>
                                <TextField 
                                    fullWidth 
                                    type="time" 
                                    value={hora} 
                                    onChange={(event) => 
                                    setHora(event.target.value)} 
                                    variant="standard" 
                                />
                            </Grid>

                        </Grid>
                    </Box>
                                                {/* CAMPO CONVIDAR  */}
                    <Box 
                        sx={{ 
                            boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                            width: '100%', 
                            height: '100%', 
                            borderRadius: '5px', 
                            marginTop: '5%', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            padding: '-10px' 
                            }}
                        >
                        <TaskList />
                    </Box>
                                                {/* CAMPO DESCRIÇÃO EVENTO  */}
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
                                    <EditNoteOutlinedIcon 
                                        sx={{ color: '#07382E' }}
                                    />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <Typography 
                                    variant="subtitle1" 
                                    gutterBottom 
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Descrição:
                                </Typography>
                            </Grid>

                            <Grid item>
                                <TextField 
                                fullWidth 
                                value={descricao} 
                                onChange={(event) => 
                                setDescricao1(event.target.value)} 
                                variant="standard" 
                                />
                            </Grid>
                        </Grid>
                                                {/* BOTÃO CRIAR EVENTO  */}
                    </Box>
                    <Grid 
                        container 
                        justifyContent="center" 
                        alignItems="center" 
                        spacing={2}
                    >
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
                                    "&:hover": { 
                                        backgroundColor: "#07382E", 
                                        color: "#FFFFFF" 
                                    }
                                }}
                                onClick={handleOpenPopup}
                            >
                                CRIAR EVENTO
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                                         {/* POP-UP AQUI!  */}
                <Popup 
                    open={openPopup} 
                    handleClose={handleClosePopup} 
                />
                                            {/* MENU PRINCIPAL  */}
                <BottomNavigation
                    showLabels 
                    value={value} 
                    onChange={(event, newValue) => 
                    { setValue(newValue); 
                    }} 
                    sx={{ 
                        position: 'fixed', 
                        bottom: 0, 
                        left: 0, 
                        right: 0, 
                        backgroundColor: '#5DA18F80', 
                        height: '9%' 
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
                            color: '#07382E', 
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

            </Paper>

        </Container>

    );
    
}
