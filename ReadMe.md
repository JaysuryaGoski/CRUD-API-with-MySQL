MySQL Database Setup and Node.js CRUD API Instructions
Follow these steps to set up the database, run the Node.js project, and test the API using Postman or a browser.

1. Database Setup
Open MySQL Workbench.
Go to Schemas.
Create a new schema (database) and name it as per your preference.
Run the SQL commands provided in the nodeassign.sql file to set up the necessary tables and seed data.
2. Connecting to the Database
Ensure you have a db.js file for database connection settings.
Update db.js with your MySQL database credentials.
3. Install Project Dependencies
Navigate to your project directory and run the following command:
npm install express nodemon mysql2 express-async-errors
4. Run the Application
To start the Node.js application, run:
npm start
This will start the server and listen on the specified port (usually 8080).

5. Testing the API
You can test the API using Postman or manually through your browser.

5.1 Postman Collection
A Postman collection with all the request examples can be found in the postman folder of the project.

5.2 Manual Testing (Using a Browser or Postman)
Here are the API endpoints and request examples:

1. Get Transaction by ID
Method: GET
URL: http://localhost:8080/api/transactions/4
2. Get All Transactions
Method: GET
URL: http://localhost:8080/api/transactions/
3. Delete Transaction by ID
Method: DELETE
URL: http://localhost:8080/api/transactions/5
4. Add New Transaction
Method: POST
URL: http://localhost:8080/api/transactions/
Body:
Go to Body > raw > select JSON format.
Provide the following JSON input:
{
  "transaction_id": 2003,
  "customer_id": 2003,
  "transaction_date": "2024-08-02",
  "amount": 2003,
  "status": "success",
  "payment_method": "credit_card",
  "currency": "INR"
}
Note: The transaction_id will be auto-incremented by the database.
5. Update Transaction
Method: PUT
URL: http://localhost:8080/api/transactions/9
Body:
Go to Body > raw > select JSON format.
Provide the following JSON input:
{
  "transaction_id": 2003,
  "customer_id": 2003,
  "transaction_date": "2024-08-02",
  "amount": 2003,
  "status": "success",
  "payment_method": "credit_card",
  "currency": "INR"
}
Note: The transaction_id will be auto-incremented by the database.
