# Social Presence Showcase

A modern web application demonstrating social presence features, built with the help of AI code generation tools and deployed on Firebase Hosting.

---

## Table of Contents

- [About This Project](#about-this-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [AI Code Generation & Quality](#ai-code-generation--quality)
- [License](#license)
- [Contact](#contact)

---

## About This Project

This project was created as an experiment to test the capabilities of the Gemini code tool by Google. As a multiplatform developer, I regularly explore new tools to enhance productivity and code quality. For this project, I supervised and reviewed all generated code to ensure it met my standards.

Gemini’s integration with Google services, especially Firebase, made it an excellent choice for rapid prototyping and deployment. The app is hosted on Firebase Hosting, leveraging Google’s infrastructure for scalability and reliability.

---

## Features

- Social presence showcase UI
- Integration with Gemini API
- Fast, modern frontend
- Easy deployment to Firebase Hosting
- Environment-based configuration

---

## Tech Stack

- **Frontend:** [Your framework, e.g., React, Vue, etc.]
- **AI Integration:** Gemini Code Tool (Google)
- **Hosting:** Firebase Hosting
- **Language:** JavaScript / TypeScript
- **Package Manager:** npm

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/)
- Gemini API Key (from Google)
- Firebase account (for deployment)

---

## Running Locally

1. **Clone the repository:**
   ```sh
   git clone https://github.com/jachodev/social-presence-showcase.git
   cd social-presence-showcase
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add your Gemini API key:
     ```
     GEMINI_API_KEY=your_gemini_api_key_here
     ```

4. **Run the app:**
   ```sh
   npm run dev
   ```


---

## Deployment

This project is configured for easy deployment to Firebase Hosting.

1. **Install Firebase CLI (if you haven't already):**
   ```sh
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```sh
   firebase login
   ```

3. **Enable Frameworks:**
   ```sh
   firebase experiments:enable webframeworks
   ```

4. **Initialize Firebase in your project (if not already done):**
   ```sh
   firebase init hosting
   ```

5. **Build your app (if required):**
   ```sh
   npm run build
   ```

6. **Deploy to Firebase Hosting:**
   ```sh
   firebase deploy --only hosting
   ```

---

## AI Code Generation & Quality

This project was generated using the Gemini code tool by Google. As a multiplatform developer, I use AI tools to accelerate development while maintaining high standards by supervising and reviewing all generated code. Gemini’s seamless integration with Firebase made it a practical choice for this showcase.

**Advantages of using Gemini:**
- Rapid prototyping and code generation
- Easy integration with Google Cloud and Firebase
- Boosts productivity for multiplatform development

---


## Contact

Created by J. D. (https://github.com/jachodev)  
Feel free to reach out for questions, suggestions, or collaborations!
