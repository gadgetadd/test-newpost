import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#fa4a3b',
        },
        background: {
            main: '#f6f6f6',
        },
    },
    typography: {
        logo: {
            fontSize: '32px',
            fontFamily: "Montserrat Subrayada",
            fontWeight: 700
        }
    }
});