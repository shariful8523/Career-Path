import Image1 from '../../assets/Art-Exhibit-Blog-Banner-65-1568x882.jpg';
import Image2 from '../../assets/Career-Path-Template-1.png';
import Image3 from '../../assets/Career-Path-Template-4.webp';
import Image4 from '../../assets/UF-Career-3.png';

const Slider = () => {
    return (
        <div className="flex justify-center items-center "> 
            <div className="carousel w-11/12 h-[400px]  mt-24 rounded-xl border border-red-800">

                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={Image1}
                        alt="Art Exhibit"
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={Image2}
                        alt="Career Path 1"
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={Image3}
                        alt="Career Path 4"
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={Image4}
                        alt="Stock Image"
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;
