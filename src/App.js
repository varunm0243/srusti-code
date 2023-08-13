import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import MainPage from "./pages/mainPage";
import CarouselComponent from "./components/coursel/Coursel";
import IntroductionBox from "./components/content/IntroductionBox";
import InfoCarousel from "./components/coursel/InfoCarousel";
import MultiItemCarousel from "./components/coursel/MultiItemCarousel";
import MultiItemCarouselText from "./components/coursel/MultiItemCarouselOnlyText";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="row">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10">
          <div className="row">
            <IntroductionBox />
            {/* <CarouselComponent /> */}
            <MultiItemCarousel />
            <InfoCarousel />

            <MultiItemCarouselText />

          </div>
          <Footer />
        </div>
      </div>
      
    </div>
  );
}

export default App;
