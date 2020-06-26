import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers/app.reducer';
import TwitterSaga from './sagas/twitter.saga';

const sagaMiddleware = createSagaMiddleware();
const appStore = createStore(appReducer, composeWithDevTools(
	applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(TwitterSaga);

export default appStore;