/**
* Sample React
* 作者：Hugo
*
* @format
* @flow
*/
import React, { Component } from 'react'
import {Menu} from 'antd'
import {Link ,withRouter} from 'react-router-dom'
import tab from './../tab'
class IndexMenu extends Component {
    constructor(arg){
        super(arg)
        let now= this.getData(this.props.location.pathname)
        this.state={
            now
        }
    }
    getData(pathname){
        return pathname.split("/")[2]
    }
    shouldComponentUpdate(nextprops){
        let now = this.getData(nextprops.location.pathname)
        if(now!==this.state.now){
            this.setState({
                now
            })
            return false
        }
        return true
    }
  render() {
      let{id,mode} =  this.props
      return(
        <Menu id={id}
        mode={mode}
        selectedKeys={[this.state.now]}
        >
            {tab.map((item) => {
                if(!item.isIndex){
                    return false;
                }
                return (<Menu.Item key={item.tab}>
                            <Link to={"/index/"+item.tab}>{item.txt}</Link>
                            </Menu.Item>)
            })}
        </Menu>
      );
  }
}
export default  withRouter((props)=>{
    let{id,mode,location} = props
    return <IndexMenu
    id={id}
    mode={mode}
    location={location}
    />
})