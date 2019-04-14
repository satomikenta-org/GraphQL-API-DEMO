const { gql } = require('apollo-server');

const typeDefs = gql`

  type Query {
    getAllUsers: [User],
    getMe(user_id: ID): User,
    getOne(user_id: ID): User,
    getArticle(article_id: ID): Article,
  }

  type Mutation {
    createUser(first_name: String!, email: String!, user_img: String!): User!
  }

  type User {
    user_id: ID,
    first_name: String,
    email: String,
    user_img: String,
    articles: [Article]
  }

  type Article {
    article_id: ID,
    title: String,
    content: String,
    author(user_id: ID!): User!,
    comments: [Comment] 
  }

  type Comment {
    comment_id: ID,
    content: String,
    author: User
  }

`

module.exports = typeDefs;