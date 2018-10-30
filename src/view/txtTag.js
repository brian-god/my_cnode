/**
* 作者：TXK
* 标签组件
* @format
* @flow
*/
import React,{ Component} from 'react';
import {Tag} from  'antd'
const tab={
    top:{
        color:"magenta",
        text:"置顶"
    },
    good:{
        color: "geekblue",
        text: "精华"
    },
    ask:{
        color: "green",
        text: "问答"
    },
    share:{
        color: "purple",
        text: "分享"
    },
    job:{
        color: "cyan",
        text: "招聘"
    },
    dev:{
        color: "lime",
        text: "测试"
    }
}
const getTab=(data)=>{
    return(
        data.top?"top":
            data.good?"good":data.tab
    );
}

export default class TxtTag extends Component{
    render() {
        let nowTab = tab[getTab(this.props.data)]
        return <Tag color={nowTab.color}>{nowTab.text}</Tag>;
    }
}