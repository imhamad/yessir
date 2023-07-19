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
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";



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
      // height:25,
      width:"97%",
      margin:"auto",
      // background:"red",
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
  // topsection end here

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
    boxShadow:"10px 8px 31px 2px rgba(238, 249, 243,1)",
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
  // demo1 end here

  // demo2 start here
  demo2: {
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
  // demo2 end here

 
  ParticipantGeneratedContent: {
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "137px",
    padding: "32px 52px",
    height:"auto",
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
      textAlign:"justify",
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
  limitedwarranty: {
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  customer: {
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  contract:{
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  services:{
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  servicesperiod:{
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  servicesfee:{
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  useragreement:{
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  roleobligatonofYessircompany:{
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  userobligations:{
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  ReturnExchangePolicy:{
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  Guarantee:{
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  CancellationPolicy:{
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  clientreponsibilities:{
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
    }
  },
  disputeresolution: {
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  Taxes: {
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  pricingerrors: {
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
  serviceperiodrenewalandcancellation: {
    width: "83%",
    // border:"1px solid black",
    background: "#FFFFFF",
    boxShadow: "10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: "39px",
    padding: "32px 52px",
    height:"auto",
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
 
}));

const Termsonditionpage = () => {
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
    }
  return (
    <>
       <Box className={classes.whitebg}>
          {/* top section start here */}
        <Box className={classes.topsection}>
          <Typography variant="h5">Terms and Conditions</Typography>
          <Typography variant="h4">
          By accessing the Platform or placing an order, you confirm that you have read and agreed to our Terms and Conditions. Please feel free to contact us in case of any confusion.
          The application/ Website is in entirely owned by YesSir and is protected by the laws regarding patents, copyrights,  trademarks and other intellectual property or proprietary rights.  You are permitted to use the service only for genuine business purposes related to your role as a current or prospective customer or employee of YesSir. You shall not copy, modify, create alternative works of publicity display or perform, republish, download, store, or transmit any Application/ Website content without the YesSir's  prior written consent. 

          </Typography>
        </Box>
          {/* top section end here */}
       

      

        <Paper className={classes.ParticipantGeneratedContent}>
          <Typography variant="h6">Participant Generated Content</Typography>
          <Typography variant="h5">
          YesSir App includes comments sections, blogs and other interactive features that allow interaction between users and YesSir platform. We call the information posted by or contributed by users "Participant Generated Content" or "PGC".If you wish to be a passive or active participants of our PGC then you must comply with specific rules and guidelines. We also recommend that you read our Comments Guidelines before viewing or commenting on YesSir portal.
          You are responsible for all what you post or publish. You are financially responsible to us for any claim against us by any third party that your PGC is not in accordance with the PGC policy. Being a part of our PGC you agree that you will not post/publish anything copied from any third party or be a part of any material related to advertisement.
          You further agree that you will not post, link to or otherwise publish any PGC that is threatening, offensive, libellous, indecent or otherwise unlawful. Also any material that are discriminatory in nature, for example, comments which make attacks on the grounds of culture, race, religion, sex, gender, sexual orientation.Monitoring all the inflows to PGC is not possible but where we find any ambiguous, unlawful or any comment(s) against our policy we have all the right to remove and act according to the law. This may include banning a user from participation in PGC on YesSir and forward it to the relevant government department.

          </Typography>
        </Paper>
        <Paper className={classes.limitedwarranty}>
          <Typography variant="h6"> Limited Warranty</Typography>
          <Typography variant="h5">
          The warranty of the service will be till the service personal leave the premises or the client leave the premise whatever may apply. It is important to inform us through the App about your satisfaction of the service and our service provider. 

          </Typography>
        </Paper>
        <Paper className={classes.customer}>
          <Typography variant="h6">Customer</Typography>
          <Typography variant="h5">
          Customer means the customer for whom the services are to be carried out by YesSir. 
          </Typography>
        </Paper>
       
        <Paper className={classes.contract}>
          <Typography variant="h6">Contract</Typography>
          <Typography variant="h5">
          Contract means the agreement between the customer and YesSir  to carry out the Works.
          </Typography>
        </Paper>
        <Paper className={classes.services}>
          <Typography variant="h6">Services</Typography>
          <Typography variant="h5">
          Services means all services to be provided by YesSir during the service schedule. 
          </Typography>
        </Paper>
        <Paper className={classes.servicesperiod}>
          <Typography variant="h6">Services Period</Typography>
          <Typography variant="h5">
          Services Period has the time specified for the services to be completed.
          </Typography>
        </Paper>
        <Paper className={classes.servicesfee}>
          <Typography variant="h6">Services Fee</Typography>
          <Typography variant="h5">
          Service Fee means the fee to be charged for providing the services.
          </Typography>
        </Paper>
        <Paper className={classes.useragreement}>
          <Typography variant="h6">User Agreement</Typography>
          <Typography variant="h5">
          <ul>• YesSir assigns professionals (according to their availability) for the chosen service and shares customer's details with them.</ul>
          <ul>
          • Customer can cancel/ change the order if it has not yet been accepted. Once the order has been accepted by the company, then the fee will be charged as YesSir assigns the required professional the task to in that particular time. After the task has been assigned to a professional, his/her details will be shared with the customer through SMS and YesSir Company (YesSir)'s Website and App. Also, the customer details will be shared with our professional(s).
          </ul> 
          <ul>
          • The price mentioned in the App is final. Posting your order means you agreed to the mentioned service price. The customer has the choice to pay cash or use online means that includes Bank transfer, Easy paisa, and Jazz Cash.
          </ul>
          <ul>
          •	After receiving the agreed-upon service charges in cash, the professional(s) is/are bound to submit the fee in total to the account section of YesSir Company. Service providers must not charge a customer any additional fee on top of the advertised fee.
          </ul>
          <ul>
          • In the event of an extension of any service, both the service provide and customer should inform YesSir Company (YesSir), or else company will not take responsibility for any mishap, damage, repair, or any moral and physical harm to customer or the service provider.
          </ul>
          <ul>
          • Neither the service provider nor the customer is allowed to have a private business deal in any case. By doing so YesSir company has the right to take legal action against both or anyone in law court. After the task has been completed it’s obligatory to send us feedback about the service, service provider and customer. 
          </ul>
          <ul>
          •	Our verified professionals will adhere to the customers' specific needs in a manner specified in the employees-company contract.
          </ul>
          </Typography>
        </Paper>
        <Paper className={classes.roleobligatonofYessircompany}>
          <Typography variant="h6">Role & Obligations of YesSir Company (YesSir)</Typography>
          <Typography variant="h5">
          <ul>
          •	YesSir strives to digitalize the market for customers’ convenience and creating platform for our professionals. We offer free registration to our portal.
          </ul> 
          <ul>
          •	YesSir respects 18 years minimum age of employees for registering with us.
          </ul>
          <ul>
          •	The user of our service can either be a company or an individual.
          </ul>
          <ul>
          •	YesSir takes no responsibility for any aspect of the service provider and customer interaction (performance, delivery, description of Services, etc.)
          </ul>
          <ul>
          •	We do properly check, in our capacity, the data and background of our service providers during the registration process but do not take any responsibility for wrongdoing by them at the site or on the way to the assigned destination. In case of any mugging or mutilation (intentional or unintentional), we can only provide you with available information about our professionals. We would not be able to support you any further if you want to go for legal proceedings and vice-versa.
          </ul>
          <ul>
          • We provide data of the customers to our professionals. YesSir does not take any responsibility if, God for Bad, something happens to the service provider on the way or site. We can only provide the customers’ data but will not be a part of any investigation/ law proceedings. If anything happens to the service provider the responsibility will be of the service provider as we only facilitate the customer and service provider.
          </ul>
          <ul>
          •	Company has no obligation to any customer to support or involve itself in disagreement among Company’s platform users expect for enhancing user experience.
          </ul>
          </Typography>
        </Paper>
        <Paper className={classes.userobligations}>
          <Typography variant="h6">User Obligations</Typography>
          <Typography variant="h5">
          <ul>
          •	Agree that any content (provided by the company, a customer, or service provider) on the YesSir Platform may not be utilized for other business purposes or on third party sites without prior permission from YesSir competent authority.
          </ul> 
          <ul>
          •	You must not use the YesSir Platform for any immoral, crooked,  illegal or corrupt activity.
          </ul>
          <ul>
          •	You must maintain your YesSir Company account by yourself and not sell or transfer your Account, or allow others to use it. You must also know that selling or transferring your Account's contents to a third part is a criminal act.
         </ul>
          <ul>
          •	You agree that any information you post on the YesSir Platform should not be actually or potentially damaging to YesSir or any other individual. Damages include, but are not limited to, financial loss that may or will be suffered by YesSir.
           ------------------------------------------------------------------------------
          </ul>
          <ul>
          •	Yessir comply with Islamic/ government law in true spirit. Service(s) forbidden by law will not be entertained.
          </ul>
          <ul>
          •	Any top/extra charge demanded by the service provider must be through the Yessir platform. If any additional amount is needed for equipment/ parts in the process, the customer and professional must take a permission from the YesSir. It will be the responsibility of the service provider to get the amount from the customer and submit the amount in total to the account department. The YesSir does not take any responsibility of the quality, warranty and cost of the part(s) if YesSir is not informed about. This is suggested for the safety of your payment and the quality of our services.
         </ul>
          <ul>
          •	If the assigned task is enhanced or extended, the increased fee will not be adjusted in the agreed Fees.
          </ul>
          <ul>
          •	All charges and fees are non-refundable and non-cancellable.
          </ul>
          </Typography>
        </Paper>
        <Paper className={classes.ReturnExchangePolicy}>
          <Typography variant="h6">Return/ Exchange Policy</Typography>
          <Typography variant="h5">
          <ul>
         •	Our return and exchange policy is valid till our service professional(s) leave your premise or the customer leave the work place. In any case, the policy will be valid only if the YesSir confirms validity. 
         </ul>
          </Typography>
        </Paper>
        <Paper className={classes.Guarantee}>
          <Typography variant="h6">Guarantee</Typography>
          <Typography variant="h5">
          <ul>
          •	You can avail the guarantee according to the policy of the company provided us the parts/ equipment. 

          </ul>

          </Typography>
        </Paper>
        <Paper className={classes.CancellationPolicy}>
          <Typography variant="h6">Cancellation Policy</Typography>
          <Typography variant="h5">
          <ul>
               •	Once the order is placed, it can be cancelled within an hour failing which the transport and our service will be charged according to the distance and time consumption. 
         </ul>
          </Typography>
        </Paper>
        <Paper className={classes.clientreponsibilities}>
          <Typography variant="h6">Client Responsibilities</Typography>
          <Typography variant="h5">
          (a) Client, at its expense, shall:
          <ul>
          a. Allow professional(s) or agents of Service Provider reasonable access to the premises and facilities where the Service is to be provided, and Client shall not require Service Provider’s personnel to sign any document that has not been approved in advance by YesSir.
         </ul>
         <ul>
         b. Provide appropriate electric current for any necessary purpose with suitable outlets.
         </ul>
         <ul>
         c. Provide safe, appropriate and easily accessible floor space, closer to where Service will be provided.
         </ul>
         <ul>
         d. Be present on the premises/work place at least five minutes before the appointment. 
         </ul>
         <ul>
         e. Provide justifiable support to Service Provider as requested.
         </ul>
         <ul>
         f. Service Provider shall not under any circumstances be liable for damages caused by (i) accidents, misuse, misapplication, or neglect of Client or any of its agents or employees or as result of Service by any person other than a Service Provider representative.
         </ul>
         (b) Mutual Rights of Termination:<br></br>
         Either party may terminate the Agreement at any time if the other party encroach upon any clause of the terms and conditions. After the initial term, unless time are otherwise designated for specific Services set forth, either Party hereto shall have the right to terminate this Agreement without cause, without penalty, and without liability for any damages as a result of such termination at any time giving the other Party at least TEN (10) minutes prior written/digital notice of such termination. If either Party properly terminates the Agreement, Yessir will provide a pro rata refund for any advanced payment for the remaining time of coverage under the Agreement. 

          </Typography>
        </Paper>
        <Paper className={classes.disputeresolution}>
          <Typography variant="h6">Dispute Resolution</Typography>
          <Typography variant="h5">
          Both the customer and Service provider will attempt in good faith to resolve any dispute arising out of or relating to the service on the spot before leaving the premise. Yessir does not take any responsibility when the customer leave the working place. Any party may give the other party written notice of any dispute not resolved in the normal course of business. 

          </Typography>
        </Paper>
        <Paper className={classes.Taxes}>
          <Typography variant="h6"> Taxes:</Typography>
          <Typography variant="h5">
         Unless otherwise indicated, prices stated on our application/website are inclusive of applicable Service Tax, any applicable value added tax (VAT) or other sales taxes.
          </Typography>
        </Paper>
        <Paper className={classes.pricingerrors}>
          <Typography variant="h6">Pricing errors:</Typography>
          <Typography variant="h5">
          If we incorrectly state a price to you whether online or otherwise, we are not obliged to provide you with the service at that price, even if we have mistakenly accepted your offer. In such a situation we reserve the right to subsequently notify you of any pricing error. If we do this, you may cancel the service without any obligation to us and we will refund you any money you have paid us in full, or you may pay the correct price. If you refuse to exercise either of these choices then we may cancel your service and will refund you any money you have paid us in full. We will always act in good faith in determining whether a genuine pricing error has occurred.
          </Typography>
        </Paper>
        <Paper className={classes.serviceperiodrenewalandcancellation}>
          <Typography variant="h6">Service Period, Renewal and Cancellation:</Typography>
          <Typography variant="h5">
          If you chose to pay monthly, your service will continue until you tell us that you no longer wish to receive it, in which case you will stop paying the monthly fees. We will notify you at least 7 days in advance of any changes to the price in your service that will apply upon next monthly renewal.Unless you report us before the end of your chosen service period that you no longer wish to obtain it, your service will automatically be renewed for another period as applicable. <br></br><br></br>

          How to cancel? <br></br>
         You may notify us of your wish to cancel your service by contacting our Customer Services team at assist@bsmail.in. To enable us cancel your subscription please provide us with your complete name (as was in the subscription order form), Email address and Contact number clearly written out.
         <br></br><br></br>
         Cancellation by us:<br></br>
         Yessir reserves the right to suspend or terminate your order with or without notice and without further obligation to you. We may also suspend or terminate your subscription if we are prevented from providing services to you by circumstances beyond our control. If we terminate your subscription for any reason and/or permanently cease publishing business-standard.com, or cease to provide subscription services then, unless there are exceptional circumstances, we will provide you with a pro rata refund to your credit card. This means that we will refund you with any amounts that you have paid us in advance that relate to any remaining and unexpired period of your subscription.
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
          </Typography>
        </Paper>
        
        
        <Desiredservicecom/>
        <Footersec/>
      </Box>
    </>
  );
}

export default Termsonditionpage;
