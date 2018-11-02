/**
* 作者：TXK
* @format
* @flow
* dangerouslySetInnerHTML
* 往div中写入内容
*/
import React,{ Component} from 'react';
import TxtDetails from './txtDetails'
import ReplyList from './replyList'
import {connect} from 'react-redux'
import axios from 'axios'
class Details extends Component{
    constructor(arg){
        super(arg);
        let id = this.props.match.params.id
        this.getData(id)
    }
    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"DETAILS_UPDATE"
            })
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
                .then((rps) => {
                    dispatch({
                        type:"DETAILS_UPDATE_SUCC",
                        data:rps.data
                    })
                })
                .catch((error)=>{
                    dispatch({
                        type:"DETAILS_UPDATE_ERRPR"
                    })
                })
        })
    }
    render() {
        let {loading,data} = this.props
        return (
            <div className="warp">
                <TxtDetails 
                data={data}
                    loading={loading}/>
                <ReplyList
                    loading={loading}
                replyCount={data.reply_count}
                replies={data.replies}
                />
            </div >
        );
    }
}
export default connect(state => (state.details)) (Details)