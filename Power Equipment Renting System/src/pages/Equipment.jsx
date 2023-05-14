import React from "react";
import { useDispatch, useSelector } from "react-redux";
import boostrap from "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { deleteEquip } from "../reducers/equipmentReducer";


function User() {
  const users = useSelector((state) => state.equipment);
  console.log(users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteEquip({ id: id }));
  };
  return (
    <div className="container">
  <h2 className="mb-4">Equipment</h2>
  <Link to="/create" className="btn btn-primary mb-3">
    Create Equipment
  </Link>

  <table className="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Available</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.description}</td>
          <td>${user.price}</td>
          <td>{user.available}</td>
          <td>
            <Link to={`/edit/${user.id}`} className="btn btn-primary mr-2">
              Edit
            </Link>

            <button
              className="btn btn-danger"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default User;
