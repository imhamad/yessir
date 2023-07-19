import React from 'react';

import { NavLink,Link} from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Input,
  TextField,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';

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
        fontSize: "37px",
        lineHeight: "36px",
        marginTop: "35px",
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
        marginTop: "-5px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
        marginTop: "-10px",
        lineHeight: "26px",
      },
    },
  },
  maincontentbox:{
    width:"85%",
    height:"700px",
    boxShadow:"10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
    margin:"auto",
    background:"#ffffff",
    [theme.breakpoints.down("sm")]: {
     width:"80%"
    },
    [theme.breakpoints.down("xs")]: {
      width:"75%"
     },

  },
  maincontent:{
    width:"501px",
    margin:"auto",
    paddingTop:"110px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    [theme.breakpoints.down("sm")]: {
      width:"410px",
      paddingTop:"80px",
      // border:"1px solid red",
    },
    [theme.breakpoints.down("xs")]: {
      // border:"1px solid blue",
      width:"300px"
      
    },
    "& h6":{
      width:"501px",
      height: "19px",
      textAlign:"left",
      // border:"1px solid blue",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "19px",
     
      color: "#535353",
      [theme.breakpoints.down("sm")]: {
        width:"410px"
      },
      [theme.breakpoints.down("xs")]: {
        width:"300px"
      },
      
    },
    "& Button":{
        padding:"6px 33px",
        width: "501px",
        height: "55px",
        background: "#165834",
        borderRadius: "4px",
        fontFamily: "Helvetica",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "30px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        marginTop:"78px",
        color: "#FFFFFF",
        '&:hover':{
          background: "#165834",
        },
        [theme.breakpoints.down("sm")]: {
          width:"410px"
        },
        [theme.breakpoints.down("xs")]: {
          width:"300px"
        },
    }
  },
  textfield:{
    marginTop:"20px",
    width:"501px",
    background: "#FAFAFA",
    height: "227px",
    borderRadius: "4px",
    marginBottom:"34px",
    [theme.breakpoints.down("sm")]: {
      width:"410px"
    },
    [theme.breakpoints.down("xs")]: {
      width:"300px"
    },
  },
  camerabtnbox:{
    width:"501px",height:"50px",
    display:"flex",borderRadius:"4px",display:"flex",flexDirection:'row',alignItems:"center",
    [theme.breakpoints.down("sm")]: {
      width:"410px"
    },
    [theme.breakpoints.down("xs")]: {
      width:"300px"
    },
   
    "& h6":{
      color:"#A3A3A3",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "14px",
      margin:"11px",
     
    }
  },

  // main content section end here

  
}));



const Contact = () => {
   
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

          <Typography variant="h5">Contact Us</Typography>
          <Typography variant="h4">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          </Typography>
        </Box>
          {/* top section end here */}
       
           {/* main content section start here */}
         
               {/* main content section end here */}
     
       
      <Box className={classes.maincontentbox}>
          <Box className={classes.maincontent}>
            <Typography variant="h6">Write your problem or query in detail</Typography>
            <TextField
            className={classes.textfield}
          // id="outlined-multiline-static"
            placeholder="your message"
            label="Message"
          multiline

          rows={10}
          variant="outlined"
        />
       <Box className={classes.camerabtnbox}>
  
       <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" style={{display:"none"}}/>
        <Button startIcon={
          <AddAPhotoOutlinedIcon style={{width:"22px",height:"22px"}}/>
        }
        component="span" style={{textTransform:"capitalize",width:"201px",background:"#EFEFEF",
           height:"50px", 
    fontFamily:"Roboto",fontStyle:'normal',fontWeight:500,lineHeight:'16px',fontSize:"14px",
    alignItems:"center",display:"flex",color:"#000000",textTransform:"capitalize"}}>
          Attach your photo
        </Button>
      </label>

            <Typography variant="h6">(Optional)</Typography>
          </Box>
            <Button>Send Message</Button>
           
          </Box>
      </Box>
        


       <Footersec/>
      </Box> 
      
    </>
  );
}

export default Contact;
