import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './asset/image/banner.svg';
import './asset/css/HeaderSlider.css';

export default function SearchAppBar() {
    return (
    <Carousel>
    <Carousel.Item interval={5000}>
    <img src={logo} className="banner" alt="logo" />
        
    </Carousel.Item>
    <Carousel.Item interval={5000}>
    <img src={logo} className="banner" alt="logo" />
        
    </Carousel.Item>
    <Carousel.Item interval={5000}>
    <img src={logo} className="banner" alt="logo" />
        
    </Carousel.Item>
    </Carousel>
    
    );
}