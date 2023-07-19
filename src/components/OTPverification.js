import React,{useState} from "react";
import { Link,NavLink } from "react-router-dom";
import { Typography, Box, Button,CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import acpagepic from "../assets/acpagepic.png";


import addressico from "../assets/addressico.svg";
import serviceico from "../assets/serviceico.svg";
import scheduleico from "../assets/scheduleico.svg";
import shoppingbagico from "../assets/shoppingbagico.svg";

// import OtpInput from 'react-otp-input';
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
  // menubox section end here
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
    "& h5":{
      width: "330px",
      //  height: "60px",
       fontFamily: "Roboto",
       fontStyle: "normal",
       fontWeight: "normal",
       fontSize: "14px",
       lineHeight: "30px",
       marginTop: "8px" ,
       textAlign:"center",
      //  border:"1px solid red",
      },
      "& h4":{
        textAlign: "center",color: "rgb(0, 179, 148)",
        // height: "60px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "30px",
        marginTop: "4px" ,
        textAlign:"center",
        // border:"1px solid red",
      },
    "& h3": { marginTop: "17px", fontSize: "16px" },
  },
  userotp:{ 
     marginTop:"10px"
  },
  verifybtn:{
    marginTop: "20px",
    width: "398px",
    height: "55px",
    padding: "6px 33px",
    background: "#165834",
    borderRadius: "4px",
    color: "#ffffff",
    lineHeight: "25px",
    fontSize: "18px",
    textTransform: "capitalize",
    "&:hover": {
      background: "#165834",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      width: "75%",
      height: "40px",
      marginTop: "22px",
      fontSize: "16px",
    },
  },
  


  // footer section end here
}));

const OTPverification = () => {
  const classes = UseStyles();
   // OTP function start here
//    const ClickEvent = (first,last) => {
//     if(first.value.length)
//       document.getElementById(last).focus();
    
// };
// OTP function end here

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
    const scrolltoservices=() =>{
      window.scrollTo(0, 720);
    };
    // OPT function start here
    const [otp,setOtp] = useState(new Array(5).fill(""));
    const handlechange = (element,index) => {
    if(isNaN(element.value)) return false;
    setOtp([...otp.map((d,idx)=>(idx ===index) ? element.value : d )]);
    // focus next input
       if(element.nextSibling){
         element.nextSibling.focus();
       }
    };
    // opt function end here
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
          <Typography variant="h6">OTP Verification</Typography>

          <Typography variant="h5">
            Enter the 6 digits code you have recieved via SMS on
          </Typography>
          <Typography variant="h4">
              03229933223
            </Typography>
            <Box className={classes.userotp}>
            
            {
              otp.map( (data,index)=>{
                return   <input 
                elevation="24"
               className="opt-field" 
               type="text"
               name="otp" 
               maxLength="1" 
               key={index}
               value={data}
               onChange={e => handlechange(e.target,index)}
               onFocus={e => e.target.select()}
               style={{fontFamily:"arimo",
                width:"35px",textAlign:"center",margin:"10px",height:"35px",background:"#eef2f3",fontSize:"1.1rem",boxShadow: "10px 8px 31px 2px rgb(255, 255, 255)", 
                outlineColor:"rgb(0, 179, 148)"}} />
              })
            }
              
               
             </Box>
             <Typography 
             style={{color: "rgb(0, 179, 148)",marginTop:"8px"}}>
             Otp Entered - {otp.join("")}
             </Typography>
             <Button onClick={e =>  setOtp([...otp.map(v=>"" )])}
             style={{marginTop:"15px", height:"40px", width:"150px",color:"white",
             background:"#A3BD9A"}}
             >clear</Button>
          <Button className={classes.verifybtn} onClick={scrolltotop}
          component={Link} 
          to="/chooseaddress" exact style={{textDecoration:"none",}}>
          Verify</Button>
          <Typography variant="h3">change mobile number</Typography>
        </Box>
        {/* LoginR section end here */}
        <Desiredservicecom/>
        <Footersec/>
       
      </Box>
    </>
  );
};

export default OTPverification;
