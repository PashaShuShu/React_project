import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    

    return (
        <nav>
            <div className={classes.nav__menu}>
                <div className={classes.nav__item}>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.nav__item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.nav__item}>
                    <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.nav__item}>
                    <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                </div><br></br>
                <div className={classes.nav__item}>
                    <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
                </div><br></br>
                <div className={classes.nav__item}>
                    <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                </div>
            </div>
    
        </nav>
    );
}

export default Nav;