import { all, fork } from 'redux-saga/effects';

import postSaga from "./post";
import userSaga from "./user";

// fork : 비동기 호출, call : 동기호출
export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ]);
}