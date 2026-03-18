import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(()=>({
    PageContent:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '85%',
        height: '100%',
    }
}));

export default useStyles