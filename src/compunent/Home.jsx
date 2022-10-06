import React from 'react'
import { Space, Table, Tag } from 'antd';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import "./Home.css"
import { json } from 'react-router-dom';
import {useEffect} from "react"
function Home() {
 const selectOTP = ["Kém","Cần làm","Làm gấp"]
 let[ bigData , setBigData] = useState([])
 let clone = ""
let [idex,setIdex] = useState("")
const [isModalOpen, setIsModalOpen] = useState(false);
const [show,setShow] = useState(false)
function getData (){
  let local = localStorage.getItem("toDO")
  local ? setBigData(JSON.parse(local)) : localStorage.setItem("toDO","[]")
  
}
  const handleOk = () => {
    setIsModalOpen(false);
    
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
 function showModal1(){
   setIsModalOpen(true);
   let bntFix = document.querySelector(".bnt-ok").setAttribute("style"," display: none")
 }
 function getIndex (x){
  setIsModalOpen(true);
  setIdex(x)
  let bntFix = document.querySelector(".bnt-ok")
  bntFix.setAttribute("style"," display: inline-block")
 }
function ADD (){
  
    let name = document.querySelector("#name").value
    let description = document.querySelector("#description").value
    let tags = document.querySelector("#selec").value
    clone = [...bigData]
    clone.push({name,description,tags})
    setBigData(clone)
    setIsModalOpen(false);
    localStorage.setItem("toDO",JSON.stringify(clone))
    
}
function Fixdata() {
  let name = document.querySelector("#name").value
  let description = document.querySelector("#description").value
  let tags = document.querySelector("#selec").value
     bigData[idex] = {name,description,tags} ;
 
  setBigData([...bigData])
  setIsModalOpen(false);
  localStorage.setItem("toDO",JSON.stringify(bigData))
 
}
function Dele(x){
  console.log(x);
  bigData.splice(x,1)
  setBigData([...bigData])
  localStorage.setItem("toDO",JSON.stringify(bigData))

}
function Success (x){
  let text = document.querySelector(`.index${x}`)
   text.setAttribute("style"," text-decoration: line-through") 
 let text2 = document.querySelector(`.inde${x}`)
 text2.setAttribute("style"," text-decoration: line-through") 
  
}
    const columns = [
        { title: 'Việc cần làm',dataIndex: 'name', key: 'name',render: (_,text,index) => <a className= {`index${index}`}>{text.name}</a>,},
        {title: 'Độ ưu tiên ', key: 'tags',dataIndex: 'tags',
          render: (_,tags,index ) => {
                    let colorz = ""
                  if(tags.tags === "Kém"){
                    colorz = "gray"
                  }
                  if(tags.tags === "Cần làm"){
                    colorz = "green"
                  }
                  if(tags.tags === "Làm gấp"){
                    colorz = "red"
                  }
                return(
                  <Tag color={colorz} key={tags.tags}>
                  {tags.tags.toUpperCase()}
                </Tag>
                )
          }
        },
        { title: 'Mô tả việc cần làm', dataIndex: 'description', key: 'description',render: (_,text,index) => <span className= {`inde${index}`}>{text.description}</span>,},
        {title: 'Action', key: 'action',
          render: (_,record,index) => {
            
           return(
            <Space size="middle" >
                    <Button type="primary" onClick={()=>{getIndex(index)}}>
                                 Fix
                     </Button>
                     <Button  onClick={()=>{Success(index)}}>
                                 Hoàn Thành
                     </Button>
                     <Button onClick={()=>{Dele(index)}} >
                                Xóa
                     </Button>
          </Space>
           )
          }
            
          ,
        },
      ];
      
      useEffect(() => {
        getData() 
 
      }, [])
      
  return (
    <div className='home'>   
                        <h1>To Do List</h1>
                <div className='bnt-add'>
                        <Button type="primary" onClick={ showModal1} >
                                     Thêm công viẹc
                          </Button>
                </div>
                 <div>
                         <Table columns={columns} dataSource={bigData}  pagination={{ defaultCurrent: 1,total:bigData.length }}/>
                 </div>
                 <div>

                         <>
                            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
                                <Button key="back" onClick={handleCancel}> Cancel </Button>,
                                <Button key="submit" type="primary"  className='bnt-ok' onClick={Fixdata}> Fix</Button>,
                                <Button key="submit" type="primary"  onClick={ ADD} >Add</Button>,]} >
                                    <div className='inp'>
                                            <input type="text"  placeholder='Việc cần làm' id='name' />
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