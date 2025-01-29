import Link from 'next/link';

const ServiceCategory = ({ isAccordion, handleAccordion, service}) => {
    return (
        <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === service.id ? "active" : ""}`}>
            <div className="header-area" onClick={() => handleAccordion(service.id)}>
                <div className="accordion-btn justify-content-between d-flex align-items-center text-start position-relative w-100">
                    <div className="mtitle-ara">
                        <span className="d-inline-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                            {service.id < 10 ? `0${service.id}` : service.id}
                            <span className="rot60 d-inline-block theme-clr">
                                <i className="fa-solid fa-arrow-right" />
                            </span>
                        </span>
                        <span className="mtitle d-block mt-6">
                            <a href="/service-details" className="white-clr whitehover">
                                {service.title}
                            </a>
                        </span>
                        <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                            {service.description}
                        </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                        <ul className="modern-list d-grid gap-2">
                            {service.services.map((s, index) => (
                                <li key={index} className="d-flex align-items-center gap-2">
                                    <i className="fas fa-chevron-right" /> {s}
                                </li>
                            ))}
                        </ul>
                        <div className="tab-remove-thumb">
                            <img src={service.image} alt="service-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCategory;