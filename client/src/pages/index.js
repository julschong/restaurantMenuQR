import { Container } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/index';
import Add from './Add/index';
import Edit from './Edit/index';

const Pages = () => {
    return (
        <Container maxWidth="80vw">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/edit">
                    <Edit />
                </Route>
            </Switch>
        </Container>
    );
};

export default Pages;
