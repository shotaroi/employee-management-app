# Employee Management App

## Overview
[The Employee Management App](http://employee-management-app-frontend.s3-website.eu-north-1.amazonaws.com/) is a full-stack web application that allows users to manage employees, departments, and other related entities. It is built using React for the frontend and Spring Boot for the backend, with MySQL as the database. The application is deployed on AWS using Elastic Beanstalk for the backend and S3 for the frontend.

## Features
- Add, update, and delete employees
- View employee details
- Manage departments
- Responsive UI
- RESTful API integration

## Tech Stack
### Frontend:
- React
- Axios
- React Hook Form
- Bootstrap / Tailwind CSS (if used)

### Backend:
- Spring Boot
- Spring Data JPA
- MySQL
- Lombok
- ModelMapper

### Deployment:
- AWS Elastic Beanstalk (Backend)
- AWS S3 (Frontend Hosting)
- AWS RDS (MySQL Database)

## Installation & Setup
### Prerequisites
- Node.js and npm (for frontend)
- Java 17+ (for backend)
- MySQL database

### Clone the repository
```sh
 git clone https://github.com/yourusername/employee-management-app.git
 cd employee-management-app
```

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Configure `application.properties` with your MySQL database credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://your-database-url:3306/yourdbname
   spring.datasource.username=yourusername
   spring.datasource.password=yourpassword
   ```
3. Build and run the backend:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Update the API base URL in `src/api/departmentService.js`:
   ```javascript
   const BASE_API_URL = 'http://your-backend-elasticbeanstalk-url/api/departments';
   ```
4. Start the frontend:
   ```sh
   npm start
   ```

## Deployment
### Backend Deployment (AWS Elastic Beanstalk)
1. Package the backend as a JAR:
   ```sh
   mvn package
   ```
2. Deploy the JAR to AWS Elastic Beanstalk.

### Frontend Deployment (AWS S3)
1. Build the frontend:
   ```sh
   npm run build
   ```
2. Upload the `build/` directory to an S3 bucket configured for static website hosting.

## API Endpoints
### Employee Endpoints
- `GET /api/employees` - Get all employees
- `POST /api/add-employees` - Create a new employee
- `GET /api/employees/{id}` - Get an employee by ID
- `PUT /api/edit-employees/{id}` - Update an employee
- `DELETE /api/employees/{id}` - Delete an employee

### Department Endpoints
- `GET /api/departments` - Get all departments
- `POST /api/add-departments` - Create a new department
- `GET /api/departments/{id}` - Get a department by ID
- `PUT /api/edit-departments/{id}` - Update a department
- `DELETE /api/departments/{id}` - Delete a department


