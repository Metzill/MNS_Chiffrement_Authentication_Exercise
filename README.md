Application d'Authentification

Il s'agit d'une application d'authentification simple développée avec Node.js, Express et Argon2 pour le hachage des mots de passe.
Installation

    Cloner le dépôt :

    bash

git clone https://github.com/votre-nom/application-authentification.git

Accéder au répertoire du projet :

bash

cd application-authentification

Installer les dépendances :

bash

npm install

Démarrer le serveur :

bash

    npm run dev

Utilisation

Une fois le serveur démarré, vous pouvez accéder à l'application à l'adresse http://localhost:3000 dans votre navigateur web.
Inscription

    Accéder à la page d'inscription.
    Entrer votre nom d'utilisateur et votre mot de passe souhaités.
    Cliquer sur le bouton "S'inscrire".
    Vous devriez voir un message de succès si l'inscription est réussie.

Connexion

    Accéder à la page de connexion.
    Entrer votre nom d'utilisateur et votre mot de passe.
    Cliquer sur le bouton "Connexion".
    Vous devriez être connecté si les informations d'identification sont correctes.

Fonctionnalités

    Inscription utilisateur avec hachage des mots de passe à l'aide d'Argon2.
    Connexion utilisateur avec vérification des mots de passe.
    Redémarrage automatique du serveur avec Nodemon pour le développement.

Technologies Utilisées

    Node.js
    Express.js
    Argon2
    Nodemon