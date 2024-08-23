## Table of Contents

- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Data Storage](#data-storage)
- [Authentication and Authorization](#authentication-and-authorization)
- [Unit Testing](#unit-testing)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)

## Project Overview
This project is a responsive dashboard application built using React, TypeScript, and SCSS. It includes several pages such as Login, Dashboard, User Page, and User Details Page, each designed to interact with a mock API and local storage for user data management [read more](https://docs.google.com/document/d/1G3pKi4uwbgFA0kfJJJh_5u1paEuCCldFHBCN3iZOLgw/edit?usp=sharing).

## Features
- **Login Page**: Allows users to authenticate.
- **Dashboard**: Displays summary data and statistics.
- **User Page**: Lists users with interactive features.
- **User Details Page**: Shows detailed information for each user with local storage persistence.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
```bash
   git clone https://github.com/Vicolas11/lendsqr-fe-graphql.git
   cd lendsqr-fe-graphql
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
4. Open http://localhost:5173 to view it in the browser.

## Tech Stack
- React: Frontend library for building user interfaces.
- TypeScript: Typed superset of JavaScript for improved developer productivity.
- SCSS: CSS preprocessor for styling components.
- Tailwind CSS: A utility-first CSS framework that provides low-level utility classes to build custom designs without writing traditional CSS.
- Jest: JavaScript testing framework.

## Data Storage
User details on the Dashboard and User Details Page are stored using the Redux Persist module, which utilizes local storage for data persistence. This data is accessed and managed through the Redux state management module, ensuring that user information remains available across components. This approach guarantees seamless user experience and data continuity, aligning with best practices in state management for web applications.

## Authentication and Authorization
The application implements authentication to restrict access to protected pages:

- **Authentication Flow:** Users must provide a valid email address and password on the Login page to access protected areas.
- **Authorization:** Upon successful login, users are redirected to the Dashboard page. Incorrect credentials display an error message on the Login page.

## Unit Testing
A unit test was conducted on the Login page to verify successful user login functionality. The test was executed using the Jest testing framework, which is integrated into the project for automated testing purposes.
The purpose of the unit test was to ensure that the login process functions correctly under different scenarios, including valid credentials, invalid credentials, and edge cases. The test focused on verifying the following aspects:

- **Successful Login:** Testing login with valid credentials should result in successful authentication and navigation to the Dashboard page.
- **Error Handling:** Testing login with invalid credentials should display an appropriate error message on the Login page without navigating away.

## Folder Structure
The project structure is organized as follows:
```php
lendsqr-fe-test/
├── public/             # favicon.svg file
├── src/                # Source files
│   ├── assets/         # Static assets (fonts, icons, images)
│   ├── components/     # Reusable UI components and styling
│   ├── config/         # Constant Config from .env
│   ├── data/           # Dashboard local data
│   ├── graphql/        # Graphql
│   ├── hooks/          # React custom hooks
│   ├── interfaces/     # Typescript interface
│   ├── layout/         # Dashboard layout
│   ├── pages/          # Application pages (Login, Dashboard, User, UserDetail)
│   ├── router/         # ReactDOM Router
│   ├── store/          # Redux State Management
│   ├── styles/         # Root SCSS stylesheets
│   ├── tests/          # Test Component Pages
│   └── utils/          # Utility functions
└── main.tsx            # Root Project file
└── README.md           # Project overview and instructions
```

## Deployment
The build output in the **dist** folder was deployed using [Vercel](https://victor-akoh-lendsqr-fe-test.vercel.app/):

```bash
npm run build
```
