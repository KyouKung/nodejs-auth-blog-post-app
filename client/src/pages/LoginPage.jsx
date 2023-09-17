import { useState } from "react";
import { useAuth } from "../contexts/authentication.jsx";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 🐨 Todo: Exercise #4
    //  นำ Function `login` ใน AuthContext มา Execute ใน Event Handler ตรงนี้
    if (!username || !password) {
      window.alert("Please enter Username and Password.");
      return;
    }

    try {
      await login({
        username,
        password,
      });
    } catch (error) {
      window.alert("Invalid username or password.");
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form">
        <h1>Login Page</h1>
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
              type="password"
              placeholder="Enter password here"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
            />
          </label>
        </div>
        <div className="form-actions">
          <button
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
