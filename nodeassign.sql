use nodeassign6;
create table transactions (
	id int primary key ,
    transaction_id int unique,
    customer_id int unique,
    transaction_date date,
    amount int,
    status varchar(50),
    payment_method varchar(50),
    currency varchar(50)
);

INSERT INTO transactions (transaction_id, customer_id, transaction_date, amount, status, payment_method, currency)
VALUES 
  (1001, 101, '2023-11-15', 5000, 'success', 'credit card', 'INR'),
  (1002, 102, '2023-12-02', 3000, 'pending', 'debit card', 'USD'),
  (1003, 103, '2023-12-10', 8000, 'failed', 'UPI', 'EUR'),
  (1004, 104, '2023-12-25', 2500, 'success', 'credit card', 'GBP'),
  (1005, 105, '2024-01-05', 7500, 'success', 'debit card', 'AUD'),
  (1006, 106, '2024-01-12', 4000, 'failed', 'UPI', 'JPY'),
  (1007, 107, '2024-01-20', 6000, 'pending', 'credit card', 'CAD'),
  (1008, 108, '2024-02-01', 9000, 'success', 'debit card', 'CHF'),
  (1009, 109, '2024-02-15', 3500, 'failed', 'UPI', 'NZD'),
  (1010, 110, '2024-03-01', 5500, 'success', 'credit card', 'SEK'),
  (1011, 111, '2024-03-15', 2800, 'pending', 'debit card', 'DKK'),
  (1012, 112, '2024-04-01', 7800, 'success', 'UPI', 'NOK'),
  (1013, 113, '2024-04-15', 4500, 'failed', 'credit card', 'RUB'),
  (1014, 114, '2024-05-01', 6500, 'success', 'debit card', 'BRL'),
  (1015, 115, '2024-05-15', 3200, 'pending', 'UPI', 'ZAR'),
  (1016, 116, '2024-06-01', 8200, 'success', 'credit card', 'MXN'),
  (1017, 117, '2024-06-15', 4800, 'failed', 'debit card', 'TRY'),
  (1018, 118, '2024-07-01', 6800, 'success', 'UPI', 'INR'),
  (1019, 119, '2024-07-15', 3400, 'pending', 'credit card', 'USD'),
  (1020, 120, '2024-08-01', 8400, 'success', 'debit card', 'EUR');
