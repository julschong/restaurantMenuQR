import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Add from './Add';
import Edit from './Edit';

import './pages.scss';
import View from './View';

import AddMenuItemForm from '../components/AddMenuItemForm';

const Pages = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/edit/:id">
                    <Edit />
                </Route>
                <Route path="/view/:id">
                    <View />
                </Route>
                {/* TODO: Testing Only take out */}
                <Route path="/testing">
                    <AddMenuItemForm />
                </Route>
            </Switch>
        </main>
    );
};

export default Pages;
