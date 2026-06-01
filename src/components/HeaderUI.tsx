//Un componente es una funcion 
//Todos los tsx son componentes

import Typography from '@mui/material/Typography';

export default function HeaderUI() {
    return (
        <Typography
            variant="h2"
            component="h1"
            sx={{fontWeight: 'bold'}}>
            Dashboard del Clima
        </Typography>
    )
}