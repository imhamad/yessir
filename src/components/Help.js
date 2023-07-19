import * as React from 'react';
import { NavLink,Link} from "react-router-dom";
import {
  Box,
  Typography,


} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";




//pictures
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Footersec from "./Footersec";

const UseStyles = makeStyles((theme) => ({
    whitebg: {
      width: " 100%",
      // height: "220px",
      background: "#FFFFFF",
      marginTop:"100px",
     
    },
    // top section start here
    topsection: {
      height: "400px",
      backgroundColor:"#EEF9F3",
      marginBottom: "40px",
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
    
    // topsection end here
    //main content section start here
    maincontentsection:{
        width:"85%",
        flexWrap:"wrap",
        margin:"auto",
        boxShadow:"10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
        padding:"80px 60px",
        justifyContent:"center",
        backgroundColor:"#ffffff",
        height:"2000px",
        marginBottom:"140px",
        marginTop:"140px",
        display:"flex",
        justifyContent:"space-evenly",


        [theme.breakpoints.down("md")]:{
            width:"70%",
          padding:"80px 90px",
        },
        [theme.breakpoints.down("sm")]:{
            width:"62%",
          padding:"50px 60px",
        },
        [theme.breakpoints.down("xs")]:{
          width:"53%",
          padding:"40px 50px",
        }
  
    },
    accordin:{
      width:"400px",
      [theme.breakpoints.down("md")]:{
        width:"300px"
    },
    [theme.breakpoints.down("sm")]:{
       with:"250px"
    },
    [theme.breakpoints.down("xs")]:{
      with:"200px"
    },
      //  border:"1px solid red",
       "& h6":{
       height:"40px",display:"flex",alignItems:"center",
        fontWeight:"bold",fontSize:"20px",
          fontFamily:"Helvetica",
          
          //  color:"#41775a",
           fontWeight:"bold",
           fontStyle:"normal",
           [theme.breakpoints.down("sm")]:{
            //  textAlign:'center',
             lineHeight:"30px",
             fontSize:"20px"          },
             [theme.breakpoints.down("xs")]:{
              // color:"red",
              fontSize:"20px"          
            }
           }
      
    },
  
  typobtnsection:{
      // margin:"auto",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      "& h6":{
          fontSize:"45px",
          fontWeight:"bold",
          fontStyle:"normal",
          fontFamily:"Roboto",
          lineHeight:"60px",
          height:"60px",
          width:"348px",
          marginTop:"108px",
          margin:"auto",
          cursor:"pointer",
          [theme.breakpoints.down("sm")]:{
              fontSize:"40px",
          lineHeight:"40px",
          height:"40px",
          width:"348px",
          marginTop:"80px",
         alignSelf:"center",
      //    border:"1px solid blue",
         textAlign:'center'
       },
       [theme.breakpoints.down("xs")]:{
          fontSize:"35px",
         lineHeight:"40px",
         height:"40px",
         width:"300px",
         marginTop:"60px",
  //    border:"1px solid blue",
        textAlign:'center'}
  
      },
  
        
              
  },
  contactbtn:{
      margin:"auto",
          padding:"6px 33px",
          width:"200px",
          height:"55px",
          background:"#165834",
          color:"#ffffff",
          borderRadius:"4px",
          fontFamily: "Helvetica",
          fontStyle: "normal",
          fontWeight:"bold",
          fontSize: "18px",
          lineHeight: "30px",
          marginTop:"30px",
          textTransform:"lowercase",
          "&:hover":{
              background:"#165834",
          },
          [theme.breakpoints.down("sm")]:{
              lineHeight:"25px",
              height:"50px",
              width:"170px",
              fontSize:"16px"
          },
          [theme.breakpoints.down("sm")]:{
              lineHeight:"25px",
              height:"40px",
              width:"150px",
              fontSize:"16px"
          }
  
  },
    // main content section end here
  
    //footer section start here
    
  }));

const Help = () => {
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
    const [accordon, Setaccordon] = React.useState(false);
    const openaccordon = (event) => {
      Setaccordon(!accordon);
    };
    const closeaccordon = () => {
      Setaccordon(false);
    };
    // menu of small screen end here
    const scrolltotop=() =>{
      window.scrollTo(0, 0);
    };
    // const [expanded, setExpanded] = React.useState<string | false>(false);

    // const handleChange =
    //   (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    //     setExpanded(isExpanded ? panel : false);
    //   };
  return (
      <>
        <Box className={classes.whitebg}>
      {/* top section start here */}
        <Box className={classes.topsection}>
          

          <Typography variant="h5">Help portion!</Typography>
          <Typography variant="h4">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          </Typography>
        </Box>
          {/* top section end here */}
       
           {/* main content section start here */}
           <Box className={classes.maincontentsection}>
          
      <Box className={classes.accordin}>
      <Accordion style={{boxShadow:"none"}} onClose={closeaccordon}>
        <AccordionSummary onClick={openaccordon}
        style={{border:"1px solid black",borderRadius:"5px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Best time to get our service?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:"1px solid black",borderRadius:"5px"}}>
          <Typography style={{padding:"5px",color:"black",fontSize:"20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box className={classes.accordin}>
      <Accordion style={{boxShadow:"none"}}>
        <AccordionSummary style={{border:"1px solid black",borderRadius:"5px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Best time to get our service?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:"1px solid black",borderRadius:"5px"}}>
          <Typography style={{padding:"5px",color:"black",fontSize:"20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box className={classes.accordin}>
      <Accordion style={{boxShadow:"none"}}>
        <AccordionSummary style={{border:"1px solid black",borderRadius:"5px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Best time to get our service?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:"1px solid black",borderRadius:"5px"}}>
          <Typography style={{padding:"5px",color:"black",fontSize:"20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box className={classes.accordin}>
      <Accordion style={{boxShadow:"none"}}>
        <AccordionSummary style={{border:"1px solid black",borderRadius:"5px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Best time to get our service?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:"1px solid black",borderRadius:"5px"}}>
          <Typography style={{padding:"5px",color:"black",fontSize:"20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box className={classes.accordin}>
      <Accordion style={{boxShadow:"none"}}>
        <AccordionSummary style={{border:"1px solid black",borderRadius:"5px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Best time to get our service?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:"1px solid black",borderRadius:"5px"}}>
          <Typography style={{padding:"5px",color:"black",fontSize:"20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box className={classes.accordin}>
      <Accordion style={{boxShadow:"none"}}>
        <AccordionSummary style={{border:"1px solid black",borderRadius:"5px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Best time to get our service?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:"1px solid black",borderRadius:"5px"}}>
          <Typography style={{padding:"5px",color:"black",fontSize:"20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box className={classes.accordin}>
      <Accordion style={{boxShadow:"none"}}>
        <AccordionSummary style={{border:"1px solid black",borderRadius:"5px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Best time to get our service?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:"1px solid black",borderRadius:"5px"}}>
          <Typography style={{padding:"5px",color:"black",fontSize:"20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspvariant="h6"endisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
   
           </Box>
               {/* main content section end here */}
     
       
      
        
        {/* footer section start here */}

       <Footersec/>

        {/* footer section end here */}
      </Box> 
      </>
    
      
     
    
  );
}

export default Help;
