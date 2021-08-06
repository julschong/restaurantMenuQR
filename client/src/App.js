import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import Pages from './pages';
import { getRestaurants } from './stores/actions/restaurantsActions';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurants());
    }, [dispatch]);
    return (
        <>
            <Header />
            <Pages />
            <Footer />
        </>
    );
}
export default App;
