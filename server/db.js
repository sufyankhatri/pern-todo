const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'sufyan',
  password: 'khatri12345',
  host: 'localhost',
  port: 5432,
  database: 'test',
});

module.exports = pool;
