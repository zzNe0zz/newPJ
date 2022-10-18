import React from 'react'
import 'antd/dist/antd.css';
import { Button, Space, Table, Tag } from 'antd';
import {useSelector} from "react-redux"
function todoAppbody() {
    let dataz = useSelector((value)=>{return value})
    console.log(dataz.test.value);
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: (_,) => {
           
            let color = ""
             if(_ === "Phải làm"){
                    color = "red"
             }
             if(_ === "Cần làm"){
                color = "green"
             }
             if(_ === "Làm"){
                color = "gray"
             }
             return (
                <>
                    <Tag color={color}>{_}</Tag>
                </>
             )   
           
          },
        },
        { title: 'Action',key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button  type="primary" shape="round">Dele</Button>
              <Button  type="primary" shape="round">Fix</Button>
              <Button  type="primary" shape="round">Success</Button>
            </Space>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          tags: "Phải làm",
        },
        {
          key: '2',
          name: 'Jim Green',
          address: 'London No. 1 Lake Park',
          tags: "Cần làm",
        },
        {
          key: '3',
          name: 'Joe Black',
          address: 'Sidney No. 1 Lake Park',
          tags: "Làm",
        },
      ];
  return (
    <div>
             <Table columns={columns} dataSource={data} />;
    </div>
  )
}

export default todoAppbody