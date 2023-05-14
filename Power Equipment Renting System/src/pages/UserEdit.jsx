import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../reducers/UserReducer';




function UserEdit() {
    const {id} =useParams();
    const users = useSelector((state)=>state.users);
    const existingUser = users.filter(f=>f.id == id);
    const{name , email} =existingUser[0];
    const[uname,setName]= useState(name);
    const[uemail,setEmail]=useState(email);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({id: id,name:uname,email:uemail}));
       navigate('/user');
    }
  return (
    <div className="d-flex w-100">
    <form className="container" onSubmit={handleUpdate}>
      <h3>Update  User</h3>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control"  value={uname} onChange={e=> setName(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" value={uemail} onChange={e=> setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <button className="btn btn-primary">Update User</button>
      </div>
    </form>
  </div>
  )
}

export default UserEdit