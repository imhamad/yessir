import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
// import { styled } from '@mui/material/styles';
import {
  Label,
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  Dialog,
  Paper,
  IconButton,
  Hidden,
  Menu,
  MenuItem,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  Input,
  
} from "@material-ui/core";
// import * as React from 'react';

// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import Stack from '@mui/material/Stack';
// import { Stack } from '@mui/material';
// import Stack from '@mui/material/Stack';



import dialogimg from "../assets/dialogimg.png";
// import googleicon from "../assets/googleicon.png";
import greenlogo from "../assets/greenlogo.png";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


import teachergreen from "../assets/teachergreen.svg";
import airconditiongreen from "../assets/airconditiongreen.svg";
import homeappliancesgreen from "../assets/homeappliancesgreen.svg";
import cargreen from "../assets/cargreen.svg";
import plumbergreen from "../assets/plumbergreen.svg";
import handymangreen from "../assets/handymansgreen.svg";
import electricalappliancesgreen from "../assets/electricalappliancesgreen.svg";
import householdgreen from "../assets/householdgreen.svg";
import carpentergreen from "../assets/carpentergreen.svg";
import paintergreen from "../assets/paintergreen.svg";
// logo pic

//pictures
import userpic from "../assets/userpic.svg";
import editprofilepic from "../assets/editprofilepic.png";
import trendingserviceimg from "../assets/trendingserviceimg.png";



// footer icons
import instagram from "../assets/instagram.svg";
import map from "../assets/map.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";

const UseStyles = makeStyles((theme) => ({
  whitebg: {
    width: "100%",
    height: "s2290px",
    background: "#FFFFFF",
  },
  // top section start here
  topsection: {
    height: "400px",
    backgroundColor:"#EEF9F3",
    marginBottom: "-40px",
    [theme.breakpoints.down("md")]: {
      height: "370px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "450px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "430px",
    },
    "& h5": {
      display: "flex",
      margin: "auto",
      color: "#000000",
      textAlign: "center",
      justifyContent: "center",
      fontFamily: "Roboto",
      marginTop: "101px",
      fontStyle:"normal",
      fontWeight: "bold",
      fontSize: "55px",
      lineHeight: "60px",
      height:"60px",
      [theme.breakpoints.down("md")]: {
        fontSize: "45px",
        lineHeight: "50px",
        maginTop: "80px",
        width: "90%",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
        marginTop: "40px",
        lineHeight: "40px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "39px",
        lineHeight: "36px",
        marginTop: "45px",
      },
    },
    "& h4": {
      display: "flex",
      alignSelf: "center",
      fontSize: "18px",
      lineHeight: "25ox",
      color: "#000000",
      textAlign: "center",
      justifyContent: "center",
      marginTop: "10px",
      fontWeight:500,
      height:25,
      margin:"auto",
      // border:"1px solid blue",
      [theme.breakpoints.down("md")]: {
        marginTop: "10px",
        lineHeight: "30px",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop:"-5px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
        marginTop: "-5px",
        lineHeight: "26px",
      },
    },
  },
  logomenubtnsbox: {
   
    width: "99.7%",
    display: "flex",
  
   
    [theme.breakpoints.down("sm")]: {
      // border:"1px solid black",
      width: "99.6%",
      flexDirection: "column",
    },
  },
  logomenubox: {
    width: "507px",
    margin: "auto",
    // backgroundColor:"red",
    marginTop: "44px",
    alignItems: "center",
    marginLeft:"40px",
    display: "flex",
    //  border:"1px solid red",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      // border: "1px solid blue",
      justifyContent: "space-around",
     width:507,
     
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin:"auto",
      marginTop:40,
      display: "flex",
      justifyContent: "space-between",
    },
  },
  logo: {
    width: "106px",
    height: "38px",

    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "35px",
    lineHeight: "25px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  aboutwhyuscontact: {
    display: "flex",
    // background:"orange",
    justifyContent: "space-evenly",
    width:"351px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    "& h6": {
      position: "relative",

      justifyContent: "center",
      cursor: "pointer",
      paddingRight: "4px",
      fontStyle: "normal",
      display: "flex",
      alignItems: "center",
      fontWeight: "500",
      textTransform: "lowercase",
      fontSize: "16px",
      lineHeight: "21px",
      color: "#000000",
      fontFamily: "Roboto",
     

      textTransform: "capitalize",
      "&::after": {
        position: "absolute",
        content: '""',
        display: "block",
        height: "1px",
        backgroundColor: "rgb(106, 237, 219)",

        left: "50%",
        width: "0px",
        bottom: "-4px",
        transition: "0.5s",
      },
      "&:hover": {
        "&::after": { left: 0, width: "100%" },
      },
      [theme.breakpoints.down("md")]: {
        // border:"1px solid red"
      },
    },
  },
  menubutton: {
    color: "black",
    position: "relative",
    top:1,
    textAlign: "center",
    transition: "color 0.5s linear",

    "&:hover": {
      // color: "orange",
    },
  },
  btnsBox: {
    width: "40%",
    display: "flex",
    justifyContent: "flex-end",
 
   marginTop:"30px",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      marginTop: "125px",
      margin: "auto",
      // border:"1px solid gray",
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
    
      marginTop: "85px",
    },
  },
  myorderbtn: {
    backgroundColor: "#EEF9F3",
    color: "#000000",
    borderRadius: "4px",
    width: "130px",
    height: "40px",
    marginRight: "21px",
    textTransform: "capitalize",
    borderRadius:"4px",
    lineHeight:"30px",
    fontSize:"13px",
    fontFamily:"Helvetica",
    padding:"6px 10px",
    fontWeight:"bold",
    "&:hover": {
      backgroundColor: "#EEF9F3",    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
     
      height: "40px",
    },
    [theme.breakpoints.down("xs")]: {},
  },
  logoutbtn: {
    color: "rgba(255, 255, 255, 1)",
    background: "#000000",
    width: "130px",
    height: "40px",
    borderRadius: "4px",
    marginRight: "33px",
    textTransform: "capitalize",
    borderRadius:"4px",
    lineHeight:"30px",
    fontSize:"13px",
    fontFamily:"Helvetica",
    padding:"6px 33px",
    fontWeight:"bold",
    // boxShadow:"1px 5px 3px 5px rgba(0,0,0,0.05)",
    "&:hover": {
      background: "#000000",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
    
      marginRight: "0px",
      height: "40px",
    },
    [theme.breakpoints.down("xs")]: {},
  },
  // topsection end here
 //  Client detail section start here
 clientdetailsec:{
     width:"82.4%",
     margin:'auto',
     display:"flex",
    //  height:"250px",
     background:"#ffffff",
     alignItems:"center",
     justifyContent:"space-evenly",
     boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
     borderRadius:"4px",
     flexWrap:"wrap",
     padding:"46px 0",
     [theme.breakpoints.down("md")]:{
         height:"auto"
     },
     [theme.breakpoints.down("sm")]:{
         width:"70%",
         height:"auto"
     },

 },
 clientpicnamesec:{
     width:"252px",
    //  border:"1px solid blue",
     display:"flex",
     marginRight:"60px",
     marginLeft:"60px",
     [theme.breakpoints.down("sm")]:{
        marginTop:"0px"
     },
},
  clientnameprofileedit:{
    //   border:"1px solid red",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      "& Button":{
        width:"107px",height:"60px",
        "&:hover":{
         background:"#ffffff"
        }
      }
    
  }, 
  clientpic:{
//    borderRadius:"20%",
//   border:"1px solid blue",
  width:"115px", height:"115px",
  marginRight:"32px"
},
 clientemailareasec:{
     width:"252px",
     height:"160px",
    //  border:"1px solid red",
     marginRight:"60px",
     marginLeft:"60px",
     [theme.breakpoints.down("sm")]:{
        marginTop:"30px"
     },
  "& h6":{
      fontSize:"16px",
        lineHeight:"26px",
    fontFamily:"Roboto",
     fontWeight:"bold",
    fontStyle:"normal",
    color:"#165834",
    },
    "& h5":{
     fontSize:"16px",
        lineHeight:"26px",
    fontFamily:"Roboto",
     fontWeight:"bold",
    fontStyle:"normal",
    color:"#888888",
    }
},
clientarea:{
    marginTop:"30px"
},
 clientcontactaddresssec:{
     width:"252px",
     height:"160px",
    //  border:"1px solid red",
     marginRight:"60px",
     marginLeft:"60px",
     [theme.breakpoints.down("sm")]:{
        marginTop:"30px"
     },
  "& h6":{
      fontSize:"16px",
        lineHeight:"26px",
    fontFamily:"Roboto",
     fontWeight:"bold",
    fontStyle:"normal",
    color:"#165834",
    },
    "& h5":{
     fontSize:"16px",
        lineHeight:"26px",
    fontFamily:"Roboto",
     fontWeight:"bold",
    fontStyle:"normal",
    color:"#888888",
    }
},
clientaddress:{
    marginTop:"30px"
},
 clientcitysec:{
     width:"252px",
     height:"160px",
    //  border:"1px solid red",
     display:"flex",
     alignItems:"flex-start",
    //  border:"1px solid red",
     marginRight:"60px",
     marginLeft:"60px",
     [theme.breakpoints.down("sm")]:{
        marginTop:"30px"
     },
  "& h6":{
      fontSize:"16px",
        lineHeight:"26px",
    fontFamily:"Roboto",
     fontWeight:"bold",
    fontStyle:"normal",
    color:"#165834",
    },
    "& h5":{
     fontSize:"16px",
        lineHeight:"26px",
    fontFamily:"Roboto",
     fontWeight:"bold",
    fontStyle:"normal",
    color:"#888888",
    }
},
 //  Client detail section end here

//   orders section start here
orderssec:{
    width:"83%",
    margin:"auto",
    background:"#ffffff",
    marginBottom:"137px",
    marginTop:"137px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    "& h6":{
        fontSize:"45px",
        lineHeight:"60px",
        fontWeight:"bold",
        color:"#000000",
        fontFamily:"Roboto",
        fontStyle:"normal"
    },
    "& Button":{
        marginTop: "30px",
      height: "55px",
      width: "200px",
      background:"#165834",
      display: "flex",
      color: "#ffffff",
      fontSize: "18px",
      alignSelf: "center",
    //   marginBottom: "120px",
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: "30px",
      padding:"6px 33px",
      textTransform:"Capitalize",
      borderRadius:"4px",
     "&:hover":{ background:"#165834"},
      [theme.breakpoints.down("sm")]: {
        marginTop: "28px",
        fontSize: "18px",
        lineHeight: "20px",
        height: "40px",
        // marginBottom: "96px",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "14px",
        fontSize: "18px",
        lineHeight: "15px",
        height: "35px",
        // marginBottom: "82px",
       
        
      },
    }
},
//    orders section end here
//   Review block start here
 reviewblock:{
     width:"82.4%",
     margin:"auto",
     display:"flex",
     marginTop:"111px",
     flexDirection:"column",
     
    //  height:"1100px",
    //  border:"1px solid red",
     "& h4":{
         width:"242px",
         height:"60px",
        fontFamily:"Roboto",
      fontStyle:"normal",
      fontWeight:"bold",
      alignSelf:"center",
      color:"#000000",
      fontSize:"45px",
      lineHeight:"60px",
      [theme.breakpoints.down("sm")]: {
       
        fontSize:"40px"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:"35px",
        lineHeight:"40px"
      }, 
     }
 },
 reviewblockreviewsec:{
    backgroundColor:"#FAFAFA",
    padding:"100px 100px",
    marginTop:"32px",
 },
  review: {
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",
    padding:"32px 42px",
    marginTop:"15px",
    marginBottom:"15px",
    height:"204px",
    [theme.breakpoints.down("md")]: {
      width: "83%",
      padding: "22px 42px",
     
    },
    [theme.breakpoints.down("sm")]: {
      width: "83%",
      padding: "18px 30px",
     
    },
    [theme.breakpoints.down("xs")]: {
      width: "83%",
      padding: "14px 25px",
     
    },
    "& h6": {
      color: "#000000",
      fontStyle: "normal",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "34px",
      lineHeight: "60px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
        lineHeight: "50px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
        lineHeight: "36px",
      },
    },
    "& h5": {
      color: "#535353",
      fontWeight: "normal",
      fontFamily: "Roboto",
      marginTop: "6px",
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "35px",

      [theme.breakpoints.down("md")]: {
        marginTop: "6px",
        lineHeight: "30px",
      },
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
        lineHeight: "26px",
      },
    },
  },
//   Review block end here
  
  

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
  menuiconhiddenbox: {
    border: "1px solid blue",
  },
  menu: {
    position: "absolute",

    color: "black",
    [theme.breakpoints.down("xs")]: {
      // width:"88px",
      textAlign: "center",
      borderRadius: "15px",
      background: "orange",

      "&:hover": {},
    },
  },
  menu1: {
    fontWeight: "30px",
    textAlign: "center",
    transition: " color 0.3s linear",
    "&:hover": {
      backgroundColor: "gray",
      fontSize: "20px",
      color: "white",
      fontWeight: "bold",
    },
  },
  dialogwrapper:{
      position:"absolute",
      paddingTop:theme.spacing(8),
      paddingBottom:theme.spacing(8),
      paddingLeft:theme.spacing(8),
      paddingRight:theme.spacing(8),
      // background:"red",
      top:theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        paddingTop:theme.spacing(2),
      paddingBottom:theme.spacing(2),
      paddingLeft:theme.spacing(2),
      paddingRight:theme.spacing(2),
        top:theme.spacing(1),
    },

  },
  DialogTitle:{
  "& h6":{

    fontSize:"24px",lineHeight:"25px",
  color:"#000000",
  fontWeight:"500px",fontFamily:"Roboto",
  fontStyle:"normal",marginLeft:"252px",
//    marginTop:"40px",
   [theme.breakpoints.down('sm')]:{
    textAlign:"center",
     marginLeft:0
   }

  }

  },
  dialogcontentbox:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      // border:"1px solid red",
      [theme.breakpoints.down("sm")]: {
       flexDirection:"column",
       alignItems:"center"
    },
  },
  userimgbox:{
    //   width:"14.5%",
    //   height:"14.5%",
     width:"180px",
      height:"180px",
      borderRadius:"50%",
      display:"flex",
      border:"1px dashed blue",
      justifyContent:"center",
      alignItems:"center",
      [theme.breakpoints.down("md")]: {
        width:"150px",
      height:"150px",
      borderRadius:"50%",
    },
      [theme.breakpoints.down("sm")]: {
        width:"120px",
      height:"120px",
      borderRadius:"50%",
    },
    },
    userdatabox:{
        display:"flex",
        flexDirection:"column",
        // border:"1px solid black"

    },
  usernamecontactbox:{
    marginLeft:"24px",
    //   height:"14.5%px",
      display:"flex",
    //   border:"1px dotted blue",
      [theme.breakpoints.down("sm")]: {
        marginLeft:"0px",
       flexDirection:"column"
    },
  },
  useremailaddress:{
    marginLeft:"24px",
    [theme.breakpoints.down("sm")]: {
      marginLeft:"0px",
       flexDirection:"column"
    },
  },
  useraddresslorem:{
    marginLeft:"24px",
    [theme.breakpoints.down("sm")]: {
      marginLeft:"0px",
       flexDirection:"column"
    },
  },
  dialogsbtnbox:{
      marginLeft:"68px",
      marginTop:"22px",
      display:"flex",
      alignItems:"center",
      // border:"1px solid blue",
    [theme.breakpoints.down("sm")]: {
       flexDirection:"column",
       marginTop:"0px",
       marginLeft:"0px",

    },
    "& Button":{
        width: "350px",
        heigth:"52px",
        background:"#165834",
        color:"white",
        padding:"6px 33px",
        fontSize:"16px",
        lineHeight:"30px",
        fontFamily:"Helvetica",
        textTransform:"capitalize",
        cursor:"pointer",
        "&:hover":{
            background:"#165834",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "22px",
    },
    [theme.breakpoints.down("xs")]: {
        width:"300px",
    marginTop: "15px",

    //   padding: "0",
      // marginTop:"18px",
    },
    },
    "& h6":{
        height: "30px",
        width:"320px",
       fontFamily:"Roboto",
       fontStyle:"normal",
      fontWeight: "500px",
      fontSize:"16px",
      lineHeight:"30px",
      marginLeft:"21px",
      cursor:"pointer",
      [theme.breakpoints.down("sm")]: {
    marginLeft:"0px",
    marginTop: "15px",
    marginBottom:"5px",
    textAlign:"center"
    },
    [theme.breakpoints.down("xs")]: {
        width:"300px",
        marginTop: "10px",
        marginBottom:"5px",
        textAlign:"center"

    //   padding: "0",
      // marginTop:"18px",
    },
    }
  },

  textFieldStyle: {
    width: "397px",
    background: "#f9f9f9",
    marginTop:"22px",
    height: "52px",
    marginLeft:"44px",
    color: "red",
    outline:"none",
    border:"none",
    [theme.breakpoints.down("md")]: {
       width:"350px",
     },
    [theme.breakpoints.down("sm")]: {
       
      marginTop: "22px",
    marginLeft:"0px",
    },
    [theme.breakpoints.down("xs")]: {
        width:"300px",
    marginTop: "15px",

    //   padding: "0",
      // marginTop:"18px",
    },
  },
}));

const Profilepage = () => {
    const classes = UseStyles();
    // const Input = styled('input')({
    //   display: 'none',
    // });
    
    // dialog box start here
  const [dialog1, setdialog1] = useState(false);
  const opendialog1 = () => {
    setdialog1(true);
  };
  const closedialog1 = () => {
    setdialog1(false);
  };
    // dialog box end here

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
    }
  return (
    <>
      <Box className={classes.whitebg}>
        {/* Top section start here */}
        <Box className={classes.topsection}>
          <Box className={classes.logomenubtnsbox}>
            <Box className={classes.logomenubox}>
            <Box className={classes.logo}>
                <img src={greenlogo} style={{width:"100%",height:"100%"}} alt="logoimg"/>
               
              </Box>
              <Box className={classes.aboutwhyuscontact}>
                <Typography variant="h6">
                  <NavLink
                    to="/"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Home
                  </NavLink>
                </Typography>
                <Typography variant="h6" onClick={handleClick}>
                  services
                  <ArrowDropDownIcon />
                </Typography>

                {/* large screen menu start here */}
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}>

               <NavLink
                    to="/teachersubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a",}}>
                   <MenuItem onClick={smallmenuclose}>
                    Tution Services
                    </MenuItem>
                  </NavLink>
               
                  <NavLink
                    to="/acsubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                  <MenuItem onClick={smallmenuclose}>
                    AC Services
                    </MenuItem>
                  </NavLink>
                
                 
                  <NavLink
                    to="/homeapprepair"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                   <MenuItem onClick={smallmenuclose}>
                    Home appliances repair Services
                    </MenuItem>
                  </NavLink>
                  
                  
                  <NavLink
                    to="/carsubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                  <MenuItem onClick={smallmenuclose}>
                    Car Services
                    </MenuItem>
                  </NavLink>
                 
                 
                  <NavLink
                    to="/plumbersubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                   <MenuItem onClick={smallmenuclose}>
                   Plumbing Services
                   </MenuItem>
                  </NavLink>
                 
                 
                  <NavLink
                    to="/handymansubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                   <MenuItem onClick={smallmenuclose}>
                   Handymans Services
                   </MenuItem>
                  </NavLink>
                  
                  
                  <NavLink
                    to="/electriciansubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                  <MenuItem onClick={smallmenuclose}>
                    Electrician Services
                    </MenuItem>
                  </NavLink>
                  
                
                  <NavLink
                    to="/cleaningsubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                    <MenuItem onClick={smallmenuclose}>
                   Cleaning Services
                   </MenuItem>
                  </NavLink>
                
                
                  <NavLink
                    to="/carpentersubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                    <MenuItem onClick={smallmenuclose}>
                    Carpenter Services
                    </MenuItem>
                  </NavLink>
                 
                
                  <NavLink
                    to="/paintersubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a"}}>
                    <MenuItem onClick={smallmenuclose}>
                    Painter Services
                    </MenuItem>
                 </NavLink>
                 
                </Menu>
                   {/* large screen end here */}

                <Typography variant="h6">
                <NavLink
                    to="/aboutus"
                    style={{ textDecoration: "none",  color: "black",}}
                  >
                    About
                  </NavLink>
                </Typography>

                <Typography variant="h6">
                <NavLink
                    to="/contact"
                    exact
                    style={{ textDecoration: "none",  color: "black",}}
                  >
                    Contact
                  </NavLink>
                </Typography>
              </Box>

              {/* menu of small screen start here */}
              <Hidden smUp className={classes.menuiconhiddenbox}>
                <IconButton
                  title="open/close menu"
                  onClick={smallmenuopen}
                  className={classes.menubutton}
                >
                  <MenuIcon
                    style={{ fontSize: 34,}}
                  />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={smallmenu}
                  keepMounted
                  open={Boolean(smallmenu)}
                  onClose={smallmenuclose}
                >
                  <NavLink
                    to="/"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a",}}
                  >
                   <MenuItem onClick={smallmenuclose}>
                     Home
                    </MenuItem>
                  </NavLink>

               <NavLink
                    to="/teachersubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a",}}>
                   <MenuItem onClick={smallmenuclose}>
                    Tution Services
                    </MenuItem>
                  </NavLink>
               
                  <NavLink
                    to="/acsubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                  <MenuItem onClick={smallmenuclose}>
                    AC Services
                    </MenuItem>
                  </NavLink>
                
                 
                  <NavLink
                    to="/homeapprepair"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                   <MenuItem onClick={smallmenuclose}>
                    Home appliances repair Services
                    </MenuItem>
                  </NavLink>
                  
                  
                  <NavLink
                    to="/carsubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                  <MenuItem onClick={smallmenuclose}>
                    Car Services
                    </MenuItem>
                  </NavLink>
                 
                 
                  <NavLink
                    to="/plumbersubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                   <MenuItem onClick={smallmenuclose}>
                   Plumbing Services
                   </MenuItem>
                  </NavLink>
                 
                 
                  <NavLink
                    to="/handymansubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                   <MenuItem onClick={smallmenuclose}>
                   Handymans Services
                   </MenuItem>
                  </NavLink>
                  
                  
                  <NavLink
                    to="/electriciansubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                  <MenuItem onClick={smallmenuclose}>
                    Electrician Services
                    </MenuItem>
                  </NavLink>
                  
                
                  <NavLink
                    to="/cleaningsubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                    <MenuItem onClick={smallmenuclose}>
                   Cleaning Services
                   </MenuItem>
                  </NavLink>
                
                
                  <NavLink
                    to="/carpentersubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}>
                    <MenuItem onClick={smallmenuclose}>
                    Carpenter Services
                    </MenuItem>
                  </NavLink>
                 
                
                  <NavLink
                    to="/paintersubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a"}}>
                    <MenuItem onClick={smallmenuclose}>
                    Painter Services
                    </MenuItem>
                 </NavLink>
                 
                </Menu>
              </Hidden>
              {/* menu of small screen end here */}
            </Box>
            <Box className={classes.btnsBox}>
              <Button className={classes.myorderbtn} 

                  startIcon={
                    <img
                      src={userpic}
                      style={{ width: "28px",heigh:"28px",}}
                    />
                  }
              >My Orders</Button>
              <Button className={classes.logoutbtn}>logout</Button>
            </Box>
          </Box>

          <Typography variant="h5">Your Profile</Typography>
          <Typography variant="h4">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          </Typography>
        </Box>
           {/* Top section end here */}
            
            {/* Client Detail section start here */}
              <Box className={classes.clientdetailsec}>
                  <Box className={classes.clientpicnamesec}>
                      <Box className={classes.clientpic}>
                          <img src={trendingserviceimg} alt="trendingserviceimg" style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                      </Box>
                      <Box className={classes.clientnameprofileedit}>
                          <Typography variant="h6">Khalid Shah</Typography>
                         <Button onClick={opendialog1}>
                         <img
                            src={editprofilepic}
                            alt="editprofilepic"
                            style={{ width: "80px",heigh:"60px",}}
                    />
                         </Button>
                      </Box>
                  </Box>
                  <Box className={classes.clientemailareasec}>
                      <Box className={classes.clientemail}>
                          <Typography variant="h6">Email</Typography>
                          <Typography variant="h5">aamir255@gmail.com</Typography>
                      </Box>
                      <Box className={classes.clientarea}>
                          <Typography variant="h6">Area</Typography>
                          <Typography variant="h5">University Town</Typography>
                      </Box>
                  </Box>
                  
                  <Box className={classes.clientcontactaddresssec}>
                      <Box className={classes.clientcontact}>
                          <Typography variant="h6">Contact Number</Typography>
                          <Typography variant="h5">03439843984</Typography>
                      </Box>
                      <Box className={classes.clientaddress}>
                          <Typography variant="h6">Address</Typography>
                          <Typography variant="h5">House #04 street no1 near town Heights</Typography>
                      </Box>
                  </Box>
                  <Box className={classes.clientcitysec}>
                      <Box className={classes.clientcity}>
                          <Typography variant="h6">City</Typography>
                          <Typography variant="h5">Peshawar</Typography>
                      </Box>
                  </Box>
            </Box>
    
            {/* Client Detail section end here */}

             {/* orders section start here */}
             <Box className={classes.orderssec}>
               <Typography variant="h6">No Orders Yet</Typography>
                 <Button>Book a service</Button>
             </Box>
             {/* orders section end here */}
           {/* Review block start here */}
       <Box className={classes.reviewblock}>
         <Typography variant="h4">My Reviews</Typography>
         <Box className={classes.reviewblockreviewsec}>
         <Paper className={classes.review}>
          <Typography variant="h6">Awesome Service</Typography>
          <Typography variant="h5">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesetting
          </Typography>
        </Paper>
        <Paper className={classes.review}>
          <Typography variant="h6">Awesome Service</Typography>
          <Typography variant="h5">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesetting
          </Typography>
        </Paper>
        <Paper className={classes.review}>
          <Typography variant="h6">Awesome Service</Typography>
          <Typography variant="h5">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesetting
          </Typography>
        </Paper>
         </Box>
       </Box>
               {/* Reviwe block end here */}
        {/* footer section start here */}

        <Box className={classes.footer}>
          <Typography variant="h5" style={{}}>
            Yes
            <Typography variant="h4" style={{}}>
              Sir!
            </Typography>
          </Typography>
          <Box className={classes.footerpageslinks}>
            {/* <Typography variant="h6" onClick={scrolltoservices}>Services</Typography> */}
            <Typography variant="h6" onClick={scrolltotop}>
            <NavLink
                    to="/aboutus"
                    exact
                    // activeStyle={{
                    //   fontWeight: "bold",
                    //   // textDecoration: "none",
                     
                    // }}
                    style={{ textDecoration: "none",   color: "#595959",}}
                  >
                    Why us
                  </NavLink>
            </Typography>
            <Typography variant="h6" onClick={scrolltotop}> 
                 <NavLink
                    to="/termsconditionpage"
                    exact
                    // activeStyle={{
                    //   fontWeight: "bold",
                    //   // textDecoration: "none",
                     
                    // }}
                    style={{ textDecoration: "none",   color: "#595959",}}
                  >
                    Terms & Conditions
                  </NavLink>
                  </Typography>
            <Typography variant="h6" onClick={scrolltotop}>
            <NavLink
                    to="/contact"
                    exact
                    activeStyle={{
                      textDecoration: "none",
                     
                    }}
                    style={{ textDecoration: "none",   color: "#595959",}}
                  >
                    Contact us
                  </NavLink>
                  </Typography>
            <Typography variant="h6">
            <NavLink
                    to="/help"
                    exact
                    activeStyle={{
                      textDecoration: "none",
                     
                    }}
                    style={{ textDecoration: "none",   color: "#595959",}}
                  >
                    Help
                  </NavLink>
            </Typography>
            <Typography variant="h6" onClick={scrolltotop}>

            <NavLink
                    to="/privacypolicy"
                    exact
                    activeStyle={{
                      textDecoration: "none",
                     
                    }}
                    style={{ textDecoration: "none",   color: "#595959",}}
                  >
                    Privacy policy
                  </NavLink>
             
            </Typography>
          </Box>

          <Box className={classes.sociallinks}>
            <Typography
              title="instagram"
              aria-label="add"
              className={classes.tooltip}
            >
              <img
                src={instagram}
                alt="instagram pic"
                style={{ width: "17px", height: "17px" }}
              />
            </Typography>
            <Typography title="map" className={classes.tooltip}>
              <img
                src={map}
                alt="map pic"
                style={{ width: "17px", height: "17px" }}
              />
            </Typography>
            <Typography title="twitter" className={classes.tooltip}>
              <img
                src={twitter}
                alt="twitter pic"
                style={{ width: "17px", height: "17px" }}
              />
            </Typography>
            <Typography title="youtube" className={classes.tooltip}>
              <img
                src={youtube}
                alt="youtube pic"
                style={{ width: "17px", height: "17px" }}
              />
            </Typography>
          </Box>
          <Box className={classes.appstoregoogleplaysection}>
            <Typography variant="h4">Download Yessir App</Typography>
            
             <Box className={classes.applegooglepics}>
            
             <img src={appstore} alt="applestorepic" title="comming soon" style={{borderRadius:"5px",width:"170px", height:"50px",border:"1px solid white"}}/>
              <img src={googleplay} alt="googleplaypic" title="comming soon" style={{width:"170px", height:"50px",borderRadius:"5px", border:"1px solid white"}}/>
             </Box>
           
          </Box>
        </Box>

        {/* footer section end here */}

         {/* loginregister dialogbox start here */}
         <div>
          <Dialog    maxWidth="xl"
           classes={{paper:classes.dialogwrapper}}
        // fullWidth  
        open={dialog1}
        onClose={closedialog1}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className={classes.DialogTitle}> 
         <Typography variant="h6">Edit your profile</Typography>
        </DialogTitle>
        <DialogContent >
          <Box className={classes.dialogcontentbox}>
              <Box className={classes.userimgbox}>
              
        {/* <Input accept="image/*" id="contained-button-file" multiple type="file" style={{ fontSize:"10px",}} /> */}
        <Box direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" style={{display:"none"}}/>
        <Button component="span" style={{textTransform:"capitalize"}}>
          Attach your photo
        </Button>
      </label>

    </Box>
              </Box>
              <Box className={classes.userdatabox}>
              <Box className={classes.usernamecontactbox}>
              <TextField
            className={classes.textFieldStyle}
            placeholder="your name"
            label="Name"
            variant="outlined"
          />
          <TextField
            className={classes.textFieldStyle}
            placeholder="your contact no e.g 03329191292"
            label="Contact number"
            variant="outlined"
          />
              </Box>  
              <Box className={classes.usernamecontactbox}>
              <TextField
            className={classes.textFieldStyle}
            placeholder="your email"
            label="Email"
            variant="outlined"
          />
          <TextField
            className={classes.textFieldStyle}
            placeholder="address"
            label="your address"
            variant="outlined"
          />
              </Box> 
              <Box className={classes.usernamecontactbox}>
              <TextField
            className={classes.textFieldStyle}
            placeholder="your address"
            label="Address"
            variant="outlined"
          />
          <TextField
            className={classes.textFieldStyle}
            placeholder="lorem ipsum"
            label="Ipsum"
            variant="outlined"
          />
              </Box> 
              <Box className={classes.dialogsbtnbox}>
                  <Button>update</Button>
                  <Typography variant="h6">Discard</Typography>
              </Box>
              </Box>
          </Box>
        </DialogContent>
       
      </Dialog>
        </div>
        {/* loginregister dialogbox end here */}
          
      </Box> 

    </>
  );
}

export default Profilepage;
