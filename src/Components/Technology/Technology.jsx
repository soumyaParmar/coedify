import React from "react";
import {FiDatabase} from "react-icons/fi";
import {Angular,Reactjs,Vue,Next,Nodejs,Express,Firebase,Graphql, Php, Laravel, SpringBoot, Dotnet, Django, Flutter, Native, Figma, Adobe, Jest, Cypress, Seleniun, Mysql, Mongodb, Postgress, Sqlserver } from "./logos/imports";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { ImMobile } from "react-icons/im";
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
       <TechCard name="ReactJs" logo={Reactjs}/>
       <TechCard name="Angular" logo={Angular}/>
       <TechCard name="VueJs" logo={Vue}/>
       <TechCard name="NextJs" logo={Next}/>
       </div>
        </>
    )
}

function BackEnd(){
    return (
        <>
       <div className="technos">
       <TechCard name="NodeJs" logo={Nodejs}/>
       <TechCard name="Express" logo={Express}/>
       <TechCard name="Firebase" logo={Firebase}/>
       <TechCard name="PHP" logo={Php}/>
       <TechCard name="GraphQl" logo={Graphql}/>
       <TechCard name="Laravel" logo={Laravel}/>
       <TechCard name="Spring Boot" logo={SpringBoot}/>
       <TechCard name=".net" logo={Dotnet}/>
       <TechCard name="Django" logo={Django}/>
       </div>
        </>
    )
}

function Mobile(){
    return (
        <>
       <div className="technos">
       <TechCard name="React Native" logo={Native}/>
       <TechCard name="Flutter" logo={Flutter}/>
       </div>
        </>
    )
}

function Design(){
    return (
        <>
       <div className="technos">
       <TechCard name="Figma" logo={Figma}/>
       <TechCard name="Adobe XD" logo={Adobe}/>
       </div>
        </>
    )
}


function Testing(){
    return (
        <>
       <div className="technos">
       <TechCard name="Jest" logo={Jest}/>
       <TechCard name="Cypress" logo={Cypress}/>
       <TechCard name="Seleniun" logo={Seleniun}/>
       </div>
        </>
    )
}

function Database(){
    return (
        <>
       <div className="technos">
       <TechCard name="MySql" logo={Mysql}/>
       <TechCard name="MongoDb" logo={Mongodb}/>
       <TechCard name="Postgress Sql" logo={Postgress}/>
       <TechCard name="Sql Server" logo={Sqlserver}/>
       </div>
        </>
    )
}
export default Technology;
