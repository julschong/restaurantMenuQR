import * as React from 'react';
// 1. import `ChakraProvider` component
import { Button, ChakraProvider } from '@chakra-ui/react';
function App({ Component }) {
    // 2. Use at the root of your app
    return (
        <ChakraProvider>
            <Button colorScheme="blue">Button</Button>
        </ChakraProvider>
    );
}
export default App;
