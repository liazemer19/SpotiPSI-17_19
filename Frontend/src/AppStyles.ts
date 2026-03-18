import { makeStyles } from "tss-react/mui";
import theme from "./theme";

const useStyles = makeStyles()(()=>({
    page:{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.secondary.main,
        color: 'white'
    }
}));

export default useStyles
