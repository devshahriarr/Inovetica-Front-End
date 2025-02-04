const ServiceDetailsPage = ({ params }) => {
    console.log(params);
    return (
        <div>
            <h2>Service Details {params.id}</h2>
        </div>
    );
};

export default ServiceDetailsPage;