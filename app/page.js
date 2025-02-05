import ClientList from "@/components/elements/ClientList"
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
                    <ClientList />
                    <TextSLider3 />
                </div>
            </Layout>
        </>
    )
}