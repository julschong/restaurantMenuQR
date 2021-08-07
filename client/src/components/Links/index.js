import { Link } from 'react-router-dom';
import './Links.scss';

export const PATHS = Object.freeze({
    HOME: '/',
    ADD: '/add',
    EDIT: '/edit'
});

const Links = ({ currentPage, setCurrentPage }) => {
    return (
        <ul id="navbar-links">
            <li>
                <Link
                    to={PATHS.HOME}
                    onClick={() => {
                        setCurrentPage(PATHS.HOME);
                    }}
                    style={{
                        textDecoration:
                            currentPage === PATHS.HOME && 'underline'
                    }}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to={PATHS.ADD}
                    onClick={() => {
                        setCurrentPage(PATHS.ADD);
                    }}
                    style={{
                        textDecoration: currentPage === PATHS.ADD && 'underline'
                    }}
                >
                    Add
                </Link>
            </li>
        </ul>
    );
};

export default Links;
