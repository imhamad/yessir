import React from 'react';
import { NavLink } from "react-router-dom";
import {
  Box,
  Typography,
  CardActionArea,
  Card,
  Toolbar,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

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
import whychoosepic from "../assets/whychoosepic.png";
import whatwedopic from "../assets/whatwedopic.png";
//ac cardspic
// our good features pics start here
import staffpic from "../assets/staffpic.svg";
import supervisepic from "../assets/supervisepic.svg";
import walletpic from "../assets/walletpic.svg";
import moneypic from "../assets/moneypic.svg";

import Desiredservicecom from "./Desiredservicecom";
import Footersec from "./Footersec";

const UseStyles = makeStyles((theme) => ({
  whitebg: {
    width: " 100%",
    // height: "2290px",
    background: "#FFFFFF",
    marginTop:"100px",
  
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
      height: "410px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "390px",
    },
    "& h5": {
      display: "flex",
      margin: "auto",
      color: "#000000",
      textAlign: "center",
      justifyContent: "center",
      fontFamily: "Roboto",
      // marginTop: "101px",
      paddingTop:"150px",
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
        marginTop: "30px",
        lineHeight: "40px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
        lineHeight: "36px",
        marginTop: "20px",
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
        marginTop: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
        marginTop: "5px",
        lineHeight: "26px",
      },
    },
  },

  // topsection end here
  // our good feature section start here
  ourgoodfeaturesec:{
    width:"87%",
    // height:"350px",
    display:"flex",
    margin:"auto",
    flexWrap:"Wrap",
    justifyContent:"center"

  },
  ourgoodfeacturesecchild:{
    borderRadius:"4px",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    background:"#ffffff",
    marginLeft:"6px",
    marginRight:"6px",
    marginTop:"6px",
    marginBottom:"6px",
   width:"300px",
   display:"flex",
   alignItems:"center",
   flexDirection:"column",
   "& h6":{
    
     marginTop:"10px",
     fontWeight:500,
     fontStyle:"normal",
     fontSize:"20px",
     lineHeight:"60px",
     fontFamily:"Roboto",
     color:"#000000",

   },
   "& h5":{
    width:"235px",
    marginTop:"10px",
    marginBottom:"31px",
    fontWeight:"normal",
    fontStyle:"normal",
    fontSize:"16px",
    lineHeight:"26px",
    fontFamily:"Roboto",
    color:"#535353",
    textAlign:"center"
   }
  },
  // our good feature section start here
  // acsubservicescardssection start here
  ACsubservicescardsection: {
    width: "80%",
    display: "flex",
    margin: "auto",
    marginTop:"111px",
    flexDirection:"column",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      display: "flex",
      // border:"1px solid red"
    },

    [theme.breakpoints.down("sm")]: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      //    border:"1px solid black"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    "& h4":{
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
 
  acsubcardsbox: {
    width: "100%",
    // border: "2px solid black",
    display: "flex",
    // justifyContent: "space-evenly",
    flexWrap: "wrap",
    display: "flex",
    flexWrap: "Wrap",
    justifyContent: "center",
    marginTop:"30px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "30px",
      // border:"1px solid blue"
      // flexDirection:"column"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: "30px",
    },
  },
  acsubcard: {
    width: "320px",
    height: "90px",
    background: "#ffffff",
    display: "flex",
    justifyContent: "space-evenly",
    // flexDirection: "row",
    // boxShadow:"10px 8px 31px 2px rgba(238, 249, 243,1)",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    marginBottom: "10px",
    alignItems: "center",
    marginLeft: "10px",
    borderRadius:"10px",
    [theme.breakpoints.down("sm")]: {
      height:"80px",
    },

   
  },
  acsubcardimgbox: {
    width: "70px",
    height: "60px",
    // marginTop: "27px",
    // background:"blue",
    [theme.breakpoints.down("md")]: {},

    [theme.breakpoints.down("sm")]: {
      width: "65px",
      height: "53px",
    },
    [theme.breakpoints.down("xs")]: {},
  },
  acsubcardtypographes:{
    width: "200px",
    // height: "90px",
    display: "flex",
    flexDirection: "column",
    // background:"red",
    justifyContent:"center",
        "& h6": {
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "20px",
      // verticalAlign: "center",
      // textAlign: "center",
      // marginTop: "10px",
      lineHeight: "20px",
      // color:"black",
      "&:hover":{
        textDecoration:"underline",
        // color:"#165834"
      },
      [theme.breakpoints.down("md")]: {
        lineHeight: "20px",
      
      },

      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        fontSize: "19px",
      },
    },
    "& h5":{
      color:"rgb(0, 179, 148)",
      fontSize:"17px",
    }
  },
  // acsubservicescardssection end here

  // demo1 start here
  demo1: {
    position:"relative",
    margin: "auto",
    width: "84%",
    display: "flex",
    marginTop: "120px",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: { marginTop: "100px" },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      marginTop: "80px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "70px",
    },
  },
  demo1description: {
    width: "51%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {},
    "& h6": {
      color: "#000000",
      fontStyle: "normal",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "45px",
      lineHeight: "60px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
        textAlign: "center",
        lineHeight: "50px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
        lineHeight: "36px",
      },
    },
    "& h5": {
      marginTop: "35px",
      color: "#535353",
      fontWeight: "normal",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "35px",
      textAlign: "justify",
      [theme.breakpoints.down("md")]: {
        marginTop: "15px",
        lineHeight: "30px",
      },
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
        lineHeight: "26px",
      },
    },
  },
  demo1imgbox: {
    width: "42%",
    height: "450px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "400px",
      marginTop: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "350px",
    },
  },
  demo1dotparent:{
    position: "absolute",
    width: "176px",
    //  height:'190px',
    color: "orange",
    // backgroundColor:"black",
    lineHeight: "0",
    zindex: theme.zIndex.Toolbar,
   marginTop:"38px",
    left: "52%",
    top:"51.5%",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  dot:{
    backgroundColor:"#A3BD9A",
    height: "5px",
    width: "5px",
    borderRadius: "50%",
    display: "flex",
    lineHeight: "0px",
    justifyContent: "center",
    marginLeft: "10px",
    marginTop: "10px",
  },
  // demo1 end here

  // demo2 start here
  demo2: {
    position:"relative",
    margin: "auto",
    width: "84%",
    display: "flex",
    marginTop: "120px",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: { marginTop: "100px" },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
      marginTop: "80px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "70px",
    },
  },
  demo2description: {
    width: "51%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {},
    "& h6": {
      color: "#000000",
      fontStyle: "normal",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "45px",
      lineHeight: "60px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
        textAlign: "center",
        lineHeight: "50px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
        lineHeight: "36px",
      },
    },
    "& h5": {
      marginTop: "35px",
      color: "#535353",
      fontWeight: "normal",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "35px",
      textAlign: "justify",
      [theme.breakpoints.down("md")]: {
        marginTop: "15px",
        lineHeight: "30px",
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {
          fontSize: "18px",
          lineHeight: "26px",
        },
      },
    },
  },
  demo2imgbox: {
    width: "42%",
    height: "450px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "400px",
      marginTop: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "350px",
    },
  },
  demo2dotparent:{
    position: "absolute",
    width: "176px",
    //  height:'190px',
    color: "orange",
    // backgroundColor:"black",
    lineHeight: "0",
    zindex: theme.zIndex.Toolbar,
   marginTop:"38px",
    left: "30%",
    top:"51.5%",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  // demo2 end here

 
}));
const Aboutus = () => {
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
      window.scrollTo(0, 1950);
    };
  
  return (
    <>
     <Box className={classes.whitebg}>
        <Box className={classes.topsection}>
         

          <Typography variant="h5">about us page</Typography>
          <Typography variant="h4">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          </Typography>
        </Box>

         {/* our good features section start here */}
         <Box className={classes.ourgoodfeaturesec}>

         <Box className={classes.ourgoodfeacturesecchild}>
          <Box style={{width:"90px",height:"90px",marginTop:"32px"}}>
          <img src={staffpic} alt="staffpic"/>
          </Box>
           <Typography variant="h6">Verified Technical Staff</Typography>
           <Typography variant="h5">Lorem Ipsum is simply dummy text of the printing and types etting Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing </Typography>
         </Box>
         <Box className={classes.ourgoodfeacturesecchild}>
          <Box style={{width:"90px",height:"90px",marginTop:"32px"}}>
          <img src={supervisepic} alt="supervisepic"/>
          </Box>
           <Typography variant="h6">Supervised Staff</Typography>
           <Typography variant="h5">Lorem Ipsum is simply dummy text of the printing and types etting Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing </Typography>
         </Box>
         <Box className={classes.ourgoodfeacturesecchild}>
          <Box style={{width:"90px",height:"90px",marginTop:"32px"}}>
          <img src={walletpic} alt="walletpic"/>
          </Box>
           <Typography variant="h6">Trustworthy</Typography>
           <Typography variant="h5">Lorem Ipsum is simply dummy text of the printing and types etting Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing </Typography>
         </Box>
         <Box className={classes.ourgoodfeacturesecchild}>
          <Box style={{width:"90px",height:"90px",marginTop:"32px"}}>
          <img src={moneypic} alt="moneypic"/>
          </Box>
           <Typography variant="h6">Affordable</Typography>
           <Typography variant="h5">Lorem Ipsum is simply dummy text of the printing and types etting Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing </Typography>
         </Box>

         </Box>
         {/* our good features section end here */}

        {/* demo1 start here */}
        <Box className={classes.demo1}>
          <Box className={classes.demo1description}>
            <Typography variant="h6">
              why choose us?
            </Typography>
            <Typography variant="h5">
              Lorem Ipsum is simply dummy text of the printing and types etting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and type setting
              Lorem Lorem Ipsum is simply dummy text of the printing and type
              setting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.Lorem
              Ipsum is simply dummy text of the printing and typesettingLorem
              Ipsum is simply dummy text of the printing and typesettingLorem
              Ipsum is simply dummy text of the printing and typesetting
            </Typography>
          </Box>
          <CardActionArea className={classes.demo1imgbox}>
            <img src={whychoosepic} alt="whychoosepic" width="100%" height="100%" />
          </CardActionArea>
          <Toolbar className={classes.demo1dotparent}>
          <div className={classes.dot}></div>
              
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
          </Toolbar>
        </Box>
        {/* demo1 end here */}

        {/* demo2 start here */}
        <Box className={classes.demo2}>
        <CardActionArea className={classes.demo2imgbox}>
            <img src={whatwedopic} alt="whatwedopic" width="100%" height="100%" />
          </CardActionArea>
          <Box className={classes.demo2description}>
            <Typography variant="h6">
             what we do?
            </Typography>
            <Typography variant="h5">
              Lorem Ipsum is simply dummy text of the printing and type setting
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Ipsum is
              simply dummy text of the printing and typesettingLorem Ipsum is
              simply dummy text of the printing and type setting Lorem Ipsum is
              simply dummy text of the printing and typesettingLorem Ipsum is
              simply dummy text of the printing and typesettingLorem Ipsum is
              simply dummy text of the printing and typesetting
            </Typography>
          </Box>
          <Toolbar className={classes.demo2dotparent}>
          <div className={classes.dot}></div>
              
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>{" "}
              <div className={classes.dot}></div>
          </Toolbar>
         
        </Box>
        {/* demo2 end here */}

       
        {/* subservices section section start here */}
        <Box className={classes.ACsubservicescardsection}>
        <Typography variant="h4">Our Services</Typography>
          <Box className={classes.acsubcardsbox}>
            <Card variant="outlined" className={classes.acsubcard}>
              <Box className={classes.acsubcardimgbox}>
                <img
                  src={teachergreen}
                  alt="teachergreen pic"
                  width="100%"
                  height="100%"
                />
              </Box>
             <Box className={classes.acsubcardtypographes}>
             <Typography variant="h6" onClick={scrolltotop}>
                <NavLink
                  to="/teachersubcategray"
                  style={{color:"#000000", textDecoration: "none",
                   }}
                  exact
                >
                  Tutor Services
                </NavLink>
              </Typography>
             <Typography variant="h5" >starting from: Rs 2000</Typography>
             </Box>
            </Card>
            <Card variant="outlined" className={classes.acsubcard}>
              <Box className={classes.acsubcardimgbox}>
                <img
                  src={airconditiongreen}
                  alt="airconditiongreen pic"
                  width="100%"
                  height="100%"
                />
              </Box>
             <Box className={classes.acsubcardtypographes}>
             <Typography variant="h6" onClick={scrolltotop}>
             <NavLink
                    to="/acsubcategray"
                    exact
                    style={{ color: "#000000", textDecoration: "none" }}
                  >
                    AC Services
                  </NavLink>
             </Typography>
              <Typography variant="h5">starting from: Rs 1500</Typography>
             </Box>
            </Card>
            <Card variant="outlined" className={classes.acsubcard}>
              <Box className={classes.acsubcardimgbox}>
                <img
                  src={homeappliancesgreen}
                  alt="homeappliancesgreen pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box className={classes.acsubcardtypographes}>

              <Typography variant="h6" onClick={scrolltotop}>
              <NavLink
                    to="/homeapprepair"
                    exact
                    style={{ color: "#000000", textDecoration: "none" }}
                  >
                    Home Appliances Repair Services
                  </NavLink>
              </Typography>
              <Typography variant="h5">starting from: Rs 1500</Typography>
              </Box>
            </Card>
            <Card variant="outlined" className={classes.acsubcard}>
              <Box className={classes.acsubcardimgbox}>
                <img
                  src={cargreen}
                  alt="cargreen pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box className={classes.acsubcardtypographes}>

              <Typography variant="h6" onClick={scrolltotop}>
              <NavLink
                    to="/carsubcategray"
                    exact
                    style={{color: "#000000", textDecoration: "none" }}
                  >
                    Vehicles Services
                  </NavLink>
              </Typography>
              <Typography variant="h5">starting from: Rs 1500</Typography>
              </Box>
            </Card>
            <Card variant="outlined" className={classes.acsubcard}>
              <Box className={classes.acsubcardimgbox}>
                <img
                  src={plumbergreen}
                  alt="plumbergreen pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box className={classes.acsubcardtypographes}>

              <Typography variant="h6" onClick={scrolltotop}>
              <NavLink
                    to="/plumbersubcategray"
                    exact
                    style={{ color: "#000000", textDecoration: "none" }}
                  >
                    Plumber Services
                  </NavLink>
              </Typography>
              <Typography variant="h5">starting from: Rs 1500</Typography>
               </Box>
            </Card>
           
            <Card variant="outlined" className={classes.acsubcard}>
              <Box className={classes.acsubcardimgbox}>
                <img
                  src={handymangreen}
                  alt="handymangreen pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box className={classes.acsubcardtypographes}>

              <Typography variant="h6" onClick={scrolltotop}>
              <NavLink
                    to="/handymansubcategray"
                    exact
                    style={{color: "#000000", textDecoration: "none" }}
                  >
                    Handymans Services
                  </NavLink>
              </Typography>
              <Typography variant="h5">starting from: Rs 1800</Typography>
              </Box>
            </Card>
            <Card variant="outlined" className={classes.acsubcard}>
              <Box className={classes.acsubcardimgbox}>
                <img
                  src={electricalappliancesgreen}
                  alt="electricalappliancesgreen pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box className={classes.acsubcardtypographes}>

              <Typography variant="h6" onClick={scrolltotop}>
              <NavLink
                    to="/electriciansubcategray"
                    exact
                    style={{color: "#000000", textDecoration: "none" }}
                  >
                    Electrician Services
                  </NavLink>
              </Typography>
              <Typography variant="h5">starting from: Rs 2500</Typography>
              </Box>
            </Card>
            <Card variant="outlined" className={classes.acsubcard}>
              <Box className={classes.acsubcardimgbox}>
                <img
                  src={householdgreen}
                  alt="householdgreen pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box className={classes.acsubcardtypographes}>

              <Typography variant="h6" onClick={scrolltotop}>
              <NavLink
                    to="/cleaningsubcategray"
                    exact
                    style={{color: "#000000", textDecoration: "none" }}
                  >
                    Cleaning Services
                  </NavLink>
              </Typography>
              <Typography variant="h5">starting from: Rs 2500</Typography>
              </Box>
            </Card>
            <Card variant="outlined" className={classes.acsubcard}>
              <Box className={classes.acsubcardimgbox}>
                <img
                  src={carpentergreen}
                  alt="carpentergreen pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box className={classes.acsubcardtypographes}>

              <Typography variant="h6" onClick={scrolltotop}>
              <NavLink
                    to="/carpentersubcategray"
                    exact
                    style={{color: "#000000", textDecoration: "none" }}
                  >
                    Carpenter Services
                  </NavLink>
              </Typography>
              <Typography variant="h5">starting from: Rs 2500</Typography>
              </Box>
            </Card>
            <Card variant="outlined" className={classes.acsubcard}>
              <Box className={classes.acsubcardimgbox}>
                <img
                  src={paintergreen}
                  alt="paintergreen pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box className={classes.acsubcardtypographes}>

              <Typography variant="h6" onClick={scrolltotop}>
              <NavLink
                    to="/paintersubcategray"
                    exact
                    style={{color: "#000000", textDecoration: "none" }}
                  >
                    Painter Services
                  </NavLink>
              </Typography>
              <Typography variant="h5">starting from: Rs 2500</Typography>
              </Box>
            </Card>
          </Box>
        </Box>
        {/* subservices section end here */}
        {/* desired service start here */}
        <Desiredservicecom/>
        <Footersec/>
      </Box> 
    </>
  );
}

export default Aboutus;
