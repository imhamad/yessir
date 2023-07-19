import React,{useState} from "react";
import { AppBar } from "@material-ui/core";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Box,
  Dialog,
  DialogContent,
  OutlinedInput,
  Typography,
  Button,
  IconButton,
  Hidden,
  Menu,
  MenuItem,
  Toolbar,
  TextField,
  Props,
  Drawer,
  Divider,
  List,
  ListItemText,
  ListItem,
  Collapse,
  ListItemIcon
} from "@material-ui/core";
// dialog img
import dialogimg from "../assets/dialogimg.png";
import whatsapp from "../assets/whatsapp.jpg";



import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from "@material-ui/icons/Apps";
import ContactsIcon from "@material-ui/icons/Contacts";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InfoIcon from "@material-ui/icons/Info";

import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";

import greenlogo from "../assets/greenlogo.png";

import googleicon from "../assets/googleicon.png";



const UseStyles = makeStyles((theme) => ({
  appbar:{
    boxShadow:"none",
    backgroundColor:"#EEF9F3",
    // border:"1px solid blue"
    // display:"flex",
    // justifyContent:"center",
    // alignItems:"center",
    // position:"static"
    // paddingTop:theme.spacing(10)
    
  },
  toolbar: {
   height:"100px",
    width: "99.7%",
    display: "flex",
      // border:"1px solid blue",
     justifyContent:"space-between",
    [theme.breakpoints.down("sm")]: {
      // border:"1px solid black",
      width: "99.6%",
      flexDirection: "column",
    },
  },
  ///whatsapp IconButton start here
  whatsap: {
    // boxShadow:"none",
    //  height:"105px",
    background: "blue",
    // background:"transparent",
    position: "sticky",
    top: 0,
    // borderBottom:"1px solid rgb(0,0,0,0.2)"
    boxShadow: "3px 2px 3px 1px rgba(0, 0, 0, 0.07)",

    // transition:"background 1s ease-in",
    // transition:"transform 1s",
    // transform:"translateY(20px)"
    height: "95px",
    transition: "background 2s, height 1s ease",
    zIndex: 999,
    width: "100%",
    background:"#ffffff",
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
    // background: 'linear-gradient(90deg, rgb(34,5,6), rgb(4,34,0))',
    // background:"linear-gradient(to bottom, Transparent 0%,Transparent 50%,red 50%,red 100%)"
  },
  iconbtninitial:{
    position:"fixed",
    borderRadius:"50%",
    bottom:"8%",
    right:"6%",
    width:"75px",
    height:"75px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    border:"1px solid orange",
  //  background:"rgba(131, 227, 252,0.3)",
     background:"transparent",
  //  background:"linear-gradient(105deg,rgba(131, 227, 252,0.3) 0%, rgba(135,226,252,1) 100%)",
   transition: "background-linear-gradient 2s, opacity 2s",
   opacity:1,
  //  transparency:0,
  //  "&:hover":{ 
  //   //  background:"#b5eefd",
  //   background:"linear-gradient(90deg,#07bdf4,#b5eefd)",
  //   border:"none",
  //   "& $scrollbtn": {
  //    color:"white",
  //   },
   
  //   }
  },
  iconbtn:{
    opacity:1
  },
  scrollbtn:{
    // border:"1px solid green",
  transform:"rotateX(180deg)",

    color: "#07bdf4",
    fontSize:"40px",
  },
  // whatsapp iconButton end here
  logomenubox: {
    width: "507px",
    // margin: "auto",
    // backgroundColor:"red",
    marginTop: "30px",
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
      width: "90%",
      margin:"auto",
      // marginTop:40,
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("xs")]: {
      width: "87%",
  
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
    // border:"1px solid red",
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
    // border:"1px solid gray",
   marginTop:"30px",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      // marginTop: "125px",
     
      // border:"1px solid gray",
      justifyContent: "center",
      display:"none"
    },
    [theme.breakpoints.down("xs")]: {
    
      marginTop: "85px",
    },
  },
  booknowbtn: {
    //
    backgroundColor: "#165834",
    color: "rgba(255, 255, 255, 1)",
    borderRadius: "4px",
    width: "140px",
    height: "40px",
    marginRight: "21px",
    textTransform: "capitalize",
    borderRadius:"4px",
    lineHeight:"30px",
    fontSize:"13px",
    fontFamily:"Helvetica",
    padding:"6px 33px",
    fontWeight:"bold",
    "&:hover": {
      backgroundColor: "#165834",    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
     display:"none",
    
    },
    [theme.breakpoints.down("xs")]: {},
  },
  signupbtn: {
    color: "rgba(255, 255, 255, 1)",
    background: "#A3BD9A",
    width: "140px",
    height: "40px",
    borderRadius: "4px",
    marginRight: "40px",
    textTransform: "capitalize",
    borderRadius:"4px",
    lineHeight:"30px",
    fontSize:"13px",
    fontFamily:"Helvetica",
    padding:"6px 33px",
    fontWeight:"bold",
    "&:hover": {
      background: "#A3BD9A",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      display:"none"
    
      
    },
    [theme.breakpoints.down("xs")]: {},
  },
  signuploginiconbtn:{
    "&:hover": {
      backgroundColor:"#EEF9F3",
        },
  },
 
  // dialogboxes code start here
  dialogwrapper:{
    position:"absolute",
    background:"white",
    
    //paddingTop:theme.spacing(8),
    //paddingBottom:theme.spacing(8),
    // paddingLeft:theme.spacing(8),
    // paddingRight:theme.spacing(8),
    // background:"red",
    top:theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
    //   paddingTop:theme.spacing(2),
    // paddingBottom:theme.spacing(2),
    // paddingLeft:theme.spacing(2),
    // paddingRight:theme.spacing(2),
      top:theme.spacing(1),
  },

},
  //login dialog box start here
  loginregdialog: {
    display: "flex",
    margin: "auto",
    margin:"-20px -24px",

    justifyContent: "space-around",
    // width: "600px",
    // height: "600px",
    background:"white",
    [theme.breakpoints.down("sm")]: {
          width:"350px",
          height:"500px",
          margin:"0px 0px",
          
    },
  },
  loginregdialogimg:{
    width: "574px",
   
    height: "700px",
    background: "rgb(22, 88, 52)",
    [theme.breakpoints.down("md")]: {
      width: "450px",
    height: "700px",
   },
    [theme.breakpoints.down("sm")]: {
       display:"none",
       width:"0px"
    },
  },
  loginregdialogbtnstypographys:{
    width: "574px",
    height: "700px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "450px",
    height: "700px",
   },
    [theme.breakpoints.down("sm")]: {
        // width:"100%",
        width: "350px",
        background:"#ffffff",
        height:"500px"
     
    },
    "& Button":{
     
   },
   '& h6':{
    fontSize: "24px",
    color: "black",
    fontFamily: "Roboto",
    fontWeight: 500,
    textAlign:"center",
    fontStyle:"normal",
    [theme.breakpoints.down('sm')]:{
      fontSize:"22px"
    }
   }
  },
  loginregisterbtn:{
    width:"400px",
    height:"55px",
    [theme.breakpoints.down('sm')]:{
      width:"320px",
      // height:"35px",
      marginTop:"20px"
    }
  },
  // login dialog box end here
  // OTP dialog box work start here
  userotp:{ 
    marginTop:"10px"
 },
  // OTP dialog box work end here
  // personnal details dialogbox start here
  personaldetailtextField: {
    width: "398px",
    background: "#EFEFEF",
    marginTop: "26px",
    height: "40px",
    color: "red",

    padding: "0 5px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "22px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "75%",

      padding: "0",
      // marginTop:"18px",
    },
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  // personnal detail dialogbox end here
  // data code start here
  drawer: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawericons:{
    color:"rgb(0, 179, 148)",
     [theme.breakpoints.down("xs")]:{
       
     }
   },
   drawerservicedropdowntwoicons:{
      paddingTop: "0px",
      marginTop: "0px",
      color:"rgb(0, 179, 148)",
      transition:"transform 0.3s linear",
      [theme.breakpoints.down('xs')]:{
       
      }
   },
   drawerservicedropdowntwoiconsback:{
     transform:"rotateZ(-180deg)"
   },
}));

// import  useScrollTrigger  from "@material-ui/core/useScrollTrigger";
// import Slide from "@material-ui/core/Slide";

// interface Props {
//   children: React.ReactElement;
// }
// function Header({children}:Props) {
//   const trigger = useScrollTrigger();
//   return(
//     <Slide appear={false} direction={"down"} in={!trigger}>
//       {children}
//     </Slide>
//   )
// }
const Navbar = () => {
  const classes = UseStyles();


 // menu of large screen start here
 const [anchorEl, setAnchorEl] = React.useState(null);

 const openlargescreenmenu = (event) => {
   setAnchorEl(event.currentTarget);
 };

 const closelargescreenmenu = () => {
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
 const [dialog1, setdialog1] = useState(false);
 const opendialog1 = () => {
   setdialog1(true);
 };
 const closedialog1 = () => {
   setdialog1(false);
 };
 // dialog1 end here


 // drawer start
 const [drawer, setDrawer] = useState(false);
 //drawer end
 //drawerservice menu start here
 const [drawerservicemenu, Setdrawerservicemenu] = React.useState(false);
 const opendrawerservicemenu = (event) => {
   Setdrawerservicemenu(!drawerservicemenu);
 };
 const closedrawerservicemenu = () => {
   Setdrawerservicemenu(false);
 };
 //drawerservice menu end here
// handles related to dialogbox login with passoword started here
 const [values, setValues] = React.useState({
   amount: '',
   password: '',
   weight: '',
   weightRange: '',
   showPassword: false,
 });
 const handleChange = (prop) => (event) => {
   setValues({ ...values, [prop]: event.target.value });
 };
 const handleClickShowPassword = () => {
   setValues({ ...values, showPassword: !values.showPassword });
 };

 const handleMouseDownPassword = (event) => {
   event.preventDefault();
 };
 // handles related to dialogbox login with passoword ended here
 const scrolltobottom=() =>{
   window.scrollTo(0, 700);
 };
 const scrolltotop=() =>{
   window.scrollTo(0, 0);
 };

  function callBoth() {
   closelargescreenmenu()
   scrolltotop()
 }
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
   
     
        <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
       
            <Box className={classes.logomenubox}>
            <Box className={classes.logo}>
                <img src={greenlogo} style={{width:"100%",height:"100%"}} alt="logoimg"/>
               
              </Box>
              <Box className={classes.aboutwhyuscontact}>
               {/* whatsapp IconButton start here */}
               <IconButton
                title="Our whatsapp no : 03179552477"
              className={classNames(classes.iconbtninitial,
              {
                  // [classes.iconbtn]: whatsap,
                })}>
               <img
                src={whatsapp}
                alt="whatsapp icon"
                style={{ width: "75px", height: "75px" ,borderRadius:"45%"}}
              />
              </IconButton>
                {/* whatsapp IconButton end here */}
                <Typography variant="h6"  onClick={scrolltotop}>
                  <NavLink
                    to="/"
                    exact
                    style={{ color: "black", textDecoration: "none" }}
                    activeStyle={{color:"#00b394",}}
                  >
                    Home
                  </NavLink>
                </Typography>
                <Typography variant="h6" onClick={openlargescreenmenu}>
                  services
                  <ArrowDropDownIcon />
                </Typography>

                {/* large screen menu end here */}
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={closelargescreenmenu}>

               <NavLink 
                    to="/teachersubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a"}}
                    activeStyle={{color:"#00b394"}}>
                   <MenuItem onClick={callBoth}>
                    Tution Services
                    </MenuItem>
                  </NavLink>
               
                  <NavLink
                    to="/acsubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}
                    activeStyle={{color:"#00b394",}}>
                  <MenuItem onClick={callBoth}>
                    AC Services
                    </MenuItem>
                  </NavLink>
                

                  <NavLink
                    to="/homeapprepair"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}
                    activeStyle={{color:"#00b394",}}>
                  <MenuItem onClick={callBoth}>
                    Home appliances repaire Services
                    </MenuItem>
                  </NavLink>
                  
                  
                  <NavLink
                    to="/carsubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}
                    activeStyle={{color:"#00b394",}}>
                  <MenuItem onClick={callBoth}>
                    Car Services
                    </MenuItem>
                  </NavLink>
                 
                 
                  <NavLink
                    to="/plumbersubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}
                    activeStyle={{color:"#00b394",}}>
                   <MenuItem onClick={callBoth}>
                   Plumbing Services
                   </MenuItem>
                  </NavLink>
                 
                 
                  <NavLink
                    to="/handymansubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}
                    activeStyle={{color:"#00b394",}}>
                   <MenuItem onClick={callBoth}>
                   Handymans Services
                   </MenuItem>
                  </NavLink>
                  
                  
                  <NavLink
                    to="/electriciansubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}
                    activeStyle={{color:"#00b394",}}>
                  <MenuItem onClick={callBoth}>
                    Electrician Services
                    </MenuItem>
                  </NavLink>
                  
                
                  <NavLink
                    to="/cleaningsubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}
                    activeStyle={{color:"#00b394",}}>
                    <MenuItem onClick={callBoth}>
                   Cleaning Services
                   </MenuItem>
                  </NavLink>
                
                
                  <NavLink
                    to="/carpentersubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a" }}
                    activeStyle={{color:"#00b394",}}>
                    <MenuItem onClick={callBoth}>
                    Carpenter Services
                    </MenuItem>
                  </NavLink>
                 
                
                  <NavLink
                    to="/paintersubcategray"
                    exact
                    style={{textDecoration:"none",color:"#5a5a5a"}}
                    activeStyle={{color:"#00b394",}}>
                    <MenuItem onClick={callBoth}>
                    Painter Services
                    </MenuItem>
                 </NavLink>
                 
                </Menu>
                {/* large screen menu end here */}

                <Typography variant="h6" onClick={scrolltotop}>
                <NavLink
                    to="/aboutus"
                    // activeStyle={{
                    //   // fontWeight: "bold",
                    //   textDecoration: "none",
                    //   color: "black",
                    // }}
                    style={{ textDecoration: "none",  color: "black",}}
                    activeStyle={{color:"#00b394"}}
                  >
                    About
                  </NavLink>
                </Typography>

                <Typography variant="h6" onClick={scrolltotop}>
                <NavLink
                    to="/contact"
                    exact
                    activeStyle={{
                      textDecoration: "none",
                     
                    }}
                    style={{ textDecoration: "none",  color: "black",}}
                    activeStyle={{color:"#00b394"}}
                  >
                    Contact
                  </NavLink>
                </Typography>
              </Box>

               {/* menu of small screen start here */}
              <Hidden mdUp className={classes.menuiconhiddenbox}>
              <Box>
              {/* <IconButton className={classes.signuploginiconbtn}>
              <Typography className={classes.signupbtn1}>login/signup</Typography>
              </IconButton> */}
                <IconButton
                  title="open/close menu"
                  onClick={() => setDrawer(!drawer)}
                  className={classes.menubutton}
                >
                  <MenuIcon
                    style={{ fontSize: 34,}}
                  />
                </IconButton>
               
              </Box>
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
              <Button className={classes.booknowbtn} onClick={scrolltobottom} 
              component={Link} exact to="/">
              Book Now
              </Button>
              <Button className={classes.signupbtn} 
              // onClick={opendialog1}
              > Login/signup</Button>
            </Box>
        </Toolbar>
        <div>
          <Dialog    maxWidth="xl"
           classes={{paper:classes.dialogwrapper}}
          //  open={dialog1}
          //   onClose={closedialog1}
          //   aria-labelledby="responsive-dialog-title"
      >
        {/* <DialogTitle id="responsive-dialog-title" className={classes.DialogTitle}> 
         <Typography variant="h6">Edit your profile</Typography>
        </DialogTitle> */}
        <DialogContent >
        <Box className={classes.loginregdialog}>
              <Box className={classes.loginregdialogimg}
               
              >
                <img src={dialogimg} width="100%" height="100%" />
              </Box>
              <Box className={classes.loginregdialogbtnstypographys}
               
              >
                <Typography variant="h6">
                  Login/Register
                </Typography>
                <TextField
                  // size="small"
                  variant="outlined"
                  placeholder="your contact number"
                  label="Contact Number"
                  style={{  
                  marginTop:"41px",borderRadius:"4px" }}
                  className={classes.loginregisterbtn}
                />
                <Button className={classes.loginregisterbtn}
                  style={{
                    marginTop: "30px",
                    textTransform: "capitalize",
                    // height: "55px",
                    color: "#ffffff",
                    background: "#165834",
                    // width: "400px",
                    fontSize: "18px",
                  }}
                >
                  Confirm
                </Button>
                <Typography variant="h5"
                  style={{
                    marginTop: "47px",
                    color: "lightGray",
                    width: "85%",
                    textAlign: "center",
                  }}
                >
                --------------or--------------
                </Typography>
                <Button className={classes.loginregisterbtn}
                  startIcon={
                    <img
                      src={googleicon}
                      style={{ width: "20px", marginRight: "10px" }}
                    />
                  }
                  style={{
                    marginTop: "42px",
                    textTransform: "capitalize",
                    // height: "55px",
                    color: "#000000",
                    background: "#ffffff",
                    // width: "400px",
                    fontSize: "17px",
                    boxShadow: "2px 2px 1px 1px rgba(0,0,0,0.2)",
                  }}
                >
                  Register with Google
                </Button>
              </Box>
            </Box>
        </DialogContent>
       
      </Dialog>
        </div>
        {/* loginregister dialogbox end here */}
          
          {/* personnal detail dialogbox start here */}
          <div>
          <Dialog   maxWidth="xl"
           classes={{paper:classes.dialogwrapper}}

            //  fullScreen
            // open={dialog1}
            // onClose={closedialog1}
            aria-labelledby="responsive-dialog-title"
          >
           <DialogContent>
           <Box className={classes.loginregdialog}>
              <Box className={classes.loginregdialogimg}
               
              >
                <img src={dialogimg} width="100%" height="100%" />
              </Box>
              <Box className={classes.loginregdialogbtnstypographys}
               
              >
               <Typography variant="h6">Personal Details</Typography>
          <TextField
          //  size="small"
                  variant="outlined"
                  placeholder="your full name"
                  label="your full name"
            
                  style={{  
                  marginTop:"41px",borderRadius:"4px" }}
                  className={classes.loginregisterbtn}
           
          />
          <TextField
          //  size="small"
                  variant="outlined"
                  placeholder="03179552477"
                  label="03179552477"
                  style={{  
                  marginTop:"35px",borderRadius:"4px" }}
                  className={classes.loginregisterbtn}
           
          />
          <TextField
          //  size="small"
                  variant="outlined"
                  placeholder="password"
                  label="password"
                  style={{  
                  marginTop:"35px",borderRadius:"4px" }}
                  className={classes.loginregisterbtn}
          />
          <Button  className={classes.loginregisterbtn}
           style={{
                    marginTop: "35px",
                    textTransform: "capitalize",
                    // height: "38px",
                    color: "#ffffff",
                    background: "#165834",
                    fontSize: "18px",
                  }}>
                  Signup</Button>
        
              </Box>
            </Box>
           </DialogContent>
          </Dialog>
        </div>
       
          {/* personnal detail dialogbox end here */}

          {/* signin with OPT or password dialogbox start here */}
          <div>
          <Dialog   maxWidth="xl"
           classes={{paper:classes.dialogwrapper}}
            //  open={dialog1}
            // onClose={closedialog1}
            // aria-labelledby="responsive-dialog-title"
          
          
          >
            <DialogContent>
            <Box className={classes.loginregdialog}>
              <Box className={classes.loginregdialogimg}
               
              >
                <img src={dialogimg} width="100%" height="100%" />
              </Box>
              <Box className={classes.loginregdialogbtnstypographys}
               
              >
               <Typography variant="h6">Signin with</Typography>
               <Typography variant="h7" className={classes.loginregisterbtn}
               style={{color:"#A3A3A3",fontSize:"14px",textAlign:"center",marginTop:"2px"}}>
               Password or OTP sent directly to your mobile number
               </Typography>

               <Button className={classes.loginregisterbtn}
           style={{
                    marginTop: "15px",
                    textTransform: "capitalize",
                    // height: "38px",
                    color: "#ffffff",
                    background: "#165834",
                    // width: "85%",
                    fontSize: "18px",
                    textTransform:"capitalize"
                  }}>
                  OPT code
                  </Button>
        
          <Button className={classes.loginregisterbtn}
           style={{
                    marginTop: "35px",
                    textTransform: "capitalize",
                    // height: "38px",
                    color: "#ffffff",
                    background: "#A3BD9A",
                    // width: "85%",
                    fontSize: "18px",
                    textTransform:"capitalize"
                  }}>
                  Password</Button>
          <Button className={classes.loginregisterbtn}
            style={{fontSize:"16px",marginTop:"35px",color:"#00b394",textTransform:"lowercase",
            background:"white"}}>
            change your mobile number
            </Button>
              </Box>
            </Box>
            </DialogContent>
          </Dialog>
        </div>
          {/* signin with OPT or password dialogbox end here */}
            
             {/* verification with OPT dialogbox start here */}
             <div>
          <Dialog    maxWidth="xl"
           classes={{paper:classes.dialogwrapper}}
           
            open={dialog1}
            onClose={closedialog1}
            // aria-labelledby="responsive-dialog-title"
          >
            <DialogContent>
            <Box className={classes.loginregdialog}>
              <Box className={classes.loginregdialogimg}
               
              >
                <img src={dialogimg} width="100%" height="100%" />
              </Box>
              <Box className={classes.loginregdialogbtnstypographys}
               
              >
               <Typography variant="h6">OTP Verification</Typography>
               <Typography variant="h7" className={classes.loginregisterbtn}
               style={{color:"#A3A3A3",fontSize:"14px",textAlign:"center"}}>Enter the 6 digits code you have received via SMS on</Typography>
               <Typography variant="h7" 
               style={{color:"#00b394",fontSize:"14px",textAlign:"center",marginTop:"-20px"}}>03139525531 </Typography>
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

               <Button className={classes.loginregisterbtn}
           style={{
                    marginTop: "25px",
                    textTransform: "capitalize",
                    // height: "38px",
                    color: "#ffffff",
                    background: "#165834",
                    // width: "85%",
                    fontSize: "18px",
                    textTransform:"capitalize"
                  }}>
                  Verify</Button>
        <Button  className={classes.loginregisterbtn}
        style={{fontSize:"16px",marginTop:"15px",color:"#00b394",textTransform:"lowercase",
              background:"white"}}>
          change your mobile number
          </Button>
              </Box>
            </Box>
            </DialogContent>
          </Dialog>
        </div>
             {/* verification with OPT dialogbox end here */}

             {/* login with Password dialogbox start here */}
             <div>
          <Dialog   maxWidth="xl"
           classes={{paper:classes.dialogwrapper}}
            // open={dialog1}
            // onClose={closedialog1}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogContent>
            <Box className={classes.loginregdialog}>
              <Box className={classes.loginregdialogimg}
               
              >
                <img src={dialogimg} width="100%" height="100%" />
              </Box>
              <Box className={classes.loginregdialogbtnstypographys}
               
              >
               <Typography variant="h6" style={{fontSize:"24px"}}>Login with a password</Typography>
               <TextField   className={classes.loginregisterbtn}
                // onMouseOver={() => setDrawer(false)}
                  // size="small"
                  variant="outlined"
                  placeholder="03179000002"
                  label="your number"
                  style={{  marginTop: "41px",background:"#EEF9F3q", borderRadius:"4px" }}
           
           
          />
               
                     {/* // password fied start here */}
               <FormControl className={clsx(classes.margin, classes.textField)} 
               className={classes.loginregisterbtn}
               variant="outlined" 
                style={{  marginTop: "35px", borderRadius:"4px" }}
                // size="small"
           >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton style={{color:"#00b394"}}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        {/* password field end here/ */}
             <Button className={classes.loginregisterbtn}
           style={{
                    marginTop: "35px",
                    textTransform: "capitalize",
                    // height: "38px",
                    color: "#ffffff",
                    background: "#165834",
                    // width: "85%",
                    fontSize: "18px",
                    textTransform:"capitalize"
                  }}>
                  login</Button>
               
       
              </Box>
            </Box>
            </DialogContent>
          </Dialog>
        </div>
             {/* login with Password dialogbox end here */}
              {/* Drawer start from here */}
        <Drawer
          open={drawer}
          className={classes.drawer}
          onClose={() => setDrawer(false)}
        >
          <List disablePadding style={{ width: 250 }}>
            <ListItem button>
              <ListItemText
                primary={
                  <Typography variant="h5" color="primary">
                    Getting started here
                  </Typography>
                }
                secondary="Yessir quality services"
              />
            </ListItem>
            <Divider></Divider>
            {/* home listItem start here */}
            <NavLink
              to="/"
              exact
              style={{ textDecoration: "none", color: "#5a5a5a" }}>
            <ListItem button onClick={()=> setDrawer(false)}>
              <ListItemIcon color="primary">
                <HomeIcon className={classes.drawericons} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            </NavLink>
            {/* home listItem end here */}

            <ListItem button 
            // onClick={opendialog1}
            >
              <ListItemIcon color="primary">
                <AccountCircleIcon className={classes.drawericons} />
              </ListItemIcon>
              <ListItemText primary="Login/Signup" />
            </ListItem>
            

            {/* about us listItem start  */}
            <NavLink
              to="/aboutus"
              exact
              style={{ textDecoration: "none", color: "#5a5a5a" }}>
            <ListItem button onClick={()=> setDrawer(false)}>
              <ListItemIcon color="primary">
                <InfoIcon className={classes.drawericons} />
              </ListItemIcon>
              <ListItemText primary="About us" />
            </ListItem>
            </NavLink>
                {/* about us listItem end here */}

              
            <ListItem
              onClick={opendrawerservicemenu}
              disablePadding
              button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ListItemIcon>
                <AppsIcon className={classes.drawericons} />
              </ListItemIcon>
              <ListItemText>Services </ListItemText>
              <ListItemIcon>
               
                 
               
                  <ExpandMoreIcon
                  // className={classNames(classes.menu,{[classes.appbarshit]:open})}
                  //  className={classes.drawerservicedropdowntwoicons}
                   className={classNames(classes.drawerservicedropdowntwoicons,{[classes.drawerservicedropdowntwoiconsback]:drawerservicemenu})}
                  />
                
              </ListItemIcon>
            </ListItem>
            {/* services sub menu start here */}
            <Collapse in={drawerservicemenu}>
              <List
                style={{ paddingLeft: "70px" }}
                disablePadding
                id="simple-menu"
                anchorEl={drawerservicemenu}
                keepMounted
                open={Boolean(drawerservicemenu)}
                onClose={closedrawerservicemenu}
              >
              {/* teacher listitem start here */}
               <NavLink
             to="/teachersubcategray"
               exact
              style={{ textDecoration: "none", color: "#5a5a5a" }}>
            <ListItem button onClick={()=> setDrawer(false)}>
              <ListItemText primary="Tutor Services" />
            </ListItem>
            </NavLink>
            {/* teacher listitem end here */}

                 {/* AC listitem start here */}
               <NavLink
               to="/acsubcategray"
               exact
               style={{ textDecoration: "none", color: "#5a5a5a" }}>
            <ListItem button onClick={()=> setDrawer(false)}>
              <ListItemText primary="AC Services" />
            </ListItem>
            </NavLink>
            {/* AC listitem end here */}

                {/* Home appliance repair listitem start here */}
               <NavLink
             to="/homeapprepair"
               exact
              style={{ textDecoration: "none", color: "#5a5a5a" }}>
            <ListItem button onClick={()=> setDrawer(false)}>
              <ListItemText primary="Home appliance repair Services" />
            </ListItem>
            </NavLink>
            {/* home appliance repair listitem end here */}

                {/* car listitem start here */}
               <NavLink
             to="/carsubcategray"
               exact
              style={{ textDecoration: "none", color: "#5a5a5a" }}>
            <ListItem button onClick={()=> setDrawer(false)}>
              <ListItemText primary="Car Services" />
            </ListItem>
            </NavLink>
            {/* car listitem end here */}
            
                 {/* plumber listitem start here */}
               <NavLink
             to="/plumbersubcategray"
               exact
              style={{ textDecoration: "none", color: "#5a5a5a" }}>
            <ListItem button onClick={()=> setDrawer(false)}>
              <ListItemText primary="Plumbing Services" />
            </ListItem>
            </NavLink>
            {/* plumber listitem end here */}


                 {/* handyman listitem start here */}
               <NavLink
             to="/handymansubcategray"
               exact
              style={{ textDecoration: "none", color: "#5a5a5a" }}>
            <ListItem button onClick={()=> setDrawer(false)}>
              <ListItemText primary="Handymans Services" />
            </ListItem>
            </NavLink>
            {/* handyman listitem end here */}
            
                 {/* electricain listitem start here */}
               <NavLink
             to="/electriciansubcategray"
               exact
              style={{ textDecoration: "none", color: "#5a5a5a" }}>
            <ListItem button onClick={()=> setDrawer(false)}>
              <ListItemText primary="Electrician Services" />
            </ListItem>
            </NavLink>
            {/* electrician listitem end here */}

                 {/* cleaning listitem start here */}
               <NavLink
             to="/cleaningsubcategray"
               exact
              style={{ textDecoration: "none", color: "#5a5a5a" }}>
            <ListItem button onClick={()=> setDrawer(false)}>
              <ListItemText primary="Cleaning Services" />
            </ListItem>
            </NavLink>
            {/* cleaning listitem end here */}

                 {/* carpenter listitem start here */}
               <NavLink
             to="/carpentersubcategray"
               exact
              style={{ textDecoration: "none", color: "#5a5a5a" }}>
            <ListItem button onClick={()=> setDrawer(false)}>
              <ListItemText primary="Carpenter Services" />
            </ListItem>
            </NavLink>
            {/* carpenter listitem end here */}
            
                 {/* painter listitem start here */}
               <NavLink
             to="/paintersubcategray"
               exact
              style={{ textDecoration: "none", color: "#5a5a5a" }}>
            <ListItem button onClick={()=> setDrawer(false)}>
              <ListItemText primary="Painter Services" />
            </ListItem>
            </NavLink>
            {/*  listitem end here */}
              </List>
            </Collapse>
            {/* services sub menu end here */}
             
             {/* contact link start here */}
             <NavLink
              to="/contact"
              exact
              style={{ textDecoration: "none", color: "#5a5a5a" }}>
            <ListItem button onClick={()=> setDrawer(false)}>
              <ListItemIcon>
                <ContactsIcon className={classes.drawericons} />
              </ListItemIcon>
              <ListItemText primary="Contact us" />
            </ListItem>
            </NavLink>
            {/* contact link end here */}

          </List>
        </Drawer>
        {/* Drawer section end here */}
      </AppBar>
    

   
  );
};

export default Navbar;
