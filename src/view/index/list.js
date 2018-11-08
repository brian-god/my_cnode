/**
* Sample React
* 作者：Hugo
* LList 列表
* loading 加载动画
* dataSource 展示数据
* renderItem 子项元素
* List.Item 列表子集
* actions 子项右侧元素
* List.Item.Meta 子项左侧内容框
* 列表项
* avatar 图片元素
* title 标题
* description 描述
* connect :包装函数对组件进行包装
* @format
* @flow
*/
import React, { Component } from 'react'
import { List, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import TxtTag from '../txtTag'
import {connect} from 'react-redux'
import axios from 'axios'
class IndexList extends Component {
  constructor(arg){
    super(arg);
    this.isState =true;
    this.state={
      page:1
    }
    this.getData(this.props.tab,this.state.page)
  }
  /**生命周期函数
   * 当state中的数据更新
   * 判断是否需要重新渲染
   */
  shouldComponentUpdate(nextProps,nextState){
    this.isState=false;
    /**分页切换重新渲染 */
    if(this.state.page!==nextState.page){
      this.getData(nextProps.tab,nextState.page)
      return true
    }
    if(this.props.tab!==nextProps.tab){
      this.setState({
        page:1
      })
      this.getData(nextProps.tab,1)
      return false
    }
    return true
  }
  getData(tab,page){
    this.props.dispatch((dispatch)=>{
      dispatch({
        type: "LIST_UPDATA"
      });
      axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`)
      .then((res)=>{
        /**请求成功回调方法 */
        dispatch({
          type:"LIST_UPDATA_SUCC",
          data:res.data
        })
      }).catch((error)=>{
        dispatch({
          type: "LIST_UPDATA_REEOR",
          data: error
        });
      })
    });
  }
  render() {
    let {loading,data} = this.props
    /**分页应用 */
    let pagination ={
      current:this.state.page,
      pageSize:10,
      total:1000,
      onChange:((current)=>{
        this.setState({
          page:current
        })
      })
    }
    /**判断是否有数据 */
    let data_count = data==null?0:data.length
    return <List
          loading={loading}
          dataSource={data}
          pagination={this.isState || data_count===0?false:pagination}
          renderItem={item=>(<List.Item
            actions={["回复:"+item.reply_count,"访问:"+item.visit_count]}
            key={item.id}>
            <List.Item.Meta
            avatar={<Avatar src={item.author.avatar_url}/>}
              title={<div><TxtTag data={item}/><Link to={"/details/" + item.id}>{item.title}</Link></div>}
            description={
              <p>
                <Link className="authorMargin" 
                to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                发表于:{item.create_at.split("T")[0]}
              </p>
            }>
            </List.Item.Meta>
          </List.Item>)}>
          </List>;
  }
}
export default connect(state=>state.list) (IndexList)