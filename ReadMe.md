//first creating database in mysql 
go to schemas create new schema and name the database 
//then run the sql commands given in nodeassign.sql file
then connect database using db.js file


//install all dependencies 
npm install express nodemon mysql2 express-async-errors
//run the index.js by 
npm start
//postman collection will be in postman folder check all the requests
In case of manual testing on browser I am providing all request examples of crud below
1.getByID - http://localhost:8080/api/transactions/4  (GET)
2.getAlltransactions - http://localhost:8080/api/transactions/  (GET)
3.deleteByid - http://localhost:8080/api/transactions/5   (DELETE)
4.addNewTransaction - http://localhost:8080/api/transactions/  (POST)
for adding new transaction go to -> body -> raw -> select JSON option  
and give JSON input as example given below
{
    "transaction_id":2003,
    "customer_id":2003,
    "transaction_date":"2024-08-02",
    "amount":2003,
    "status":"success",
    "payment_method":"credit_card",
    "currency":"INR"
}//id will be autoincremented
5.updateTransaction - http://localhost:8080/api/transactions/9  (PUT)
for updating a transaction go to -> body -> raw -> select JSON option
and give input as example given below
{
    "transaction_id":2003,
    "customer_id":2003,
    "transaction_date":"2024-08-02",
    "amount":2003,
    "status":"success",
    "payment_method":"credit_card",
    "currency":"INR"
}//id will be autoincremented