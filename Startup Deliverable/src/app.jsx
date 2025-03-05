import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { MealPlans } from './mealPlans/mealPlans';
import { Social } from './social/social';
import { Workouts } from './workouts/workouts';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        setIsLoggedIn(!!storedUser);
        }, []);
        
        const handleLogout = () => {
            localStorage.removeItem("user");
            setIsLoggedIn(false);
    };
    return (
        <BrowserRouter>
            <div className="body bg-dark text-light">
                <header>
                    <nav>
                        <menu>
                            <li className="title">
                                <img src="https://t4.ftcdn.net/jpg/02/43/26/65/360_F_243266561_JPLUStDWwsBJ05qOZsWK3G1ARB6pU8Se.jpg" width="150" alt="GymShare Logo" />
                                GymShare
                            </li>

                            {isLoggedIn ? (
                                <>
                                    <li><NavLink to="/workouts">Workouts</NavLink></li>
                                    <li><NavLink to="/mealPlans">Meal Plans</NavLink></li>
                                    <li><NavLink to="/social">Social</NavLink></li>
                                    <li><button onClick={handleLogout} className="btn btn-danger">Logout</button></li>
                                </>
                            ) : (
                                <li><NavLink to="/">Login</NavLink></li>
                            )}
                        </menu>
                    </nav>
                    <hr />
                </header>

                <Routes>
                    <Route path="/" element={isLoggedIn ? <Navigate to="/workouts" /> : <Login />} />
                    <Route path="/workouts" element={isLoggedIn ? <Workouts /> : <Navigate to="/" />} />
                    <Route path="/mealPlans" element={isLoggedIn ? <MealPlans /> : <Navigate to="/" />} />
                    <Route path="/social" element={isLoggedIn ? <Social /> : <Navigate to="/" />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <footer>
                    <hr />
                    <span className="text-reset">Jackson Stephens</span>
                    <br />
                    <a href="https://github.com/Jubbyperson/startup-deliverable.git">GitHub Repository</a>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }