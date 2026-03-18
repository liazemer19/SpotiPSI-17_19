import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(()=>({
    placeHolder:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: '10%',
        backgroundColor:'gray'
    }
}));

export default useStyles