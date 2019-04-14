const pool = require('../mysqlConn');

class Article {
  static async getArticle(article_id) {
    const sql = "SELECT * FROM articles WHERE article_id = ?";
    try {
      const result = await pool.query(sql, [ article_id ]);
      return result[0];
    } catch(err) {
      console.log(err);
    }
  } 

  static async getArticlesByAuthor(author_id) {
    const sql = "SELECT * FROM articles WHERE user_id = ?";
    try {
      const results = await pool.query(sql, [author_id]);
      const articles = await JSON.stringify(results);
      return await JSON.parse(articles);
    }catch(err) {
      return false;
    }
  }
}

module.exports = Article;