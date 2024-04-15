
import React from 'react';
import { Modal, Box, Typography, Button, Grid } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

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
               <DeleteForeverOutlinedIcon sx={{ width: 300, height: 120, color: '#07382E' }} />
              <Typography variant="h5"sx={{ textAlign:'center', fontSize:'1.5rem',fontWeight: 'bold'}}>Excluir Tarefa?  </Typography>
              <Typography variant="body2"sx={{ marginTop:'5%',textAlign:'center', fontSize:'1rem'}}>Certeza que deseja excluir esta tarefa?  </Typography>
              <Grid container spacing={2} sx={{marginTop: '6%'}}>
  <Grid item xs={6}>
  <Button
  onClick={handleClose}
  type="submit"
  fullWidth
  variant="outlined"
  sx={{
    mt: 2,
    mb: 5,
    maxWidth: "180px",
    backgroundColor: "#FFFFFF",
    color: "#07382E",
    borderColor: "#07382E",
    "&:hover": { backgroundColor: "#07382E", color: "#FFFFFF" }
  }}
>
  Voltar
</Button>
</Grid>

  <Grid item xs={6}>
  <Button
  onClick={handleClose}
  type="submit"
  fullWidth
  variant="outlined"
  sx={{
    mt: 2,
    mb: 5,
    maxWidth: "180px",
    backgroundColor: "transparent",
    color: "#FF0000",
    borderColor: "#FF0000",
    "&:hover": {
      backgroundColor: "#FF0000",
      color: "#FFFFFF",
      borderBlockColor: 'transparent'
    }
  }}
>
  EXCLUIR
</Button>

  </Grid>
</Grid>
              {/* <Button onClick={handleClose} sx={{  color: '#07382E',fontWeight: 'bold', fontSize:'1rem', marginTop: '8%', marginLeft:'70%'}}>SIM</Button>
              <Button onClick={handleClose} sx={{  color: '#07382E',fontWeight: 'bold', fontSize:'1rem', marginTop: '0%', marginLeft:'0%'}}>Não</Button> */}
            </div>
          </Modal>
    );
};

export default Popup;