import React, {useState} from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import ReduxThunk from 'redux-thunk';

import productsReducer from './src/store/reducers/products';

import ShopNavigator from './src/navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
