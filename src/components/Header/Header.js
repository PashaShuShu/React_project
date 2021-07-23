import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
const Header = (props) => {
  return (
    <header>
      <div className={classes.logo__and__name}>
        <img src="https://img2.freepng.ru/20180518/jjg/kisspng-moroccan-cuisine-logo-sahara-restaurant-middle-eas-5aff5f15226751.5303971415266854611409.jpg"></img>
        <span className={classes.name}>SHARA.NET</span>
        <NavLink to="/hooks">Hooks</NavLink>
      </div>
      <div className={classes.loginBlock}>
        {props.isAuth ?
          <div>
            {props.login}
            <div>
              <button onClick={props.logoutUser}>Logout</button>
            </div>
          </div>
          :
          <NavLink to='/login'>Login</NavLink>
        }

      </div>
    </header>
  );
}

export default Header;