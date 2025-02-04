import SocialIcons from "../elements/SocialIcons"
import HeroVideoElement from "../elements/HeroVideoElement"
import HeroTextContent from "../elements/HeroTextContent"
import GlobeAnimation from "../elements/GlobeAnimation"

export default function Hero4() {
    return (
        <>
            <section className="hero-section-version4 position-relative">
                {/* Globe Animation */}
                <div className="globe-background">
                    <GlobeAnimation />
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="hero-v4-content position-relative pe-10">
                            {/* video popup  */}
                            <HeroVideoElement />
                            {/* hero text content  */}
                            <HeroTextContent />
                        </div>
                    </div>
                </div>
                {/* Social */}
                <SocialIcons />
                {/* Social */}
                {/* Element */}
                <img src="/assets/img/element/cmn-dost.png" alt="img" className="hero-v4-element" />
                {/* Element */}
            </section>
        </>
    )
}
