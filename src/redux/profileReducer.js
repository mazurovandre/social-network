const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {};
            newPost.id = state.postsData.length + 1;
            newPost.message = state.newPostText;
            newPost.likesCount = 0;
            state.postsData.push(newPost);
            state.newPostText = '';
            break;
        case ON_POST_CHANGE:
            state.newPostText = action.newText;
            break;
    }
    return state;
}

export default profileReducer;