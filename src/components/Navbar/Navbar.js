import classes from './Navbar.module.css';
const Nav = ()=>{
    return(
        <nav>
            <b><h1>Nav Bar</h1></b>
            <div className ={`${classes.nav__item} + ${classes.active}`}>
                <a href="/profile">Profile</a>
            </div>
            <div className ={classes.nav__item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className ={classes.nav__item}>
                <a href="/news">News</a>
            </div>
            <div className ={classes.nav__item}>
                <a href="/music">Music</a>
            </div><br></br>
            <div className ={classes.nav__item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}

export default Nav;