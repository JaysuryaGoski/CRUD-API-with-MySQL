const db = require('../db')

module.exports.getAllTransactions = async ()=>{
    const [rows] = await db.query("SELECT * FROM transactions")
        .catch(err =>console.log(err))
    return rows;
}
module.exports.getTransactionById = async (id)=>{
    const [rows] = await db.query("SELECT * FROM transactions WHERE id  = ?",[id])
    
    return rows;
}
module.exports.deleteTransaction = async (id)=>{
    const [{affectedRows}] = await db.query("DELETE  FROM transactions WHERE id  = ?",[id])
    
    return affectedRows;
}

module.exports.addOrUpdateTransaction = async (obj, id) => {
    try {
      // Check if the transaction exists
      const [existingTransaction] = await db.query('SELECT * FROM transactions WHERE id = ?', [id]);
  
      if (existingTransaction.length > 0) {
        // Update existing transaction
        const [result] = await db.query('UPDATE transactions SET transaction_id = ?, customer_id = ?, transaction_date = ?, amount = ?, status = ?, payment_method = ?, currency = ? WHERE id = ?',
          [obj.transaction_id, obj.customer_id, obj.transaction_date, obj.amount, obj.status, obj.payment_method, obj.currency, id]);
        return result.affectedRows;
      } else {
        // Insert new transaction
        const [result] = await db.query('INSERT INTO transactions (transaction_id, customer_id, transaction_date, amount, status, payment_method, currency) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [obj.transaction_id, obj.customer_id, obj.transaction_date, obj.amount, obj.status, obj.payment_method, obj.currency]);
        return result.affectedRows;
      }
    } catch (error) {
      console.error('Error adding or updating transaction:', error);
      throw error; // Re-throw the error for proper handling
    }
  };
  