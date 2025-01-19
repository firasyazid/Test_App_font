import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();   

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
       navigate("/");
    } else {
      axios
        .get("http://127.0.0.1:8000/auth/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUsers(response.data);
        })
        .catch((err) => {
          setError("Failed to load users. Please try again.");
        });
    }
  }, [navigate]);

   const handleLogout = () => {
    localStorage.removeItem("token");  
    navigate("/");  
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
         <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>

        <h3 style={styles.header}>User List</h3>
        {error && <div style={styles.error}>{error}</div>}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeader}>
                <th>Email</th>
                <th>Full Name</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} style={styles.tableRow}>
                    <td>{user.email}</td>
                    <td>{user.fullname}</td>
                    <td>{user.role}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
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
    width: "80%",
    maxWidth: "1200px",
    backgroundColor: "#1e1e1e",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    position: "relative",  
  },
  header: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "20px",
  },
  tableContainer: {
    overflowX: "auto",
    borderRadius: "8px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  tableHeader: {
    backgroundColor: "#333",
    padding: "12px",
    color: "#fff",
    fontSize: "16px",
  },
  tableRow: {
    backgroundColor: "#2b2b2b",
    transition: "background-color 0.3s",
  },
  td: {
    padding: "12px",
    textAlign: "left",
    fontSize: "14px",
    borderBottom: "1px solid #444",
  },
  error: {
    color: "#ff4d4d",
    fontSize: "14px",
    marginBottom: "10px",
    textAlign: "left",
  },
  logoutButton: {
    position: "absolute", 
    top: "-300px",   
    right: "20px",  
    padding: "10px 20px",
    backgroundColor: "#ff4d4d",  
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
};

export default Dashboard;
