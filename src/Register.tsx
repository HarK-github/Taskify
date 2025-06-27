import  { useState } from "react";
import "./style/Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = {};

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate password length
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
      isValid = false;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      newErrors.password = "Must contain at least 1 upper case.";
      isValid = false;
    } else if (!/(?=.*[a-z])/.test(password)) {
      newErrors.password = "Must contain at least 1 lower case.";
      isValid = false;
    } else if (!/(?=.*\d)/.test(password)) {
      newErrors.password = "Must contain at least 1 number.";
      isValid = false;
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      newErrors.password = "Must contain at least 1 special character.";
      isValid = false;
    }
  
    // Validate password match
    if (confirmPass !== password) {
      newErrors.confirmPass = "Passwords do not match.";
      isValid = false;
    }
  
    setErrors(newErrors);

    if (isValid) {
      console.log("Form Submitted!");
      // Handle submission here
    }
  };
  
  return (
    <div className="container">
      <h1>Taskify</h1>
      <h2>Create a new account</h2>
      <a href="#" target="_self">
        <span>Or</span> sign in to your existing account
      </a>

      <br /><br />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          id="email"
          placeholder="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <br /><br />

        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
          title="Must be at least 8 characters, and include an upper case, a number, and a special character."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="error">{errors.password}</div>}
        <br /><br />

        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm Password"
          required
          pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
          title="Must be at least 8 characters, and include an upper case, a number, and a special character."
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        {errors.confirmPass && <div className="error">{errors.confirmPass}</div>}
        <br /><br />

        <input className="submit-form" type="submit" value="Register" />
      </form>
    </div>
    
  )
}

export default Register;

