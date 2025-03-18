import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benifits";
import Button from "./components/Button";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";





const App = () => {
  return (
    <>
  <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
     <Header/>
     <HeroSec/>
     <Benefits/>
     <Collaboration/>
     <Services/>
     <Pricing/>
     <Roadmap/>
    <Footer/>
    

    
  </div>
  <ButtonGradient/>
    </>
   
  )
}

export default App
