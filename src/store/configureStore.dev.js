import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import StockApp from '../reducers';
import DevTools from '../containers/DevTools';
// import require from 'requirejs';

const createDevStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore);

export default function configureStore() {
  const store = createDevStoreWithMiddleware(StockApp);

  // enable webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line
      // const nextRootReducer = require('../reducers').default;
      // store.replaceReducer(nextRootReducer);
      store.replaceReducer('.default')
    });
  }

  return store;
}