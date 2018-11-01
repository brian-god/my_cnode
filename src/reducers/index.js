/**
* 作者：TXK
* @format
* @flow
* combineReducers
* 创建管理
*/
import {combineReducers} from 'redux'
import list from './list'
import details from './details'
import user from './user'
let redcer = combineReducers({
    list,
    details,
    user
});

export default redcer