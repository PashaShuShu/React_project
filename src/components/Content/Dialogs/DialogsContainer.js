import Dialogs from './Dialogs';
import { addMessage, updateNewMessageText } from '../../../redux/dialog-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from './../../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
}



export default compose(
    connect(mapStateToProps, {
        addMessage, updateNewMessageText
    }),
)(Dialogs);