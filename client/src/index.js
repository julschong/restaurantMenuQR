import React from 'react';
import ReactDOM from 'react-dom';

import './global.scss';

import { ChakraProvider } from '@chakra-ui/react';
import store from './stores/store';
import { Provider } from 'react-redux';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </Provider>,
    rootElement
);
