import {applyMiddleware, combineReducers, createStore} from "redux";
import {promiseMiddleware} from "./middleware";
import auth from "./reducers/auth";
import common from "./reducers/common";
import home from "./reducers/home";
import settings from "./reducers/settings";

const reducer = combineReducers({
   auth,
   common,
   home,
   settings
});

const middleware = applyMiddleware(promiseMiddleware);

// applies the promise middleware to our store
const store = createStore(reducer, middleware);

export default store;