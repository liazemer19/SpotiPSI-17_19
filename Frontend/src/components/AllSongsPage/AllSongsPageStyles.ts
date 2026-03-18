
import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(({}) => ({

   pageContainer : {
     display: 'flex',
     flexDirection:'column',
     width: '100%',
     height :'100%',
     overflowY:'auto'
    
  },
    header : {
    textAlign:'right',
    backgroundColor:'black',
    height: 'fit-content',
    },
    headerText : {
        fontSize:'150%',
        color:'white',
         fontFamily:'Arial, sans-serif',
         marginRight:'5px'
    },

    


}))

export default useStyles;