# Deployment-CICD: Full-Stack Coding Quiz App

## 📚 Overview

This full-stack application is a coding quiz platform built with TypeScript, React, Node.js, and MongoDB. It includes a fully integrated CI/CD pipeline using GitHub Actions and automatic deployments to Render.

Key features:
- Take a coding quiz with multiple-choice questions.
- Backend built with Node.js, Express, and MongoDB.
- Frontend built with React and Vite for fast performance.
- Component testing with Cypress.
- Continuous Integration with GitHub Actions on Pull Requests.
- Automatic Deployment to Render on merge to the `main` branch.

---

## ⚙️ Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Backend:** Node.js, Express, TypeScript, Mongoose
- **Database:** MongoDB Atlas
- **Testing:** Cypress (Component Testing)
- **Deployment:** Render
- **CI/CD:** GitHub Actions

---

## 🚀 Live Deployment

Visit the deployed application:  
[Deployed App on Render](https://deployment-cicd-a4ub.onrender.com)  

---

🔄 GitHub Actions (CI/CD Pipeline)
When a Pull Request is made to develop:

GitHub Actions automatically run Cypress Component Tests.

When code is merged into main:

GitHub Actions trigger an automatic deployment to Render.

CI/CD ensures all code integrations pass quality checks and production is always up-to-date.

---

🧹 Branch Workflow

Branch	Purpose
main  -	Production, triggers automatic deploy
develop	- Integration branch for new features
feature/* -	Feature branches merged into develop
