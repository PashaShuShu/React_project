import classes from './Navbar.module.css';
import Friend from './TopFriends/Friend';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    
    
    let friendsItems = props.friendsData.map(el=><Friend name={el.name} img={el.img} />)

    return (
        <nav>
            <div className={classes.nav__menu}>
                <div className={`${classes.nav__item} + ${classes.active}`}>
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
                    <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                </div>
            </div>
            <br/>
            <br/>
            <h1>Top Friends</h1>
            <div className={classes.top__friends}>
                {friendsItems}
            </div>
        </nav>
    );
}

export default Nav;