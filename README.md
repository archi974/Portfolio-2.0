# Portfolio-2.0
Le site rassemble la base de mes compétences en tant que développeur web

Création du projet 

Ce projet sera réaliser en MERN.js avec Typescript et Sass. Je réaliserai la partie frontend et backend

Pour la partie base de donnée :
Crée une base de donnée
Définir un nom d'utilisateur et mot de passe pour ce connecté à la base de donnée
Sélectionner cloud pour un hébergement en ligne
Définir une adresse IP
Si ce n'est pas déjà le cas ajouter un utilisateur dans Database Access avec droit de lecture et d'écriture

Pour la partie backend :

Ouvrez un terminal
Crée un dossier backend dans le dépôt `mkdir backend`
Accéder au dossier backend `cd backend`
Pour crée le package.json qui contiendra les dépendances faite la commande `npm init -y`
Crée un fichier tsconfig.json
Faite `npm install typescript --save-dev` pour coder en typescript transpilé
Dans votre package.json ajouter ou modifier la ligne ` "main": "dist/index.js",` et
`"start": "tsc && nodemon dist/index.js",` afin de rediriger vers les fichiers javaScript.
Faire un .gitignore et y écrire node_module voir récupérer dans le frontend le contenu du .gitignore
Installer les dépendances avec la commande `npm i dotenv express mongodb mongoose`

Pour la partie frontend :
Ouvrez un nouveau terminal
Dans le dépôt utiliser la commande `npx create-react-app frontend --template typescript`
Entrer dans le dossier `cd frontend`
Lancer le projet avec la commande `npm start`
Corriger l'erreur de création de projet lié à Babel `npm install --save-dev @babel/plugin-proposal-private-property-in-object`


Récupération et lancement de l'application :

Récupérer le dépôt `git clone clé-ssh p8-portfolio-vincent-kbidi`
Accéder au backend `cd backend`
Installer les dépendances `npm i`
Lancer le serveur backend `npm start`
Ouvrez un nouveau terminal
Accéder au chemin du dossier source
Accéder au frontend `cd frontend`
Installer les dépendances `npm i`
Lancer le serveur frontend `npm start`