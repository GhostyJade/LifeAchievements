![](https://github.com/GhostyJade/LifeAchievements/blob/master/Resources/logo/github-placeholder.png)

[Also available in italian](README.it.md)

## Life Achievements
Life achievement is a simple-but-powerful application that allows users to keep track of what they want to achieve.

### User guide:
 - **Run backend**:

    The backend is available into _Project/backend/_

    Before running it you must create a file called ".env" which contains a secret key and the port number (there's a .env.example that provides you a simple way to start. Rename it and put a good key and a port number like "8080")
    Then, simply run
    ```npm run dev```
 - **Run frontend**:
    
    The frontend is available into _Project/frontend/_

    The frontend is made using [create-react-app](https://github.com/facebook/create-react-app)
 - **Resources**

    In this folder there are some resources I've used to make this app.

### Roadmap
Features implemented or in development are visible [here](https://github.com/GhostyJade/LifeAchievements/projects/1)

### License 
The code is relased under [GPLv3](https://github.com/GhostyJade/LifeAchievements/blob/master/LICENSE)

### Logo
The logo could be improved but I think it's cool. It's made using [blender](https://blender.org).

### Implementation
#### Backend
The backend is made using [express](https://expressjs.com/), [bcryptjs](https://github.com/dcodeIO/bcrypt.js) and [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken), [lowdb](https://github.com/typicode/lowdb), [cors](https://github.com/expressjs/cors) 

#### Frontend
The frontend is made using [react](https://reactjs.org/), [react-router](https://github.com/ReactTraining/react-router) and [MaterialUI](https://material-ui.com/), [FortAwesome](https://fortawesome.com/) and [Bulma](https://bulma.io)+[node-sass](https://github.com/sass/node-sass) to compile sass/scss files. To validate data on client side, password-validator and email-validator are used.
In the future the application will be localized using [i18next](https://www.i18next.com/)

In the future, the frontend will look like this:
![](https://github.com/GhostyJade/LifeAchievements/blob/master/Resources/basic-idea.png)

#### Android App
I'm building the Android Client for this app, the repository is public and is available [here](https://github.com/GhostyJade/LifeAchievementsAndroid)