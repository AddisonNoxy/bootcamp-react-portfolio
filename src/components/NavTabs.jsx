import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div className="text-3xl">
            <ul>
                <li>
                    <Link to="/" className={currentPage === '/' ? 'active' : 'nav-link'}>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'active' : 'nav-link'}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/Resume" className={currentPage === '/Resume' ? 'active' : 'nav-link'}>
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to="/Contact" className={currentPage === '/Contact' ? 'active' : 'nav-link'}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavTabs;