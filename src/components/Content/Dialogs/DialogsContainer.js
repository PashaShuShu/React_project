import Dialogs from './Dialogs';
import { addMessage, updateNewMessageText } from '../../../redux/dialog-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from './../../../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);


const SuperDialogsContainer = connect(mapStateToProps, {
    addMessage, updateNewMessageText
})(AuthRedirectComponent);

export default SuperDialogsContainer;