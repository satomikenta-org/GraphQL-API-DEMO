const pool = require('../mysqlConn');

class User {

  static async getAllUsers(){
    const sql = "SELECT * FROM users";    
    try {
      const results = await pool.query(sql);
      const usersObj = await JSON.stringify(results);
      return await JSON.parse(usersObj);
    } catch(err) {
      return false;
    }
  }

  static async getMe(user_id) {
    const sql = "SELECT * FROM users WHERE user_id = ?";
    try {
      const result = await pool.query(sql, [ user_id ]);
      return result[0];
    } catch(err) {
      return false;
    }
  }

  static async getOne(user_id) {
    const sql = "SELECT * FROM users WHERE user_id = ?";
    try {
      const result = await pool.query(sql, [ user_id ]);
      return result[0];
    } catch(err) {
      return false;
    }
  }

  static async create(first_name, email, user_img) {
    const sql = "INSERT INTO users (first_name, email, user_img) VALUES(?,?,?)";
    try {
      const result = await pool.query(sql, [first_name, email, user_img]);
      const newUser = {user_id: result.insertId,first_name, email};
      return newUser;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

module.exports = User;