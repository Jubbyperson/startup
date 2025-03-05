import React, { useState, useEffect, useRef } from 'react';
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

  const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);
  const categoryRefs = useRef({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUsername(storedUser.email);
    }

    const storedWorkouts = JSON.parse(localStorage.getItem("workouts"));
    if (storedWorkouts) {
      setWorkouts(storedWorkouts);
      setFilteredWorkouts(storedWorkouts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm} in category: ${category}`);
    if (category) {
      const filtered = {
        ...workouts,
        [category]: workouts[category].filter(workout =>
          workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          workout.content.toLowerCase().includes(searchTerm.toLowerCase())
        )
      };
      setFilteredWorkouts(filtered);
      if (categoryRefs.current[category]) {
        categoryRefs.current[category].scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const filtered = Object.keys(workouts).reduce((acc, key) => {
        acc[key] = workouts[key].filter(workout =>
          workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          workout.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return acc;
      }, {});
      setFilteredWorkouts(filtered);
    }
  };

  const handlePost = (category) => {
    const { workout, name } = newWorkoutInputs[category];
    if (workout && name) {
      setWorkouts({
        ...workouts,
        [category]: [...workouts[category], { name, content: workout }]
      });
      setNewWorkoutInputs({
        ...newWorkoutInputs,
        [category]: { workout: "", name: "" }
      });
    }
  };

  const handleInputChange = (category, field, value) => {
    setNewWorkoutInputs({
      ...newWorkoutInputs,
      [category]: {
        ...newWorkoutInputs[category],
        [field]: value
      }
    });
  };

  return (
    <main>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Workouts</h1>
      <h3>Username: {username}</h3>
      <input
        type="text"
        placeholder="Search for a workout here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br/>
      <button type="button" onClick={handleSearch}>Search</button>
      <br/>
      <br/>
      <label htmlFor="workouts">Search by Category:</label>
      <select
        id="workouts"
        name="workouts"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select a category</option>
        <option value="Arms">Arm Workouts</option>
        <option value="Shoulders">Shoulder Workouts</option>
        <option value="Back">Back Workouts</option>
        <option value="Chest">Chest Workouts</option>
        <option value="Quad">Quad Workouts</option>
        <option value="Hamstring/Calves">Hamstring and Calf Workouts</option>
        <option value="Core">Core Workouts</option>
      </select>
      <br/>
      <button type="button" onClick={handleSearch}>Search</button>

      {Object.keys(filteredWorkouts).map((category) => (
        <div key={category} ref={(el) => (categoryRefs.current[category] = el)}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Workouts</h2>
          {filteredWorkouts[category].map((workout, index) => (
            <p key={index}><i>{workout.name}: {workout.content}</i></p>
          ))}
          <input
            type="text"
            placeholder="type your workout here!"
            value={newWorkoutInputs[category].workout}
            onChange={(e) => handleInputChange(category, 'workout', e.target.value)}
          />
          <input
            type="text"
            placeholder="name your workout here!"
            value={newWorkoutInputs[category].name}
            onChange={(e) => handleInputChange(category, 'name', e.target.value)}
          />
          <button type="button" onClick={() => handlePost(category)}>Post</button>
        </div>
      ))}
    </main>
  );
}