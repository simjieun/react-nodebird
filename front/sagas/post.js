import axios from "axios";
import {all, fork, delay, put, takeLatest} from "redux-saga/effects";

function addPostAPI() {
    return axios.post('api/post')
}

function* addPost() {
    try {
        // const result = yield call(addPostAPI); // yield가 await같은 역할을한다
        yield delay(1000);
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data
        });
    } catch (err){
        yield put({
            type: 'ADD_POST_FAIULER',
            data: err.response.data
        });
    }
}


function* watchAddPost(){
    yield takeLatest('ADD_POST', addPost);
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
    ])
}