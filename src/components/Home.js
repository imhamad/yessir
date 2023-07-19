import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
// bjsdjksjak//




// sdjsjjfklsjdk
import OwlCarousel from "react-owl-carousel";
import {
  Typography,
  Box,
  Button,
  AppBar,
  Toolbar,
  InputBase,
  Card,
  CardActionArea,
  
 
} from "@material-ui/core";

import Desiredservicecom from "./Desiredservicecom";
import Footersec from "./Footersec";


//drawer icons start
import MenuIcon from "@material-ui/icons/Menu";

import SearchIcon from "@material-ui/icons/Search";


// logo pic
// all pics
import frontimg1 from "../assets/frontimg1.png";

import teacher from "../assets/teacher.svg";
import teacherred from "../assets/teacherred.svg";
import teachergreen from "../assets/teachergreen.svg";

import handyman from "../assets/handymans.svg";
import handymanred from "../assets/handymansred.svg";
import handymangreen from "../assets/handymansgreen.svg";

import plumber from "../assets/plumber.svg";
import plumberred from "../assets/plumberred.svg";
import plumbergreen from "../assets/plumbergreen.svg";

import car from "../assets/car.svg";
import carred from "../assets/carred.svg";
import cargreen from "../assets/cargreen.svg";

import household from "../assets/household.svg";
import householdred from "../assets/householdred.svg";
import householdgreen from "../assets/householdgreen.svg";

import aircondition from "../assets/aircondition.svg";
import airconditionred from "../assets/airconditionred.svg";
import airconditiongreen from "../assets/airconditiongreen.svg";

import electricalappliances from "../assets/electricalappliances.svg";
import electricalappliancesred from "../assets/electricalappliancesred.svg";
import electricalappliancesgreen from "../assets/electricalappliancesgreen.svg";

import painter from "../assets/painter.svg";
import painterred from "../assets/painterred.svg";
import paintergreen from "../assets/paintergreen.svg";

import homeappliances from "../assets/homeappliances.svg";
import homeappliancesred from "../assets/homeappliancesred.svg";
import homeappliancesgreen from "../assets/homeappliancesgreen.svg";

import carpenter from "../assets/carpenter.svg";
import carpenterred from "../assets/carpenterred.svg";
import carpentergreen from "../assets/carpentergreen.svg";

//commited section images
import commitedimg from "../assets/commitedimg.png";
// import state from '../assets/state.svg';
import statep from "../assets/statep.png";
//trendingservices images
import plumbingpic1 from "../assets/plumbingpic1.jpg";
import carpenterpic2 from "../assets/carpenterpic2.jpg";
import carpic2 from "../assets/carpic2.jpg";

import cartrendingservice from "../assets/cartrendingservice.png";
import trendingserviceimg from "../assets/trendingserviceimg.png";
//   small icons pic of sliding card
import star from "../assets/star.png";
import clock from "../assets/clock.png";
import hand from "../assets/hand.png";

// footer icons


const UseStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    // height: "2285px",
    marginTop:"100px",
    // background: "red",
    // borderTop:"1px solid white"
  },
  frontsection: {
    width: "100%",
    height: "646px",
    display: "flex",
    // borderTop:"2px solid black",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      height: "auto",
    },
  },
  frontleftsec: {
    backgroundColor:"#EEF9F3",
    width: "48%",
    height: "600px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height:"auto"
    },
    [theme.breakpoints.down("xs")]: {
     
    },
  },
  searchbar: {
    position: "relative",
    // top:"50px",

    backgroundColor: "rgb(255, 255, 255)",
    color: "black",
    //  flexGrow: 1,

    // backgroundColor:theme.palette.red,
    zIndex: 1000,
    width: "112%",
    marginLeft: "90px",
    marginTop: "35px",
    background: "#FFFFFF",
    borderRadius: "4px",
    boxShadow: "3px 2px 24px 1px rgba(0, 0, 0, 0.05)",
    display:"flex",alignItems:"center",
    [theme.breakpoints.down("md")]: {
      marginTop: "30px",
      height: "55px",
      width: "115%",
      display: "flex",
      // justifyContent: "space-between",
      // justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "67%",
      marginLeft:"110px",
      height:"45px"
     
    },
    [theme.breakpoints.down("xs")]: {
      width: "76%",
      marginLeft:"70px",
      height:"40px"
     
    },
  },

  citymenu: {
    width: "250px",
    color:"rgb(167, 167, 167)",border:"none",
    fontSize:"15px",outline:"none",padding:"4px ",
    [theme.breakpoints.down("md")]: {
      // border: "1px solid red",

      width: "220px",
    },
    [theme.breakpoints.down("sm")]: {
      // border: "1px solid blue",
      width:"150px",
    },
    [theme.breakpoints.down("xs")]: {
      // border: "1px solid orange",
      width:"120px",
    },
    
  },
  search: {
    width: "60%",
    position: "relative",
    //  border: "1px solid rgba(191, 191, 191, .7)",
    backgroundColor: "#ffffff",
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginLeft: 0,

    "&:hover": {
      //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignSelf: "center",
    },

    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    //  padding: theme.spacing(0, 2),
    height: "100%",

    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "lightGray",
    [theme.breakpoints.down("md")]: {
      // height:"95%"
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    //  padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "20ch",
    "&:focus": {
      width: "30ch",
    },
    [theme.breakpoints.down("md")]: {
      width: "16ch",
      "&:focus": {
        width: "20ch",
      },
    },
    // [theme.breakpoints.up('sm')]: {
    //    width: '18ch',
    //    '&:focus': {
    //      width: '23ch',
    //    },
    //  },
    [theme.breakpoints.down('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '14ch',
      },
    },
    [theme.breakpoints.down('xs')]: {
      width: '10ch',
      '&:focus': {
        width: '14ch',
      },
    },
  },
  searchbarbtn: {
    width: "18%",
    background:"#165834",
    color: "rgba(255, 255, 255, 1)",
    textTransform:"capitalize",
    "&:hover": {
      background:"#165834",
    },
    [theme.breakpoints.down("md")]: {
      width: "18%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "16%",
      height:"30px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "16%",
      height:"25px",
      background:"#165834",
      color:"#ffffff",
      "&:hover": {
        backgroundColor: "#165834",
      },

    },
  },

  
  doorstep: {
    width: "72%",
    margin: "auto",
    marginTop: "130px",
    [theme.breakpoints.down("md")]: {
      width: "76%",
    },
    [theme.breakpoints.down("sm")]: {
     marginTop:"65px",
     width:"80%"
    },
    "& h6": {
      color:"#000000",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontStyle: "bold",
      fontSize: "48px",
      textAlign: "Left",
      lineHeight: "60px",
      lineHeight: "93%",
      [theme.breakpoints.down("md")]: {
        fontSize: "44px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "38px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "36px",
        
      },
    },
  },
  confirmation: {
    margin: "auto",
    width: "72%",
    marginTop: "17px",
    [theme.breakpoints.down("md")]: {
      width: "76%",
      marginTop: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      
    },
    "& h6": {
      color:"#000000",
      fontFamily: "Roboto",
      fontWeight: "Bold",
      fontSize: "18px",
      textAlign: "Left",
      lineHeight: "25px",
      lineHeight: "119%",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("xs")]:{
       
      }
    },
  },
  popularsearches: {
    margin: "auto",
    width: "72%",
    marginTop: "24px",
    [theme.breakpoints.down("md")]: {
      width: "76%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom:"80px",
      width:"80%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom:"60px"
    },
    "& h6": {
      color:"#165834",
      fontFamily: "Roboto",
      display: "flex",
      fontSize: "16px",
      textAlign: "Left",
      lineHeight: "25px",
      lineHeight: "119%",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
    },
    "& h5": {
      color:"#165834",
      fontFamily: "Roboto",
      marginLeft: "1px",
      fontSize: "16px",
      textAlign: "Left",
      lineHeight: "25px",
      lineHeight: "119%",
      textDecoration: "underline",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
    },
  },

  frontrightsec: {
    // border: "2px solid rgb(0,0,0)",
    width: "52%",
    height: "646px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  
  
  mainimage: {
    width: "100%",
    height: "585px",
    [theme.breakpoints.down("sm")]: {
      height: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
      height: "0",
    },
  },
  dot: {
    
    position: "absolute",
    width: "176px",
    //  height:'190px',
    color: "orange",
    // backgroundColor:"black",
    lineHeight: "0",
    zIndex: 1101,
   marginTop:"18px",
    left: "2%",
    top:"-10%",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  dotchild: {
    backgroundColor:"#A3BD9A",
    height: "5px",
    width: "5px",
    borderRadius: "50%",
    display: "flex",
    lineHeight: "0px",
    justifyContent: "center",
    marginLeft: "7px",
    marginTop: "7px",
  },
  // top main Selection(slider) end here
  // services section start here

  servicescontainer: {
    // border:"1px solid red",
    marginTop:"112px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "70px",
      // border: "1px solid blue",
    },
  },
  ourcategories: {
    width: "60%",
    display: "flex",
    
    margin: "auto",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {marginTop:"35px"},
    //  backgroundColor:"blue"
    "& h6": {
      fontFamily: "Roboto",
      fontWeight: "Bold",
      fontSize: "45px",
      lineHeight: "60px",
      textAlign: "center",
      color:"#000000",
      [theme.breakpoints.down("md")]: {
        fontSize: "40px",
        lineHeight: "40px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "35px",
        lineHeight: "30px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "28px",
        lineHeight: "25px",
       
      },
    },
    "& h5": {
      display: "flex",
      justifyContent: "center",
      fontSize: "20px",
      fontStyle: "normal",
      fontFamily: "Roboto",
      textAlign: "center",
      lineHeight: "30px",
      color:"#848484",
      marginTop:"10px",
      // background:"pink",
      [theme.breakpoints.down("md")]: {
        fontSize: "19px",
        lineHeight: "25px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
        lineHeight: "20px",
        marginBottom: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "17px",
        lineHeight: "20px",
        marginTop: "9px",
        marginBottom: "13px",
        textAlign: "justify",
       
      },
    },
  },
  services: {
    width: "86%",
    margin: "auto",
    marginTop: "30px",

    display: "flex",
    flexWrap: "Wrap",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      marginTop: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "25px",
    },
    [theme.breakpoints.down("xs")]: {},
  },
  serviceschild: {
    width: "196px",
    height: "215px",
    backgroundColor: "rgb(249, 249, 249)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

    alignItems: "center",
    marginTop: "5px",
    marginLeft: "5px",
    position: "relative",
    opacity: 1,

    "&:hover": {
      opacity: 1,
      "& h4": {
        opacity: 0,
      },
      // '& img':{
      //    display:"none"
      // }
    },
  },
  serviceschildhover: {
    position: "absolute",
    top: "0%",
    width: "196px",
    left: "0%",
    height: "215px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    //  marginTop:"5px",
    alignItems: "center",
    opacity: 0,
    transition: "opacity .3s",
    
    "& img": {
      marginTop: "2px",
    },
    "& Button": {
      fontFamily: "Roboto",
      fontStyle: "bold",
      fontSize: "13px",
      verticalAlign: "center",
      textAlign: "center",
      marginTop: "18px",
      background:"#165834",
      color: "rgba(255, 255, 255, 1)",
      height: "40px",
      lineHeight: "20px",
      width:"130px",
     
      transition: "transform .5s",
      transform: "translateY(50px)",
      "&:hover": { color: "white", background:"#165834", },
     
    },
    "&:hover": {
      background:"#EEF9F3",
      opacity: 1,
      [theme.breakpoints.down("xs")]:{
        "&:hover":{
          // background:"#EEF9F3"
        }
      },
      "& Button": { transform: "translateY(0px)" },
    },
  },
  // serviceschildhoverbtn:{
  //   fontFamily: "Roboto",
  //     fontStyle: "bold",
  //     fontSize: "13px",
  //     verticalAlign: "center",
  //     textAlign: "center",
  //     marginTop: "19px",
  //     background:"#165834",
  //     color: "rgba(255, 255, 255, 1)",
  //     height: "40px",
  //     lineHeight: "20px",
  //     width:"130px",
     
  //     transition: "transform .5s",
  //     transform: "translateY(50px)",
  //     "&:hover": { color: "white", background:"#165834", },
  // },
  serviceschildimgbox: {
    width: "34%",
    height: "40%",
    "&:hover": {},
  },
  // serviceschildimgboxred: {
  //   width: "34%",
  //   height: "40%",
  //   "&:hover": {},
  //   [theme.breakpoints.down("xs")]:{
  //     display:"none"
  //   }
  // },
  serviceschildimgboxgreen: {
    width: "34%",
    height: "40%",
    "&:hover": {},
    // [theme.breakpoints.up("sm")]:{
    //   display:"none"
    // }
  },
  // services section end here

  // trendingservices start here
  trendingservices: {
    marginTop: "112px",
    margin: "auto",
    width: "75%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: { marginTop: "105px" },
    [theme.breakpoints.down("xs")]: {width:"85%",},
    "& h6": {
      display: "flex",
      justifyContent: "center",
      fontSize: "45px",
      fontWeight: "bold",
      fontStyle: "medium",
      lineHeight: "60px",
      fontFamily: "Roboto",
      color:"#000000",
      [theme.breakpoints.down("md")]: {
        fontSize: "40px",
        lineHeight: "40px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "35px",
        lineHeight: "30px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "28px",
        lineHeight: "25px",
       
      },
    },
    "& h5": {
      textAlign:"center",
      fontSize: "20px",
      color:"#848484",
      height: "60px",
      lineHeight: "60px",
      // border:"1px solid red",
      [theme.breakpoints.down("md")]: {
        fontSize: "19px",
        lineHeight: "43px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
        lineHeight: "42px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
        lineHeight: "20px",
        marginTop: "9px",
       
      },
    },
  },
  owlcarouselfather: {
    height: "460px",
    width: "100%",
    marginTop: "40px",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-5px",
      // border: "1px solid  red",
      height: "290px",
    },
  },
  carousel: { height: "100%", width: "100%" },
  carousell: {
    width: "100%",
    height: "460px",
    [theme.breakpoints.down("sm")]: {
      height: "360px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "290px",
    },
  },
  trendingservicesslidingcardsfather: {
    top: "9%",
    position: "absolute",
    width: "40%",
    left: "5%",
    borderRadius: "10px",
    display: "flex",
    // background: "yellow",
    flexDirection: "column",
    height: "462px",
    boxShadow:"10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    [theme.breakpoints.down("md")]:{width:"48%"},
    [theme.breakpoints.down("sm")]: {
      width: "59%",
      height: "392px",
      top: "7%",
      background:"black",
      // display:"none"
    },
    [theme.breakpoints.down("xs")]: {
      background:"white",
      display:"none",
      opacity:0
    },
  },
  trendingservicesslidingcardowlcarousel: {
    width: "100%",
    height:"462px",
    boxShadow:"10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    background:"red",
    [theme.breakpoints.down("sm")]:{
      background:"blue",
      height:"472px"
    }
  },
  trendingservicesslidingcards: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "430px",
    paddingLeft: "30px",
    paddingTop: "20px",
    paddingBottom: "10px",
    borderRadius:"4px",
    boxShadow:"10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    [theme.breakpoints.down("sm")]: {
      height: "360px",
    },
    [theme.breakpoints.down("xs")]:{
      display:"none"
    },

    "& Button": {
     
    },
  },
  trendingservicesslidingcardsbtn:{
    width: "78%",
      height: "11%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "6px 33px",
      marginTop: "22px",
      background: "#165834",
      borderRadius: "4px",
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "15px",
      lineHeight: "30px",
      marginLeft:"12px",
      color: "rgba(255, 255, 255,1)",
      // border:"4px solid red",
      '&:hover':{background: "#165834",},
      [theme.breakpoints.down("md")]: {
        marginLeft:"7px"
      },
      
      [theme.breakpoints.down("sm")]: {
        marginTop: "20px",
        lineHeight: "25px",
        fontSize: "13px",
        height: "10%",
        marginLeft:"3px"
      },
      [theme.breakpoints.down("xs")]: {
       marginLeft:0
      },
  },

  trendingservicesslidingcardssmallimgbox: {
    display: "flex",
    justifyContent: "left",
    width: "69px",
    height: "69px",
    marginLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-10px",
      height: "58px",
      width: "58px",
    },
  },
  trendingservicesslidincardvarianth1: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "Bold",
    fontSize: "24px",
    marginLeft: "13px",
    lineHeight: "25px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    marginTop: "13px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      marginLeft: "-10px",
    },
  },

  //trendingservicessslidingRating line
  trendingservicesslidingcardsRating: {
    display: "flex",
    marginTop: "24px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },

    "& h6": {
      marginLeft: "13px",
      marginTop: "4px",
      height: "25px",
      borderRadius: "50%",
      backgroundColor: "#D7E3DC",
      width: "25px",
      display: "flex",
      alignItems: "center",
      fontSize: "24px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "-13px",
      },
    },
    "& h5": {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "Bold",
      fontSize: "18px",
      lineHeight: "25px",
      display: "flex",
      alignItems: "center",
      color: "#000000",
      marginLeft: "34px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        marginLeft: "24px",
      },
    },
  },
  //trendingservicessslidingOrders line
  trendingservicesslidingcardsOrders: {
    display: "flex",
    marginTop: "10px",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
    "& h6": {
      marginLeft: "13px",
      marginTop: "4px",
      height: "25px",
      borderRadius: "50%",
      backgroundColor: "#D7E3DC",
      width: "25px",
      display: "flex",
      alignItems: "center",
      fontSize: "24px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "-13px",
      },
    },
    "& h5": {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "Bold",
      fontSize: "18px",
      lineHeight: "25px",
      display: "flex",
      alignItems: "center",
      color: "#000000",
      marginLeft: "34px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        marginLeft: "20px",
      },
    },
  },
  //trendingservicessslidingTime
  trendingservicesslidingcardsTime: {
    display: "flex",
    marginTop: "10px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
    "& h6": {
      marginLeft: "13px",
      marginTop: "4px",
      height: "25px",
      borderRadius: "50%",
      backgroundColor: "#D7E3DC",
      width: "25px",
      display: "flex",
      alignItems: "center",
      fontSize: "24px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "-13px",
      },
    },

    "& h5": {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "Bold",
      fontSize: "18px",
      lineHeight: "25px",
      display: "flex",
      alignItems: "center",
      color: "#000000",
      marginLeft: "34px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        marginLeft: "24px",
      },
    },
  },
  // trending services section end here

  // how we work section start
  howwework: {
    margin: "auto",
    width: "87%",
    marginTop: "157px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: { marginTop: "70px" },
    [theme.breakpoints.down("xs")]: {marginTop:"105px"},
    "& h6": {
      display: "flex",
      justifyContent: "center",
      fontSize: "45px",
      fontWeight: "bold",
      fontStyle: "medium",
      lineHeight: "60px",
      fontFamily: "Roboto",
      color:"#000000",
      [theme.breakpoints.down("md")]: {
        fontSize: "40px",
        lineHeight: "40px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "35px",
        lineHeight: "30px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "28px",
        lineHeight: "25px",
       
      },
    },
    "& h5": {
      display: "flex",
      justifyContent: "center",
      fontSize: "20px",
      fontStyle: "normal",
      fontFamily: "Roboto",
      textAlign: "center",
      lineHeight: "30px",
      color:"#848484",
      marginTop:"10px",
      // background:"blue",
      [theme.breakpoints.down("md")]: {
        fontSize: "19px",
        lineHeight: "25px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
        lineHeight: "20px",
        marginBottom: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "17px",
        lineHeight: "20px",
        marginTop: "9px",
        marginBottom: "13px",
        textAlign: "justify",
       
      },
    },
  },
  howweworkbox01: {
    width: "300px",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {},
    "& h6":{
        backgroundColor: "#D7E3DC",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "86px",
        height: "86px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "30px",
        lineHeight: "60px",
        [theme.breakpoints.down('xs')]:{
          backgroundColor:"#EEF9F3"
        }
    },
    "& h4": {
      lineHeight: "60px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "24px",
      display: "flex",
      alignItems: "center",
      color: "#000000",
      marginTop: "10px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
        lineHeight: "50px",
        color: "rgb(131, 227, 252)",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
        lineHeight: "50px",
        color:"#165834",
      },
    },
    "& h3": {
      lineHeight: "30px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      color: "#535353",
      [theme.breakpoints.down("sm")]: {
        lineHeight: "28px",
        color: "gray",
      },
      [theme.breakpoints.down("xs")]: {
        lineHeight: "25px",
       color:"#848484"
      },
    },
  },
  howweworkbox02: {
    width: "300px",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {},
    "& h6":{
     
        backgroundColor: "#E3DDD7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "86px",
        height: "86px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "30px",
        lineHeight: "60px",
        [theme.breakpoints.down('xs')]:{
          backgroundColor:"#EEF9F3"
        }
      
    },
    "& h4": {
      lineHeight: "60px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "24px",
      display: "flex",
      alignItems: "center",
      color: "#000000",
      marginTop: "10px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
        lineHeight: "50px",
        color: "rgb(131, 227, 252)",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
        lineHeight: "50px",
        color:"#165834",
      },
    },
    "& h3": {
      lineHeight: "30px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      color: "#535353",
      [theme.breakpoints.down("sm")]: {
        lineHeight: "28px",
        color: "gray",
      },
      [theme.breakpoints.down("xs")]: {
        lineHeight: "25px",
        color:"#848484"
      },
    },
  },
  howweworkbox03: {
    width: "300px",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {},
    "& h6":{
     
        backgroundColor: "#D8D7E3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "86px",
        height: "86px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "30px",
        lineHeight: "60px",
        [theme.breakpoints.down('xs')]:{
          backgroundColor:"#EEF9F3"
        }
    },
    "& h4": {
      lineHeight: "60px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "24px",
      display: "flex",
      alignItems: "center",
      color: "#000000",
      marginTop: "10px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
        lineHeight: "50px",
        color: "rgb(131, 227, 252)",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
        lineHeight: "50px",
        color:"#165834",
      },
    },
    "& h3": {
      lineHeight: "30px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      color: "#535353",
      [theme.breakpoints.down("sm")]: {
        lineHeight: "28px",
        color: "gray",
      },
      [theme.breakpoints.down("xs")]: {
        lineHeight: "25px",
        color:"#848484"
      },
    },
  },
   // how we work section end here

   // happy customers section start here
  happycustomer: {
    width: "100%",
    background: "#EEF9F3",

    marginTop: "110px",
    "& h6": {
      display: "flex",
      justifyContent: "center",
      fontSize: "45px",
      paddingTop: "57px",
      fontWeight: "bold",
      fontStyle: "medium",
      lineHeight: "50px",
      fontFamily: "Roboto",
      color: "#000000",
      [theme.breakpoints.down("md")]: {
        fontSize: "40px",
        lineHeight: "40px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "35px",
        lineHeight: "30px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "28px",
        lineHeight: "25px",
        color:"#165834",

      },
    },
    "& h5": {
      textAlign: "center",
      fontSize: "20px",
      color: "#18191F",
      height: "60px",
      lineHeight: "60px",
      [theme.breakpoints.down("md")]: {
        fontSize: "19px",
        lineHeight: "43px",
        marginBottom: "-25px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
        lineHeight: "42px",
        marginBottom: "-35px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
        lineHeight: "20px",
        marginTop: "9px",
        marginBottom: "-55px",
        color:"#848484"
      },
    },
  },
 
  happycustomerowlcarouselfather: {
    width: "100%",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
  happycustomercardbox: {
    marginTop: "62px",
    paddingBottom: "72px",

    display: "flex",
    justifyContent: "center",
    width: "95%",
    margin: "auto",
    //   flexWrap:"wrap",
    //   background:"yellow",
  },
  happycustomercard: {
    // background:"black",
    // width:'350px',
    marginLeft: "25px",
    marginRight: "25px",

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& Button":{
        width: "73%",
        height: "28px",
        fontSize: "18px",
        display: "flex",
        Xconstraint: "Scale",
        Yconstraint: "0.5",
        alignSelf: "center",
        lineHeight: "28px",
        fontWeight: "bold",
        fontStyle: "normal",
        fontFamily: "Roboto",
        marginTop: "75px",
        marginBottom: "23px",
        "&:hover":{
          backgroundColor:"#EEF9F3",
        }
    }
  },
  happycustomercardchild: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "20px",
    position: "relative",
    background: "#ffffff",
    "& h4": {
      lineHeight: "24px",
      fontSize: "24px",
      marginTop: "40px",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontStyle: "normal",
      color: "#18191F",
      width: "77%",
      alignSelf: "center",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
        lineHeight: "26px",
        color: "rgb(131, 227, 252)",
        marginTop: "30px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
        lineHeight: "50px",
        color:"#165834",
      },
    },
    "& h3": {
      display: "flex",
      alignSelf: "center",
      lineHeight: "24px",
      fontSize: "14px",
      marginTop: "16px",
      fontFamily: "Roboto",
      fontWeight: "normal",
      fontStyle: "normal",
      color: "#18191F",
      textAlign: "center",
      width: "77%",
      [theme.breakpoints.down("sm")]: {
        lineHeight: "22px",
        marginTop: "15px",
        color: "gray",
        marginBottom: "20px",
      },
      [theme.breakpoints.down("xs")]: {
        lineHeight: "22px",
        marginTop: "2px",
       color:"#848484"
      },
    },
  },
  // happy customers section end here

  //  state section start here
  state: {
    position: "relative",
  },
  stateimg: {
    height: "250px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "220px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "160px",
    },
  },
  statecounterbox: {
    width: "100%",
    position: "absolute",
    top: "39%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  statecounterboxchild: {
    display: "flex",
    flexDirection: "column",
    "& h5": {
      lineHeight: "26px",
      fontWeight: "bold",
      height: "26px",
      fontSize: "45px",
      fontFamily: "Roboto",
      color: "#ffffff",
      fontStyle: "normal",
      [theme.breakpoints.down("sm")]: {
        fontSize: "35px",
        display: "flex",
        justifyContent: "center",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "22px",
        display: "flex",
        justifyContent: "center",
       
      },
    },
    "& h6": {
      lineHeight: "26px",
      fontWeight: "normal",
      fontSize: "20px",
      fontFamily: "Roboto",
      color: "#ffffff",
      height: "26px",
      marginTop: "14px",
      fontStyle: "normal",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        marginTop: "8px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
        lineHeight: "4px",
      
      },
    },
  },
  // state section end here

  //commited to help section start here
  commitedtohelp: {
    margin: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "111px",
    marginBottom: "82px",
    background: "#ffffff",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      marginTop: "70px",
      marginBottom: "62px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "70px",
      marginBottom: "62px",
    },
  },
  commiteddotbox: {
    position: "absolute",
    left: "53%",
    top: "65%",
    width: "176px",
    display: "flex",
    flexWrap: "wrap",
    lineHeight: "0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  commiteddots: {
    backgroundColor:"#A3BD9A",
    color: "rgba(255, 129, 73, 1)",
    height: "5px",
    width: "5px",
    borderRadius: "50%",
    display: "flex",
    lineHeight: "0px",
    justifyContent: "center",
    marginLeft: "9px",
    marginTop: "9px",
  },
  commitedtohelprightsec: {
    width: "53%",
    display: "flex",
    flexDirection: "column",
    "& h5": {
      display: "flex",
      justifyContent: "center",
      fontSize: "45px",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "60px",
      fontFamily: "Roboto",
      color: "#000000",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "35px",
        textAlign: "center",
        lineHeight: "40px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "27px",
        lineHeight: "30px",
        
      },
    },
    "& h6": {
      display: "flex",
      justifyContent: "center",
      fontSize: "20px",
      marginTop: "24px",
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: "35px",
      fontFamily: "Roboto",
      color: "#535353",
     [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        marginTop: "14px",
        textAlign:"justify",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
        marginTop: "10px",
        lineHeight: "25px",
        color:"#848484",
       
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignSelf: "center",
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {},
  },
  commetedtohelpbtntypo: {
    display: "flex",
    // border:"1px solid red",
    // justifyContent: "center",
    marginTop: "34px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      marginTop: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
      marginBottom:5
    },
   },
   commitedsecaboutbtn:{
   
      fontSize: "20px",
      width: "32%",
      height: "55px",
      background:"#165834",
      padding: "6px 33px",
      lineHeight: "28px",
      fontWeight: "bold",
      fontStyle: "normal",
      fontFamily: "Helvetica",
      color: "rgba(255, 255, 255, 1)",
      textTransform:"lowercase",
      "&:hover": { background:"#165834", },
      [theme.breakpoints.down("sm")]: {
        height: "30px",
        fontSize: "18px",
        width: "35%",
      },
      [theme.breakpoints.down("xs")]: {
        height: "25px",
        fontSize: "12px",
        lineHeight: "8px",
        padding:"0px",
        
        color:"#ffffff"
      },
    
   },
  commitedseccontactbtn:{
    height: "30px",
    fontSize: "20px",
    width: "32%",
    background: "#ffffff",
    lineHeight: "30px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontFamily: "Helvetica",
    color: "black",
    display:"flex",
    justifyContent:"flex-start",
    marginLeft:"30px",
    textTransform:"lowercase",
      borderRadius:"4px",
      "&:hover":{background:"#ffffff"},
    [theme.breakpoints.down("sm")]: {
      width: "35%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "25px",
      fontSize: "12px",
      lineHeight: "18px",
      color:"#165834",
    },
  },
  commitedsecimgbox: {
    width: "38%",
    height: "450px",
    // background:"lightgreen",
    borderRadius: "28px",

    // boxShadow:"0px 0px 5px 9px rgba(210, 210, 210, 0.3)",
    boxShadow: "0px 0px 55px 9px rgba(181, 244, 210, 0.3)",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      display: "flex",
      alignSelf: "center",
      marginTop: "40px",
      height: "350px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px",
      height: "290px",
    },
    "&:hover": {},
  },

  // commited to help section end here

  
  //footer section start here
 
  // footer section end here
 

}));

const Home = () => {
  const classes = UseStyles();
  const options = {
    items: "3",

    loop: true,
    autoplaySpeed: 350,
    smartSpeed: 1000,
    slideBy: 1,
    autoplayTimeout: 5000,
    fluidSpeed: 0,
    responsiveClass: true,
    // nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    // navText: ["<", ">"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      700: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  
  // dialog1 end here


 
  
// handles related to dialogbox login with passoword started here
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
 
 
  // handles related to dialogbox login with passoword ended here
  const scrolltotop=() =>{
    window.scrollTo(0, 0);
  };
 
      
     
  //     const onbutton = (mode)=> {
  //       setSelectedMode(mode)
  // }

      
  return (
    
      <Box className={classes.container}>
      
      <Box className={classes.frontsection}>
          <Box className={classes.frontleftsec}>
            
            <Box className={classes.doorstep}>
              <Typography variant="h6">
                Find home solutions at your doorstep!
              </Typography>
            </Box>
            <Box className={classes.confirmation}>
              <Typography variant="h6">
                Search a service you need now & we will call you for
                confirmation
              </Typography>
            </Box>

            <Box className={classes.searchbar}>
              <Toolbar
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 10px",width:"100%"
                }}
              >
               <div className={classes.search}>
                  {/* <div className={classes.searchIcon}>
                    <RoomOutlinedIcon />
                  </div>
                  <InputBase
                    placeholder="Search locat..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  /> */}
                  <select className={classes.citymenu}>
                      <option>Peshawar</option>
                      <option>Lahore</option>
                      <option>Islamabad</option>
                      <option>Karachi</option>
                  </select>
                </div>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search servi..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
               

                <Button className={classes.searchbarbtn} 
                    // component={Link}
                  //  to="/userpanel1"
                    // exact
                    activeStyle={{
                      fontWeight: "bold",
                      // textDecoration: "none",
                     
                    }}
                    style={{ textDecoration: "none",  color: "white",}}>
              
                Search</Button>
              </Toolbar>
            </Box>
            <Box className={classes.popularsearches}>
              <Typography variant="h6">
                Popular searches: <Typography variant="h5">AC fix</Typography>
                <Typography variant="h5"> , Car fix</Typography>
                <Typography variant="h5"> ,Greezer issue</Typography>
              </Typography>
            </Box>
          </Box>

          {/* //  orangebg section end here */}

          {/* image and buttons section start from here */}

          <Box className={classes.frontrightsec}>
           

            <Box className={classes.mainimage}>
              <img src={frontimg1} alt="front img" width="100%" height="100%" />
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
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
              <div className={classes.dotchild}></div>
              <div className={classes.dotchild}></div>{" "}
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
        </Box>
        {/* services section start here */}
        <Box className={classes.servicescontainer}>
          <Box className={classes.ourcategories}>
            <Typography variant="h6">Explore our Services</Typography>
            <Typography variant="h5">
            This sections offers our range of services. Click on the desired service to know more about the service provider(s), types of service(s), service duration and our charges
            </Typography>
          </Box>
          <Box className={classes.services}>
            {/* techer section start here */}
            <Card variant="outlined" className={classes.serviceschild}>
              <Box className={classes.serviceschildimgbox}>
                <img
                  src={teacher}
                  alt="teacher pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "bold",
                  fontSize: "18px",
                  verticalAlign: "center",
                  textAlign: "center",
                  marginTop: "30px",
                }}
                variant="h4"
              >
                teacher
              </Typography>
              <Box className={classes.serviceschildhover}>
                {/* <Box className={classes.serviceschildimgboxred}>
                  <img
                    src={teacherred}
                    alt="teacherred pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box> */}
                <Box className={classes.serviceschildimgboxgreen}>
                  <img
                    src={teachergreen}
                    alt="teachergreen pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box>
                <NavLink
                    to="/teachersubcategray"
                    exact
                    style={{ color: "white", textDecoration: "none" }}
                  >
                <Button onClick={scrolltotop}>
                 
                    Book now
                  
                </Button>
                </NavLink>
              </Box>
            </Card>
            {/* teacher section end here */}
            {/* air condition box start */}
            <Card variant="outlined" className={classes.serviceschild}>
              <Box className={classes.serviceschildimgbox}>
                <img
                  src={aircondition}
                  alt="aircondition pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "bold",
                  fontSize: "18px",
                  verticalAlign: "center",
                  textAlign: "center",
                  marginTop: "30px",
                }}
                variant="h4"
              >
                Air Condition
              </Typography>
              <Box className={classes.serviceschildhover}>
                {/* <Box className={classes.serviceschildimgboxred}>
                  <img
                    src={airconditionred}
                    alt="airconditionred pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box> */}
                <Box className={classes.serviceschildimgboxgreen}>
                  <img
                    src={airconditiongreen}
                    alt="airconditiongreen pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box>
                <NavLink
                    to="/acsubcategray"
                    exact
                    style={{ color: "#ffffff", textDecoration: "none" }}
                  >
                <Button onClick={scrolltotop}>
                   Book now
               
                </Button>
                </NavLink>
              </Box>
            </Card>

            {/* air condition section box end */}

            {/* home appliances repair box start */}
            <Card variant="outlined" className={classes.serviceschild}>
              <Box className={classes.serviceschildimgbox}>
                <img
                  src={homeappliances}
                  alt="homeappliances pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "bold",
                  fontSize: "18px",
                  verticalAlign: "center",
                  textAlign: "center",
                  marginTop: "30px",
                }}
                variant="h4"
              >
                Home Appliances Repair
              </Typography>
              <Box className={classes.serviceschildhover}>
                {/* <Box className={classes.serviceschildimgboxred}>
                  <img
                    src={homeappliancesred}
                    alt="homeappliancesred pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box> */}
                <Box className={classes.serviceschildimgboxgreen}>
                  <img
                    src={homeappliancesgreen}
                    alt="homeappliancesgreen pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box>
                <NavLink
                    to="/homeapprepair"
                    style={{ color: "white", textDecoration: "none" }}
                    exact
                  >
                <Button onClick={scrolltotop}>
                 Book now
                  </Button>
                </NavLink>
              </Box>
            </Card>
            {/* home Appliances repair box end */}

            {/* car box start */}
            <Card variant="outlined" className={classes.serviceschild}>
              <Box className={classes.serviceschildimgbox}>
                <img src={car} alt="car pic" width="100%" height="100%" />
              </Box>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "bold",
                  fontSize: "18px",
                  verticalAlign: "center",
                  textAlign: "center",
                  marginTop: "30px",
                  "&:hover": {},
                }}
                variant="h4"
              >
                Vehicle Services
              </Typography>
              <Box className={classes.serviceschildhover}>
               
                {/* <Box className={classes.serviceschildimgboxred}>
                  <img
                    src={carred}
                    alt="carred pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box> */}
                
                
               <Box className={classes.serviceschildimgboxgreen}>
                  <img
                    src={cargreen}
                    alt="cargreen pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box>
               
               
                  <NavLink
                    to="/carsubcategray"
                    style={{ color: "white", textDecoration: "none" }}
                    exact>
                   <Button onClick={scrolltotop}>
                    Book now
                    </Button>
                  </NavLink>
                </Box>
            </Card>
            {/* car box end */}

            {/* plumber box start */}
            <Card variant="outlined" className={classes.serviceschild}>
              <Box className={classes.serviceschildimgbox}>
                <img
                  src={plumber}
                  alt="plumber pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "bold",
                  fontSize: "18px",
                  verticalAlign: "center",
                  textAlign: "center",
                  marginTop: "30px",
                }}
                variant="h4"
              >
                Plumber Services
              </Typography>
              <Box className={classes.serviceschildhover}>
                {/* <Box className={classes.serviceschildimgboxred}>
                  <img
                    src={plumberred}
                    alt="plumberred pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box> */}
                <Box className={classes.serviceschildimgboxgreen}>
                  <img
                    src={plumbergreen}
                    alt="plumbergreen pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box>
                  <NavLink
                    to="/plumbersubcategray"
                    style={{ color: "white", textDecoration: "none" }}
                    exact
                  >
                     <Button onClick={scrolltotop}>
                    Book now
                    </Button>
                  </NavLink>
                
              </Box>
            </Card>
            {/* plumber box end */}

            {/* handyman box start */}
            <Card variant="outlined" className={classes.serviceschild}>
              <Box className={classes.serviceschildimgbox}>
                <img
                  src={handyman}
                  alt="handyman pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "bold",
                  fontSize: "18px",
                  verticalAlign: "center",
                  textAlign: "center",
                  marginTop: "30px",
                }}
                variant="h4"
              >
                Handyman Services
              </Typography>
              <Box className={classes.serviceschildhover}>
                {/* <Box className={classes.serviceschildimgboxred}>
                  <img
                    src={handymanred}
                    alt="handymanred pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box> */}
                <Box className={classes.serviceschildimgboxgreen}>
                  <img
                    src={handymangreen}
                    alt="handymangreen pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box>
                  <NavLink
                    to="/handymansubcategray"
                    style={{ color: "white", textDecoration: "none" }}
                    exact
                  >
                   <Button onClick={scrolltotop}>
                    Book now
                    </Button>
                  </NavLink>
              </Box>
            </Card>

            {/* handyman box end */}

            {/* electricalappliances box start */}
            <Card variant="outlined" className={classes.serviceschild}>
              <Box className={classes.serviceschildimgbox}>
                <img
                  src={electricalappliances}
                  alt="electricalappliances pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "bold",
                  fontSize: "18px",
                  verticalAlign: "center",
                  textAlign: "center",
                  marginTop: "30px",
                }}
                variant="h4"
              >
                Electrician Services
              </Typography>
              <Box className={classes.serviceschildhover}>
                {/* <Box className={classes.serviceschildimgboxred}>
                  <img
                    src={electricalappliancesred}
                    alt="electricalappliancesred pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box> */}
                <Box className={classes.serviceschildimgboxgreen}>
                  <img
                    src={electricalappliancesgreen}
                    alt="electricalappliancesgreen pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box>
                  <NavLink
                    to="/electriciansubcategray"
                    style={{ color: "white", textDecoration: "none" }}
                    exact
                  >
                    <Button onClick={scrolltotop}>
                    Book now
                    </Button>
                  </NavLink>
              </Box>
            </Card>
            {/* electricalappliances box end */}

            {/* household box start */}

            <Card variant="outlined" className={classes.serviceschild}>
              <Box className={classes.serviceschildimgbox}>
                <img
                  src={household}
                  alt="household pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "bold",
                  fontSize: "18px",
                  verticalAlign: "center",
                  textAlign: "center",
                  marginTop: "30px",
                }}
                variant="h4"
              >
                Cleaning Services
              </Typography>
              <Box className={classes.serviceschildhover}>
                {/* <Box className={classes.serviceschildimgboxred}>
                  <img
                    src={householdred}
                    alt="householdred pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box> */}
                <Box className={classes.serviceschildimgboxgreen}>
                  <img
                    src={householdgreen}
                    alt="householdgreen pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box>
                  <NavLink
                    to="/cleaningsubcategray"
                    style={{ color: "white", textDecoration: "none" }}
                    exact
                  >
                    <Button onClick={scrolltotop}>
                    Book now
                    </Button>
                  </NavLink>
              </Box>
            </Card>
            {/* household box end */}

            {/* carpenter box start */}
            <Card variant="outlined" className={classes.serviceschild}>
              <Box className={classes.serviceschildimgbox}>
                <img
                  src={carpenter}
                  alt="carpenter pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "bold",
                  fontSize: "18px",
                  verticalAlign: "center",
                  textAlign: "center",
                  marginTop: "30px",
                }}
                variant="h4"
              >
                Carpenter Services
              </Typography>
              <Box className={classes.serviceschildhover}>
                {/* <Box className={classes.serviceschildimgboxred}>
                  <img
                    src={carpenterred}
                    alt="carpenterred pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box> */}
                <Box className={classes.serviceschildimgboxgreen}>
                  <img
                    src={carpentergreen}
                    alt="carpentergreen pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box>
                  <NavLink
                    to="/carpentersubcategray"
                    style={{ color: "white", textDecoration: "none" }}
                    exact
                  >
                   <Button onClick={scrolltotop}>
                    Book now
                    </Button>
                  </NavLink>
              </Box>
            </Card>
            {/* carpenter box end */}

            {/* painter box start */}
            <Card variant="outlined" className={classes.serviceschild}>
              <Box className={classes.serviceschildimgbox}>
                <img
                  src={painter}
                  alt="painter pic"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "bold",
                  fontSize: "18px",
                  verticalAlign: "center",
                  textAlign: "center",
                  marginTop: "30px",
                }}
                variant="h4"
              >
                Painter Services
              </Typography>
              <Box className={classes.serviceschildhover}>
                {/* <Box className={classes.serviceschildimgboxred}>
                  <img
                    src={painterred}
                    alt="painterred pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box> */}
                <Box className={classes.serviceschildimgboxgreen}>
                  <img
                    src={paintergreen}
                    alt="paintergreen pic"
                    width="100%"
                    height="100%"
                   
                  />
                </Box>
    
                  <NavLink
                    to="/paintersubcategray"
                    style={{ color: "white", textDecoration: "none" }}
                    exact
                  >
                    <Button onClick={scrolltotop}>
                    Book now
                    </Button>
                  </NavLink>
               
              </Box>
            </Card>
            {/* painter box end           */}
          </Box>
        </Box>

        {/* services section end here */}

        {/* Trending services start here */}
        <Box className={classes.trendingservices}>
          <Typography variant="h6">Trending Services</Typography>
          <Typography variant="h5">
            This section show top selling services of the month & lorem upsum
          </Typography>
          <Box className={classes.owlcarouselfather}>
            <OwlCarousel
              className={classes.carousel}
              items="1"
              dots
              loop
              // autoplayHoverPause={true}
              // nav={true}
              autoplay={true}
              autoplaySpeed={2500}
              smartSpeed={8000}
              slideBy={1}
              autoplayTimeout={9000}
              // fluidSpeed={10000}?
            >
              <div className={classes.carousell}>
                <img
                  src={plumbingpic1}
                  alt="trendingservices pic"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className={classes.carousell}>
                <img
                  src={carpic2}
                  alt="carpic2"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className={classes.carousell}>
                <img
                  src={carpenterpic2}
                  alt="carpenterpic2"
                  width="100%"
                  height="100%"
                />
              </div>
            </OwlCarousel>
            {/* <Box className={classes.trendingservicesslidingcardsfather}> */}
              <OwlCarousel
                className={classes.trendingservicesslidingcardsfather}
                style={{ borderRadius: "20px" }}
                items="1"
                dots
                loop
                // autoplayHoverPause={true}
                autoplay={true}
                autoplaySpeed={2500}
                smartSpeed={8000}
                slideBy={1}
                autoplayTimeout={9000}
              >
                <Card
                  variant="outlined"
                  className={classes.trendingservicesslidingcards}
                >
                  <Box
                    className={classes.trendingservicesslidingcardssmallimgbox}
                  >
                    <img
                      src={plumbergreen}
                      alt="cardplumbergreen pic"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Typography
                    className={classes.trendingservicesslidincardvarianth1}
                  >
                    Plumber services
                  </Typography>
                  <Box className={classes.trendingservicesslidingcardsRating}>
                    <Typography variant="h6">
                      <img
                        src={star}
                        alt="star pic"
                        style={{ marginLeft: "15px" }}
                      />
                    </Typography>
                    <Typography variant="h5">4.7 Rating by Users</Typography>
                  </Box>
                  <Box className={classes.trendingservicesslidingcardsOrders}>
                    <Typography variant="h6">
                      <img
                        src={hand}
                        alt="start pic"
                        style={{ marginLeft: "15px" }}
                      />
                    </Typography>
                    <Typography variant="h5">
                      350 Orders in one month
                    </Typography>
                  </Box>
                  <Box className={classes.trendingservicesslidingcardsTime}>
                    <Typography variant="h6">
                      <img
                        src={clock}
                        alt="start pic"
                        style={{ marginLeft: "15px" }}
                      />
                    </Typography>
                    <Typography variant="h5">2 hrs Average time</Typography>
                  </Box>
                  <Button onClick={scrolltotop} className={classes.trendingservicesslidingcardsbtn}
                     component={Link}
                     to="/plumbersubcategray"
                    style={{ color: "white", textDecoration: "none" }}
                    exact
                     >
                    Book now
                 
                  </Button>
                </Card>
                <Card
                  variant="outlined"
                  className={classes.trendingservicesslidingcards}
                >
                  <Box
                    className={classes.trendingservicesslidingcardssmallimgbox}
                  >
                    <img
                      src={cargreen}
                      alt="carpic2"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Typography
                    className={classes.trendingservicesslidincardvarianth1}
                  >
                    Car services
                  </Typography>
                  <Box className={classes.trendingservicesslidingcardsRating}>
                    <Typography variant="h6">
                      <img
                        src={star}
                        alt="star pic"
                        style={{ marginLeft: "15px" }}
                      />
                    </Typography>
                    <Typography variant="h5">4.7 Rating by Users</Typography>
                  </Box>
                  <Box className={classes.trendingservicesslidingcardsOrders}>
                    <Typography variant="h6">
                      <img
                        src={hand}
                        alt="start pic"
                        style={{ marginLeft: "15px" }}
                      />
                    </Typography>
                    <Typography variant="h5">
                      350 Orders in one month
                    </Typography>
                  </Box>
                  <Box className={classes.trendingservicesslidingcardsTime}>
                    <Typography variant="h6">
                      <img
                        src={clock}
                        alt="start pic"
                        style={{ marginLeft: "15px" }}
                      />
                    </Typography>
                    <Typography variant="h5">2 hrs Average time</Typography>
                  </Box>
                  <Button onClick={scrolltotop} className={classes.trendingservicesslidingcardsbtn}
                     component={Link}
                     to="/carsubcategray"
                    style={{ color: "white", textDecoration: "none" }}
                    exact
                     >
                    Book now
                 
                  </Button>
                </Card>
                <Card
                  variant="outlined"
                  className={classes.trendingservicesslidingcards}
                >
                  <Box
                    className={classes.trendingservicesslidingcardssmallimgbox}
                  >
                    <img
                      src={carpentergreen}
                      alt="carpentergreen"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Typography
                    className={classes.trendingservicesslidincardvarianth1}
                  >
                    Carpenter services
                  </Typography>
                  <Box className={classes.trendingservicesslidingcardsRating}>
                    <Typography variant="h6">
                      <img
                        src={star}
                        alt="star pic"
                        style={{ marginLeft: "15px" }}
                      />
                    </Typography>
                    <Typography variant="h5">4.7 Rating by Users</Typography>
                  </Box>
                  <Box className={classes.trendingservicesslidingcardsOrders}>
                    <Typography variant="h6">
                      <img
                        src={hand}
                        alt="start pic"
                        style={{ marginLeft: "15px" }}
                      />
                    </Typography>
                    <Typography variant="h5">
                      350 Orders in one month
                    </Typography>
                  </Box>
                  <Box className={classes.trendingservicesslidingcardsTime}>
                    <Typography variant="h6">
                      <img
                        src={clock}
                        alt="start pic"
                        style={{ marginLeft: "15px" }}
                      />
                    </Typography>
                    <Typography variant="h5">2 hrs Average time</Typography>
                  </Box>
                  <Button onClick={scrolltotop} className={classes.trendingservicesslidingcardsbtn}
                     component={Link}
                     to="/carpentersubcategray"
                    style={{ color: "white", textDecoration: "none" }}
                    exact
                     >
                    Book now
                 
                  </Button>
                </Card>
              </OwlCarousel>
            {/* </Box> */}
          </Box>
        </Box>
        {/* trending services end here */}

        {/* How we work  section start from here*/}
        <Box className={classes.howwework}>
          <Typography variant="h6">How do we work</Typography>
          <Typography variant="h5">
          Providing quality service with customers’ ultimate satisfaction is not a simple task. We believe in professionalism and making difficult tasks easier for achieving high standard of life. Service providing with qualified and skilled workforce is our aim. We strive to provide the best available service/ facility to the community.
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <Box className={classes.howweworkbox01}>
              <Typography variant="h6"
              >
                01
              </Typography>
              <Typography variant="h4">Find your desire service</Typography>
              <Typography variant="h3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
            <Box className={classes.howweworkbox02}>
              <Typography variant="h6"
               
              >
                02
              </Typography>
              <Typography variant="h4">Find your desire service</Typography>
              <Typography variant="h3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
            <Box className={classes.howweworkbox03}>
              <Typography variant="h6"
              >
                03
              </Typography>
              <Typography variant="h4">lorem up dummy text</Typography>
              <Typography variant="h3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* how we work section end here */}

        {/* happy customers section start from here */}

        <Box className={classes.happycustomer}>
          <Typography variant="h6">Our Happy Customers</Typography>
          <Typography variant="h5">
            We have been working with people in Peshawar and expanding soon!
          </Typography>

          {/* //hkhkjk */}
          <Box className={classes.happycustomerowlcarouselfather}>
            {/* sliding cards owlcarousel start here */}
            <OwlCarousel
              className={classes.happycustomercardbox}
              {...options}
              // items="3"
              // dots
              // loop
              // nav={true}
              // autoplay={true}
              // autoplaySpeed={1500}
              // smartSpeed={6000}
              // slideBy={1}
              // autoplayTimeout={6000}
              // fluidSpeed={10000}
            >
              <Box className={classes.happycustomercard} >
                <Box className={classes.happycustomercardchild} >
                  <Typography variant="h4">They were on time</Typography>
                  <Typography variant="h3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </Typography>
                  <Box
                    style={{
                      width: "26px",
                      height: "26px",
                      background: "#ffffff",
                      display: "flex",
                      alignSelf: "center",
                      marginTop: "20px",
                      transform: "rotate(45deg)",
                      position: "absolute",
                      left: "46%",
                      top: "82%",
                      borderRight: "none",
                    }}
                  ></Box>
                </Box>

                <Button>
                  shafiq
                </Button>
              </Box>

              <Box className={classes.happycustomercard}>
                <Box className={classes.happycustomercardchild}>
                  <Typography variant="h4">They were on time</Typography>
                  <Typography variant="h3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </Typography>
                  <Box
                    style={{
                      width: "26px",
                      height: "26px",
                      background: "#ffffff",
                      display: "flex",
                      alignSelf: "center",
                      marginTop: "20px",
                      transform: "rotate(45deg)",
                      position: "absolute",
                      bottom: "0%",
                      top: "82%",
                      borderRight: "none",
                    }}
                  ></Box>
                </Box>
                <Button>
                  umair
                </Button>
              </Box>
              <Box className={classes.happycustomercard}>
                <Box className={classes.happycustomercardchild}>
                  <Typography variant="h4">They were on time</Typography>
                  <Typography variant="h3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </Typography>
                  <Box
                    style={{
                      width: "26px",
                      height: "26px",
                      background: "#ffffff",
                      display: "flex",
                      alignSelf: "center",
                      marginTop: "20px",
                      transform: "rotate(45deg)",
                      position: "absolute",
                      bottom: "0%",
                      top: "82%",
                      borderRight: "none",
                    }}
                  ></Box>
                </Box>

                <Button>
                  usman
                </Button>
              </Box>
            </OwlCarousel>
          </Box>
        </Box>

        {/* happy custoers section end here */}

        {/* state section start here */}
        <Card className={classes.state}>
          <CardActionArea className={classes.stateimg}>
            <img src={statep} alt="statep pic" width="100%" height="100%" />
          </CardActionArea>
          <Box className={classes.statecounterbox}>
            <Box className={classes.statecounterboxchild}>
              <Typography variant="h5">40+</Typography>
              <Typography variant="h6">Happy Clients</Typography>
            </Box>
            <Box className={classes.statecounterboxchild}>
              <Typography variant="h5">25+</Typography>
              <Typography variant="h6">Services on platform</Typography>
            </Box>
            <Box className={classes.statecounterboxchild}>
              <Typography variant="h5">20</Typography>
              <Typography variant="h6">Happy Clients</Typography>
            </Box>
            <Box className={classes.statecounterboxchild}>
              <Typography variant="h5">3+</Typography>
              <Typography variant="h6">Happy Clients</Typography>
            </Box>
          </Box>
        </Card>
        {/* state section end here */}

        {/* commited to help section start here */}
        <Box className={classes.commitedtohelp}>
          <Box className={classes.commitedtohelprightsec}>
            <Typography variant="h5">
              We are commited to help whenever you need us!
            </Typography>
            <Typography variant="h6">
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
            <Box className={classes.commetedtohelpbtntypo}>
              <Button className={classes.commitedsecaboutbtn}
                onClick={scrolltotop}
              component={Link}
                  to="/aboutus"
                    exact
                    style={{ textDecoration: "none",  color: "white",}}
                  >
                    About us
                 
              </Button>
              <Button className={classes.commitedseccontactbtn} onClick={scrolltotop}>
              <NavLink
                    to="/contact"
                    exact
                    activeStyle={{
                      textDecoration: "none",
                     
                    }}
                    style={{ textDecoration: "none",  color: "black",}}
                  >
                    Contact us
                  </NavLink>
              </Button>
            </Box>
          </Box>
          <CardActionArea className={classes.commitedsecimgbox}>
            <img
              src={commitedimg}
              alt="commited pic"
              style={{ width: "100%", height: "100%", borderRadius: "28px" }}
            />
          </CardActionArea>
          <Box className={classes.commiteddotbox}>
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>{" "}
            <div className={classes.commiteddots}></div>
            <div className={classes.commiteddots}></div>
          </Box>
        </Box>
        {/* commited to help section end here */}

        {/* desired service start here */}

      
        <Desiredservicecom/>
        <Footersec/>
        {/* desired service now end here */}

     

        {/* loginregister dialogbox start here */}
        {/* <div>
          <Dialog maxWidth="xl"
            //  fullScreen
            open={dialog1}
            onClose={closedialog1}
            aria-labelledby="responsive-dialog-title"
          >
         
          </Dialog>
        </div> */}
       

       
      </Box>
  
  );
};

export default Home;
