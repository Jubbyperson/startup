# startup-deliverable
### CS224 startup deliverable project
**Elevator Pitch -** My idea for an application would be called 'GymShare'. In this app, you
can share workouts, exercise routines, meal plans, or whatever else you
want to share with the whole community. The idea is to help those who are
serious about their fitness goals to reach them, getting inspiration from, using,
and building off of other people's plans that they post. It adds a great
community aspect to the gym, and can help anyone, from a high level bodybuilder,
to your every day gym-goer who wants to improve themselves one day at a time.

**Key Features -** This app would include different sections for workouts, meal plans,
progress and gym photos, and a chat section for those who want to discuss their gym goals. It would include
a system using hashtags, as well as separate sections like mentioned above so people
can find what they are looking for quick and easy.

**Description of each technology's use -**\
HTML: Creates separate sections for the different categories of workout routines, meal plans, etc.\
CSS: Choice of colored background, as well as good styling that works for phones, iPads, etc.\
JavaScript: Login, navigation to different sections of the application, typing into a chat box, etc.\
React: When a user presses a button, it will take them to the specified page based on what they pressed.\
Service: Backend service that helps to handle authenticating, database interactions, notifications, etc.\
Authentication: Will have a profile tab visible at all times.\
Database Data: Stores login data, posts from different profiles, credentials stored as well. Users cannot post without being logged into a profile.\
WebSocket: has an option to show recent posts at the front, also can show recent posts or most popular posts you post at your profile.\

Images:
![Sketch 1](image1.png.png)\
![Sketch 2](image2.png.png)\

**How React was implemented with this application -** I started off by reorganizing my files to make them easier to manage and work with in the future, so putting them into their own separate folders within a new source folder that contains the majority of my code for the project. Javascript files were created for the overall app as well as each individual webpage. These files allow react to be used to navigate to the different pages of the application. Each of the application view components are imported to the app.jsx file so that when one is clicked the corresponding view is displayed. Routes are put in the file as well in order for this to work. The html content is then copied from the html files to the jsx file so that we actually are displaying what we want for each page. After it is deployed using the deployment script, the app is now using React in order to navigate through its different pages.

**Implementing functionality using javascript -** This part of the application development uses a lot of functions, useStates, and useEffects in order to get the buttons and features of the application to become functional. Variables are stored locally and used when they are needed in order to display what is wanted and entered by the user. Username, posting, and chat functionality was added using these features. 

**Adding backend support with node.js -** Node.js and express were used in this part of application development in order to add backend support. Fetch was used in order to get endpoints, and a service directory was created in the main file that contains the necessary index.js and package.json files. Endpoints were added for logging into and creating an account, as well as making sure information regarding the workout, meal plan, and social tabs is saved and automatically populates.
