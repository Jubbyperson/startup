import React from 'react';

export function MealPlans() {
  return (
    <main>
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <h1>Meals</h1>
            <h3>Username: </h3>
            <input type = "text" placeholder="Search for a meal here"/>
            <br/> 
            <button type="submit">Search</button>
            <br/>
            <br/>
            <label for="meals">Search by Category:</label>
            <select id="meals" name="meals">
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
            <button type="submit">Search</button>
            <h2>High Protein</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="post a meal here!"/>
            <input type = "text" placeholder="Name your new meal here!"/>
            <button type="submit">Post</button>
            <h2>High Carb</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="post a meal here!"/>
            <input type = "text" placeholder="Name your new meal here!"/>
            <button type="submit">Post</button>
            <h2>Low Carb</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="post a meal here!"/>
            <input type = "text" placeholder="Name your new meal here!"/>
            <button type="submit">Post</button>
            <h2>High Fat</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="post a meal here!"/>
            <input type = "text" placeholder="Name your new meal here!"/>
            <button type="submit">Post</button>
            <h2>Low Fat</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="post a meal here!"/>
            <input type = "text" placeholder="Name your new meal here!"/>
            <button type="submit">Post</button>
            <h2>Calorie Dense</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="post a meal here!"/>
            <input type = "text" placeholder="Name your new meal here!"/>
            <button type="submit">Post</button>
            <h2>Low Calorie</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="post a meal here!"/>
            <input type = "text" placeholder="Name your new meal here!"/>
            <button type="submit">Post</button>
            <h2>Tasty Cheat Day Meals!</h2>
            <p><i>content here</i></p>
            <input type = "text" placeholder="post a meal here!"/>
            <input type = "text" placeholder="Name your new meal here!"/>
            <button type="submit">Post</button>
        </main>
  );
}