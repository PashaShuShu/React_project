import classes from './Dialogs.module.css'
import User from './Users/Users'
import Messages from './Messages/Messages'
import React from 'react'

const Dialogs = (props) => {

    let UsersItems = props.dialogsData.map((el) => {
        return <User name={el.name} img={el.img} user_id={el.id} />;
    });
    let messagesItem = props.messagesData.map((el) => {
        return <Messages side={el.sentBy} message={el.message} />;
    });

    let newMessage = React.createRef();
    let sentMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__dialog}>
                {UsersItems}
            </div>
            <div></div>
            <div className={classes.messages}>
                {messagesItem}
                <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText} />
                <button onClick={sentMessage}>send</button>
            </div>
        </div>


    );
}

export default Dialogs;