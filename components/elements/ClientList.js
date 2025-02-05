"use client"

import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    breakpoints: {
        1199: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 4,
        },
        500: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 3,
        },
    },
}

const ClientList = () => {
    return (
        <div className="container mt-20">
            <div className="footer-client mb-20 ">
            <h5 className="trusted white">
                Our Trusted Clients
            </h5>
            <div className="swiper trusted-inner">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <Link href="/javascript:void(0)">
                            <img src="/assets/img/client/c1.png" alt="img" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/javascript:void(0)">
                            <img src="/assets/img/client/c2.png" alt="img" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/javascript:void(0)">
                            <img src="/assets/img/client/c3.png" alt="img" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/javascript:void(0)">
                            <img src="/assets/img/client/c4.png" alt="img" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/javascript:void(0)">
                            <img src="/assets/img/client/c5.png" alt="img" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/javascript:void(0)">
                            <img src="/assets/img/client/c1.png" alt="img" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/javascript:void(0)">
                            <img src="/assets/img/client/c2.png" alt="img" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/javascript:void(0)">
                            <img src="/assets/img/client/c3.png" alt="img" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/javascript:void(0)">
                            <img src="/assets/img/client/c4.png" alt="img" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/javascript:void(0)">
                            <img src="/assets/img/client/c5.png" alt="img" />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        </div>
    );
};

export default ClientList;