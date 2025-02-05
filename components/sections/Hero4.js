import SocialIcons from "../elements/SocialIcons"
import HeroVideoElement from "../elements/HeroVideoElement"
import HeroTextContent from "../elements/HeroTextContent"
import GlobeAnimation from "../elements/GlobeAnimation"
import Link from "next/link"
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
                            <div className="d-flex align-items-center gap-xxl-4 gap-3 mb-xxl-14 mb-xl-9 mb-lg-8 mb-6" data-aos="zoom-in-up" data-aos-duration={1600}>
                                    <div className="customer-review-active">
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar1.png" alt="img" />
                                        </Link>
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar2.png" alt="img" />
                                        </Link>
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar3.png" alt="img" />
                                        </Link>
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar4.png" alt="img" />
                                        </Link>
                                    </div>
                                    <span className="customer-active">
                                        15k+ Active Customer
                                    </span>
                                </div>
                                <div className="d-flex flex-lg-nowrap flex-wrap align-items-center gap-xxl-7 gap-xl-5 gap-4" data-aos="zoom-in-up" data-aos-duration={1700}>
                                    <img src="/assets/img/banner/hero-ringle.png" alt="img" />
                                    <div className="ringle-content">
                                        <p className="white-clr mb-xxl-5 mb-xl-4 mb-3">
                                            Bring to the table win-win survival strategies to ensure proactive domination.
                                            At the end of the day, going forward, a
                                            new normal
                                        </p>
                                        <Link href="/about" className="explore-more d-inline-flex align-items-center gap-1">
                                            Explore More
                                            <span className="rot60">
                                                <i className="fas fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            {/* hero text content  */}
                            {/* <HeroTextContent /> */}
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
