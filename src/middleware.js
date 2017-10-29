// Now we're dispatching an action that has a 'payload' property that contains a promise
// Middleware allows us to intercept and transform actions, and we're going to create our own to intercept actions whose payload property is a promise

const promiseMiddleware = store => next => action => {
    if (isPromise(action.payload)) {
        action.payload.then(
            res => {
                action.payload = res;
                store.dispatch(action);
            },
            error => {
                action.error = true;
                action.payload = error.response.body;
                store.dispatch(action);
            }
        );

        return;
    }

    next(action);
};

function isPromise(v) {
    return v && typeof v.then === 'function';
}

export {promiseMiddleware};