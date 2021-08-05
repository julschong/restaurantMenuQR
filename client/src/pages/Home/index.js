import { SimpleGrid, Container } from '@chakra-ui/react';
import { imgURL } from '../../data/data';
import RestaurantContainer from './../../components/RestaurantContainer';
import './home.scss';

console.log(imgURL);

const Home = () => {
    return (
        <div className="homepage">
            <Container maxWidth="80vw">
                <SimpleGrid columns={2} spacing={0} gap={10}>
                    {imgURL.map((el, i) => (
                        <RestaurantContainer url={el.url} key={`image${i}`} />
                    ))}
                </SimpleGrid>
            </Container>
        </div>
    );
};

export default Home;
