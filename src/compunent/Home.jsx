import React from 'react'
import { Space, Table, Tag } from 'antd';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import "./Home.css"
import { json } from 'react-router-dom';
import {useEffect} from "react"
function Home() {

const data = [
        { name: 'John Brown', description: 'New York No. 1 Lake Park',  tags: 'Kém',},
        {  name: 'Jim Green', description: 'London No. 1 Lake Park', tags: 'Cần làm', },
        { name: 'Joe Black',description: 'Sidney No. 1 Lake Park',tags: 'Làm gấp',},
      ];
 const selectOTP = ["Kém","Cần làm","Làm gấp"]
 let[ bigData , setBigData] = useState(data)
 let local = JSON.stringify(bigData)
 let clone = ""

    // localStorage.getItem("toDo")?clone=JSON.parse(localStorage.getItem("toDo")):localStorage.setItem("toDo",`${local}`)


    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
function ADD (){
    let name = document.querySelector("#name").value
    let description = document.querySelector("#description").value
    let tags = document.querySelector("#selec").value
   
    setBigData([...bigData,{name,description,tags}])
    // setIsModalOpen(false);
}
    const columns = [
        { title: 'Việc cần làm',dataIndex: 'name', key: 'name',render: (text) => <a>{text}</a>,},
        {title: 'Độ ưu tiên ', key: 'tags',dataIndex: 'tags',
          render: (_, tags ) => {
            console.log(tags);
                return(
                    <div>{tags.tags}</div>
                )
          }
        },
        { title: 'Mô tả việc cần làm', dataIndex: 'description', key: 'description',},
        {title: 'Action', key: 'action',
          render: (_, record) => {
           return(
            <Space size="middle">
                    <Button type="primary" onClick={showModal}>
                                 Fix
                     </Button>
                     <Button >
                                 Hoàn Thành
                     </Button>
          </Space>
           )
          }
            
          ,
        },
      ];
      
      useEffect(() => {
        
 
      }, [])
      
  return (
    <div className='home'>   
                        <h1>To Do List</h1>
                <div className='bnt-add'>
                        <Button type="primary" onClick={showModal}>
                                        Thêm công viẹc
                          </Button>
                </div>
                 <div>
                         <Table columns={columns} dataSource={bigData} />
                 </div>
                 <div>

                         <>
                            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
                                <Button key="back" onClick={handleCancel}> Cancel </Button>,
                                <Button key="submit" type="primary"  onClick={handleOk}> OK</Button>,
                                <Button key="submit" type="primary"  onClick={ADD} >Add</Button>,]} >
                                    <div className='inp'>
                                            <input type="text"  placeholder='Việc cần làm' id='name'/>
                                            <input type="text"  placeholder='Mô tả công việc ' id='description'/> 
                                    </div>
                                    <div className='opt'>
                                            <select name="" id="selec">
                                                {selectOTP.map(function(valuez){
                                                    return(
                                                        <option value={valuez}> {valuez}</option>
                                                    )
                                                })}
                                            </select>
                                    </div>
                            </Modal>
                         </>
                 </div>
    </div>
  )
}

export default Home