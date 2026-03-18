import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(()=>({
    Header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        backgroundColor:'gray',
        color: 'purple'
    }
}));

export default useStyles