import React from 'react';
import { Card, CardContent, Typography, Box, Checkbox, Grid, Avatar } from '@mui/material';

function TaskCard({ nomeTarefa, corPrazo, corTexto, diasRestantes, usuariosAtribuidos, maxAvatares }) {
    return (
        <Card sx={{ width: '100%', mt: 2, mb: 1, mx: 1, boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)' }}>
            <CardContent sx={{ padding: '4px 10px', display: 'flex', flexDirection: 'column' }}>
                <Grid container alignItems="center" justifyContent="space-between" spacing={1}>
                    <Grid item>
                        <Typography variant="h6" component="h2" sx={{ fontSize: '1.2rem' }}>
                            {nomeTarefa}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox disabled sx={{ color: '#07382E' }} />
                    </Grid>
                </Grid>
                <Box sx={{ marginLeft: '2px', marginTop: '10px', backgroundColor: corPrazo, color: corTexto, padding: '4px', borderRadius: '5px', width: 'fit-content', height: 'fit-content' }}>
                    <Typography variant="body2" sx={{ fontSize: '0.70rem' }}>
                        Termina em {diasRestantes} dias
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginBottom: '-10px' }}>
                    {usuariosAtribuidos.slice(0, maxAvatares).map((usuario, index) => (
                        <Avatar key={index} src={usuario.avatar} sx={{ width: 20, height: 20, marginLeft: index !== 0 ? '-8px' : '0' }} />
                    ))}
                    <Typography variant="body2" sx={{ fontSize: '0.70rem', marginLeft: '8px' }}>
                        {usuariosAtribuidos.map(usuario => usuario.nome).join(', ')} e mais {usuariosAtribuidos.length - maxAvatares} pessoas
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default TaskCard;
