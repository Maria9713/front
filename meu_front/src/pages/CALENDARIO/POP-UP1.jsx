
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const Popup = ({ open, handleClose }) => {
    return (
            <Modal open={open} onClose={handleClose}>
            <div style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: '20px',
              width: '340px',
              height: '340px',
              borderRadius: '6px'
            }}>
               <EventAvailableIcon sx={{ marginTop:'3%',width: 300, height: 170, color: '#07382E' }} />
              <Typography variant="h5"sx={{ textAlign:'center', fontSize:'1.5rem',fontWeight: 'bold'}}>Evento Criado Com Sucesso!  </Typography>
              <Button onClick={handleClose} sx={{  color: '#07382E',fontWeight: 'bold', fontSize:'1rem', marginTop: '8%', marginLeft:'70%'}}>Avançar</Button>
            </div>
          </Modal>
    );
};

export default Popup;
