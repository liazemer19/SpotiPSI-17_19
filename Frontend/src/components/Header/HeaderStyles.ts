import { makeStyles } from "tss-react/mui";
import theme from "../../theme";

const useStyles = makeStyles()(()=>({
    Header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        backgroundColor:theme.palette.secondary.light,
        color: theme.palette.primary.main
    }
}));

export default useStyles