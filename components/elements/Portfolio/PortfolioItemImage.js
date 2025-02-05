import { baseUrl } from "@/utility/baseUrl";

const PortfolioItemImage = ({isTab, portfolio}) => {

    const {image_url , id}=portfolio;

    return (
        <div className={isTab === id ? "tab-pane fade show active overflow-hidden" : "tab-pane fade"} style={{width:'250px', transform: 'rotate(5deg)', padding: '10px', boxShadow: '5px 10px', overflow: 'hidden'}}>
            <div className="tcase-thumb" style={{width:'250px', transform: 'rotate(-5deg)'}}>
                <img src={`${baseUrl}/uploads/portfolio/${image_url}`} alt="img" />
            </div>
        </div>
    );
};

export default PortfolioItemImage;