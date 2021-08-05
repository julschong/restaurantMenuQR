import React from 'react';
// 1. import `ChakraProvider` component
import { Button, Container } from '@chakra-ui/react';

import Header from './components/Header/';
import { Switch, Route } from 'react-router-dom';

function App() {
    // 2. Use at the root of your app
    return (
        <>
            <Header />
            <Container maxWidth="80vw">
                <Switch>
                    <Route exact path="/">
                        Home
                    </Route>
                    <Route path="/add">Add</Route>
                    <Route path="/edit">Edit</Route>
                </Switch>
            </Container>
        </>
    );
}
export default App;
