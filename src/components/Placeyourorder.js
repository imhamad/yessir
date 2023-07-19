import React from "react";
import {Link,NavLink } from "react-router-dom";

import { Typography, Box, Button, Card, IconButton,Menu,MenuItem,CardActionArea } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import acpagepic from "../assets/acpagepic.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
// logo pic
import greenlogo from "../assets/greenlogo.png";
//small icon pics

import addressico from "../assets/addressico.svg";
import addressblackico from "../assets/addressblackico.svg";

import serviceico from "../assets/serviceico.svg";
import scheduleico from "../assets/scheduleico.svg";
import shoppingbagico from "../assets/shoppingbagico.svg";
import shoppingbagredico from "../assets/shoppingbagredico.svg";
import trashbtn from "../assets/trashbtn.svg";
import editbtn from "../assets/editbtn.svg";
import classNames from "classnames";



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
    backgroundColor: "rgb(0, 179, 148)",
    [theme.breakpoints.down("sm")]: {
      height: "5px",
    },
  },
  menuboxmenus: {
    marginTop: "26px",
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    //   border:"1px solid red",
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
      color: "#FF8149",
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
  },
  loginR: {
    width: "68%",
    margin: "auto",
    paddingBottom: "100px",
    marginTop: "116px",
    marginBottom: "200px",
    backgroundColor: "#F9F9F9",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginTop: "70px",
      marginBottom: "116px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "94%",
      marginTop: "70px",
      marginBottom: "116px",
      //  background:"#ffffff",
      //  border:"1px solid lightgray"
    },

    "& h6": {
      marginTop: "67px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "24px",
      lineHeight: "25px",
      color: "#000000",
      display: "flex",
      width: "92%",

      [theme.breakpoints.down("sm")]: {
        width: "63%",
        margin: "auto",
        marginTop: "60px",
        display: "flex",
        justifyContent: "center",
        //  border:"1px solid red",
        fontSize: "24px",
        //  fontStyle:"italic",
        color: "#00b394",
        borderBottom: "1px dotted blue",
      },
      [theme.breakpoints.down("xs")]: {
        width: "70%",
        marginTop: "80px",
        fontSize: "20px",
      },
    },
    "& Button": {
      width: "92%",
      height: "55px",
      background: "#165834",
      borderRadius: "4px",
      padding: "6px 33px",
      textTransform: "capitalize",
      fontFamily: " Helvetica",
      fontWeight: "bold",
      fontSize: "18px",
      color: "#ffffff",
      marginTop: "64px",
      marginBottom: "50px",
      "&:hover": {
        background: "#165834",
      },
      [theme.breakpoints.down("sm")]: {
        width: "51%",
        marginTop: "20px",
        marginBottom: "0px",
        height: "35px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "56%",
        marginTop: "20px",
        marginBottom: "0px",
        height: "35px",
      },
    },
  },

  loginRchild: {
    width: "92%",
    //   border:"1px solid blue",
    display: "flex",
    marginTop: "38px",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "63%",
      background: "white",
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  loginRchildleft: {
    width: "42%",
    [theme.breakpoints.down("md")]: {
      // border:"1px solid blue"
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "auto",
      marginTop: "30px",
    },
  },
  orderdetailaddnewbtnblock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40px",
    // border:"1px solid red",
    "& h2": {
      fontSize: "18px",
      fontWeight: "bold",
      fontStyle: "normal",
      fontFamily: "Roboto",
      lineHeight: "25px",
      height: "30px",
      display: "flex",
      alignSelf: "flex-end",
      padding: 0,
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
    "& Button": {
      fontSize: "12px",
      fontWeight: "bold",
      fontStyle: "normal",
      fontFamily: "Roboto",
      lineHeight: "25px",
      height: "30px",
      width: "140px",
      background: "#165834",
      borderRadius: "4px",
      color: "#ffffff",
      marginBottom: "60px",
      display: "flex",
      alignSelf: "center",
      padding: "0",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "25px",
        width: "110px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "11px",
        width: "100px",
      },
    },
  },
  addresseditbtnblock: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      marginTop: "45px",
    },
    "& h4": {
      fontSize: "18px",
      fontWeight: "bold",
      fontStyle: "normal",
      fontFamily: "Roboto",
      lineHeight: "25px",
      height: "30px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
    "& img": {
      width: "18px",
      height: "18px",
      background: "rgba(255, 129, 73, 0.3)",
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        width: "18px",
        height: "18px",
      },
    },
  },
  loginRchildright: {
    width: "40%",
    boxShadow: "3px 4px 23px rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
    background: "#ffffff",
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "auto",
      marginTop: "70px",
      borderRadius: "0px",
    },
    "& h5": {
      marginTop: "28px",
      fontFamily: "Roboto",
      lineHeight: "25px",
      fontSize: "22px",
      color: "#000000",
      paddingLeft: "22px",
      paddingRight: "25px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
  },
  servicetypesec: {
    marginTop: "23px",
    paddingLeft: "22px",
    paddingRight: "25px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
    "& h4": {
      fontFamily: "Roboto",
      fontSize: "19px",
      lineHeight: "25px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
    "& h3": {
      fontFamily: "Roboto",
      fontSize: "21px",
      fontWeight: "bold",
      lineHeight: "35px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        lineHeight: "30px",
      },
    },
  },
  subservicetypesec: {
    marginTop: "23px",
    paddingLeft: "22px",
    paddingRight: "25px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
    "& h4": {
      fontFamily: "Roboto",
      fontSize: "19px",
      lineHeight: "25px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
    "& h3": {
      fontFamily: "Roboto",
      fontSize: "21px",
      fontWeight: "bold",
      lineHeight: "35px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        lineHeight: "30px",
      },
    },
  },
  datetimesec: {
    marginTop: "25px",
    paddingLeft: "22px",
    paddingRight: "25px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
    "& h4": {
      fontFamily: "Roboto",
      fontSize: "19px",
      lineHeight: "25px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
    "& h3": {
      fontFamily: "Roboto",
      fontSize: "21px",
      fontWeight: "bold",
      lineHeight: "35px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        lineHeight: "30px",
      },
    },
  },
  totalcostsec: {
    borderRadius: "0 0 10px 10px",
    display: "flex",
    paddingLeft: "10px",
    paddingRight: "10px",
    justifyContent: "space-between",
    marginTop: "38px",
    height: "50px",
    background: "#00b394",
    color: "white",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      marginTop: "28px",
      borderRadius: "0px",
      // background: "rgb(210, 244, 255)",
      // color: "rgb(255, 129, 73)",
    },
    [theme.breakpoints.down("xs")]: {
      height: "35px",
    },
    "& h4": {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "25px",
    },
    "& h3": {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "25px",
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
const Placeyourorder = () => {
  const classes = UseStyles();
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
                  src={addressblackico}
                  alt="addressblackico pic"
                  style={{ width: "100%", height: "100%" }}
                />
              </Typography>
              <Typography variant="h5">address</Typography>
            </Box>
            <Box className={classes.menuboxmenuschild}>
              <Typography variant="h6">
                <img
                  src={shoppingbagredico}
                  alt="shoppingbagredico pic"
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
          <Typography variant="h6">Place Your order</Typography>
          <Box className={classes.loginRchild}>
            <Box className={classes.loginRchildleft}>
              <Box className={classes.orderdetailaddnewbtnblock}>
                <Typography variant="h2">Order Details</Typography>
                <Button>+ Add New</Button>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "13px",
                  alignItems: "center",
                }}
              >
                <Typography style={{ fontSize: "15px", fontFamily: "Roboto" }}>
                  AC General Services
                </Typography>
                <Typography style={{ fontSize: "15px", fontFamily: "Roboto" }}>
                  x1
                </Typography>
                <Typography
                  style={{
                    width: "18px",
                    height: "18px",
                    background: "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  <img src={trashbtn} alt="editbtn" />
                </Typography>
                <Typography
                  style={{
                    width: "18px",
                    height: "18px",
                    background: "rgba(255, 129, 73, 0.3)",
                    cursor: "pointer",
                  }}
                >
                  <img src={editbtn} alt="editbtn" />
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "60%",
                  marginTop: "13px",
                }}
              >
                <Typography style={{ fontSize: "15px", fontFamily: "Roboto" }}>
                  Approx Cost:
                </Typography>
                <Typography style={{ fontSize: "15px", fontFamily: "Roboto" }}>
                  Rs: 1500
                </Typography>
              </Box>
              <Box className={classes.addresseditbtnblock}>
                <Typography variant="h4">Address:</Typography>

                <img src={editbtn} alt="editbtn" />
              </Box>
              <Typography
                style={{
                  marginTop: "10px",
                  background: "#EFEFEF",
                  height: "52px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                Abc house, 01 street, near Phase 6, Hayatabad{" "}
              </Typography>
            </Box>
            <Card variant="outlined" className={classes.loginRchildright}>
              <Typography variant="h5">Receipt:</Typography>
              <Box className={classes.servicetypesec}>
                <Typography variant="h4">Service type:</Typography>
                <Typography variant="h3">AC service</Typography>
              </Box>
              <Box className={classes.subservicetypesec}>
                <Typography variant="h4">Sub service </Typography>
                <Typography variant="h3">AC General Services (x1)</Typography>
              </Box>
              <Box className={classes.datetimesec}>
                <Typography variant="h4">Date & Time</Typography>
                <Typography variant="h3">12 Aug | 10:30 AM</Typography>
              </Box>
              <Box className={classes.totalcostsec}>
                <Typography variant="h4">Total Cost:</Typography>
                <Typography variant="h3">Rs: 1500</Typography>
              </Box>
            </Card>
          </Box>
          <Button>Book Order</Button>
        </Box>
        {/* LoginR section end here */}
        <Desiredservicecom/>
        <Footersec/>
     
      </Box>
    </>
  );
};

export default Placeyourorder;
