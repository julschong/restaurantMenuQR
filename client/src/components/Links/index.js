import { BrowserRouter as Link } from 'react-router-dom';
import './Links.scss';

const Links = () => {
    return (
        <ul id="navbar-links">
            <li>
                <Link to="/">
                    <a href="/">Home</a>
                </Link>
            </li>
            <li>
                <Link to="/add">
                    <a href="/add">Add</a>
                </Link>
            </li>
            <li>
                <Link to="/edit">
                    <a href="/edit">Edit</a>
                </Link>
            </li>
        </ul>
    );
};

export default Links;
