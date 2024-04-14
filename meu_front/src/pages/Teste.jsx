import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

function MeuComponente({ descricao }) {
  return (
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
        padding: '10px' // Alterei de '-10px' para '10px' para que o padding seja aplicado corretamente
      }}
    >
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <IconButton disabled>
            <EditNoteOutlinedIcon sx={{ color: '#07382E', marginLeft: '60%' }} />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '5%', textAlign: 'center', fontWeight: 'bold' }}>
            Descrição:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph sx={{ textAlign: 'center', marginTop: '20%', marginLeft: '10%' }}>
            {descricao}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MeuComponente;
