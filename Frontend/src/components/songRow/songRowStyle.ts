
import { makeStyles } from 'tss-react/mui';

import theme from '../../theme';



const useStyles = makeStyles()(({}) => ({

   rowContainer : {

     backgroundColor: theme.palette.secondary.main,

     display: 'flex',
     flexDirection:'row',
     width: '100%',
     height: 'fit-content',
     borderBottom:'2px solid #2a2a29'
  },
  text:{
    color:'white',
    fontSize:'80%',
    fontFamily:'Arial, sans-serif'

  },
  play:{

    color:theme.palette.primary.light,

    marginTop:'7px',
    marginRight:'3px'
  },
  right:{
      marginLeft: 'auto',
      marginTop:'10px',
     display: 'flex',
     flexDirection:'row',
     color:' #8b8b8a',
     marginRight:'15px'
  },
  left:{
     display: 'flex',
     flexDirection:'row'
  },
  iconsSize : {
     width:'20px',
     height:'20px'
  },
  iconSizeFull : {
     width:'20px',
     height:'20px',
     color: theme.palette.primary.light
  }
  ,
  iconBtn:{
   color: 'white',
   minWidth: '0'
   }
 

}))

export default useStyles;