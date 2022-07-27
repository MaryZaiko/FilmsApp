
import {all} from 'redux-saga/effects'
import authWatcher from './authSaga'
import filmsWatcher from './filmsSaga'


export default function* rootSaga() {
    yield all([authWatcher(), filmsWatcher()])
}