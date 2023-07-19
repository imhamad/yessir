import React from 'react';
import { NavLink } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  CardActionArea,
  Card,
  Paper,
  IconButton,
  Hidden,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import homeappliancesgreen from "../assets/homeappliancesgreen.svg";
// logo pic

//pictures
import homeappliancepic1 from "../assets/homeappliancepic1.jpg";
import homeappliancepic2 from "../assets/homeappliancepic2.png";

import Desiredservicecom from "./Desiredservicecom";
import Footersec from "./Footersec";


const UseStyles = makeStyles((theme) => ({
  whitebg: {
    width: " 100%",
    // height: "2290px",
    background: "#FFFFFF",
    marginTop:"100px",
    // borderTop:"1px solid red"
  },
  // top section start here
  topsection: {
    height: "400px",
    backgroundColor:"#EEF9F3",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      height: "370px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "410px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "360px",
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

  // d end here
    // d end here
  
    // acsubservicescardssection start here
    ACsubservicescardsection: {
      width: "80%",
      display: "flex",
      margin: "auto",
  
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
    },
    acmaincardbox: {
      width: "43%",
  
      //  border:"1px solid black"
      [theme.breakpoints.down("md")]: {
        width: "45%",
      },
  
      [theme.breakpoints.down("sm")]: {
        width: "99%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "99%",
  
        // border:"1px solid brown"
        // flexDirection:"column"
      },
    },
    acmaincard: {
      width: "100%",
      //    border:"none",
      boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
      display: "flex",
      flexDirection: "column",
  
      height: "350px",
  
      paddingTop: "80px",
      paddingBottom: "40px",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "60px",
        paddingBottom: "30px",
        // border:"1px solid blue",
      },
      [theme.breakpoints.down("xs")]: {
        // border:"1px solid red",
        paddingTop: "60px",
        paddingBottom: "30px",
      },
      "& h6": {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "Bold",
        fontSize: "24px",
        lineHeight: "25px",
        display: "flex",
        marginLeft: "35px",
        alignItems: "center",
        textAlign: "center",
        marginTop: "22px",
        [theme.breakpoints.down("md")]: { marginLeft: "10px" },
  
        [theme.breakpoints.down("sm")]: {
          marginTop: "30px",
          alignSelf: "center",
        },
        [theme.breakpoints.down("xs")]: {},
      },
    },
    acmaincardsmallimgbox: {
      display: "flex",
      justifyContent: "left",
      width: "90px",
      height: "63px",
      marginLeft: "35px",
      [theme.breakpoints.down("md")]: {},
  
      [theme.breakpoints.down("sm")]: {
        marginLeft: "30px",
        width: "100px",
        height: "70px",
        display: "flex",
        alignSelf: "center",
        marginLeft: "0px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90px",
        height: "60px",
      },
    },
  
    acmaincarddescription: {
      display: "flex",
      marginTop: "34px",
      marginLeft: "35px",
      [theme.breakpoints.down("md")]: { marginLeft: "10px" },
  
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        alignSelf: "center",
        marginLeft: "0",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "34px",
      },
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
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
  
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginTop: "10px",
        // border:"1px solid blue"
        // flexDirection:"column"
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginTop: "10px",
      },
    },
    acsubcard: {
      width: "320px",
      height: "90px",
      background: "#ffffff",
      display: "flex",
      justifyContent: "space-evenly",
      // flexDirection: "row",
      // boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
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
        // color:"gray",
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
      marginTop: "115px",
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
      marginTop: "115px",
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
  
   
  acgeneralservice: {
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "137px",
    padding: "32px 52px",
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
      fontSize: "45px",
      lineHeight: "60px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
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
      marginTop: "11px",
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "35px",
      [theme.breakpoints.down("md")]: {
        marginTop: "8px",
        lineHeight: "30px",
      },
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
        lineHeight: "26px",
      },
    },
  },
  Despenserfixingservice: {
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
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
      fontSize: "45px",
      lineHeight: "60px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
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
      marginTop: "11px",
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "35px",
      [theme.breakpoints.down("md")]: {
        marginTop: "8px",
        lineHeight: "30px",
      },
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
        lineHeight: "26px",
      },
    },
  },
  ACrepairingservice: {
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
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
      fontSize: "45px",
      lineHeight: "60px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
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
      marginTop: "11px",
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "35px",
      [theme.breakpoints.down("md")]: {
        marginTop: "8px",
        lineHeight: "30px",
      },
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
        lineHeight: "26px",
      },
    },
  },
  //desiredservice start here
  
   
  }));
const Homeapprepair = () => {
    
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
    window.scrollTo(0, 380);
  };

  return (
    <>
       <Box className={classes.whitebg}>
        <Box className={classes.topsection}>
        
          <Typography variant="h5">We provide Good home applliances repair services</Typography>
          <Typography variant="h4">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          </Typography>
        </Box>

        {/* subservices section section start here */}
        <Box className={classes.ACsubservicescardsection}>
          
          <Box className={classes.acsubcardsbox}>
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
             <Typography variant="h6">
                <NavLink
                  to="/datetime"
                  style={{ color: "#000000", textDecoration: "none" }}
                  exact
                >
                 Cooking Range Repairing

                </NavLink>
              </Typography>
             <Typography variant="h5" >starting from: Rs 2000</Typography>
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
             <Typography variant="h6">
             <NavLink
                  to="/datetime"
                  style={{ color: "#000000", textDecoration: "none" }}
                  exact
                >
                 Refrigerator Repairing

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

              <Typography variant="h6">
              <NavLink
                  to="/datetime"
                  style={{ color: "#000000", textDecoration: "none" }}
                  exact
                >
                 Washing Machine & Dryer Repairing

                </NavLink>
              </Typography>
              <Typography variant="h5">starting from: Rs 1500</Typography>
              </Box>
            </Card>
            {/* <Card variant="outlined" className={classes.acsubcard}>
              <Box className={classes.acsubcardimgbox}>
                <img
                  src={homeappliancesgreen}
                  alt="homeappliancesgreen pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box className={classes.acsubcardtypographes}>

              <Typography variant="h6">home appliances</Typography>
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

              <Typography variant="h6">AC General Service</Typography>
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

              <Typography variant="h6">AC General Service</Typography>
              <Typography variant='h5'>starting from: Rs 1500</Typography>
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

              <Typography variant="h6">AC General Service</Typography>
              <Typography variant="h5">starting from: Rs 1800</Typography>
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

              <Typography variant="h6">AC General Service</Typography>
              <Typography variant="h5">starting from: Rs 2500</Typography>
              </Box>
            </Card> */}
          </Box>
        </Box>
        {/* subservices section end here */}

        {/* demo1 start here */}
        <Box className={classes.demo1}>
          <Box className={classes.demo1description}>
            <Typography variant="h6">
              Find your desird service at your doorstep
            </Typography>
            <Typography variant="h5">
            All types of home appliances like Refrigerators, Washing machines, vacuum cleaners, Ovens, burners, cooking range etc can be repaired by our relevant professionals at your doorstep, So your worries are over. Select a day and time which suits you and we will be there to serve.
            </Typography>
          </Box>
          <CardActionArea className={classes.demo1imgbox}>
            <img src={homeappliancepic1} alt="homeappliancepic1" width="100%" height="100%" style={{borderRadius:"10px"}}/>
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
            <img src={homeappliancepic2} alt="homeappliancepic2" width="100%" height="100%" style={{borderRadius:"10px"}}/>
          </CardActionArea>
          <Box className={classes.demo2description}>
            <Typography variant="h6">
              Find your desird service at your doorstep
            </Typography>
            <Typography variant="h5">
            All types of home appliances like Refrigerators, Washing machines, vacuum cleaners, Ovens, burners, cooking range etc can be repaired by our relevant professionals at your doorstep, So your worries are over. Select a day and time which suits you and we will be there to serve.
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

        <Paper className={classes.acgeneralservice}>
          <Typography variant="h6">AC General Service</Typography>
          <Typography variant="h5">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesetting
          </Typography>
        </Paper>
        <Paper className={classes.Despenserfixingservice}>
          <Typography variant="h6">Dispenser Fixing</Typography>
          <Typography variant="h5">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesetting
          </Typography>
        </Paper>
        <Paper className={classes.ACrepairingservice}>
          <Typography variant="h6">AC Repairing</Typography>
          <Typography variant="h5">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesettingLorem Ipsum is simply dummy text of the printing and
            typesetting
          </Typography>
        </Paper>
         
         <Desiredservicecom/>
         <Footersec/>
      </Box>
    </>
  );
}

export default Homeapprepair;
