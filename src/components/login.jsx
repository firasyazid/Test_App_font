import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/login", {
        email,
        password,
      });
      const { access_token } = response.data;

      localStorage.setItem("token", access_token);
      navigate("/dashboard");

    } catch (err) {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.header}>Log in to Our Medical Chatbot</h3>
        <p style={styles.subHeader}>Unlock your AI's potential</p>
        <form onSubmit={handleLogin} style={styles.form}>
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
          {error && <div style={styles.error}>{error}</div>}
          <button type="submit" style={styles.button}>
            <FontAwesomeIcon icon={faLock} style={{ marginRight: "8px" }} />
            Login
          </button>
        </form>
        <p style={styles.footerText}>
          No account? <a href="/register" style={styles.link}>Create one</a>
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
  inputFocus: {
    borderColor: "#007bff",
    backgroundColor: "#2b2b2b",
  },



  error: {
    color: "#ff4d4d",
    fontSize: "14px",
    marginBottom: "10px",
    textAlign: "left",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
  buttonHover: {
    backgroundColor: "#333333",
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



export default Login;
