import {all, delay, fork, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";

function logInAPI(data) {
    return axios.post('api/login', data);
}

function* logIn(action) {
    try {
        // const result = yield call(logInAPI, action.data); // yield가 await같은 역할을한다
        yield delay(1000);
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: action.data
        });
    } catch (err){
        yield put({
            type: 'LOG_IN_FAIULER',
            data: err.response.data
        });
    }
}

function logOutAPI() {
    return axios.post('api/logout')
}

function* logOut() {
    try {
        // const result = yield call(logOutAPI); // yield가 await같은 역할을한다
        yield delay(1000);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data
        });
    } catch (err){
        yield put({
            type: 'LOG_OUT_FAIULER',
            data: err.response.data
        });
    }
}

//takeEvery : 마우스가 두번누렀으면 두번실행되고,
//takeLatest : 마우스가 두번눌렀을때, 마지막꺼만 실행해준다.
function* watchLogIn(){
    yield takeLatest('LOG_IN_REQUEST', logIn); // LOG_IN이라는 action이 들어오면 logIn 제네레이터 함수를 실행시켜라
}

function* watchLogOut(){
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}


export default function* userSaga(){
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}