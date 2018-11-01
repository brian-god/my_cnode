/**
* 作者：TXK
* @format
* @flow
*/
import React,{ Component} from 'react';
import { Card, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import TxtTag from './../txtTag'
export default class TxtDetails extends Component{
    render() {
        let {loading,data} = this.props
        let title = <div>
            <h1>{data.title}</h1>
            <div>
                <TxtTag data={data} />
                <Link className="authorMargin"
                    to={"/user/" + data.author.loginname}
                >{data.author.loginname}</Link>
                <Avatar className="authorMargin"
                    src={data.author.avatar_url}
                />
                发表于：{data.create_at.split("T")[0]}
            </div>
        </div>
        return (
            <Card
                loading={loading}
                type="inner"
                title={title}
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.content
                    }}
                ></div>
            </Card>
        );
    }
}