import { Container } from '@chakra-ui/react';
import AddForm from '../../components/AddForm';
import './add.scss';

const Add = () => {
    return (
        <Container>
            <div className="add-page">
                <h2>Add a new restaurant menu</h2>
                <AddForm />
            </div>
        </Container>
    );
};

export default Add;
