const express = require('express');
const router = express.Router();
const service = require('../services/transaction.service');

// http://localhost:8080/api/transactions/
router.get('/', async (req, res) => {
    try {
        const transactions = await service.getAllTransactions();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(transactions));
    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
});

router.get('/:id', async (req, res) => {
    try {
      const transaction = await service.getTransactionById(req.params.id);
      if (transaction) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(transaction));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: `No record with given id: ${req.params.id}` }));
      }
    } catch (error) {
      console.error('Error fetching transaction:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  });
  
router.delete('/:id', async (req, res) => {
    try {
        const affectedRows = await service.deleteTransaction(req.params.id);
        if (affectedRows > 0) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Deleted successfully' }));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: `No record with given id: ${req.params.id}` }));
            return;
        }
    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
});

router.post('/', async (req, res) => {
    try {
        const transaction = await service.addOrUpdateTransaction(req.body);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({message:'Transaction added successfully'}))
    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
});

router.put('/:id', async (req, res) => {
    try {
        const affectedRows = await service.addOrUpdateTransaction(req.body, req.params.id);
        if (affectedRows > 0) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Transaction updated successfully' }));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: `No record with given id: ${req.params.id}` }));
        }
    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
});

module.exports = router;
