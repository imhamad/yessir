import React from "react";
import { Link,NavLink } from "react-router-dom";

import { Typography, Box, Button, TextField,Menu,MenuItem,IconButton,CardActionArea } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import acpagepic from "../assets/acpagepic.png";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// logo pic
import greenlogo from "../assets/greenlogo.png";
//small icon pics

import addressico from "../assets/addressico.svg";
import serviceico from "../assets/serviceico.svg";
import scheduleico from "../assets/scheduleico.svg";
import shoppingbagico from "../assets/shoppingbagico.svg";
import classNames from "classnames";

// footer icons
import instagram from "../assets/instagram.svg";
import map from "../assets/map.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";


import Desiredservicecom from "./Desiredservicecom";
import Footersec from "./Footersec";

const UseStyles = makeStyles((theme) => ({
  root:{
    marginTop:"100px",
  
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
    // border:"1px solid red",
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
    backgroundColor: "rgb(0, 179, 148)",
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
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
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
      color: "rgb(0, 179, 148)",
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
  loginR: {
    width: "68%",
    margin: "auto",
    paddingBottom: "80px",
    marginTop: "116px",
    backgroundColor: "#F9F9F9",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginTop: "70px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      marginTop: "50px",
      //  background:"#ffffff",
      //  border:"1px solid lightgray"
    },

    "& h6": {
      marginTop: "67px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: "24px",
      lineHeight: "25px",
      color: "#000000",
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        marginTop: "80px",
        fontSize: "20px",
      },
    },
    "& h3": {
      marginTop: "15px",
      fontSize: "16px",
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    },
  },
  addaddressbtn:{
    
      marginTop: "26px",
      width: "398px",
      height: "55px",
      padding: "6px 33px",
      background: "#165834",
      borderRadius: "4px",
      color: "#ffffff",
      lineHeight: "25px",
      fontSize: "18px",
      textTransform: "capitalize",
      "&:hover":{ background: "#165834",},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        width: "75%",
        height: "40px",
        marginTop: "18px",
        fontSize: "16px",
    },
  },
  addresshistoryaddnew: {
    width: "398px",
    display: "flex",
    marginTop:"22px",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      width: "75%",
    },
  },
  addhistorybtn:{
     height: "35px",
      width: "190px",
      color: "#ffffff",
      //    lineHeight: "30px",
      fontSize: "16px",
      textTransform: "capitalize",
      background:"#165834",
      "&:hover": {
        background: "#165834",
      },
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        width: "49%",
        fontSize: "10px",
        height: "35px",
        display: "flex",
        justifyContent: "space-evenly",
      },
     },
  addnewbtn:{
    height: "35px",
    width: "190px",
    color: "#ffffff",
    //    lineHeight: "30px",
    fontSize: "16px",
    textTransform: "capitalize",
     background: "#A3BD9A",
    "&:hover": {
      background:"#A3BD9A"
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      width: "49%",
      fontSize: "10px",
      height: "35px",
      display: "flex",
      justifyContent: "space-evenly",
    },
  },
  textfield: {
    width: "398px",
    background: "#EFEFEF",
    marginTop: "22px",
    color: "blue",
    outlineColor: "blue",
    borderRadius: "4px",

    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      width: "75%",
      marginTop: "40px",
      marginTop: "18px",
    },
  },
  selecttag: {
    outline: "none",
    width: "398px",
    border: "1px solid lightgray",
    height: "55px",
    background: "#EFEFEF",
    marginTop: "22px",
    borderRadius: "4px",
    padding: "0 5px",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      width: "75%",
      height: "40px",
      marginTop: "18px",
    },
  },
  //desiredservice start here
  desiredservice: {
    position: "relative",
    width: "100%",
    backgroundColor: "#EEF9F3",
    height:"400px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop:"156px",
    [theme.breakpoints.down("xs")]:{backgroundColor:"#EEF9F3"},
    "& h6": {
      fontWeight: "bold",
      fontSize: "40px",
      lineHeight: "60px",
      fontFamily: "Roboto",
      display: "flex",
      alignSelf: "center",
      marginTop: "119px",
      color: "rgba(0, 0, 0, 1)",
      fontStyle:"normal",
      height:60,

      [theme.breakpoints.down("sm")]: {
        marginTop: "57px",
        fontSize: "35px",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "37px",
        fontSize: "28px",
        color:"#165834"
      },
    },
    "& Button": {
     
    },
  },
  booknowbtnofdesiredsec:{
    marginTop: "46px",
    height: "55px",
    width: "200px",
    margin:"auto",
    background:"#165834",
    display: "flex",
    color: "rgba(255, 255, 255, 5)",
    fontSize: "18px",
    alignSelf: "center",
    marginBottom: "120px",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "30px",
    padding:"6px 33px",
    textTransform:"Capitalize",
   "&:hover":{ background:"#165834"},
    [theme.breakpoints.down("sm")]: {
      marginTop: "28px",
      fontSize: "18px",
      lineHeight: "20px",
      height: "40px",
      marginBottom: "96px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "14px",
      fontSize: "18px",
      lineHeight: "15px",
      height: "35px",
      marginBottom: "82px",
     
      
    }
  },
  desiredsecdotbox: {
    position: "absolute",
    bottom: "1%",
    right: "0%",
    width: "283px",
    //  height:'190px',
    color: "orange",
    // backgroundColor:"black",
    lineHeight: "0",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      width: "220px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "170px",
    },
  },
  desiredsecdot: {
    background: "rgba(56, 113, 109, 0.4)",
    color: "rgba(255, 129, 73, 1)",
    height: "13px",
    width: "13px",
    borderRadius: "50%",
    display: "flex",
    lineHeight: "0px",
    justifyContent: "center",
    marginLeft: "22px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      height: "10px",
      width: "10px",
      marginLeft: "16px",
      marginTop: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "7px",
      width: "7px",
      marginLeft: "14px",
      marginTop: "14px",
      
    },
  },
  // desiredservice section end here

  //footer section start here
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
      color:"#595959",
      fontStyle:"normal",
      fontFamily:"Roboto",
    },
   
  },
  sociallinks: {
    display: "flex",
    margin: "auto",
    justifyContent: "space-between",
    marginTop: "22px",
    width: "172px",
    height:"31px",
        padding: "0px",

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
    width: "31px",
    height: "31px",
    background:"#D7E3DC",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "background .5s",

    [theme.breakpoints.down("sm")]: {
      // width: "42px",
      // height: "42px",
    },
    [theme.breakpoints.down("xs")]: {
      // width: "35px",
      // height: "35px",
     
    },
    "&:hover": {
      // boxShadow: "0 0 12px 2px rgba(0,0,0,.1)",
      //   background:"white"
    },
  },
  appstoregoogleplaysection:{
    display:"Flex",
    flexDirection:"column",
    width:"380px",
    marginRight:"100px",
    margin:"auto",
    marginTop:"10px",
    marginBottom:"20px",
    // background:"black",
   
    "& h4":{
      color:"black",
      textAlign:"center",
      fontSize:"22px",
      fontWeight:"normal"
    }
  },
  applegooglepics:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    justifyContent:"space-evenly",
    marginTop:"5px",
    cursor:"pointer"
    // background:"red"
  },


  // footer section end here
}));

const Chooseaddress = () => {
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
  const [smallmenu,setSmallmenu]= React.useState(null);
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
    const scrolltoservices=() => {
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
                  src={addressico}
                  alt="addressico pic"
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

        {/* LoginR section start here*/}

        <Box className={classes.loginR}>
          <Typography variant="h6">Choose Your Address</Typography>
          <Box className={classes.addresshistoryaddnew}>
            <Button className={classes.addhistorybtn}>Address History</Button>
            <Button className={classes.addnewbtn}>+ add New</Button>
          </Box>
          <select className={classes.selecttag}>
            <option>Select City</option>
            <option>Peshawar</option>
            <option>Lahore</option>
            <option>Islamabad</option>
            <option>Karachi</option>
          </select>
          <select className={classes.selecttag}>
            <option>Area</option>
            <option>Peshawar</option>
            <option>Lahore</option>
            <option>Islamabad</option>
            <option>Karachi</option>
          </select>

          <TextField
            type="text"
            className={classes.textfield}
            placeholder="please enter your house address!"
            label="House # & street"
            variant="outlined"
            size="small"
          />

          <Button className={classes.addaddressbtn} onClick={scrolltotop}
          component={Link} 
          to="/chooseaddress1" exact style={{textDecoration:"none"}}>add address</Button>
          <Typography variant="h3">Discard</Typography>
        </Box>
        {/* LoginR section end here */}

        {/* desired service start here */}
        <Desiredservicecom/>
        <Footersec/>
       

        {/* footer section end here */}
      </Box>
    </>
  );
};

export default Chooseaddress;
