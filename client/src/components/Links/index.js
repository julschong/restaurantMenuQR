import { BrowserRouter as Link } from 'react-router-dom';

const Links = () => {
    return (
        <ul>
            <li>
                <Link to="/">
                    <a href="/">Home</a>
                </Link>
            </li>
            <li>
                <Link to="/edit">
                    <a href="/edit">Edit</a>
                </Link>
            </li>
            <li>
                <Link to="/preview">
                    <a href="/preview">Preview</a>
                </Link>
            </li>
        </ul>
    );
};

export default Links;
