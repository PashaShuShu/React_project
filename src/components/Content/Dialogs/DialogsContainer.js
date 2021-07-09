import Dialogs from './Dialogs';
import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialog-reducer'

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let messagesData = state.dialogsPage.messagesData;
    let dialogsData = state.dialogsPage.dialogsData;
    let newMessageText = state.dialogsPage.newMessageText;


    let sentMessage = () => {
        let action = addMessageActionCreator()
        props.store.dispatch(action);
    }
    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action);
    }

    return (
        <Dialogs
            addMessage={sentMessage}
            updateNewMessageText={onMessageChange}
            messagesData={messagesData}
            dialogsData={dialogsData}
            newMessageText={newMessageText}
        />
    );
}

export default DialogsContainer;