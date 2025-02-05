import VideoPopup from './VideoPopup';

const HeroVideoElement = () => {
    return (
        <div className="d-flex align-items-sm-center align-items-end justify-content-between mb-xxl-7 mb-xl-5 mb-lg-4 mb-2">
            <h1 className="white-clr text-capitalize">
                <span className="d-block" data-aos="zoom-in-left" data-aos-duration={1800}>
                    <span className="italic">Design</span> Studio
                </span>
                <span className="d-block" data-aos="zoom-in-left" data-aos-duration={1800}>
                    With <span className="italic">Experience</span>
                </span>
            </h1>
            {/* <VideoPopup style={1} /> */}
        </div>
    );
};

export default HeroVideoElement;