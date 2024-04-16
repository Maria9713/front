import React from 'react';
import { Modal, Typography, Button } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const PopUp3 = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose} onClick={handleClose}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          width: '340px',
          height: '340px',
          borderRadius: '6px',
        }}
      >
        <DeleteForeverOutlinedIcon
          sx={{ width: 300, height: 170, color: '#07382E' }}
        />
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          Evento Excluída
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginTop: '5%', textAlign: 'center', fontSize: '1.1rem' }}
        >
         Evento foi excluído com sucesso!
        </Typography>
      </div>
    </Modal>
  );
};

export default PopUp3;
