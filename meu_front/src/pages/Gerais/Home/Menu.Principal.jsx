// MainMenu.js
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

export default function MainMenu({ value, onChange }) {
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={onChange}
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#5DA18F80', height: '9%' }}
        >
            <BottomNavigationAction
                label="Home"
                icon={<HomeIcon sx={{ fill: value === 0 ? '#07382E' : 'none', stroke: '#07382E', strokeWidth: 2, fontSize: '2rem' }} />}
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
                label="Progresso"
                icon={<SchoolIcon sx={{ fill: value === 1 ? '#07382E' : 'none', stroke: '#07382E', strokeWidth: 2, fontSize: '2rem' }} />}
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
                label="Avaliação"
                icon={<StarIcon sx={{ fill: value === 2 ? '#07382E' : 'none', stroke: '#07382E', strokeWidth: 2, fontSize: '2rem' }} />}
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
    );
}
