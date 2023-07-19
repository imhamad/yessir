import React from 'react';
import {
    Typography,
    Box,
    Button,
  } from "@material-ui/core";

  import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
    desiredservice: {
        position: "relative",
        width: "100%",
        backgroundColor: "#EEF9F3",
        height:"400px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
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
          marginTop: "46px",
          height: "55px",
          width: "210px",
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
          textTransform:"capitalize",
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
           
            
          },
        },
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
  }));

const Desiredservicecom = () => {
    const classes = UseStyles();
    const scrolltotop=() =>{
        window.scrollTo(0, 0);
      };
      const scrolltoservices=() =>{
        window.scrollTo(0, 720);
      };
  return (
    <>
       <Box className={classes.desiredservice}>
          <Typography variant="h6">Book your desired service now!</Typography>
          <Button onClick={scrolltoservices}>Book a service</Button>
          <Box className={classes.desiredsecdotbox}>
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>{" "}
            <div className={classes.desiredsecdot}></div>
            <div className={classes.desiredsecdot}></div>
          </Box>
        </Box>
    </>
  );
}

export default Desiredservicecom;
