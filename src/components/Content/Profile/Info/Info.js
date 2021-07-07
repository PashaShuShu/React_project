import classes from './Info.module.css'

const Info = (props) => {
    return (
        <div className={classes.info}>
            <div className={classes.avatar}>
                <img src="https://azertag.az/files/galleryphoto/2021/1/1000x669/16131459965491937006_1000x669.jpg"></img>
            </div>
            <div className={classes.description}>
                {props.description}
            </div>
        </div>
    );
}
export default Info;