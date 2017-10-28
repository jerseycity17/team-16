import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import ircStore from '../reducers';

export const ircStore = (middleware) => {
    return createStore(
        ircStore,
        applyMiddleware(middleware),
        composeWithDevTools(
            applyMiddleware(ReduxThunk),
        ),
    );
}
