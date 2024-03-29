import { useDispatch, useSelector } from "react-redux"
import Modal from "./Modal"
import { useState } from "react"
import { deleteTodo } from "../reducer/Reducer"

const XodimQoshish = () => {
 const {todo}= useSelector(state=>state)
  const [show,setShow]=useState(false)
  const [edite,setEdite]=useState(false)
 const dispatch= useDispatch()
const closeModal=()=>{

setShow(false)
}

//edit
const handleEdit=()=>{ 
  setEdite(true)
setShow(true)
}

  return (
    <div className='container card mt-2'>
    <div className=" mt-3 card-group justify-content-between d-flex align-items-center " >
      <div className="card-input "><input className='form-control m-3' type="text" /></div>
      <div className="card-title h3">Xodim qo'shish</div>
     <div className="card-btn btn btn-light m-3" style={{height:"40px"}} onClick={()=>setShow(true)}>+Add</div>
    </div>
{show && <Modal closeModal={closeModal} edite={edite} setEdite={setEdite}/>}
<div className="row p-2">
  <div className="col-1">#</div>
  <div className="col-2">Ismi:</div>
  <div className="col-2">Familyasi:</div>
  <div className="col-2">Nomeri:</div>
  <div className="col-2">Lavozim:</div>
  <div className="col-3">Daraja:</div>
</div>
{todo.list && todo.list.map((user,key)=>{
return(<div key={user.id} className="row  p-2">
<div className="col-1">{key+1}</div>
<div className="col-2">{user.name}</div>
<div className="col-2">{user.lname}</div>
<div className="col-2">{user.telefon}</div>
<div className="col-2">{user.lavozim}</div>
<div className="col">{user.daraja}</div>
<div className="col buttons d-flex gap-2">
<button className="col btn btn-outline-primary" onClick={handleEdit}>Edit</button>
<button className="col btn btn-outline-dark" onClick={()=>dispatch(deleteTodo(user))}>Del</button>
</div>
</div>)
})}
    </div>
  )
}

export default XodimQoshish
