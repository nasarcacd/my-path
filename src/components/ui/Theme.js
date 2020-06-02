import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#277db7';
const orange = '#FFBA60';

export default createMuiTheme({
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
        ],
        fontSize: 18,
    }
});