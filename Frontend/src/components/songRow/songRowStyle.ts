
import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(({}) => ({

   rowContainer : {
     backgroundColor: 'black',
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
    color:'purple',
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
  }
 

}))

export default useStyles;