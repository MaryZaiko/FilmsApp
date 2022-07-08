
import {all} from 'redux-saga/effects'
import authWatcher from './authSaga'


export default function* rootSaga() {
    yield all([authWatcher()])
}