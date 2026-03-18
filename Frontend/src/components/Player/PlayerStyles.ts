import { makeStyles } from "tss-react/mui";
import theme from "../../theme";

const useStyles = makeStyles()(()=>({
    placeHolder:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: '10%',
        backgroundColor: theme.palette.secondary.light
    }
}));

export default useStyles