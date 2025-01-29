import ServiceCategory from "@/components/elements/ServiceCategory";
import { getAllServiceCategory } from "@/data/samplData";
import Link from "next/link";


const AllServices = ({ handleAccordion, isAccordion }) => {
    const categories = getAllServiceCategory();
    return (
        <div>
            <section className="service-section pt-space pb-space">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                WHAT WE OFFER
                            </div>
                            <h2 className="stitle">
                                Most <span className="fw-400">experienced</span> services
                            </h2>
                        </div>
                        <Link href="/service" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            View All Service
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    {/*Service Tabing section*/}
                    <div className="row g-xxl-6 g-4">
                        <div className="service-tabing-wrap Faqs-section position-relative">
                            {
                                categories.map((service) => <ServiceCategory key={service.id} service={service} isAccordion={isAccordion} handleAccordion={handleAccordion} />)
                            }
                        </div>
                    </div>
                    {/*Service Tabing section*/}
                </div>
            </section>
        </div>
    );
};

export default AllServices;