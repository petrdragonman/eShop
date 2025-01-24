import classes from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const linkStyles = ({ isActive }) =>
        isActive ? `${classes.link} ${classes.link_active}` : classes.link;

    return (
        <nav className={classes.navigation}>
            <section className={classes.container}>
                <NavLink className={linkStyles} to="/">
                    Home
                </NavLink>
            </section>
            <section className={classes.container}>
                <NavLink className={linkStyles} to="Product">
                    Product
                </NavLink>
                <NavLink className={linkStyles} to="Cart">
                    Cart
                </NavLink>
            </section>
        </nav>
    );
};

export default NavBar;