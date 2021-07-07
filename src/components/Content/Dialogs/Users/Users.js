import classes from './Users.module.css'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
    return (
        <NavLink to={`/dialogs/${props.user_id}`} activeClassName={classes.active}>
            <div className={classes.dialog}>
                <div className={classes.ava}>
                    <img src={props.img}></img>
                </div>
                <div className={classes.name}>
                    {props.name}
                </div>
            </div>
        </NavLink>
    );
}

export default Users;