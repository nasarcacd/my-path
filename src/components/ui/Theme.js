import { createTheme } from '@mui/material/styles';

const blue = '#277db7';
const orange = '#FFBA60';

export default createTheme({
    palette: {
        primary: {
            main: `${blue}`
        },
        secondary: {
            main: `${orange}`
        },
    },
    typography: {
        fontFamily: [
            'Press Start 2P',
            'sans-serif'
        ],
        fontSize: 18,
    }
});