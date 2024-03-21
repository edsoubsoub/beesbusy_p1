# Beesbusy

Beesbusy is a full-stack web application with a Django backend and a React frontend.

## Description

Beesbusy is a productivity application designed to help users manage tasks, projects, and schedules efficiently. It provides features such as task lists, project management tools, and calendar views, making it suitable for individuals, teams, and organizations.

## Backend Technologies

- Django (3.2.5): A high-level Python web framework used for building complex web applications efficiently.
- Django REST framework (3.12.4): An extension for Django that simplifies the creation of RESTful APIs.
- django-cors-headers (3.7.0): Enables Cross-Origin Resource Sharing (CORS) for your Django API, allowing requests from different domains.
- django-browser-reload (1.12.1): Provides browser live reload functionality during development, enhancing the development experience.

## Frontend Technologies

- React (18.1.0): A JavaScript library for building user interfaces.
- React Router DOM (6.22.3): Enables routing for React applications, allowing navigation between different views.
- Axios (1.6.8): A popular promise-based HTTP client for making API requests from the frontend.
- Bootstrap (5.3.3): A CSS framework that provides responsive design components and utilities.
- Bootstrap Icons (1.11.3): A set of SVG icons that complement Bootstrap's styling.
- TypeScript (4.5.5): A superset of JavaScript that adds optional static typing for improved code maintainability.

## Docker Compose

This project utilizes Docker Compose to manage the development environment. It allows you to run the backend and frontend services in isolated containers for a streamlined development experience.

## Running the Project

### Prerequisites

Ensure you have Docker and Docker Compose installed on your system. You can find installation instructions on the official Docker website: [Docker Documentation](https://docs.docker.com/engine/install/).

### Clone the Repository

If you haven't already, clone this repository using Git:

```bash
git clone https://github.com/edsoubsoub/beesbusy_p1.git
```

### Build the Images and Run the project

Run the following command from the project's root directory to build and run the Docker images for the backend and frontend:

```bash
docker-compose up --build --force-recreate --no-deps
```

### Accessing the Application

Backend API: The Django backend API runs on port 8000. You can access it using a tool like Postman or by making requests from your frontend application.
Frontend: The React frontend runs on port 3000. Open http://localhost:3000 in your web browser to view the application.

### Database Management

SQLite: This project uses SQLite as the default database for development. The database files are stored in the ./database directory.
SQLite Browser: You can use the included sqlite-browser container to explore and manage the database. Run docker-compose up sqlite-browser to start the container. Then, access the SQLite browser UI at http://localhost:3001.

