import React from 'react'
import { Space, Table, Tag,Input ,Select,Button,message,Modal  ,Form} from 'antd';
import 'antd/dist/antd.css'
import {useDispatch ,useSelector} from 'react-redux';
import { useState,useRef } from 'react';
import {v4 as uuidv4} from "uuid"
import {addTodo,fixTodo} from "../redux/acction"
import { deleTodo ,successTodo} from '../redux/acction';

const { Option } = Select;

  function Todolist() {
    const inputElement = useRef();
    const dispatch = useDispatch()
    const data = useSelector((state)=> {
     
      return state.todoList
    } )
    
   let [inputValue,setInputValue]=useState()
   let [selectValue,setSelectValue] = useState("Trung bình")
   let [valueFix,setValueFix]=useState("")
    let [inputFix,setInputFix]=useState("")
   const [isModalOpen, setIsModalOpen] = useState(false);
  let [dataFix,setDataFix]=useState("")
  // console.log(dataFix,"datafix");
  const showModal = (data) => {
    setDataFix(data)
    
    if(data.succsess === true){
      message.warning('Todo is finished')
    }
    else{
      setIsModalOpen(true)
    }
    // setIsModalOpen(true)
  };
  const handleOk = () => {
   if(inputFix == ""){
    message.error("Không được để trống")
   }
   else{
    dispatch(fixTodo(
      {
        key:dataFix.key,
        name : inputFix,
        tags : valueFix,
      }
    ))
    setIsModalOpen(false);
   }
   
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
function handleAdd(){
    if(!inputValue){
        message.warning('name is not empty')
    }
    else{
      console.log(selectValue);
        dispatch(addTodo({
            key : uuidv4(),
             name : inputValue,
             tags : selectValue,
             succsess:false
        }))
        // dispatch(addTodo(inputValue))
    }
   
}
function handleDele (index){
 console.log(index);
  dispatch(deleTodo(index))
  
}
function handleSuccess(value){
  dispatch(successTodo(value))
}
    const columns = [
        { title: 'Name', dataIndex: 'name',  key: 'name',
          render: (_,text) => { 
            let statuss = ""
            if(text.succsess == true){
                statuss = "line-through"
             }
             return(
                <>
                    <a style={{textDecoration:`${statuss}`}}>{_}</a>
                </>
             )
        },
        },
        { title: 'Tags',key: 'tags',dataIndex: 'tags',
          render: (_, tags ) => {
            let colors = "";
                if(tags.tags === "Cao"){colors="red"}
                if(tags.tags === "Trung bình"){colors="green"}
                if(tags.tags === "Kém"){colors="gray"}
                return(
            <>
                  <Tag color={colors} key={tags.id} >
                    {tags.tags.toUpperCase()}
                  </Tag>
            </>
                )
          },
        },
        { title: 'Action', key: 'action',
          render: (_, record,index) => (
            <Space size="middle">
              <Button type="primary" onClick={()=>{handleSuccess(_)}}>Hoàn Thành </Button>
              <Button type="primary" onClick={()=>{handleDele(_)}}> Delete</Button>
              <Button type="primary" onClick={()=>{ showModal(_)}}>Fix</Button>
            </Space>
          ),
        },
      ];


  return (
    <div>   
            <h1>Todolist</h1>
            <div>
            <Input placeholder="Basic usage"  style={{width:"70%"}}  onChange={(e) => setInputValue(e.target.value)} />
                    <Select defaultValue="Trung bình" onChange={(value)=>setSelectValue(value)}>
                            <Option value="Cao"><Tag color='red'>Cao</Tag></Option>
                            <Option value="Trung bình"><Tag color='green'>Trung bình</Tag></Option>
                            <Option value="Kém"><Tag color='gray'>Kém</Tag></Option>
                     </Select>
                     <Button type="primary" onClick={handleAdd}>Submit</Button>
            </div>
            <Table columns={columns} dataSource={data} />;

        <div>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder='Todo'  onChange={(e) => setInputFix(e.target.value)} style={{marginBottom: "10px"}} required={true}></Input>
                <Select defaultValue="Trung bình" onChange={(valuefix)=>{ console.log(valuefix); setValueFix(valuefix)}} >
                            <Option value="Cao"><Tag  color='red'>Cao</Tag></Option>
                            <Option value="Trung bình"><Tag color='green'>Trung bình</Tag></Option>
                            <Option value="Kém"><Tag color='gray'>Kém</Tag></Option>
                     </Select>
      </Modal>
        </div>
    </div>
  )
}

export default Todolist