import React from 'react';
import {
    Typography,
    Box,
    CardActionArea,
  } from "@material-ui/core";
  
  // import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
  import { makeStyles } from "@material-ui/core/styles";
  import acpagepic from "../assets/acpagepic.png";
  


const UseStyles = makeStyles((theme) => ({
    root:{
      marginTop:theme.spacing(10),
      // paddingTop:"150px",
    },
    mainsec: {
      width: "100%",
      height: "400px",
      // paddingTop:"250px",
      // background:"blue",
      // border:"1px solid red",
      [theme.breakpoints.down("sm")]: {
        height: "auto",
      },
    },
    dot: {
      position: "absolute",
      width: "190px",
      //  height:'190px',
      color: "orange",
      // backgroundColor:"black",
      lineHeight: "0",
  
      top: "5%",
      left: "54.5%",
      display: "flex",
      flexWrap: "wrap",
      [theme.breakpoints.down("md")]: {
        top: "5%",
      left: "50.5%",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    dotchild: {
      backgroundColor: "rgba(56, 113, 109, 0.4)",
      color: "rgba(255, 129, 73, 1)",
      height: "5px",
      width: "5px",
      borderRadius: "50%",
      display: "flex",
      lineHeight: "0px",
      justifyContent: "center",
      marginLeft: "10px",
      marginTop: "10px",
    },
    orangebg: {
      display: "flex",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        height: "auto",
      },
    },
    leftside: {
      // marginTop:theme.spacing(1),
      // border:"1px solid red"s,
      backgroundColor:"#EEF9F3",
      width: "60%",
      height: "350px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "auto",
      },
      [theme.breakpoints.down("xs")]: {},
      "& h5": {
        width: "300px",
        margin: "auto",
        marginTop: "130px",
        color: "rgba(0, 0, 0, 1)",
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontStyle: "bold",
        fontSize: "55px",
        textAlign: "Left",
        lineHeight: "60px",
        lineHeight: "93%",
        marginLeft:"99px",
        [theme.breakpoints.down("md")]: {
         fontSize:"48px"
        },
        [theme.breakpoints.down("sm")]: {
          width: "99%",
          margin: "auto",
          // border:"1px solid red",
          textAlign: "center",
          marginTop: "90px",
          fontSize: "42px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "30px",
          // color: "indigo",
          marginTop: "80px",
        },
      },
      "& h4": {
        margin: "auto",
        width: "423px",
        marginTop: "8px",
        color: "rgba(0, 0, 0, 1)",
        fontFamily: "Roboto",
        fontWeight: "Bold",
        fontSize: "18px",
        lineHeight: "25px",
        lineHeight: "119%",
        height:"25px",
        marginLeft:"99px",
        [theme.breakpoints.down("sm")]: {
          width: "99%",
          margin: "auto",
          // border:"1px solid red",
          textAlign: "center",
          marginTop: "10px",
          paddingBottom: "50px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "20px",
          color: "black",
          paddingBottom: "40px",
        },
      },
    },
    
    
    rightside: {
      // marginTop:theme.spacing(1),
      // border:"2px solid black",
      width: "40%",
      height:"350px",
      // background:"black",
  
      // backgroundColor:"#EEF9F3",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        display: "flex",
        flexDirection: "column-reverse",
      },
    },
    
    rightsideimg: {
      width: "100%",
      height: "342px",
      backgroundColor:"#EEF9F3",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "370px",
        marginTop: "0px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "0",
        //  border:"1px solid cyan",
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
        height: 0,
      },
      "& img": {
        width: "82%",
        height: "119%",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          height: "102%",
          borderRadius: "20px",
        },
      },
    },
}))
const ACtopsec = () => {
    const classes = UseStyles();
  return (
    <>
       <Box className={classes.mainsec}>
          <Box className={classes.orangebg}>
            <Box className={classes.leftside}>
           
              
             
             

              <Typography variant="h5">AC Services</Typography>

              <Typography variant="h4">
                We Service, Repair and Install All AC Brand!
              </Typography>
            </Box>
            <Box className={classes.rightside}>
              <Box className={classes.btnsbox}>
               
              </Box>
              <CardActionArea className={classes.rightsideimg}>
                <img src={acpagepic} alt="acpagepic" />
              </CardActionArea>
            </Box>
          </Box>
          <Box className={classes.dot}>
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>{" "}
            <div className={classes.dotchild}></div>
            <div className={classes.dotchild}></div>
          </Box>
        </Box>
      
      
    </>
  );
}

export default ACtopsec;
