import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div className="text-2xl content-center">
            <ul className="flex border-b">
                <li className="-mb-px mr-1">
                    <Link to="/" className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold bg-cyan-200">
                        About Me
                    </Link>
                </li>
                <li className="mr-1">
                    <Link to="/Portfolio" className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
                        Portfolio
                    </Link>
                </li>
                <li className="mr-1">
                    <Link to="/Resume" className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
                        Resume
                    </Link>
                </li>
                <li className="mr-1">
                    <Link to="/Contact" className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavTabs;