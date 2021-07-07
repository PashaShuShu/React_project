import classes from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={classes.friend}>
            <img src={props.img}></img>
            <div>{props.name}</div>
        </div>
    );
}

export default Friend;