import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");   
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://test-app-back.onrender.com/auth/register", {
        fullname,
        email,
        password,
        role,  
      });

      navigate("/");  
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.header}>Create an Account</h3>
        <p style={styles.subHeader}>Unlock your AI's potential</p>
        <form onSubmit={handleRegister} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="fullname" style={styles.label}>Full Name</label>
            <input
              type="text"
              id="fullname"
              style={styles.input}
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter Your Full Name"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="role" style={styles.label}>Role</label>
            <select
              id="role"
              style={styles.input}
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          {error && <div style={styles.error}>{error}</div>}
          <button type="submit" style={styles.button}>Register</button>
        </form>
        <p style={styles.footerText}>
          Already have an account? <a href="/" style={styles.link}>Login</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#121212",
    color: "white",
  },
  card: {
    width: "380px",
    backgroundColor: "#1e1e1e",
    borderRadius: "12px",
    padding: "25px 30px",
    textAlign: "center",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
  },
  header: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "10px",
    letterSpacing: "0.5px",
  },
  subHeader: {
    fontSize: "14px",
    color: "#b0b0b0",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "14px",
    color: "#b0b0b0",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px 15px",  
    borderRadius: "25px",  
    border: "1px solid #333",  
    backgroundColor: "#2b2b2b",  
    color: "#ffffff",  
    fontSize: "14px",
    outline: "none",  
    transition: "all 0.3s ease",  
  },
  error: {
    color: "#ff4d4d",
    fontSize: "14px",
    marginBottom: "10px",
    textAlign: "left",
  },
  button: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "25px",
    backgroundColor: "#1e1e1e",  
    color: "#ffffff",  
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
  footerText: {
    fontSize: "14px",
    color: "#b0b0b0",
    marginTop: "20px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default Register;
