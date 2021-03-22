export const initialState = {
    mainPosts: [],
    Comments:[{

    }],
    imagePaths:[],
    postAdded:false,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id:2,
    content:'더미데이터입니다',
    User:{
        id:1,
        nickname: '제로초',
    },
    Images:[],
    Comments:[],
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST_REQUEST:
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
};

export default reducer;