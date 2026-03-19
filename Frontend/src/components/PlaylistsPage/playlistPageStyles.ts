
import { makeStyles } from 'tss-react/mui';
import theme from "../../theme";

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
    display:'flex',
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between'
    },

 
    headerText : {
        fontSize:'160%',
        color:'white',
         fontFamily:'Arial, sans-serif',
         
         
    },
    
    rowContainer : {
     backgroundColor:  theme.palette.secondary.dark,
     display: 'flex',
     flexDirection:'row',
     width: '100%',
     height: 'fit-content',
     borderBottom:'2px solid #2a2a29',
    
  },
  text:{
    color:'white',
    fontSize:'80%',
    fontFamily:'Arial, sans-serif'

  },
  littleText:{
    color:' #d8d8d8',
    fontSize:'60%',
    fontFamily:'Arial, sans-serif'

  },
   left:{
    marginLeft:'5px',
     display: 'flex',
     flexDirection:'column'
  },
containerDescrip:{
     
     display: 'flex',
     flexDirection:'row',
     gap:'3px'
},
button:{
     
      color:theme.palette.primary.main,
      border:'1px solid ',
      borderRadius:'25px',
      borderColor:theme.palette.primary.main,
      width:'9%',
      height:'50%',
      padding:'0px',
      marginTop:'20px'
     
},


}))

export default useStyles;