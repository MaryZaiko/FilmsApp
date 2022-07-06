import {
  compose,
} from "redux";
import { configureStore, combineReducers, MiddlewareArray } from "@reduxjs/toolkit";
import filmsReducer from './reducers/filmsReducer'
import authReducer from "./reducers/authReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'



declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({

  auth: authReducer,
  films: filmsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});
sagaMiddleware.run(rootSaga)