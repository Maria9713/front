import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import Paper from '@mui/material/Paper';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#5DA18F' }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
          label="Home" 
          icon={<HomeIcon sx={{ fill: 'none', stroke: '#07382E', strokeWidth: 2 }} />}
          sx={{ color: '#07382E', fontSize: '1.2rem', fontWeight: 'bold', '& .MuiBottomNavigationLabel': { gap: '10px' } }}
        />
        <BottomNavigationAction 
          label="Progresso" 
          icon={<SchoolIcon sx={{ fill: 'none', stroke: '#07382E', strokeWidth: 2 }} />}
          sx={{ color: '#07382E', fontSize: '1.2rem', fontWeight: 'bold', '& .MuiBottomNavigationLabel': { gap: '10px' } }}
        />
        <BottomNavigationAction 
          label="Avaliação" 
          icon={<StarIcon sx={{ fill: 'none', stroke: '#07382E', strokeWidth: 2 }} />}
          sx={{ color: '#07382E', fontSize: '1.2rem', fontWeight: 'bold', '& .MuiBottomNavigationLabel': { gap: '10px' } }}
        />
      </BottomNavigation>
    </Paper>
  );
}
