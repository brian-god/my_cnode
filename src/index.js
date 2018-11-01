/**
 * import {createStore,applyMiddleware} from 'redux'
 * import thunk from 'react-redux'
 * import {Provider} from 'react-redux'
 * redux初始化导入
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import './static/index.css'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import redcer from './reducers/index'
/**创建store组件 */
//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使action创建函数可以返回一个function代替一个action对象
const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore)
const store = createStoreWithMiddleware(redcer)
ReactDOM.render(
    <BrowserRouter>
        <Provider
        store={store}>
        <App />
        </Provider>
    </BrowserRouter>
, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
