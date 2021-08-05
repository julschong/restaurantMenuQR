import { SimpleGrid } from '@chakra-ui/react';
import { imgURL } from '../../helper/test';
import RestaurantContainer from './../../components/RestaurantContainer';
import './home.scss';

console.log(imgURL);

const Home = () => {
    return (
        <div className="homepage">
            <SimpleGrid columns={2} spacing={0} gap={10}>
                {imgURL.map((url, i) => (
                    <RestaurantContainer url={url} key={`image${i}`} />
                ))}
            </SimpleGrid>
        </div>
    );
};

export default Home;
