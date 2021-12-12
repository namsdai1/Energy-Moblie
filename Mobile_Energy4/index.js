/**
 * @format
 */
 import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import 'react-native-gesture-handler';

import {name as appName} from './app.json';
//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
LogBox.ignoreAllLogs();

import RootStack from './src/navigation/RootStack';
import allReducers from './src/redux/reducers';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/redux/sagas/rootSaga'; 

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <RootStack />
    </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);