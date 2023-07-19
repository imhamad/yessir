import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  TextField,
  MenuItem,
  Menu,
  IconButton,
  CardActionArea,
} from "@material-ui/core";

// import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { makeStyles } from "@material-ui/core/styles";
import acpagepic from "../assets/acpagepic.png";


//small icon pics

import addressgrayico from "../assets/addressgrayico.svg";
import serviceico from "../assets/serviceico.svg";
import scheduleico from "../assets/scheduleico.svg";
import shoppingbagico from "../assets/shoppingbagico.svg";
import classNames from "classnames";


import Desiredservicecom from "./Desiredservicecom";
import Footersec from "./Footersec";

const UseStyles = makeStyles((theme) => ({
  root:{
    marginTop:"100px",
   
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
  // mainsec end here
  // menubox section start here
  menubox: {
    width: "68%",
    height: "91px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "28px",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      width: "75%",
    },
  },
  menuboxbar: {
    display: "flex",
    width: "93%",
    margin: "auto",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      width: "93%",
      margin: "auto",
    },
  },
  menuboxbarchild1: {
    height: "7px",
    width: "25%",
    backgroundColor: "rgb(0, 179, 148)",
    [theme.breakpoints.down("sm")]: {
      height: "5px",
    },
  },
  menuboxbarchild2: {
    height: "7px",
    width: "25%",
    backgroundColor: "rgb(0, 179, 148)",
    [theme.breakpoints.down("sm")]: {
      height: "5px",
    },
  },
  menuboxbarchild3: {
    height: "7px",
    width: "25%",
    backgroundColor: "rgba(168, 168, 168, 0.5)",
    [theme.breakpoints.down("sm")]: {
      height: "5px",
    },
  },
  menuboxbarchild4: {
    height: "7px",
    width: "25%",
    backgroundColor: "rgba(168, 168, 168, 0.5)",
    [theme.breakpoints.down("sm")]: {
      height: "5px",
    },
  },
  menuboxmenus: {
    marginTop: "26px",
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    //    border:"1px solid red",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  menuboxmenuschild: {
    display: "flex",
    flexDirection: "column",
    //    border:"1px solid black",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
    "& h6": {
      marginTop: "4px",
      height: "26px",
      width: "26px",
      display: "flex",
      alignSelf: "center",

      [theme.breakpoints.down("sm")]: {
        marginTop: "2px",
        height: "24px",
        width: "24px",
      },
      [theme.breakpoints.down("xs")]: {
        height: "18px",
        width: "18px",
      },
    },
    "& h5": {
      fontFamily: "Helvetica",
      fontStyle: "normal",
      lineHeight: "30px",
      display: "flex",
      alignItems: "center",
      color: "#000000",
      marginTop: "5px",
      fontSize: "18px",
      fontWeight: "bold",

      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
        marginTop: "0px",
      },
    },
    "& h4": {
      fontFamily: "Helvetica",
      fontStyle: "normal",
      lineHeight: "30px",
      display: "flex",
      alignItems: "center",
      color: "#A8A8A8",
      marginTop: "5px",
      fontSize: "18px",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
        marginTop: "0px",
      },
    },
    "& h3": {
      fontFamily: "Helvetica",
      fontStyle: "normal",
      lineHeight: "30px",
      display: "flex",
      alignItems: "center",
      color: "#A8A8A8",
      marginTop: "5px",
      fontSize: "18px",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
        marginTop: "0px",
      },
    },
  },
  // menubox section end here
  // no of appliances to repair section start here
  noofappliances: {
    width: "85%",
    display: "flex",
    margin: "auto",

    marginTop: "60px",
    padding: "10px 10px",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "65%",
      border: "3px solid #F9F9F9",
      borderRadius: "10px",

      flexDirection: "column",
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
    },
    "& h5": {
      width: "35%",
      display: "flex",
      alignItems: "center",
      fontSize: "20px",
      [theme.breakpoints.down("md")]: {
        width: "90%",
        color: "indigo",
        fontSize: "19px",
        display: "flex",
        justifyContent: "center",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
  },
  appliancecount: {
    display: "flex",
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "90%",

      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "25px",
      width: "100%",
    },
    "& h6": {
      background: "#F9F9F9",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      marginLeft: "12px",
      width: "80px",
      height: "80px",

      fontFamily: "Roboto",
      fontSize: "24px",
      "&:hover": {
        color: "white",
        background: "rgba(255, 129, 73, 1)",
        cursor: "pointer",
      },
      [theme.breakpoints.down("md")]: {
        width: "65px",
        height: "65px",
        marginLeft: "6px",
        fontSize: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "50px",
        height: "50px",
        fontSize: "16px",
      },
    },
  },
  // no  of appliances to repair section end here
  // uploadimg and send message section start here
  uploadimgsendmessagesection: {
    width: "85%",
    margin: "auto",
    marginTop: "68px",
    display: "flex",
    // border:"1px solid red",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "68%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "50px",
      display: "flex",
      flexDirection: "column",
      width: "70%",
    },
  },
  uploadimgsec: {
    width: "35%",
    background: "#F9F9F9",
    padding: "10px 8px",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
    },
    "& h6": {
      fontSize: "24px",
      fontFamily: "Roboto",
      Color: "#000000",
      textTransform: "capitalize",
      display: "flex",
      fontWeight: "bold",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        fontSize: "22px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
    "& h5": {
      color: "gray",
      fontSize: "20px",
      [theme.breakpoints.down("md")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
  },
  sendmessagesec: {
    width: "60%",
    background: "#F9F9F9",
    padding: "10px 8px",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      width: "95%",
    },

    "& h6": {
      fontSize: "24px",
      fontFamily: "Roboto",
      Color: "#000000",
      textTransform: "capitalize",
      display: "flex",
      fontWeight: "bold",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        fontSize: "22px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
    "& h5": {
      color: "gray",
      fontSize: "20px",
      [theme.breakpoints.down("md")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
    },
  },
  textFieldStyle: {
    width: "80%",
    background: "#ffffff",
    marginTop: "23px",

    color: "red",

    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      // marginTop:"18px",
    },
  },

  prenextbtnbox: {
    width: "40%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    marginTop: "76px",
    marginBottom: "85px",
    // border: "1px solid blue",
    marginRight: "250px",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "auto",
      marginTop: "60px",
      marginBottom: "60px",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",

      marginBottom: "30px",
      width: "60%",
    },
  },
  prebtn: {
    height: "55px",
    padding: "6px 33px",
    width: "200px",
    background: "#165834",
    fontSize: "18px",
    color: "#ffffff",
    textTransform: "Capitalize",
    "&:hover": {
      background: "#165834",
    },
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      width: "25%",
      fontSize: "16px",
      lineHeight: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40px",
      width: "33%",
      fontSize: "12px",
    },
  },
  nextbtn: {
    height: "55px",
    padding: "6px 33px",
    width: "200px",
    background: "#A3BD9A",
    fontSize: "18px",
    color: "#ffffff",
    textTransform: "Capitalize",
    textTransform: "Capitalize",
    "&:hover": {
      background: "#A3BD9A",
    },
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      width: "25%",
      fontSize: "16px",
      lineHeight: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40px",
      width: "33%",
      fontSize: "12px",
    },
  },
  // uploadimg and send message secton end here
  //desiredservice start here




  // footer section end here
}));

const Datetime = () => {
  // const Slide = require('./Slide').default;
  // const { red, blue, green } = require('@material-ui/core/colors');
  // const Button = require('@material-ui/core/Button').default;
  // var aa={selectedMode}

  const options = {
    size: "large",
    responsive: {
      0: {},
      400: {},
      700: {
        size: "small",
      },
      800: {},
      1000: {},
    },
  };
  const classes = UseStyles();

  // menu of large screen start here
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // menu of large screen end here
  // menu of small screen start here
  const [smallmenu, setSmallmenu] = React.useState(null);
  const smallmenuopen = (event) => {
    setSmallmenu(event.currentTarget);
  };

  const smallmenuclose = () => {
    setSmallmenu(null);
  };
  // menu of small screen end here
  const scrolltotop=() =>{
    window.scrollTo(0, 0);
  };
  const scrolltoservices=() =>{
    window.scrollTo(0, 720);
  };
  return (
    <>
      <Box className={classes.root}>
        {/* mainsection start here */}
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
        {/* main sec end here */}

        {/* top menu section start  here */}
        <Box className={classes.menubox}>
          <Box className={classes.menuboxbar}>
            <Box className={classes.menuboxbarchild1}></Box>
            <Box className={classes.menuboxbarchild2}></Box>
            <Box className={classes.menuboxbarchild3}></Box>
            <Box className={classes.menuboxbarchild4}></Box>
          </Box>
          <Box className={classes.menuboxmenus}>
            <Box className={classes.menuboxmenuschild}>
              <Typography variant="h6">
                <img
                  src={serviceico}
                  alt="serviceico pic"
                  style={{ width: "100%", height: "100%" }}
                />
              </Typography>
              <Typography variant="h5">Services</Typography>
            </Box>
            <Box className={classes.menuboxmenuschild}>
              <Typography variant="h6">
                <img
                  src={scheduleico}
                  alt="scheduleico pic"
                  style={{ width: "100%", height: "100%" }}
                />
              </Typography>
              <Typography variant="h5">Schedule</Typography>
            </Box>
            <Box className={classes.menuboxmenuschild}>
              <Typography variant="h6">
                <img
                  src={addressgrayico}
                  alt="addressgrayico pic"
                  style={{ width: "100%", height: "100%" }}
                />
              </Typography>
              <Typography variant="h4">address</Typography>
            </Box>
            <Box className={classes.menuboxmenuschild}>
              <Typography variant="h6">
                <img
                  src={shoppingbagico}
                  alt="shoppingbagico pic"
                  style={{ width: "100%", height: "100%" }}
                />
              </Typography>
              <Typography variant="h3">Place Order</Typography>
            </Box>
          </Box>
        </Box>
        {/* top menu section end here */}

        {/* Numbers of appliances to be repair sec start here */}
        <Box className={classes.noofappliances}>
          <Typography variant="h5">
            {" "}
            How many ACs need to be serviced
          </Typography>
          <Box className={classes.appliancecount}>
            <Typography variant="h6">01</Typography>
            <Typography variant="h6">02</Typography>
            <Typography variant="h6">03</Typography>
            <Typography variant="h6">04</Typography>
            <Typography variant="h6">05</Typography>
            <Typography variant="h6">06</Typography>
            <Typography variant="h6">07</Typography>
            <Typography variant="h6">08</Typography>
          </Box>
        </Box>
        {/* Numbers of appliances to be repair sec start here */}

        {/* uploadimg and send message  secton start here */}
        <Box className={classes.uploadimgsendmessagesection}>
          <Box className={classes.uploadimgsec}>
            <Typography variant="h6">
              Upload Image<Typography variant="h5">(optional)</Typography>
            </Typography>
            <input type="file" name="photofile" style={{ marginTop: "23px" }} />
          </Box>
          <Box className={classes.sendmessagesec}>
            <Typography variant="h6">
              Send Message <Typography variant="h5">(optional)</Typography>
            </Typography>
            <TextField
              className={classes.textFieldStyle}
              {...options}
              variant="outlined"
              placeholder="Type your message here"
              label="your message"
            />
          </Box>
        </Box>
        {/* uploadimg and send message  secton end here */}
        {/* Buttons section start here */}
        <Box className={classes.prenextbtnbox}>
          <Button  onClick={scrolltotop}
            className={classes.prebtn}
            component={Link}
            to="/acsubcategray"
          >
            Previous step
          </Button>
          <Button onClick={scrolltotop}
            className={classes.nextbtn}
            component={Link}
            to="/loginregister"
          >
            Next step
          </Button>
        </Box>
        {/* Buttons section end here */}

        {/* time slection sec start here*/}
        <Box className={classes.timeselectionsec}></Box>
        {/* <div style={{ position: 'relative', width: '100%', height: 500 }}>
  <Button onClick={() => setState({ open: true })}>Open carousel</Button>
  <AutoRotatingCarousel
    label='Get started'
    open={state.open}
    onClose={() => setState({ open: false })}
    onStart={() => setState({ open: false })}
    style={{ position: 'absolute' }}
  >
    <Slide
      media={<img src={shoppingbagico} />}
      mediaBackgroundStyle={{ backgroundColor: red[400] }}
      style={{ backgroundColor: red[600] }}
      title='This is a very cool feature'
      subtitle='Just using this will blow your mind.'
    />
    <Slide
      media={<img src={shoppingbagico} />}
      mediaBackgroundStyle={{ backgroundColor: blue[400] }}
      style={{ backgroundColor: blue[600] }}
      title='Ever wanted to be popular?'
      subtitle='Well just mix two colors and your are good to go!'
    />
    <Slide
      media={<img src={shoppingbagico} />}
      mediaBackgroundStyle={{ backgroundColor: green[400] }}
      style={{ backgroundColor: green[600] }}
      title='May the force be with you'
      subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
    />
  </AutoRotatingCarousel>
</div> */}

        {/* time selection sec end here */}

        <Desiredservicecom/>
        <Footersec/>
      </Box>
    </>
  );
};

export default Datetime;
