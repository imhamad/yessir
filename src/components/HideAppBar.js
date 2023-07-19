import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import  useScrollTrigger  from "@material-ui/core/useScrollTrigger";
// import Slide from "@material-ui/core/Slide";


const UseStyles = makeStyles((theme) => ({
   root:{
    
    // position:"sticky"
   }
  
    // personnal detail dialogbox end here
  }));

  // interface Props {
  //   children: React.ReactElement;
  // }
  // function Header({children}: Props) {
  //   const trigger = useScrollTrigger();
  //   return(
  //     <Slide appear={false} direction={"down"} in={!trigger}>
  //       {children}
  //     </Slide>
  //   )
  // }
const HideAppBar = () => {
  
    const classes = UseStyles();
  return (
   
     
        <AppBar className={classes.root}>
          <Toolbar style={{height:"150px",background:"gray"}}>

          </Toolbar>
      </AppBar>
      
    
  );
}

export default HideAppBar;
