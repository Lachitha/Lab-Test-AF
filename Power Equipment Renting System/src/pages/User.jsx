import React from "react";
import { useDispatch, useSelector } from "react-redux";
import boostrap from "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../reducers/UserReducer";

function User() {
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <div class="container">
      <h2>Customers</h2>
      <a href="/create" class="btn btn-primary mb-3">
        Create Customer
      </a>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <a href={`/edit/${user.id}`}>{user.id}</a>
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <a href={`/user/${user.id}`} class="btn btn-primary me-2">
                  Edit
                </a>
                <button
                  class="btn btn-danger"
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
