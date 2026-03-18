import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(()=>({
    MainSection:{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        color: 'white'
       
    }
}));

export default useStyles