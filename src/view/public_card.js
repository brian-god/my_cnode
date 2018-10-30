/**
 * 公共的卡片模板
* 作者：TXK
* @format
* @flow
*/
import React,{ Component} from 'react';
import { Card } from 'antd'
export default class PublicCard  extends Component{
    render() {
        let { data } = this.props
        return (
            <div className="warp">
                {data.map((item, index) => (
                    <Card
                        title={item.title}
                        type="inner"
                        loading={false}
                        key={index}
                    ><div
                        dangerouslySetInnerHTML={
                            { __html: item.content }
                        }></div></Card>
                ))}
            </div>
        );
    }
}