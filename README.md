# Empower-Hackathon

## Project Overview

Welcome to Empower Hackathon 2.0! This project is a finance website designed to assist FGLI (First-Generation, Low-Income) students in managing their budgets, though it is accessible to anyone.

### Key Features

1. **Budget Tracker**
   - Create and manage budgets.
   - Track expenses to help organize daily spending and manage finances more effectively.

2. **Forward Hub**
   - A dynamic blog and resource center aimed at FGLI students.
   - Features articles on topics like college applications and budgeting.
   - Includes a list of scholarships and resources tailored for FGLI students.

### Admin Features

- **Blog Creator**
  - Admin users can create, save, and publish articles directly from the blog creator interface.
  - Articles are dynamically saved to MongoDB and displayed on the Forward Hub.

This project aims to provide valuable tools and resources for students to better manage their finances and access helpful information as they navigate their educational journeys.

## Install

```bash
cd client
npm install
```
New Terminal:
```bash
cd server
npm install
```

Set up .env in client and server root


Client: 
```bash
VITE_API_BASE_URL=<Replace with URL of backend or just localhost:4000>
```
Server:
```bash
PORT=<any port, usually 4000>
MONGO_URI=<Setup from MongoDB>
SECRET=<Generate randomly>
```

npm run dev on both clients

## Usage Instructions
You may use this however you like, although this is a rough beta version with probably a ton of bugs that have to be addressed still.

## Contribution Guidelines

## Contribution Guidelines

We welcome contributions to this project! To ensure a smooth and effective process, please follow these guidelines:

### How to Contribute

1. **Fork the Repository**
   - Click on the "Fork" button at the top right corner of this repository to create your own copy of the project.

2. **Clone Your Fork**
   - Clone your fork to your local machine:
     ```bash
     git clone https://github.com/your-username/project-name.git
     ```

3. **Create a New Branch**
   - Create a new branch for your feature or fix:
     ```bash
     git checkout -b feature/your-feature-name
     ```

4. **Make Your Changes**
   - Make your changes and ensure that the code adheres to our coding standards.

5. **Test Your Changes**
   - Run tests to ensure your changes don’t break existing functionality.

6. **Commit Your Changes**
   - Commit your changes with a clear and concise message:
     ```bash
     git add .
     git commit -m "Add a brief description of your changes"
     ```

7. **Push Your Changes**
   - Push your changes to your forked repository:
     ```bash
     git push origin feature/your-feature-name
     ```

8. **Create a Pull Request**
   - Go to the original repository and create a pull request from your branch. Provide a clear description of the changes and why they are being made.


Thank you for contributing to our project! Your efforts are greatly appreciated.

