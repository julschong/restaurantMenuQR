import React from 'react';
// 1. import `ChakraProvider` component
import { Button } from '@chakra-ui/react';

import Header from './components/Header/';
import { Switch, Route } from 'react-router-dom';

function App() {
    // 2. Use at the root of your app
    return (
        <>
            <Header />
            <Button colorScheme="blue">Button</Button>
            <Switch>
                <Route exact path="/">
                    Home
                </Route>
                <Route exact path="/edit">
                    Edit
                </Route>
                <Route exact path="/preview">
                    Preview
                </Route>
            </Switch>
        </>
    );
}
export default App;
