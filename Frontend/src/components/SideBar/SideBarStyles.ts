import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(()=>({
    SideBar:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        width: '20%',
        height: '100%'
    }
}));

export default useStyles