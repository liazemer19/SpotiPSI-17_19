import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(()=>({
    MainSection:{
        display: 'flex',
        flexDirection: 'row',
        height: '80%',
        width: '100%',
    }
}));

export default useStyles