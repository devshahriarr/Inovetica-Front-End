import Link from 'next/link';
import React from 'react';

const HeroTextContent = () => {
    return (
        <div className="ringle-content" data-aos="zoom-in-up" data-aos-duration={1800} data-aos-delay={7}>
            <p className="white-clr mb-xxl-5 mb-xl-3 mb-lg-3 mb-md-2 mb-1">
                Bring to the table win-win survival strategies to ensure proactive domination. At the
                end of the day, going forward, a
                new normal
            </p>
            <Link href="/about" className="explore-more d-inline-flex align-items-center gap-1">
                Explore More
                <span className="rot60">
                    <i className="fas fa-arrow-up" />
                </span>
            </Link>
        </div>
    );
};

export default HeroTextContent;