import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import AdbIcon from '@mui/icons-material/Adb';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LightOnIcon from '@mui/icons-material/EmojiObjects';
import MonetizationIcon from '@mui/icons-material/MonetizationOn';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const pages = [
    { text: 'Tarefas', icon: <CheckBoxIcon />, link: '/tarefas' },
    { text: 'Agenda', icon: <CalendarMonthIcon />, link: '/agenda' },
    { text: 'Dicas', icon: <LightOnIcon />, link: '/dicas' },
    { text: 'Orçamento', icon: <MonetizationIcon />, link: '/orcamento' },
    { text: 'Modelo', icon: <ArticleIcon />, link: '/modelo' },
    { text: 'Configuração', icon: <SettingsIcon />, link: '/configuracao' }
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#E3FAF4' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    

                    {/* Menu lateral */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ color: '#07382E' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            <Box sx={{ width: 250, backgroundColor: '#5DA18F', minHeight: '100vh' }}>
                                <List>
                                    {pages.map((page) => (
                                        <Link key={page.text} to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <ListItem 
                                                button 
                                                onClick={handleCloseNavMenu} 
                                                sx={{
                                                    color: '#07382E',
                                                    '&:hover': {
                                                        color: 'white',
                                                        '& .MuiListItemIcon-root': {
                                                            color: 'white'
                                                        },
                                                        '& .MuiTypography-root': {
                                                            color: 'white'
                                                        }
                                                    },
                                                    '& .MuiListItemIcon-root': {
                                                        color: '#07382E'
                                                    },
                                                    '& .MuiTypography-root': {
                                                        color: '#07382E',
                                                        fontWeight: 'bold',
                                                        fontSize: '1.2rem' 
                                                    }
                                                }}
                                            >
                                                <ListItemIcon>
                                                    {page.icon}
                                                </ListItemIcon>
                                                <ListItemText primary={page.text} />
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </Box>

                    {/* Botões de páginas */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.text}
                                component={Link}
                                to={page.link}
                                onClick={handleCloseNavMenu}
                                sx={{ 
                                    my: 2, 
                                    color: '#07382E', 
                                    display: 'block', 
                                    textDecoration: 'none',
                                    '&:hover': {
                                        color: 'white'
                                    }
                                }}
                            >
                                {page.text}
                            </Button>
                        ))}
                    </Box>

                    {/* Botão de perfil */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Perfil">
                            <Link href="##" style={{ textDecoration: 'none' }}>
                                <IconButton sx={{ p: 0 }}>
                                    <Avatar alt="avatar" src=" " />
                                </IconButton>
                            </Link>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
