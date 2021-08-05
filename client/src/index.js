import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

// import store from './store';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
ReactDOM.render(
    // <Provider>
    <ChakraProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChakraProvider>,
    // </Provider>,
    rootElement
);
