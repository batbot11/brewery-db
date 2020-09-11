import { createStore } from 'redux';
import cardCreationreducer from './reducers/cardCreation';

const store = createStore(
  cardCreationreducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;