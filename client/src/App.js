import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import Pages from './pages';
import { getRestaurants } from './stores/actions/restaurantsActions';

function App() {
    const dispatch = useDispatch();
    const restaurants = useSelector((state) => state.restaurants.restaurants);
    useEffect(() => {
        if (restaurants.length === 0) dispatch(getRestaurants());
    }, [dispatch, restaurants.length]);
    return (
        <>
            <Header />
            <Pages />
            <Footer />
        </>
    );
}
export default App;
