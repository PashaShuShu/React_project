import classes from './Info.module.css';
import Preloader from './../../common/Preloader/Preloader';
import StatusContainer from './StatusContainer';
import React from 'react'
import noPhoto from '../../../../img/ava2.gif'

const Info = (props) => {
    let uplodPhoto = React.useRef()

    if (!props.profile) {
        return <Preloader />
    }
    
    const onMainPhotoChange = async (e) => {
        
        let newAva = uplodPhoto.current.files;
        if (newAva.length) {
            let resp = await props.uploadPhoto(newAva[0]);
            alert(resp);
        } else alert("how about new avatar?")
    }

    return (
        <div className={classes.info}>
            <div className={classes.avatar}>
                <img src={(props.profile.photos.large) ? props.profile.photos.large : noPhoto}></img>
                <div>
                    {props.owner ?
                        <div>
                            <input
                                ref={uplodPhoto}
                                type={"file"}
                            />
                              <div
                                onClick={onMainPhotoChange}
                                className={classes.uploadPhoto}>
                                изменить фото
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
            <div className={classes.description}>
                {props.profile.fullName}
                <div>
                    <h3>About me</h3>
                    <StatusContainer status={props.status} />
                </div>
                <div>
                    <h3>instagram: <a href={props.profile.contacts.instagram}>чекай мой инст</a></h3>
                    <h3>git: <a href={props.profile.contacts.github}>чекай мой гит</a></h3>
                </div>
            </div>

        </div>
    );
}
export default Info;