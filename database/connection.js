var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'unifeob-mysql.cn6aw048eksf.us-east-1.rds.amazonaws.com',
      user : 'admin',
      // host : 'localhost',
      // user : 'root',
      password : '12345678',
      database : 'apiusers'
    }
  });

module.exports = knex