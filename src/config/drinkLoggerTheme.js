import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, orange } from '@material-ui/core/colors';

const primary = { main: '#ffffff' };
const secondary = blueGrey;
const error = orange;

const drinkLoggerTheme = createMuiTheme({
    palette: {
        primary: primary,
        secondary: secondary,
        error: error,
    },
    typography: {
        useNextVariants: true,
    },
    overrides: {
        MuiTabs: {
            indicator: {
                height: '0px',
            },
        },
        MuiTab: {
            root: {
                '&:hover': {
                    backgroundColor: secondary[700],
                    fontWeight: 'bold',
                },
                '&$selected': {
                    backgroundColor: secondary[900],
                    color: secondary[100],
                    fontWeight: 'bold',
                },
            },
        },
    },
    props: {
        MuiButton: {
            variant: 'contained',
        },
    },
});

export default drinkLoggerTheme;