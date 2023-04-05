import {Link} from "react-router-dom"


export default function NavigationBar() {
  return (
    <div className="imageWrapper"> 
        
        <nav className="nav">
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">Budgets</CustomLink>
                <CustomLink to="/contact">Financial Literacy</CustomLink>
                {/* <CustomLink to="/login">Budget Saver Map</CustomLink> */}
            </ul>
        </nav>
    </div>
  );
}

function CustomLink({to, children, ...props}) {
    const path = window.location.pathname;
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}