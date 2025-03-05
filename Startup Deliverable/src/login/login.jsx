import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      localStorage.setItem("user", JSON.stringify({ email }));
      setIsLoggedIn(true);
      navigate("/workouts");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  }
  return (
    <main>
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <h1>Welcome To GymShare</h1>
                <div>
                    <input type = "text" placeholder="your@email.com"/>
                </div>
                <div> 
                    <input type = "text" placeholder="password"/>
                </div>
                <button type="submit">Login</button>
                <button type="submit">Create</button>
        </main>
  );
}