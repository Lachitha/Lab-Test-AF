import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../reducers/UserReducer";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({ id: users[users.length - 1].id + 1, name: name, email: email })
    );
    navigate("/user");
  };

  return (
    <div class="d-flex justify-content-center align-items-center vh-100">
      <form
        class="container p-5 bg-light rounded shadow"
        onSubmit={handleSubmit}
      >
        <h3 class="mb-3 text-center">Add New Customer</h3>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="d-grid">
          <button class="btn btn-primary" type="submit">
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
