import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCartShopping, 
    faMagnifyingGlass, 
    faArrowRightToBracket, 
    faHeart,
    faBars 
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import { LogoutBtn } from "../Logout/LogoutBtn";
import { useSidebar } from "../../common/context/SidebarContext";

const NavBar = ({ linkActive }) => {
    const { setDisplaySideBar } = useSidebar();

    return (
    <nav className="navbar flex-row-container shadow-md">
        <Link id="nav-logo" to="/">
            <p className="logo-txt">BlueKart</p>
            <FontAwesomeIcon icon={faCartShopping} />
        </Link>

        <div className="navigation page-nav centered-flex-row-container">
            <ul className="nav-items centered-flex-row-container">
                <li className={`${linkActive === "home" ? "link-active-hover": "" } space-S`}><Link className={linkActive === "home" ? "link-active": "" } to="/">Home</Link></li>
                <li className={`${linkActive === "productList" ? "link-active-hover": "" } space-S`}><Link className={linkActive === "productList" ? "link-active": "" } to="/productList">Shop Now</Link></li>
            </ul>

            <SearchBar className={{ position: "searchbar-nav" }}/>

            <div className="nav-icons centered-flex-row-container">
                <LogoutBtn display={false} />

                <Link className={`nav-icon-item centered-flex-col-container ${ linkActive === "login" ? "link-active": "" }`} to="/login">
                    <FontAwesomeIcon icon={faArrowRightToBracket} className="nav-icon-margin"/>
                    <p className={`${ linkActive === "login" ? "link-active-hover": "" }`}>Login</p>
                </Link>

                <Link className={`nav-icon-item centered-flex-col-container ${linkActive === "wishList" ? "link-active" : "" }`} to="/wishList">
                    <FontAwesomeIcon icon={faHeart} className="nav-icon-margin"/>
                    <p className={`${ linkActive === "wishList" ? "link-active-hover" : "" }`}>WishList</p>
                </Link>
                <Link className={`nav-icon-item centered-flex-col-container ${linkActive === "cart" ? "link-active" : "" }`} to="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <FontAwesomeIcon icon={faCartShopping} className="nav-icon-margin"/>
                    <p className={`${linkActive === "cart" ? "link-active-hover" : ""}`}>Cart</p>
                </Link>
                <FontAwesomeIcon icon={faBars} className="nav-menu" onClick={() => setDisplaySideBar(true)}/>
            </div>
        </div>
    </nav>
    );
}

export { NavBar };