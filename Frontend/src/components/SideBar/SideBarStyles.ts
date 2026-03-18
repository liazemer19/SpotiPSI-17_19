import { makeStyles } from "tss-react/mui";
import theme from "../../theme";

const useStyles = makeStyles()(()=>({
    SideBar:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        width: '15%',
        height: '100%',
        gap: '3px',
    },
    button:{
        display: 'flex',
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            cursor: 'pointer',
        }
    }
}));

export default useStyles