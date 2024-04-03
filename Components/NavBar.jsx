import { Link, useMatch, useResolvedPath} from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Zheng Tax
            </Link>
            <ul>
                {/* <CustomLink to="/basicTax">Tax Calc</CustomLink>
                <CustomLink to="/1040">1040</CustomLink>
                <CustomLink to="/income">Income</CustomLink> */}
                <CustomLink to="/WhoWeAre">About Us</CustomLink>
                <CustomLink to="/Values">Values</CustomLink>
                <CustomLink to="/JackBio">Jack Bio</CustomLink>
                <CustomLink to="/Services">Services</CustomLink>
                <CustomLink to="/ContactUs">Contact Us</CustomLink>
                <CustomLink id='Login' to="/Login">Login</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

