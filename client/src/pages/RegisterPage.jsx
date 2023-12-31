import { useState } from "react";
import { useAuth } from "../contexts/authentication.jsx";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { register } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    // 🐨 Todo: Exercise #2
    // นำ Function `register` ใน AuthContext มา Execute ใน Event Handler ตรงนี้
    if (!username || !password || !firstName || !lastName) {
      window.alert("Please fill all information.");
      return;
    }
    const data = {
      username,
      password,
      firstName,
      lastName,
    };
    register(data);
    navigate("/login");
  };

  return (
    <div className="register-form-container">
      <form className="register-form">
        <h1>Register Form</h1>
        <div className="input-container">
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter username here"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              value={username}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Password
            <input
              id="password"
              name="password"
              type="text"
              placeholder="Enter password here"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            First Name
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Enter first name here"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              value={firstName}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Last Name
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Enter last name here"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              value={lastName}
            />
          </label>
        </div>
        <div className="form-actions">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
