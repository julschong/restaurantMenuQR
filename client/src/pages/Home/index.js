import { Container, Grid } from '@chakra-ui/react';
import { imgURL } from '../../data/data';
import RestaurantContainer from './../../components/RestaurantContainer';
import './home.scss';
import { useSelector } from 'react-redux';

console.log(imgURL);

const Home = () => {
    const restaurants = useSelector((state) => state.restaurants.restaurants);

    return (
        <div className="homepage">
            <Container maxWidth="80vw">
                <Grid className="gallery" justify="center">
                    {restaurants.map((el, i) => (
                        <RestaurantContainer
                            el={el}
                            key={`image${i}${el.name}`}
                        />
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
