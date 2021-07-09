const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  newMessageText: "",
  dialogsData: [
    { id: 1, name: "Vika", img: "https://media.gq.com/photos/55828922e52bc4b477a9714f/master/pass/blogs-the-feed-dick-pic-tumblr-635.jpg" },
    { id: 2, name: "Alex", img: "https://i1.sndcdn.com/artworks-000240511894-n0z5cp-t500x500.jpg" },
    { id: 3, name: "Dmitry", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTTZe_3l6aDKO88sHV9kA7xxrs5zHYronCxAaDE0PWF5ruKKtBrBkIm-HC7Q_nruuBEE&usqp=CAU" },
  ],
  messagesData: [
    { id: 1, sentBy: "r", message: "Hollo" },
    { id: 2, sentBy: "l", message: "Hallo" },
    { id: 3, sentBy: "l", message: "How are you" },
    { id: 4, sentBy: "l", message: "Not bad" },
    { id: 5, sentBy: "r", message: "Me too" },
    { id: 6, sentBy: "l", message: "I have not asked you" },
    { id: 7, sentBy: "l", message: "suka" },
    { id: 8, sentBy: "r", message: "suka" },
    { id: 9, sentBy: "l", message: "Dblia blia bliaima" },
    { id: 10, sentBy: "r", message: "you are chiort" }
  ]
}
const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let LastMessage = state.messagesData.pop();
      let newMessage = {
        id: LastMessage.id + 1,
        sentBy: "r",
        message: state.newMessageText
      }
      state.messagesData.push(LastMessage);
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogReducer;