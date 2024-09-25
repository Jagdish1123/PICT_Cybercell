import React from "react";
import Earth from "@/components/home_comp/earth"; 
import WebClubUI from "@/components/home_comp/thingwedo"
import NumbersThatMatter from "@/components/home_comp/numberthatmatter"
import CyberHUBLanding from "@/components/home_comp/content"
import EventsCarousel from "@/components/home_comp/event"


const AboutPage: React.FC = () => {
  return (
    <div>
      <Earth />
      <div>
        <CyberHUBLanding/>
        <div className=" bg-white pb-20"><WebClubUI/></div>
        <div ><NumbersThatMatter/></div>
        <EventsCarousel/>
      </div>
    </div>
  );
};

export default AboutPage;

