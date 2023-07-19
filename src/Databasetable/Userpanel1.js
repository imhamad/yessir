import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
    Drawer,
    Model,
  Box,
 List,
 ListItem,
 ListItemIcon,
 ListItemText,
 AppBar,
 Typography,
 Toolbar,
 Divider,
 Tooltip
 


} from "@material-ui/core";

import { BrowserRouter , Switch, Route } from 'react-router-dom';
import App from '../App';
const UseStyles = makeStyles((theme) => ({
    root:{
        position:"absolute",
        top:0,
        zIndex:1101,
        background:"white",
        width:"100%",
        display:"flex",
        flexDirection:"column"
        // marginTop:theme.spacing(20),
      
        // paddingTop:theme.spacing(30)
    },
    appbar:{
     
        
        height:"60px",background:"blue",boxShadow:"none",
    },
 drawerPaper:{ width:"inherit" }
}))


const Userpanel1 = () => {
    const classes = UseStyles();
  return (
    <BrowserRouter >

    <Box className={classes.root} style={{display:"flex", }}>
    <AppBar position="static" className={classes.appbar}></AppBar>
    
    <Box style={{width:"100%",display:"flex",height:"1200px"}}>
    {/* drawer start here */}
    <Box style={{width:"18%",background:"white",
      }}
        variant="permanent"
        anchor="left"
        open={true}
        classes={{paper: classes.drawerPaper}}>
     
           <List style={{background:"#494646"}}>
               <Link to="/" style={{textDecoration:"none",color:"white"}}>
               <ListItem button style={{borderBottom:"1px solid #938c8c"}}>
                   <ListItemText primary={"Dashboard"} />
               </ListItem>
               </Link>

               <Link to="/pages" style={{textDecoration:"none",color:"white"}}>
               <ListItem button style={{borderBottom:"1px solid #938c8c"}}>
                   <ListItemText primary={"Pages"} />
               </ListItem>
               </Link>

               <Link to="/blogs" style={{textDecoration:"none",color:"white"}}>
               <ListItem button style={{borderBottom:"1px solid #938c8c"}}>
                   <ListItemText primary={"Blogs"} />
               </ListItem>
               </Link>

               <Link to="/careers" style={{textDecoration:"none",color:"white"}}>
               <ListItem button style={{borderBottom:"1px solid #938c8c"}}>
                   <ListItemText primary={"Careers"} />
               </ListItem>
               </Link>

               <Link to="/estate" style={{textDecoration:"none",color:"white"}}>
               <ListItem button style={{borderBottom:"1px solid #938c8c"}}>
                   <ListItemText primary={"Real Estate"} />
               </ListItem>
               </Link>
               <Link to="/consult" style={{textDecoration:"none",color:"white"}}>
               <ListItem button style={{borderBottom:"1px solid #938c8c"}}>
                   <ListItemText primary={"Consults"} />
               </ListItem>
               </Link>
               <Link to="/accounts" style={{textDecoration:"none",color:"white"}}>
               <ListItem button style={{borderBottom:"1px solid #938c8c"}}>
                   <ListItemText primary={"Accounts"} />
               </ListItem>
               </Link>
              
            </List>
      </Box>
       {/* drawer end here */}
      <Switch>
      
          <Route exact path="/">
          <Box style={{height:"1200px",display:"flex",flexDirection:"column",width:"82%"}}>
          <Box style={{background:"lightgray",height:"1150px"}}>
           

           <Typography style={{}}>Dashboard</Typography>
          
           </Box>
           <Box style={{height:"50px",background:"yellow",}}>
               <Typography style={{textalign:"center"}}>copyrights </Typography>
           </Box>
          </Box>
           
          </Route>

          <Route exact path="/pages">
          <Box style={{background:"gray",width:"85%"}}>
            

            <Typography style={{}}>Pages</Typography>
            </Box>
          </Route>

          <Route exact path="/blogs">
          <Box style={{background:"gray",width:"85%"}}>
            

            <Typography style={{}}>Bloges</Typography>
            </Box>
          </Route>

          <Route exact path="/careers">
          <Box style={{background:"gray",width:"85%"}}>
            

            <Typography style={{}}>careers</Typography>
            </Box>
          </Route>

          <Route exact path="/estate">
          <Box style={{background:"gray",width:"85%"}}>
            

            <Typography style={{}}>Real Estate</Typography>
            </Box>
          </Route>

          <Route exact path="/consult">
          <Box style={{background:"gray",width:"85%"}}>
            

            <Typography style={{}}>Consult</Typography>
            </Box>
          </Route>

          <Route exact path="/accounts">
          <Box style={{background:"gray",width:"85%"}}>
            

            <Typography style={{}}>Accounts</Typography>
            </Box>
          </Route>
      </Switch>
    </Box>
    </Box>

   
    </BrowserRouter>
  
  );
}

export default Userpanel1;




