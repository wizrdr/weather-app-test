import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducers';

export const store = createStore(reducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof reducer>;
