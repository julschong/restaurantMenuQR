import { Link } from 'react-router-dom';
import './Links.scss';

const Links = () => {
    return (
        <ul id="navbar-links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/add">Add</Link>
            </li>
            <li>
                <Link to="/edit">Edit</Link>
            </li>
        </ul>
    );
};

export default Links;
