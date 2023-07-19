import React from 'react';
import { NavLink } from "react-router-dom";
import {
    
    Typography,
    Box,
    IconButton
   
  } from "@material-ui/core";

import instagram from "../assets/instagram.svg";
import map from "../assets/map.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";
import { makeStyles } from "@material-ui/core/styles";

// import FacebookRoundedIcon from "@material-ui/icons/FacebookRounded";
import FacebookIcon from '@material-ui/icons/Facebook';
const UseStyles = makeStyles((theme) => ({
    footer: {
        width: "100%",
        height:"260px",
        // borderBottom:"1px solid black",
        "& h5": {
          display: "flex",
          fontSize: "40px",
          marginTop: "62px",
          fontWeight: "bold",
          fontStyle: "normal",
          lineHeight: "26px",
          fontFamily: "Roboto",
          justifyContent: "center",
          // textShadow: "2px 2px 2px rgb(255, 129, 73)",
          color: "rgba(56, 113, 109, 0.4)",
         
          [theme.breakpoints.down("sm")]: {
            marginTop: "62px",
            fontSize: "36px",
          },
          [theme.breakpoints.down("xs")]: {
            // textShadow: "5px 1px 3px #165834",
    
            marginTop: "62px",
            fontSize: "30px",
           
          },
        },
        "& h4": {
          fontWeight: "bold",
          color: "#165834",
          fontSize: "40px",
          lineHeight: "26px",
          fontFamily: "Roboto",
          // textShadow: "3px 1px 2px #165834",
          [theme.breakpoints.down("sm")]: {
            fontSize: "36px",
          },
          [theme.breakpoints.down("xs")]: {
            // textShadow: "5px 1px 3px #165834",
            fontSize: "30px",
            color:"#165834"
    
          },
        },
        "& h6": {
          position: "relative",
          padding: "0",
          justifyContent: "center",
          alingItems: "center",
          cursor: "pointer",
          fontSize: "20px",
          "&::after": {
            position: "absolute",
            content: '""',
            display: "block",
            height: "1px",
            backgroundColor: "rgb(106, 237, 219)",
    
            //  left:"50%",
            width: "0px",
            bottom: "0px",
            transition: "0.7s",
          },
          "&:hover": {
            "&::after": { width: "100%" },
          },
        },
      },
      footerpageslinks: {
        display: "flex",
        width: "492px",
        margin: "auto",
        marginTop: "23px",
        height:"26px",
        justifyContent: "space-evenly",
        [theme.breakpoints.down("xs")]:{
          width:"450px"
        },
        "& h6": {
          color: "#595959",
          fontWeight:"normal",
          lineHeight:"26px",
          fontSize:"16px",
          fontStyle:"normal",
          fontFamily:"Roboto",
        },
       
      },
      sociallinks: {
        display: "flex",
        margin: "auto",
        justifyContent: "space-between",
        marginTop: "22px",
        width: "205px",
        height:"31px",
            padding: "0px",
          // border:"1px solid red",
        [theme.breakpoints.down("sm")]: {
          // width: "33%",
          // marginTop: "25px",
          // paddingBottom: "30px",
        },
        [theme.breakpoints.down("xs")]: {
          // width: "38%",
          // marginTop: "20px",
          // paddingBottom: "26px",
         
        },
      },
      tooltip: {
        width: "30px",
        height: "30px",
        background:"#D7E3DC",
        borderRadius: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "background .5s",
         "&:hover":{
           backgroundColor:"#D7E3DC"
          },
        [theme.breakpoints.down("sm")]: {
          // width: "42px",
          // height: "42px",
        },
        [theme.breakpoints.down("xs")]: {
          // width: "35px",
          // height: "35px",
         
        },
       
      },
      appstoregoogleplaysection:{
        display:"Flex",
        flexDirection:"column",
        width:"380px",
        marginRight:"100px",
        margin:"auto",
        marginTop:"15px",
        marginBottom:"20px",
        // background:"black",
        // border:"1px solid gray",
        [theme.breakpoints.down('md')]:{
          marginTop:"45px",marginRight:"40px",
       },
        [theme.breakpoints.down('sm')]:{
          marginTop:"45px",margin:"auto"
       },
       [theme.breakpoints.down('xs')]:{
        marginTop:"45px",width:"320px"
       },
        "& h4":{
          color:"black",
          textAlign:"center",
          fontSize:"22px",
          fontWeight:"normal",
          [theme.breakpoints.down('sm')]:{
             fontSize:"20px"
          },
          [theme.breakpoints.down('xs')]:{
            fontSize:"18px"
          },

        }
      },
      applegooglepics:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginTop:"5px",
        cursor:"pointer"
        // background:"red"
      },
     appleappstoretag:{
     width:"170px", height:"50px",borderRadius:"5px", border:"1px solid white",
     [theme.breakpoints.down('md')]:{
      width:"160px", height:"40px"
  },
     [theme.breakpoints.down('sm')]:{
        width:"150px", height:"35px"
    },
    [theme.breakpoints.down('xs')]:{
      width:"120px", height:"30px",
    },
     }
  }));

const Footersec = () => {
    const classes = UseStyles();
    const scrolltotop=() =>{
        window.scrollTo(0, 0);
      };
      const scrolltoservices=() =>{
        window.scrollTo(0, 720);
      };
  return (
    <>
        <Box className={classes.footer}>
          <Typography variant="h5" style={{}}>
            Yes
            <Typography variant="h4" style={{}}>
              Sir!
            </Typography>
          </Typography>
          <Box className={classes.footerpageslinks}>
            <Typography variant="h6" onClick={scrolltoservices}>

           <NavLink
                    to="/"
                    exact
                    // activeStyle={{
                    //   fontWeight: "bold",
                    //   // textDecoration: "none",
                     
                    // }}
                    style={{ textDecoration: "none", color: "#595959",}}
                  >
                   Services
                  </NavLink>
            </Typography>
            <Typography variant="h6" onClick={scrolltotop}>
            <NavLink
                    to="/aboutus"
                    exact
                  
                    style={{ textDecoration: "none", color: "#595959",}}
                    activeStyle={{color:"#00b394"}}
                  >
                    Why us
                  </NavLink>
            </Typography>
            <Typography variant="h6" onClick={scrolltotop}> 
                 <NavLink
                    to="/termsconditionpage"
                    exact
                    
                    style={{ textDecoration: "none", color: "#595959",}}
                    activeStyle={{color:"#00b394"}}
                  >
                    Terms & Conditions
                  </NavLink></Typography>
            <Typography variant="h6" onClick={scrolltotop}>
            <NavLink
                    to="/contact"
                    exact
                  
                    style={{ textDecoration: "none", color: "#595959",}}
                    activeStyle={{color:"#00b394"}}
                  >
                    Contact us
                  </NavLink>
                  </Typography>
            <Typography variant="h6" onClick={scrolltotop}>
            <NavLink
                    to="/help"
                    exact
                   
                    style={{ textDecoration: "none",   color: "#595959",}}
                    activeStyle={{color:"#00b394"}}
                  >
                    Help
                  </NavLink>
            </Typography>
            <Typography variant="h6">

            <NavLink
                    to="/privacypolicy"
                    exact
                   
                    style={{ textDecoration: "none", color: "#595959",}}
                    activeStyle={{color:"#00b394"}}
                    onClick={scrolltotop}
                  >
                    Privacy policy
                  </NavLink>
             
            </Typography>
          </Box>

          <Box className={classes.sociallinks}>
            <IconButton size="small" 
             href="https://www.instagramcom"
              title="instagram"
              aria-label="add"
              className={classes.tooltip}
             
            >
              <img
               src={instagram}
                alt="instagram pic"
                style={{ width: "17px", height: "17px", }}
              />
            </IconButton>
            <IconButton 
             href="https://www.twittercom"
            title="map" 
             size="small" 
              className={classes.tooltip}>
              <img
                src={map}
                alt="map pic"
                style={{ width: "17px", height: "17px" }}
              />
            </IconButton>
          
            <IconButton title="facebook" size="small"  className={classes.tooltip}
             href="https://www.facebook.com/112247187905050/posts/114315377698231/?substory_index=2&sfnsn=scwspmo" >
            <FacebookIcon style={{width:"19px", height:"19px",color:"#165834"}}/>
             </IconButton> 
            <IconButton title="twitter" size="small"  className={classes.tooltip}
            href="https://www.twittercom">
              <img
                src={twitter}
                alt="twitter pic"
                style={{ width: "17px", height: "17px" }}
              />
            </IconButton>
            <IconButton title="youtube" size="small"  className={classes.tooltip}
               href="https://www.youtubecom">
              <img
                src={youtube}
                alt="youtube pic"
                style={{ width: "17px", height: "17px" }}
              />
            </IconButton>
          </Box>
           
          <Box className={classes.appstoregoogleplaysection}>
            <Typography variant="h4">Download Yessir App</Typography>
            
             <Box className={classes.applegooglepics}>
            
             <img src={appstore} alt="applestorepic" title="comming soon" className={classes.appleappstoretag}/>
              <img src={googleplay} alt="googleplaypic" title="comming soon" 
              className={classes.appleappstoretag} />
             </Box>
           
          </Box>
        </Box>
    </>
  );
}

export default Footersec;
