import profileReducer, {updatePostText, addPost} from './profile-reducer'

let state = {
    newPostText: '',
    postsData: [
        { id: 1, name: "Pasha", message: "boo boo bi bi", likes_count: 122 },
        { id: 2, name: "Pasha", message: "ifro frau", likes_count: 233 },
        { id: 3, name: "Pasha", message: "isgold de fag", likes_count: 223 },
        { id: 4, name: "Pasha", message: "de fag", likes_count: 2223 }
    ]
}


it('new post should be added', () => {
    let action1 = updatePostText("updatePostText");
    //let action2 = addPost();
 
    let newState1 = profileReducer(state,action1);
   // let newState2 = profileReducer(state, action2)

    expect(newState1.newPostText).toBe("updatePostText")
   // expect(newState2.postsData[4].id).toBe(5);
});
it('new post should be added', () => {
    //let action1 = updatePostText("updatePostText");
    let action2 = addPost();
 
    //let newState1 = profileReducer(state,action1);
    let newState2 = profileReducer(state, action2)

    //expect(newState1.newPostText).toBe("updatePostText")
    expect(newState2.postsData[4].id).toBe(5);
});
