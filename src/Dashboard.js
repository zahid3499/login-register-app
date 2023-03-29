import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "./AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth(); // you may use the user object however you want to proceed
  const [auth, setAuth] = useState("");
  let navigate = useNavigate(); // Use for Navigate on Previous

  //   useEffect(() => {
  //     // var auth = localStorage.getItem("email");
  //     setAuth(user);
  //   }, [user]);
  if (!user) {
    navigate(`/login`);
  }
  return (
    <div>
      <div>Welcome to Private Page</div>{" "}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
