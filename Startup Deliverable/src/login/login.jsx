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
            {isLoggedIn ? (
            <div>
            <h2>Welcome, {JSON.parse(localStorage.getItem("user")).email}!</h2>
            <button onClick={handleLogout}>Logout</button>
            </div>
            ) : (
              <div>
              <div>
                <input
                  type="text"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            <div>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => alert("Sign-up functionality coming soon")}>
            Create
            </button>
            </div>
            )}
        </main>
  );
}