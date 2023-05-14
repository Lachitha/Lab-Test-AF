import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateEquip } from '../reducers/equipmentReducer';





function EquipmentEdit() {
    const {id} =useParams();
    const users = useSelector((state)=>state.equipment);
    const existingUser = users.filter(f=>f.id == id);
    const{name , available} =existingUser[0];
    const[uname,setName]= useState(name);
    const[uavailable,setAvailable]=useState(available);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateEquip({id: id,name:uname,available:uavailable}));
       navigate('/equipment');
    }
  return (
    <div class="d-flex justify-content-center align-items-center vh-100">
  <form className="container col-lg-6 col-md-8 col-sm-10 col-xs-12" onSubmit={handleUpdate}>
    <h3 className="text-center mb-4">Update Equipment</h3>
    <div className="form-group">
      <label>Name</label>
      <input type="text" className="form-control" value={uname} onChange={e => setName(e.target.value)} />
    </div>
    <div className="form-group">
      <label>Availability</label>
      <select className="form-control" value={uavailable} onChange={e => setAvailable(e.target.value)}>
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
    </div>
    <div className="form-group d-flex justify-content-center">
      <button className="btn btn-primary btn-lg mt-3">Update</button>
    </div>
  </form>
</div>

  
  )
}

export default EquipmentEdit