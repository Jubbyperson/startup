import React, {useState, useEffect, useRef} from 'react';
import './workouts.css';

export function Workouts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [username, setUsername] = useState("");
  const [workouts, setWorkouts] = useState({
    'Arms': [],
    'Shoulders': [],
    'Back': [],
    'Chest': [],
    'Quad': [],
    'Hamstring/Calves': [],
    'Core': []
  });

  const [newWorkoutInputs, setNewWorkoutInputs] = useState({
    'Arms': { workout: "", name: "" },
    'Shoulders': { workout: "", name: "" },
    'Back': { workout: "", name: "" },
    'Chest': { workout: "", name: "" },
    'Quad': { workout: "", name: "" },
    'Hamstring/Calves': { workout: "", name: "" },
    'Core': { workout: "", name: "" }
  });

  const categoryRefs = useRef({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUsername(storedUser.email);
    }

    const storedWorkouts = JSON.parse(localStorage.getItem("workouts"));
    if (storedWorkouts) {
      setWorkouts(storedWorkouts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm} in category: ${category}`);
    if (category && categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <main>
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <h1>Workouts</h1>
            <h3>Username: </h3>
            <input type="text" placeholder="Search for a workout here"/>
            <br/> 
            <button type="submit">Search</button>
            <br/>
            <br/>
            <label for="workouts">Search by Category:</label>
            <select id="workouts" name="workouts">
                <option value="arms">Arm Workouts</option>
                <option value="shoulders">Shoulder Workouts</option>
                <option value="back">Back Workouts</option>
                <option value="chest">Chest Workouts</option>
                <option value="quad">Quad Workouts</option>
                <option value="hamstring/calves">Hamstring and Calf Workouts</option>
                <option value="core">Core Workouts</option>
            </select>
            <br/>
            <button type="submit">Search</button>
            <br/>
            <h2>Arm Workouts</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="type your workout here!"/>
            <input type = "text" placeholder="name your workout here!"/>
            <button type="submit">Post</button>
            <h2>Shoulder Workouts</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="type your workout here!"/>
            <input type = "text" placeholder="name your workout here!"/>
            <button type="submit">Post</button>
            <h2>Back Workouts</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="type your workout here!"/>
            <input type = "text" placeholder="name your workout here!"/>
            <button type="submit">Post</button>
            <h2>Chest Workouts</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="type your workout here!"/>
            <input type = "text" placeholder="name your workout here!"/>
            <button type="submit">Post</button>
            <h2>Quad Workouts</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="type your workout here!"/>
            <input type = "text" placeholder="name your workout here!"/>
            <button type="submit">Post</button>
            <h2>Hamstring and Calf Workouts</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="type your workout here!"/>
            <input type = "text" placeholder="name your workout here!"/>
            <button type="submit">Post</button>
            <h2>Core Workouts</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="type your workout here!"/>
            <input type = "text" placeholder="name your workout here!"/>
            <button type = "submit">Post</button>
        </main>
  );
}