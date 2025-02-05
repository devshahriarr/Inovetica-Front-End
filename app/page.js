import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Blog1 from "@/components/sections/Blog1"
import Blog4 from "@/components/sections/Blog4"
import CaseStudy1 from "@/components/sections/CaseStudy1"
import CaseStudy2 from "@/components/sections/CaseStudy2"
import Hero1 from "@/components/sections/Hero1"
import Hero4 from "@/components/sections/Hero4"
import Product1 from "@/components/sections/Product1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import TextSLider1 from "@/components/sections/TextSLider1"
import TextSLider2 from "@/components/sections/TextSLider2"
import TextSLider3 from "@/components/sections/TextSLider3"
import Watch1 from "@/components/sections/Watch1"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// const swiperOptions = {
//     modules: [Autoplay, Pagination, Navigation],
//     spaceBetween: 30,
//     speed: 1500,
//     loop: true,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//     },

//     breakpoints: {
//         1199: {
//             slidesPerView: 5,
//         },
//         991: {
//             slidesPerView: 4,
//         },
//         767: {
//             slidesPerView: 4,
//         },
//         500: {
//             slidesPerView: 3,
//         },
//         320: {
//             slidesPerView: 3,
//         },
//     },
// }

export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <Hero4 />
                    <About2 ></About2>
                    {/* <Product1 /> */}
                    <Service1 />
                    <CaseStudy2 ></CaseStudy2>
                    <TextSLider1 />
                    <CaseStudy1 />
                    <Watch1 />
                    <Team1 />
                    <TextSLider2 />
                    <Testimonial1 />
                    <Blog4 />
                    {/* <div className="footer-client mb-20 ">
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
                        </div> */}
                    <TextSLider3 />
                </div>
            </Layout>
        </>
    )
}