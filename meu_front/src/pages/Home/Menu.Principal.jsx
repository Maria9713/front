import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import Paper from '@mui/material/Paper';

export default function FixedBottomNavigation() {

    const navigate = useNavigate();
    const handleHome= () => {
        navigate('/');
    };

    const handleProgresso= () => {
        navigate('/');
    };

    const handleAvaliacao= () => {
        navigate('/');
    };


  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed' }} elevation={3}>
       <Box elevation={3} >

<BottomNavigation
sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#5DA18F80', height: '9%'}}
    showLabels
    value={value}
    onChange={(event, newValue) => {
    setValue(newValue);
    }}

        >

<BottomNavigationAction 
    onClick={handleHome}
    label="Home" 
    icon={<HomeIcon sx={{ fill: value === 0 ? '#07382E' : 'none', stroke: '#07382E', strokeWidth: 2, fontSize: '2rem' }} />}
    sx={{ color:  '#07382E', fontSize: '3em', fontWeight: 'bold', '& .MuiBottomNavigationLabel': { gap: '10x' } }}
/>

<BottomNavigationAction 
    onClick={handleProgresso}
    label="Progresso" 
    icon={<SchoolIcon sx={{ fill: value === 1 ? '#07382E' : 'none', stroke: '#07382E', strokeWidth: 2, fontSize: '2rem' }} />}
    sx={{ color: '#07382E', fontSize: '2rem', fontWeight: 'bold', '& .MuiBottomNavigationLabel': { gap: '10px' } }}
/>

<BottomNavigationAction 
    onClick={handleAvaliacao}
    label="Avaliação" 
    icon={<StarIcon sx={{ fill: value === 2 ? '#07382E' : 'none', stroke: '#07382E', strokeWidth: 2, fontSize: '2rem'  }} />}
    sx={{ color: '#07382E', fontSize: '2rem', fontWeight: 'bold', '& .MuiBottomNavigationLabel': { gap: '10px' } }}
/>

</BottomNavigation>

</Box>
    </Paper>
  );
}
