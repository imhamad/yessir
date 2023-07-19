import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from "react-router-dom";
// import IconButton from '@mui/material/IconButton';
import greenlogo from "../assets/greenlogo.png";
import DeleteIcon from '@material-ui/icons/Delete';
import CachedIcon from '@material-ui/icons/Cached';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  AppBar,
  Typography,
  Box,
  Tab,
  Tabs,
  TextField,
  Button,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  IconButton,


} from "@material-ui/core";
const UseStyles = makeStyles((theme) => ({
  root:{
    marginTop:theme.spacing(11)
  },
  logo: {
    width: "106px",
    height: "38px",
    display:"flex",
    flexDirection:"",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "35px",
    lineHeight: "25px",
    alignItems:'center',
    marginLeft:"110px",
    // flexGrow:0,
    //  border:"1px solid blue",
    color: "#000000",
    // border: "1px solid blue",
    [theme.breakpoints.down("md")]: {},
  },
  appbar:{
    height:"60px",
    background:"#EEF9F3",
    display:"flex",
    justifyContent:"space-between"
  },
//   form start here
  form: {
    width: "100%",
    margin: "auto",
    // backgroundColor: "#F9F9F9",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
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
   
  },
 signupbtn:{
  marginTop: "26px",
  width: "398px",
  height: "55px",
  padding: "6px 33px",
  background:"#165834",
  borderRadius: "4px",
  color: "#ffffff",
  lineHeight: "25px",
  fontSize: "18px",
  textTransform: "capitalize",
  "&:hover":{background:"#165834"},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {
    width: "75%",
    height: "40px",
    marginTop: "18px",
    fontSize: "16px",
  },
 },
  textFieldStyle: {
    width: "60%",
    background: "#EFEFEF",
    marginTop: "26px",
    // height: "40px",
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
//   form end here
 }))
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const Userpanel = () => {
    const classes = UseStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Box className={classes.root}
    // sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    style={{display:"flex",width:"100%",flexDirection:"column",}}
  >
   {/* <AppBar position="fixed" className={classes.appbar}>
    <Toolbar style={{display:"flex" ,justifyContent:"space-between"}}>
       <Box className={classes.logo}>
              <img src={greenlogo} style={{width:"100%",height:"100%"}} alt="logoimg"/>
            </Box>
            <Typography style={{color:"rgb(0, 179, 148)",fontSize:"22px",marginRight:"100px"}}>User panel</Typography>
      <Toolbar>
        <IconButton  
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </Toolbar>
    </AppBar> */}
    <Box style={{display:"flex",width:"100%",}}>
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      // sx={{ borderRight: 1, borderColor: 'divider' }}
      style={{width:"15%",background:"white",border:"1px solid black",height:"100%"}}
    >
      <Tab label="Dashboard" {...a11yProps(0)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Pages" {...a11yProps(1)}style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Table" {...a11yProps(2)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Blogs" {...a11yProps(3)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Careers" {...a11yProps(4)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Real Estate" {...a11yProps(5)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Packages" {...a11yProps(6)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Accounts" {...a11yProps(6)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Contacts" {...a11yProps(6)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Payments" {...a11yProps(6)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Locations" {...a11yProps(6)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Media" {...a11yProps(6)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Appearance" {...a11yProps(6)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Plugins" {...a11yProps(6)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Tranlations" {...a11yProps(6)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Settings" {...a11yProps(6)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
      <Tab label="Platform Administration" {...a11yProps(6)} style={{background:"rgb(94, 193, 147)",color:"white",textTransform:"capitalize",fontSize:"18px"}}/>
    </Tabs>
   
    <Box style={{padding:"none",border:"1px solid blue",width:"85%",height:"100%"}}>
    <TabPanel value={value} index={0} style={{width:"85%",background:"white",}}>
      Item Onejdkjs das fkjasfjd0aps dasj fafj asdfjask akfjkafjaos fasadfoj fajfoa asdfjsjo
    </TabPanel>
    <TabPanel value={value} index={1} style={{width:"85%",background:"white",}}>
    
     <Box className={classes.form}>
        {/* <Typography variant="h6">Personal Details</Typography> */}
        <TextField
          className={classes.textFieldStyle}
          placeholder="You full name"
          label="Name"
          variant="outlined"
          // size="small"
        />
        <TextField
          className={classes.textFieldStyle}
          placeholder="your contact no e.g 03329191292"
          label="Contact nunber"
          variant="outlined"
          // helperText="maximum 11 digits!"
          // size="small"
        />
        <TextField
          className={classes.textFieldStyle}
          placeholder="please insert your password!"
          label="Password"
          variant="outlined"
          // size="small"
        />
        <Button className={classes.signupbtn} 
      //   component={Link} 
      //   to="/otpverification" exact style={{textDecoration:"none",}}
        >
        Signup</Button>
      </Box>

    </TabPanel>
    <TabPanel value={value} index={2} style={{width:"85%",background:"white",padding:"none"}}>
     <TableContainer component={Paper} style={{width:"100%"}}>
         <TableHead style={{background:"#fafbfd",}}>
             <TableRow>
                <TableCell style={{fontSize:"18px",color:"#CECED1"}}>ID</TableCell>
                <TableCell style={{fontSize:"18px",color:"#CECED1"}}>Service Type</TableCell>
                <TableCell style={{fontSize:"18px",color:"#CECED1"}}>Sub Service</TableCell>
                <TableCell style={{fontSize:"18px",color:"#CECED1"}}>Address</TableCell>
                <TableCell style={{fontSize:"18px",color:"#CECED1"}}>Date</TableCell>
                <TableCell style={{fontSize:"18px",color:"#CECED1"}}>Time</TableCell>
                <TableCell style={{fontSize:"18px",color:"#CECED1"}}>Cost</TableCell>
                <TableCell colSpan={3} style={{fontSize:"18px",color:"#CECED1",textAlign:"center"}}>Operations</TableCell>
             </TableRow>
         </TableHead>
         <TableBody>
         <TableRow>
                <TableCell style={{fontSize:"18px",color:"black"}}>23</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>AC Service</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>AC Repairing</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>street 02 phase-3 Hayatabad</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>33/04/2020 </TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>12:34pm</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>RS 1500</TableCell>
                <TableCell>
                <IconButton 
                 style={{background:"rgb(69, 151, 188)",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <EditIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
                <TableCell> 
                <IconButton 
                 style={{background:"red",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <DeleteIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
                <TableCell>
                <IconButton 
                 style={{background:"#3AA1B6",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <CachedIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
               
                <TableCell></TableCell>
             </TableRow>
             <TableRow>
                <TableCell style={{fontSize:"18px",color:"black"}}>23</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>AC Service</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>AC Repairing</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>street 02 phase-3 Hayatabad</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>33/04/2020 </TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>12:34pm</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>RS 1500</TableCell>
                <TableCell>
                <IconButton 
                 style={{background:"rgb(69, 151, 188)",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <EditIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
                <TableCell> 
                <IconButton 
                 style={{background:"red",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <DeleteIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
                <TableCell>
                <IconButton 
                 style={{background:"#3AA1B6",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <CachedIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
               
                <TableCell></TableCell>
             </TableRow>
             <TableRow>
                <TableCell style={{fontSize:"18px",color:"black"}}>23</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>AC Service</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>AC Repairing</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>street 02 phase-3 Hayatabad</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>33/04/2020 </TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>12:34pm</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>RS 1500</TableCell>
                <TableCell>
                <IconButton 
                 style={{background:"rgb(69, 151, 188)",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <EditIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
                <TableCell> 
                <IconButton 
                 style={{background:"red",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <DeleteIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
                <TableCell>
                <IconButton 
                 style={{background:"#3AA1B6",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <CachedIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
               
                <TableCell></TableCell>
             </TableRow>
             <TableRow>
                <TableCell style={{fontSize:"18px", color:"black"}}>25</TableCell>
                <TableCell style={{fontSize:"18px", color:"black"}}>AC Service</TableCell>
                <TableCell style={{fontSize:"18px", color:"black"}}>AC Repairing</TableCell>
                <TableCell style={{fontSize:"18px", color:"black"}}>street 02 phase-3 Hayatabad</TableCell>
                <TableCell style={{fontSize:"18px", color:"black"}}>33/04/2020 </TableCell>
                <TableCell style={{fontSize:"18px", color:"black"}}>12:34pm</TableCell>
                <TableCell style={{fontSize:"18px", color:"black"}}>RS 1500</TableCell>
                <TableCell>
                <IconButton 
                 style={{background:"rgb(69, 151, 188)",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <EditIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
                <TableCell> 
                <IconButton 
                 style={{background:"red",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <DeleteIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
                <TableCell>
                <IconButton 
                 style={{background:"#3AA1B6",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <CachedIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
               
                <TableCell></TableCell>
             </TableRow>
             <TableRow>
                <TableCell style={{fontSize:"18px",color:"black"}}>23</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>AC Service</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>AC Repairing</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>street 02 phase-3 Hayatabad</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>33/04/2020 </TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>12:34pm</TableCell>
                <TableCell style={{fontSize:"18px",color:"black"}}>RS 1500</TableCell>
                <TableCell>
                <IconButton 
                 style={{background:"rgb(69, 151, 188)",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <EditIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
                <TableCell> 
                <IconButton 
                 style={{background:"red",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <DeleteIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
                <TableCell>
                <IconButton 
                 style={{background:"#3AA1B6",height:"35px",width:"35px",borderRadius:"5px",}}>
                   <CachedIcon style={{color:"white"}}/>   
                </IconButton>
                </TableCell>
               
                <TableCell></TableCell>
             </TableRow>
         </TableBody>
     </TableContainer>
    </TabPanel>
    <TabPanel value={value} index={3} style={{width:"85%",background:"white",}}>
      Item Four
    </TabPanel>
    <TabPanel value={value} index={4} style={{width:"85%",background:"white",}}>
      Item Five
    </TabPanel>
    <TabPanel value={value} index={5} style={{width:"85%",background:"white",}}>
      Item Six
    </TabPanel>
    <TabPanel value={value} index={6} style={{width:"100%",padding:"-5",background:"white",with:"100%"}}>
      <Typography style={{height:"740px",border:"1px solid red"}}>Packages</Typography>
      <Box style={{width:"100%",height:"50px",background:"#eef1f5",border:"1px solid red",display:"flex",alignItems:"center"}}>Copyrights 2021</Box>
    </TabPanel>
    
    </Box>
    
    </Box>
  
  </Box>
 
  );
}

export default Userpanel;
