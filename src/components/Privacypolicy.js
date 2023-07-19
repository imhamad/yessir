import React from 'react';
import { NavLink,Link} from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Hidden,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";

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
 
  // topsection end here
  //main content section start here
  maincontentsection:{
      width:"73%",
      margin:"auto",
      boxShadow:"10px 8px 31px 2px rgba(0, 0, 0, 0.05)",
      padding:"113px 126px",
      justifyContent:"center",
      backgroundColor:"#ffffff",
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
  privacypolicy:{
     margin:"auto",
    //  border:"1px solid red",
     "& h6":{
        fontFamily:"Helvetica",
         fontSize:"26px",
         color:"#41775a",
         fontWeight:"bold",
         fontStyle:"normal",
         [theme.breakpoints.down("sm")]:{
           textAlign:'center',
           lineHeight:"30px",
           fontSize:"23px"          }
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
  sectionmiddle:{
    margin:"auto",
    marginTop:"25px",
    // border:"1px solid red",
    "& h6":{
        fontFamily:"Helvetica",
        fontSize:"26px",
        color:"#41775a",
        fontWeight:"bold",
        fontStyle:"normal",
        [theme.breakpoints.down("sm")]:{
            textAlign:'center',
            lineHeight:"30px",
            fontSize:"23px"         
                                       }
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
  lioffirstmiddlesec:{
    [theme.breakpoints.down("sm")]:{
        textAlign:'justify',
              
                                   }
  },
  protectingandmaintainingpersonelinformation:{
    margin:"auto",
    marginTop:"25px",
    // border:"1px solid red",
    
    "& h6":{
        fontFamily:"Helvetica",
        fontSize:"26px",
        color:"#41775a",
        fontWeight:"bold",
        fontStyle:"normal",
        marginBottom:"15px",
        [theme.breakpoints.down("sm")]:{
            textAlign:'center',
            lineHeight:"30px",
            fontSize:"23px"          
          }
        },
        "& h5":{
          fontSize:"18px",
          lineHeight:"25px",
          fontFamily:"Roboto",
          [theme.breakpoints.down("sm")]:{
            textAlign:'justify',
                  
                                       }
        },
   
  },
  administrativecommunications:{
    margin:"auto",
    marginTop:"25px",
    // border:"1px solid red",
    
    "& h6":{
        fontFamily:"Helvetica",
        fontSize:"26px",
        color:"#41775a",
        fontWeight:"bold",
        fontStyle:"normal",
        marginBottom:"15px",
        [theme.breakpoints.down("sm")]:{
            textAlign:'center',
            lineHeight:"30px",
            fontSize:"23px"          
          }
        },
        "& h5":{
          fontSize:"18px",
          lineHeight:"25px",
          fontFamily:"Roboto",
          [theme.breakpoints.down("sm")]:{
            textAlign:'justify',
                  
                                       }
        },
   
  },
  AccessingPersonalInformation:{
    margin:"auto",
    marginTop:"25px",
    // border:"1px solid red",
    
    "& h6":{
        fontFamily:"Helvetica",
        fontSize:"26px",
        color:"#41775a",
        fontWeight:"bold",
        fontStyle:"normal",
        marginBottom:"15px",
        [theme.breakpoints.down("sm")]:{
            textAlign:'center',
            lineHeight:"30px",
            fontSize:"23px"          
          }
        },
        "& h5":{
          fontSize:"18px",
          lineHeight:"25px",
          fontFamily:"Roboto",
          [theme.breakpoints.down("sm")]:{
            textAlign:'justify',
                  
                                       }
        },
  },
  PrivacyConcerns:{
    margin:"auto",
    marginTop:"25px",
    // border:"1px solid red",
    
    "& h6":{
        fontFamily:"Helvetica",
        fontSize:"26px",
        color:"#41775a",
        fontWeight:"bold",
        fontStyle:"normal",
        marginBottom:"15px",
        [theme.breakpoints.down("sm")]:{
            textAlign:'center',
            lineHeight:"30px",
            fontSize:"23px"          
          }
        },
        "& h5":{
          fontSize:"18px",
          lineHeight:"25px",
          fontFamily:"Roboto",
          [theme.breakpoints.down("sm")]:{
            textAlign:'justify',
                  
                                       }
        },
   
  },
  Deliverypolicy:{
    margin:"auto",
    marginTop:"25px",
    // border:"1px solid red",
    
    "& h6":{
        fontFamily:"Helvetica",
        fontSize:"26px",
        color:"#41775a",
        fontWeight:"bold",
        fontStyle:"normal",
        marginBottom:"15px",
        [theme.breakpoints.down("sm")]:{
            textAlign:'center',
            lineHeight:"30px",
            fontSize:"23px"          
          }
        },
        "& h5":{
          fontSize:"18px",
          lineHeight:"25px",
          fontFamily:"Roboto",
          [theme.breakpoints.down("sm")]:{
            textAlign:'justify',
                  
                                       }
        },
   
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


}));

const Privacypolicy = () => {
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
          

          <Typography variant="h5">Privacy policy</Typography>
          <Typography variant="h4">
          By accessing or using the Platform, you agree to this Policy. If you do not agree to this policy, please do not access or use the platform.
          </Typography>
        </Box>
          {/* top section end here */}
       
           {/* main content section start here */}
           <Box className={classes.maincontentsection}>
          <Box className={classes.privacypolicy}>
              <Typography variant="h6">Privacy Policy</Typography>
              <Typography variant="h5">
              This Privacy Policy describes how YesSir handles your personal information and sets out the rights and obligations that both you and YesSir have in relation to your personal information.
               By accessing http://yessir-pk.com/ (the "Site") you accept and agree to the terms and conditions of YesSir’s user agreement ("User Agreement"), which includes your consent to, and authorization of, the collection, use and disclosure of your personal information in accordance with this Privacy Policy. Note that under YesSir's terms and conditions of use, you must not use the Site if you are under 18 years old.

            </Typography>
              
          </Box>
          <Box className={classes.sectionmiddle}>
              <Typography variant="h6">
              Collection and Use of Your Personal Information
              </Typography>
              <Typography variant="h5">
              YesSir provides a unique, innovative, community-based online outsourcing service. A failure by you to provide information requested by us may mean that We are unable to provide some or all of our services to you.
              YesSir collects personal information when you register with and use YesSir. This may include, but is not limited to, your name, address, phone number, contact details,  gender for verification services. We might also give you the option of providing a photo or video to be associated with your YesSir user ID. If your personal details change, it is your responsibility to update your YesSir account with those changes, so that We can keep our records complete, accurate and up to date.
              You are not anonymous to us when you log into the Site or post any content (including bookings, items to be supplied, bids, comments or feedback) on the Site or any associated forum. To enable us to improve our existing services and to create new service features, YesSir may collect, and share with other users and service providers on YesSir, information about the way you use our services, your feedback rating (including any references requested using our 'Reference' feature), the bids you make, the comments you post.
              <br></br>
              when you:
              <ul>
              <li className={classes.lioffirstmiddlesec}>
              	use the Site to post a bookings or item to be supplied, or make a bid, or comment on a bid, or provide feedback on other users; or
                  </li>
                  <li className={classes.lioffirstmiddlesec}>
                  	otherwise communicate in a public forum on the Site,
                  </li>
              </ul>
              your user ID and all the material that you post is visible to other YesSir users and is also publicly available to other internet users. We strongly encourage you to use caution and discretion when posting. YesSir does not in any way control, and does not accept any responsibility or liability whatsoever for, the disclosure or use of personal information which is voluntarily posted by you in any publicly accessible area of the Site.
            YesSir may also receive and record information from your internet browser and computer, including IP addresses, cookies (see section 2 below), software and hardware attributes and your page requests.
            In addition to data collected from your submissions, we may also collect data on your internet behavior from Facebook, other social media sites, and other services. If you use a location- enabled YesSir service, We may collect and process information about your actual location (for example, GPS signals sent by your mobile device). We may also use a range of different technologies to confirm your location.
              YesSir may use the information collected by it to provide the YesSir Services, including (but not limited to):
            <ul>
              <li>to protect YesSir and the users of the Site;</li>
             <li>	to customize the content and any advertising displayed on the Site.</li>
            <li>	to provide, maintain, protect and improve our services.</li>
       <li>providing your information to a user with whom you have or had a contract facilitated by YesSir;</li>
 <li>as required by law, an order of a court, tribunal or regulator or if YesSir reasonably believes that the use or disclosure of the information is reasonably necessary for enforcement related activities;</li>
<li>to develop new service features;</li>
<li>to ensure that YesSir receives payment of the fees due to it;</li>
<li>to contact you (for example, to inform you about upcoming changes or improvements to our services);</li>
<li>to conduct research;</li>
<li>to permit content on the Site (such as postings or third party advertisements) to be targeted, on an aggregate basis, to the users for whom it is most likely to be relevant;</li>
<li>to expand our user base;</li>
<li>to develop our relationships with affiliate service providers;</li>
<li>to provide or arrange internal or external verification services obtained by you via the Site; and</li>
<li>to generate data reports on an aggregated, non-personally identifiable basis, for both internal and third party use, but subject to any applicable laws (for example, We may show advertisers or investors trends relating to the general use of YesSir's services).</li>

            </ul>


            </Typography>
          </Box>
          <Box className={classes.protectingandmaintainingpersonelinformation}>
          <Typography variant="h6">Protecting and Maintaining Personal Information</Typography>
          <Typography variant="h5">
          Your account is protected by a password for your privacy and security. We will take all reasonable steps to protect the information We hold about you from unauthorized access, use, and disclosure, however, We cannot guarantee the absolute security of that information, or that our systems will be completely free from third party interception or are incorruptible from viruses. We cannot and do not guarantee that information you send from your computer to us over the Internet will be protected by any form of encryption (encoding software). In light of this, We cannot and do not ensure or warrant the security or privacy of your personal information, including payment and account details. You transmit your personal information to us at your own risk.
          You are entirely responsible for maintaining the security of your passwords and/or account information.
 
          </Typography>
          </Box>
          <Box className={classes.administrativecommunications}>
          <Typography variant="h6">Administrative Communications</Typography>
          <Typography variant="h5">
          YesSir reserves the right to send you administrative and account-related messages that you may not opt-out of. To cease all communications to you from YesSir you must close down your YesSir account.
 
          </Typography>
          </Box>
          <Box className={classes.AccessingPersonalInformation}>
          <Typography variant="h6">Accessing Personal Information</Typography>
          <Typography variant="h5">
          We will allow you, at any time, to access, edit, update and/ or delete the personal information that We hold about you, unless:
         We are legally permitted or required to deny you access to, and/ or to retain, the information; or you make request(s) that are unreasonably repetitive, require YesSir to make a disproportionate technical effort (for example, to develop an entirely new system), risk the privacy of others, or would be highly impractical to comply with.
        If you wish to access the personal information We hold about you, or to delete your YesSir account, you should contact us here.
        We need to prevent information in our systems from being accidentally or maliciously destroyed. This means that, where you delete information from our services, residual copies of that information on our active servers, as well as any corresponding information on our back-up systems, may not be immediately deleted.

 
          </Typography>
          </Box>
          <Box className={classes.PrivacyConcerns}>
          <Typography variant="h6">Privacy Concerns</Typography>
          <Typography variant="h5">
          If you have concerns about how We handle your personal information or require further information, please email YesSir using the contact form provided on the Site. If you make a formal written complaint in relation to our compliance with this Privacy Policy, We will contact you to follow up on that complaint. Other than material that you voluntarily choose to post on the Site (such as Sender postings, bids and comments on other users), the only information about you that We will post publicly is your YesSir public profile.
         YesSir may, from time to time, modify this Privacy Policy (and update the web page on which it is displayed). YesSir will send notification of any such modification to your YesSir account and/or your registered email address. You should check that account regularly.

 
          </Typography>
          </Box>
          <Box className={classes.Deliverypolicy}>
          <Typography variant="h6">Delivery Policy</Typography>
          <Typography variant="h5">
          YesSir partner arrived on the task location in hour from booking time

 
          </Typography>
          </Box>
          <Box className={classes.typobtnsection}>
          <Typography variant="h6">Have a question?</Typography>
          <Button className={classes.contactbtn}
          onClick={scrolltotop}
          component={Link}
          to="/contact"
          exact
          style={{ textDecoration: "none",  color: "#ffffff",}}
          >Contact us</Button>
         
         
          </Box>
           </Box>
               {/* main content section end here */}
     
       
      
        
       <Footersec/>

      
      </Box> 
      
    </>
  );
}

export default Privacypolicy;
