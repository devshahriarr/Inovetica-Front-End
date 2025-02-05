
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 1,
        },
    },
}

export default function Testimonial1() {
    return (
        <>

            <section className="testimonial-version01-section pt-20 pb-space position-relative">
                <div className="container">
                <div className="row g-md-5 g-6 align-items-end justify-content-between bb-border pb-xxl-15 pb-lg-10 pb-9 mb-xxl-15 mb-lg-10 mb-9">
                        <div className="col-lg-7">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-5">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1500}>
                                        Testimonials
                                    </div>
                                    <h2 className="stitle" data-aos="zoom-in" data-aos-duration={1800}>
                                        Some Of Our <span className="fw-400">Respected</span> Happy Clients Say
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-right" data-aos-duration={1600}>
                            <div className="d-flex justify-content-md-end">
                                <div className="d-flex align-items-center gap-3">
                                    <ul className="customer-man d-flex align-items-center">
                                        <li>
                                            <img src="/assets/img/team/avatar1.png" alt="img" />
                                        </li>
                                        <li>
                                            <img src="/assets/img/team/avatar2.png" alt="img" />
                                        </li>
                                        <li>
                                            <img src="/assets/img/team/avatar3.png" alt="img" />
                                        </li>
                                        <li>
                                            <img src="/assets/img/team/avatar4.png" alt="img" />
                                        </li>
                                    </ul>
                                    <div className="review-cont">
                                        <div className="d-flex align-items-center gap-2 mb-xl-2 mb-1">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-regular fa-star" />
                                        </div>
                                        <span className="texts">
                                            450+ reviews
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        <div className="col-lg-11">
                            <div className="swiper testimonial-version01 position-relative">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                                            <div className="thumb">
                                                <img src="/assets/img/testimonial/t-version01.png" alt="img" />
                                            </div>
                                            <div className="vector d-md-block d-none">
                                                <img src="/assets/img/testimonial/vector01.png" alt="img" />
                                            </div>
                                            <div className="content ps-md-10">
                                                <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                    <i className="fas fa-quote-right theme-clr" />
                                                </div>
                                                <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                                                    Posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean
                                                    non odio porttitor, convallis erat sit amet,
                                                    facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie,
                                                    ipsum ac fringilla.
                                                </p>
                                                <div className="desig">
                                                    <h6 className="white-clr mb-2">
                                                        Daniel Smith
                                                    </h6>
                                                    <span className="theme-clr">
                                                        Senior engineer
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                                            <div className="thumb">
                                                <img src="/assets/img/testimonial/t-version01.png" alt="img" />
                                            </div>
                                            <div className="vector d-md-block d-none">
                                                <img src="/assets/img/testimonial/vector01.png" alt="img" />
                                            </div>
                                            <div className="content ps-md-10">
                                                <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                    <i className="fas fa-quote-right theme-clr" />
                                                </div>
                                                <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                                                    Posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean
                                                    non odio porttitor, convallis erat sit amet,
                                                    facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie,
                                                    ipsum ac fringilla.
                                                </p>
                                                <div className="desig">
                                                    <h6 className="white-clr mb-2">
                                                        Daniel Smith
                                                    </h6>
                                                    <span className="theme-clr">
                                                        Senior engineer
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-button gap-xxl-3 gap-2 align-items-center justify-content-between slider-button-60">
                    <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Next slide">
                        <i className="fas fa-chevron-up" />
                    </button>
                    <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                        <i className="fas fa-chevron-down" />
                    </button>
                </div>
            </section>
        </>
    )
}
