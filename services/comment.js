const pool = require('../mysqlConn');

class Comment {

  static async getAllByArticle(article_id) {
    const sql = "SELECT * FROM comments WHERE article_id = ?";
    try {
      const results = await pool.query(sql, [ article_id ]);
      const comments = await JSON.stringify(results);
      return await JSON.parse(comments);
    } catch(err) {
      return false;
    }
  }
}

module.exports = Comment;