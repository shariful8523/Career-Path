
import App from "../App";
import Navbar from '../component/Navbar/Navbar';
import Slider from '../component/Slider/slider';
import CardSection from '../component/CardSection/CardSection';
import Footer from "../component/Footer/Footer";

const HomeLayout = (props) => {
    return (
        <div>
           
          <Navbar></Navbar>
          <Slider></Slider>
          <CardSection></CardSection>
          <Footer></Footer>
           
           
        </div>
    );
};

export default HomeLayout;
