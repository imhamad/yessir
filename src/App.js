// import React, { useState } from "react";
//  owl carousel links start here
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// owl carousel links end here

import { BrowserRouter, Route} from "react-router-dom";


import Navbar from "./components/Navbar";
// import { ThemeProvider } from "@material-ui/styles";
// import theme from "./Theme";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";
import Profilepage from "./components/Profilepage";
import Termsonditionpage from "./components/Termsonditionpage";
import Privacypolicy from "./components/Privacypolicy";
import Help from "./components/Help";

import Adminpanel from "./Databasetable/Adminpanel";
import Userpanel1 from "./Databasetable/Userpanel1";




import Datetime from "./components/Datetime";
import Loginregister from "./components/Loginregister";
import ACservicespersonaldetail from "./components/ACservicespersonaldetail";
import OTPverification from "./components/OTPverification";
import Chooseaddress from "./components/Chooseaddress";
import Chooseaddress1 from "./components/Chooseaddress1";
import Placeyourorder from "./components/Placeyourorder";

// subcategray pages
import Teachersubcategray from './components/Teachersubcategray';
import ACsubcategray from "./components/ACsubcategray";
import Homeapprepair from "./components/Homeapprepair";
import Carsubcategray from "./components/Carsubcategray";
import Plumbersubcategray from "./components/Plumbersubcategray";
import Handymansubcategray from './components/Handymansubcategray';
import Electriciansubcategray from './components/Electriciansubcategray';
import Cleaningsubcategray from './components/Cleaningsubcategray';
import Carpentersubcategray from './components/Carpentersubcategray';
import Paintersubcategray from './components/Paintersubcategray';
import { makeStyles } from "@material-ui/core/styles";
// import HideAppBar from "./components/HideAppBar";

// const UseStyles = makeStyles((theme) => ({
//   root:{
//     width:"100vw",
//     height:"1000vh",
//     backgroundColor:theme.palette.grey[800],
   
//   }
// }));


function App() {
  
  // const classes = UseStyles();
  // const [selectedMode, setSelectedMode] = useState("teacherservice");
  return (
    <>
    <BrowserRouter>

    <Navbar />
    {/* <HideAppBar /> */}
  
    
      {/* <ThemeProvider theme={theme}> */}
          <Route exact path="/" component={Home}  />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/aboutus" component={Aboutus}/>
          <Route exact path="/profilepage" component={Profilepage}/>
          <Route exact path="/adminpanel" component={Adminpanel}/>
          <Route exact path="/userpanel1" component={Userpanel1}/>
          <Route exact path="/termsconditionpage" component={Termsonditionpage}/>
          <Route exact path="/privacypolicy" component={Privacypolicy}/>
          <Route exact path="/help" component={Help}/>
          
         <Route exact path="/datetime" component={Datetime} />
          <Route exact path="/loginregister" component={Loginregister}/> 
           <Route exact path="/acservicespersonaldetail" component={ACservicespersonaldetail}/> 
          <Route exact path="/otpverification" component={OTPverification}/>
          <Route exact path="/chooseaddress" component={Chooseaddress}/>
          <Route exact path="/chooseaddress1" component={Chooseaddress1}/>
          <Route exact path="/placeyourorder" component={Placeyourorder}/>
                    {/* subcategray pages */}
          <Route exact path="/teachersubcategray" component={Teachersubcategray}/>
          <Route exact path="/acsubcategray" component={ACsubcategray}/>
          <Route exact path="/homeapprepair" component={Homeapprepair}/>
          <Route exact path="/carsubcategray" component={Carsubcategray}/>
          <Route exact path="/plumbersubcategray" component={Plumbersubcategray}/>
          <Route exact path="/handymansubcategray" component={Handymansubcategray}/>
          <Route exact path="/electriciansubcategray" component={Electriciansubcategray}/>
          <Route exact path="/cleaningsubcategray" component={Cleaningsubcategray}/>
          <Route exact path="/carpentersubcategray" component={Carpentersubcategray}/>
          <Route exact path="/paintersubcategray" component={Paintersubcategray}/>


         
         
      {/* </ThemeProvider> */}
    
    </BrowserRouter>
    </>
  );
}

export default App;
