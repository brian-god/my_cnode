/**
* 作者：TXK
* @format
* @flow
* dangerouslySetInnerHTML
* 往div中写入内容
*/
import React,{ Component} from 'react';
import data from './data'
import TxtDetails from './txtDetails'
import ReplyList from './replyList'
export default class Details extends Component{
    render() {
        return (
            <div className="warp">
                <TxtDetails 
                data={data.data}
                loading = {false}/>
                <ReplyList
                loading = {false}
                replyCount={data.data.reply_count}
                replies={data.data.replies}
                />
            </div >
        );
    }
}