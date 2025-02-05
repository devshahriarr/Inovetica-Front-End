import Link from "next/link";

const PortfolioItem = ({isTab, handleTab, portfolio}) => {

    const {title, url , id}=portfolio

    return (
        <div className={`nav-link px-0 py-xxl-10 py-xl-8 py-lg-6 py-4 ${isTab === id ? "active" : ""}`}
            onMouseOver={() => handleTab(id)}>
            <div className="info-left">
                <span className="devs text-start theme-clr d-block mb-xxl-4 mb-3">
                    Development
                </span>
                <h4 className="white-clr text-start">
                    {title}
                </h4>
            </div>
            <Link href={url} className="right-info d-flex align-items-center gap-4">
                VIEW portfolio
                <span className="rot60">
                    <i className="fas fa-arrow-up" />
                </span>
            </Link>
        </div>
    );
};

export default PortfolioItem;