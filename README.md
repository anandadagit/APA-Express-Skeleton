# Supermarket Stock Management System

## Project Overview
This project is a stock management system for a supermarket, built with Node.js, Express, and Sequelize ORM.

## Assignment Objectives
1. Extend and enhance the existing web application
2. Apply database and frontend development principles
3. Follow good programming standards
4. Develop and execute robust testing strategies
5. Use GitHub effectively for collaboration and documentation
6. Prepare for a viva to explain project design and code implementation

## Enhancement Requirements
1. Add new product categories to the database
2. Implement product sorting and searching
3. Add full CRUD functionalities for products
4. Enhance frontend visuals and interactivity
5. Refactor code for readability and modularity
6. Write unit and integration tests for new functionalities
7. Use Git and GitHub for version control with a well-documented README

## Setup Instructions
1. Clone the repository:
   Use the git clone command followed by the repository URL. Then change into the project directory.

2. Install dependencies:
   Run 'npm install' in your terminal to install all necessary dependencies.

3. Set up the database:
   - Ensure SQLite is installed on your system
   - To create a prebuilt database with sample data, run: 'npm run database:prebuild'
   - To clear the database, run: 'npm run database:clear'
   - Alternatively, the database will be automatically created with no data when you start the application for the first time

4. Start the development server:
   Run 'npm run dev' in your terminal to start the server.

5. Open your web browser and navigate to 'http://localhost:3000' to access the application

## Database Management
The project includes scripts to manage the database:

1. To create a prebuilt database with sample data:
   Run 'npm run database:prebuild' in your terminal. This will create a SQLite database file with sample products, including both clothing and electronics items.

2. To clear the database (delete the database file):
   Run 'npm run database:clear' in your terminal. This will remove the existing database file, allowing you to start fresh.

The sample data includes:
- Two clothing items (T-Shirt and Jeans)
- Two electronics items (Smartphone and Laptop)

Each item has associated details in their respective category tables (Clothing or Electronics).

## Running Tests
To run the test suite:
Run 'npm test' in your terminal.

## Database Schema

### Product (Base model)
- id: String (Primary Key)
- name: String
- price: Float
- quantity: Integer
- type: String

### Clothing
- ProductId: String (Foreign Key)
- size: String
- material: String
- color: String
- brand: String
- gender: String

### Electronics
- ProductId: String (Foreign Key)
- brand: String
- warranty: String
- model: String
- powerConsumption: Float
- dimensions: String

### Books (New)
- ProductId: String (Foreign Key)
- author: String
- isbn: String
- genre: String
- publicationDate: Date

### Groceries (New)
- ProductId: String (Foreign Key)
- expirationDate: Date
- nutritionalInfo: String
- organic: Boolean

### Toys (New)
- ProductId: String (Foreign Key)
- ageGroup: String
- material: String
- batteryOperated: Boolean

## Recommendations
1. Create an initial database script to set up a prebuilt database for demo and testing purposes
2. Implement error handling and validation for all user inputs
3. Use async/await consistently for asynchronous operations
5. Consider implementing a caching mechanism for frequently accessed data
6. Ensure responsive design for various screen sizes
7. Implement accessibility features following WCAG guidelines
8. Extend currency conversion functionality to support additional currencies such as EUR, JPY, CAD, and AUD | Refer to [https://www.exchangerate-api.com/docs/free]

## TODO
1. Implement the new models (Books, Groceries, Toys) in their respective files
2. Update the existing Clothing and Electronics models with the additional fields
3. Update the controllers and views to handle the new product types
4. Implement CRUD operations for all product types
5. Enhance the frontend to display and manage the new product types
6. Write tests for the new functionalities
7. Improve error handling and user feedback
8. Implement advanced sorting and filtering options
9. Add user authentication and authorization

## Git Workflow
1. Create a new branch for each feature or bug fix
2. Make small, frequent commits with clear messages
3. Open pull requests for code review before merging into the main branch
4. Use GitHub Issues to track tasks and bugs

## Viva Preparation
Be prepared to discuss:
1. The overall architecture of the application
2. Design decisions and their rationales
3. Challenges faced during development and how they were overcome
4. Future improvements and scalability considerations
5. Security measures implemented in the application

Remember to document your progress, challenges, and solutions throughout the development process. This will be valuable for your viva and for maintaining the project in the future.

