import { makeStyles } from "tss-react/mui";
import theme from "./theme";

const useStyles = makeStyles()(()=>({
    page:{
        display: 'flex',
        flexDirection: 'column',
        width: '99vw',
        height: '88vh',
        margin: '0 ',
        backgroundColor: theme.palette.secondary.main,
        color: 'white'
    }
}));

export default useStyles
