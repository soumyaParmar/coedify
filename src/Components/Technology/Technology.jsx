import React from "react";
import reactlogo from  "./download.png";
import angular from "./angular.png"
import {FiDatabase} from "react-icons/fi"
import flutter from "./flutter.png"
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { ImMobile } from "react-icons/im";
// import {DiReact} from "react-icons/di"
import { SiMaterialdesign, SiNodeRed } from "react-icons/si";
import { GoSettings } from "react-icons/go";
import "./Technology.css";
import { BsCodeSlash } from "react-icons/bs";
import TechCard from "./TechCard";
function Technology() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTab = (e, val) => {
    setSelectedTab(val);
  };
  return (
    <div id="technology" className="technology">
      <AppBar position="static" color="default">
        <Tabs
          value={selectedTab}
          onChange={handleTab}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Frontend" icon={<BsCodeSlash />} />
          <Tab label="Backend" icon={<SiNodeRed />} />
          <Tab label="Mobile" icon={<ImMobile />} />
          <Tab label="Design" icon={<SiMaterialdesign />} />
          <Tab label="Testing" icon={<GoSettings />} />
          <Tab label="Database" icon={<FiDatabase />} />
        </Tabs>
      </AppBar>
      <TabPanel value={selectedTab} index={0}>
        <FrontEnd/>
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <BackEnd/>
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        <Mobile/>
      </TabPanel>
      <TabPanel value={selectedTab} index={3}>
        <Design/>
      </TabPanel>
      <TabPanel value={selectedTab} index={4}>
        <Testing/>
      </TabPanel>
      <TabPanel value={selectedTab} index={5}>
        <Database/>
      </TabPanel>
    </div>
  );
}
function TabPanel(props) {
  const { children, value, index } = props;
  return <>{value === index && <>{children}</>}</>;
}


function FrontEnd(){
    return (
        <>
        <div className="technos">
       <TechCard name="ReactJs" logo={reactlogo}/>
       <TechCard name="Angular" logo={angular}/>
       <TechCard name="VueJs" logo={flutter}/>
       </div>
        </>
    )
}

function BackEnd(){
    return (
        <>
       <div className="technos">
       <TechCard name="NodeJs" logo={reactlogo}/>
       <TechCard name="Firebase" logo={angular}/>
       <TechCard name="PHP" logo={flutter}/>
       <TechCard name="Express" logo={flutter}/>
       </div>
        </>
    )
}

function Mobile(){
    return (
        <>
       <div className="technos">
       <TechCard name="React Native" logo={reactlogo}/>
       <TechCard name="Flutter" logo={flutter}/>
       </div>
        </>
    )
}

function Design(){
    return (
        <>
       <div className="technos">
       <TechCard name="ReactJs" logo={reactlogo}/>
       <TechCard name="Angular" logo={angular}/>
       <TechCard name="Flutter" logo={flutter}/>
       </div>
        </>
    )
}


function Testing(){
    return (
        <>
       <div className="technos">
       <TechCard name="ReactJs" logo={reactlogo}/>
       <TechCard name="Angular" logo={angular}/>
       <TechCard name="Flutter" logo={flutter}/>
       </div>
        </>
    )
}
function Database(){
    return (
        <>
       <div className="technos">
       <TechCard name="ReactJs" logo={reactlogo}/>
       <TechCard name="Angular" logo={angular}/>
       <TechCard name="Flutter" logo={flutter}/>
       </div>
        </>
    )
}
export default Technology;
