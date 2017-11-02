import {applyMiddleware, combineReducers, createStore} from "redux";
import {promiseMiddleware} from "./middleware";
import auth from "./reducers/auth";
import common from "./reducers/common";
import home from "./reducers/home";
import settings from "./reducers/settings";
import article from "./reducers/article";
import articleList from "./reducers/articleList";

const reducer = combineReducers({
    article,
    auth,
    common,
    home,
    settings,
    articleList
});

const middleware = applyMiddleware(promiseMiddleware);

// applies the promise middleware to our store
const store = createStore(reducer, middleware);

export default store;