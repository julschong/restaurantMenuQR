import './container.scss';

const RestaurantContainer = ({ url }) => {
    return (
        <div className="img-crop">
            <img src={url} loading="lazy" alt="..." />
        </div>
    );
};

export default RestaurantContainer;
