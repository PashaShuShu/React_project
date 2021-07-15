import classes from './Preloader.module.css';
import React from 'react';

const Preloader = (props) => {
    return <img
        className={classes.load}
        src="https://orig04.deviantart.net/4590/f/2017/119/c/e/grooving_cactus__green__by_funymony-db7le16.gif"
    ></img>
}

export default Preloader