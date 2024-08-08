import Header from "../../components/homepage-components/header/Header";
import HeroBanner from "../../components/homepage-components/herobanner/HeroBanner";
import Slider from "../../components/homepage-components/slider/Slider";
import individualHitProducts from "../../components/homepage-components/slider/individualhitproducts-data"
import groupHitProducts from "../../components/homepage-components/slider/grouphitproducts-data";

import Gift from "../../components/homepage-components/gift/Gift";
import About from "../../components/homepage-components/about/About";
import ScrollingBar from "../../components/homepage-components/scrollingbar/ScrollingBar";
import Contact from "../../components/homepage-components/contact/Contact";
import CSAvatar from "../../components/loggedinpages-components/loggedin-public/cs-avatar/CSAvatar";

export default function Homepage() {

  return (
  <>
    <div className="relative">
      <Header whichPageNow="homepage" />
      <HeroBanner />
      <ScrollingBar />
      {/* <Slider
        title="保護您的生活起居"
        objectsArray={individualHitProducts}
      />
      <Slider
        title="保障您的團體利益"
        objectsArray={groupHitProducts}
      /> */}
      <Gift />
      <About />
      <Contact />
    </div>
    
    <CSAvatar />
  </>
  )
}