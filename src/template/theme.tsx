import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        secondary: {
            light: '#7fb434',
            main: '#5FA202',
            dark: '#427101',
        },
        primary: {
            light: '#4b727a',
            main: '#1F4F59',
            dark: '#15373e',
        },
    },
    spacing: 8,
    typography: {
        h2: {
            fontSize: '2em',
            fontWeight: "bold",
        },
        fontFamily: [
            "Nunito Sans", 'sans-serif'
        ].join(',')
    },
});

export default theme;
