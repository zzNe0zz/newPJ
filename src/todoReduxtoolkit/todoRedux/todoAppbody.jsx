import React from 'react'
import 'antd/dist/antd.css';
import { Button, Space, Table, Tag } from 'antd';
import {useSelector} from "react-redux"
function todoAppbody() {
    let dataz = useSelector((value)=>{
      return value.test.todoList})
   
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
   
  return (
    <div>
             <Table columns={columns} dataSource={dataz} />;
            
    </div>
  )
}

export default todoAppbody