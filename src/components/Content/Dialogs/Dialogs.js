import classes from './Dialogs.module.css'
import User from './Users/Users'
import Messages from './Messages/Messages'
import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/dialog-reducer'

const Dialogs = (props) => {

    let UsersItems = props.dialogsPage.dialogsData.map((el) => {
        return <User name={el.name} img={el.img} user_id={el.id} />;
    });
    let messagesItem = props.dialogsPage.messagesData.map((el) => {
        return <Messages side={el.sentBy} message={el.message} />;
    });

    let newMessage = React.createRef();
    let sentMessage = () => {
        let action = addMessageActionCreator()
        props.dispatch(action);
    }
    let onMessageChange = () => {
        let text = newMessage.current.value;
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__dialog}>
                {UsersItems}
            </div>
            <div></div>
            <div className={classes.messages}>
                {messagesItem}
                <textarea onChange={onMessageChange} ref={newMessage} value={props.dialogsPage.newMessageText} />
                <button onClick={sentMessage}>send</button>
            </div>
        </div>


    );
}

export default Dialogs;