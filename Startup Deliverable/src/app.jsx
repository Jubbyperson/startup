import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <div className="body bg-dark text-light">
    <header>
        <nav>
            <menu>
                <li class="title"><img src="https://t4.ftcdn.net/jpg/02/43/26/65/360_F_243266561_JPLUStDWwsBJ05qOZsWK3G1ARB6pU8Se.jpg" width="150" length="100"></img>GymShare</li>
                <li><a href="index.html">Home</a></li>
                <li><a href="workouts.html">Workouts</a></li>
                <li><a href="mealPlans.html">Meal Plans</a></li>
                <li><a href="social.html">Social</a></li>
            </menu>
        </nav>
        <hr />
        </header>

        <main>
        
            App Components go Here
        </main>
        <footer>
        <hr />
        <span class="text-reset">Jackson Stephens</span>
        <br/>
        <a href="https://github.com/Jubbyperson/startup-deliverable.git">GitHub Repository</a>
        </footer></div>;
}