import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#fa4a3b',
        },
        secondary: {
            main: '#4e6665',
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