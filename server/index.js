const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
//middleware
app.use(cors());
app.use(express.json()); //req.body
//routes

//create todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO test (description) VALUES($1)',
      [description]
    );
  } catch (error) {
    console.error(error.message);
  }
});

//get all todo

//update todo

//update a todo

app.use(express.json());

app.listen(5000, () => {
  console.log('server has started on port 5000');
});
