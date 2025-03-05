import React, {useState} from 'react';

export function MealPlans() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [newMeal, setNewMeal] = useState("");
  const [mealName, setMealName] = useState("");
  const [meals, setMeals] = useState({
    'High Protein': [],
    'High Carb': [],
    'Low Carb': [],
    'High Fat': [],
    'Low Fat': [],
    'Calorie Dense': [],
    'Low Calorie': [],
    'Tasty Cheat Day Meals!': []
  });

  const [newMealInputs, setNewMealInputs] = useState({
    'High Protein': { meal: "", name: "" },
    'High Carb': { meal: "", name: "" },
    'Low Carb': { meal: "", name: "" },
    'High Fat': { meal: "", name: "" },
    'Low Fat': { meal: "", name: "" },
    'Calorie Dense': { meal: "", name: "" },
    'Low Calorie': { meal: "", name: "" },
    'Tasty Cheat Day Meals!': { meal: "", name: "" }
  });

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm} in category: ${category}`);
    // Implement search logic here
  };

  const handlePost = (category) => {
    const { meal, name } = newMealInputs[category];
    if (meal && name) {
      setMeals({
        ...meals,
        [category]: [...meals[category], { name, content: meal }]
      });
      setNewMealInputs({
        ...newMealInputs,
        [category]: { meal: "", name: "" }
      });
    }
  };
  
  const handleInputChange = (category, field, value) => {
    setNewMealInputs({
      ...newMealInputs,
      [category]: {
        ...newMealInputs[category],
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
            <h1>Meals</h1>
            <h3>Username: </h3>
            <input type = "text" placeholder="Search for a meal here" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <br/> 
            <button type="button" onClick={handleSearch}>Search</button>
            <br/>
            <br/>
            <label htmlfor="meals">Search by Category:</label>
            <select id="meals" name="meals" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select a category</option>
                <option value="High Protein">High Protein</option>
                <option value="High Carb">High Carb</option>
                <option value="Low Carb">Low Carb</option>
                <option value="High Fat">High Fat</option>
                <option value="Low Fat">Low Fat</option>
                <option value="Calorie Dense">Calorie Dense</option>
                <option value="Low Calorie">Low Calorie</option>
                <option value="Tasty Cheat Day Meals!">Tasty Cheat Day Meals!</option>
            </select>
            <br/>
            <button type="submit" onClick={handleSearch}>Search</button>
            {Object.keys(meals).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          {meals[category].map((meal, index) => (
            <p key={index}><i>{meal.name}: {meal.content}</i></p>
          ))}
          <input
            type="text"
            placeholder="post a meal here!"
            value={newMealInputs[category].meal}
            onChange={(e) => handleInputChange(category, 'meal', e.target.value)}
          />
          <input
            type="text"
            placeholder="Name your new meal here!"
            value={newMealInputs[category].name}
            onChange={(e) => handleInputChange(category, 'name', e.target.value)}
          />
          <button type="button" onClick={() => handlePost(category)}>Post</button>
        </div>
      ))}
    </main>
  );
}