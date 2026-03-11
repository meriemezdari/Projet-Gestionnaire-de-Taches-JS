# Projet Final – JavaScript : Gestionnaire de Tâches

**Présentation :** Jeudi 22 janvier 2026

**Projet réalisé en collaboration avec :** Nosayba EL JEBLI

Vous pouvez tester l'application en ligne ici : [Planning de recettes](https://meriemezdari.github.io/Projet-Gestionnaire-de-Taches-JS/)

---

## 1. Objectif du projet
Créer une application web permettant de gérer des tâches en JavaScript.  
Ce projet permet d’appliquer les notions vues en cours :  

- Manipulation du DOM  
- Gestion des événements utilisateur  
- Stockage des données en `localStorage`  
- Interaction avec l’utilisateur via une interface dynamique  

---

## 2. Travail à réaliser
Le projet doit être réalisé en binôme et présenté lors de la dernière séance.  

L’application devra permettre :  

- D’ajouter une tâche avec un titre et une description  
- D’afficher dynamiquement les tâches dans une liste  
- De marquer une tâche comme terminée  
- De supprimer une tâche  
- De sauvegarder les tâches dans `localStorage` pour qu’elles persistent après rechargement de la page  

---

## 3. Squelette du projet

### 3.1 HTML – Structure de base (`index.html`)
```html
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Gestionnaire de Tâches</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<h1>Gestionnaire de tâches</h1>
<form id="taskForm">
<input type="text" id="taskTitle" placeholder="Titre de la tâche" required>
<textarea id="taskDesc" placeholder="Description"></textarea>
<button type="submit">Ajouter une tâche</button>
</form>
<ul id="taskList"></ul>
<script src="script.js"></script>
</body>
</html>
```

### 3.2 CSS - Mise en page (`styles.css`)
```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f4f4f4;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}
.completed {
  text-decoration: line-through;
  background: #c8e6c9;
}
```
## 3.3 JavaScript – Fonctionnalités (`script.js`)

Vous devez implémenter les fonctionnalités suivantes :

- Ajouter une tâche dynamiquement à la liste  
- Sauvegarder les tâches en `localStorage`  
- Permettre de marquer une tâche comme terminée  
- Supprimer une tâche du DOM et de `localStorage`  

---

## 4. Critères d’évaluation

- Respect du cahier des charges et des fonctionnalités demandées (40 %)  
- Qualité du code (lisibilité, structuration, bonnes pratiques) (30 %)  
- Interface utilisateur et ergonomie (15 %)  
- Présentation du projet (15 %)  

---

## 5. Présentation du projet

Chaque binôme devra présenter son projet lors de la séance prévue.  
La présentation devra inclure :

- Une démonstration fonctionnelle de l’application  
- Une explication des choix techniques et difficultés rencontrées  
- Une évaluation personnelle du travail réalisé
