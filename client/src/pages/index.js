import { Switch, Route } from 'react-router-dom';
import Home from './Home/index';
import Add from './Add/index';
import Edit from './Edit/index';

import './pages.scss';

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
            </Switch>
        </main>
    );
};

export default Pages;
