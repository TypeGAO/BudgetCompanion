const express = require('express');
const db = require('../db');
const router = express.Router();

// Define a route
router.get('/users', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM "user"');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

// Export the router
module.exports = router;
