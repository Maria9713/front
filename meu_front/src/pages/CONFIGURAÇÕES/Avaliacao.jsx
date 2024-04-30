import React, { useState } from 'react';
import { Modal, Typography, Button, IconButton, Grid } from '@mui/material';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import CloseIcon from '@mui/icons-material/Close'; 
import { Rating } from '@mui/material';

const Avaliacao = ({ open, handleClose }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleSend = () => {
    // Aqui você pode adicionar a lógica para enviar a avaliação
    handleClose(); 
  };

  return (
    <Modal 
      open={open} 
      onClose={handleClose}
    >
      <div 
        style={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          width: '400px',
          borderRadius: '6px',
          textAlign: 'center'
        }}
      >
        <IconButton 
          onClick={handleClose} 
          style={{ 
            position: 'absolute', 
            top: 5, 
            right: 5 
          }}
        >
          <CloseIcon />
        </IconButton>
        
        <EmojiEmotionsOutlinedIcon
          sx={{ 
            width: 100, 
            height: 100, 
            color: '#07382E',
            marginBottom: '20px'
          }} 
        />
        
        <Typography 
          variant="h5"
          sx={{ 
            textAlign:'center', 
            fontSize:'1.5rem',
            fontWeight: 'bold'
          }}
        >
          Avalie sua experiência com o TCCERTO
        </Typography>

        <Grid 
            container 
            justifyContent="center" 
            alignItems="center" 
            spacing={1} 
            sx={{ 
                marginTop: '20px' 
                }}
        >
          <Grid item>
            <Rating
              name="rating"
              value={rating}
              onChange={handleRatingChange}
              max={5}
              size="large"
              sx={{ fontSize: '3rem' }}
            />
          </Grid>
        </Grid>

        <Button 
          type="submit"
          fullWidth
          variant="outlined" 
          onClick={handleSend} 
          sx={{
            mt: 5,
            mb: 10,
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
        >
          Enviar
        </Button>

      </div>
    </Modal>
  );
};

export default Avaliacao;
