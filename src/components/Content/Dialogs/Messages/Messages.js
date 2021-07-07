import classes from './Messages.module.css'

const Messages = (props)=>{
    let side;
    (props.side=="r")? side = classes.r : side = classes.l;

    return(
        <div className={classes.messages}>
            <div className={side}>
                {props.message}
            </div>
        </div>
    );
}

export default Messages;