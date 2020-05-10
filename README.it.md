![](https://github.com/GhostyJade/LifeAchievements/blob/master/Resources/logo/github-placeholder.png)

[Disponibile anche in inglese](README.md)

## Life Achievements
Life achievement è un'applicazione semplice ma potente che consente all'utente di tener traccia degli obbiettivi che vuol raggiungere.

### Guida utente:
 - **Esegui il backend**:

    Il backend si trova in _Project/backend/_

    Prima di eseguirlo, devi creare un file chiamato ".env" che contiene una chiave segreta e il numero di porta sul quale l'applicazione "ascolta" (c'è un file .env.example che ti da un modo veloce per iniziare. Rinominalo e metti una buona chiave e il numero della porta, ad esempio "8080")
    Poi, esegui
    ```npm run dev```
 - **Esegui il frontend**:
    
    Il frontend si trova in _Project/frontend/_

    Il frontend è stato realizzato usando [create-react-app](https://github.com/facebook/create-react-app)
 - **Risorse**

    In questa cartella ci sono alcune risorse che ho usato per realizzare quest'app.

### Roadmap
Le features già implementate o in corso di sviluppo sono visualizzabili [qui](https://github.com/GhostyJade/LifeAchievements/projects/1)

### Licenza 
Il codice è rilasciato sotto [GPLv3](https://github.com/GhostyJade/LifeAchievements/blob/master/LICENSE)

### Logo
Il logo potrebbe esser migliorato, ma penso sia bello così al momento. L'ho realizzato usando [blender](https://blender.org).

### Implementazione
#### Backend
Il backend è stato fatto usando [express](https://expressjs.com/), [bcryptjs](https://github.com/dcodeIO/bcrypt.js) e [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken), [lowdb](https://github.com/typicode/lowdb), [cors](https://github.com/expressjs/cors) 

#### Frontend
Il frontend è stato realizzato con [react](https://reactjs.org/), [react-router](https://github.com/ReactTraining/react-router) e [MaterialUI](https://material-ui.com/), [FortAwesome](https://fortawesome.com/) e [Bulma](https://bulma.io)+[node-sass](https://github.com/sass/node-sass) per compilare i file sass/scss. Per validare i dati lato client, sono stati usati password-validator e email-validator.
In futuro, l'applicazione sarà tradotta usando [i18next](https://www.i18next.com/)

In futuro il frontend avrà un'interfaccia del genere:
![](https://github.com/GhostyJade/LifeAchievements/blob/master/Resources/basic-idea.png)

#### Android App
Sto realizzando il client Android per quest'app, il repository è pubblico ed è disponibile [qui](https://github.com/GhostyJade/LifeAchievementsAndroid)
