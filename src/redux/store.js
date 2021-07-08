import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
  _state: {
    profilePage: {
      newPostText: "",
      postsData: [
        { id: 1, name: "Pasha", message: "boo boo bi bi", likes_count: 122 },
        { id: 2, name: "Pasha", message: "ifro frau", likes_count: 233 },
        { id: 3, name: "Pasha", message: "isgold de fag", likes_count: 223 },
        { id: 4, name: "Pasha", message: "de fag", likes_count: 2223 }
      ]
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  _triggerSubscriber() {
    console.log('this._state chaged')
  },

  subscribe(observer) {
    this._triggerSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) { // { type: 'ADD-POST' }
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._triggerSubscriber(this._state);
  }
}

export default store;
window.store = store;