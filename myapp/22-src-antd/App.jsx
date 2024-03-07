import React, { Component } from 'react'
import { Button, DatePicker } from 'antd'
import { WechatOutlined,WeiboOutlined,SearchOutlined } from '@ant-design/icons'

export default class App extends Component {

  render() {
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    return (
      <div>
        App...
        <button>click me</button>
        <Button type="primary">Primary Button</Button>
        <Button>Button</Button>
        <Button type="link">Link Button1</Button>
        <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
        <WechatOutlined />
        <WeiboOutlined/>
        <DatePicker onChange={onChange} />
      </div>
    )
  }
}
