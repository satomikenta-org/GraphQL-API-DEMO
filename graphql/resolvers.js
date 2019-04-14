const User = require('../services/user');
const Article = require('../services/article');
const Comment = require('../services/comment');

const resolvers = {
  Query: {
    getAllUsers: async () => await User.getAllUsers(),
    getMe: async (parent, args, context) => {
      // context = { user: { first_name: 'satomi', user_id: 257 } }   // for Ex
      // return await User.getMe(context.user.user_id);
      return await User.getMe(args.user_id)
    },
    getOne: async(parent, args) =>  await User.getOne(args.user_id),
    getArticle: async (parent, args) => await Article.getArticle(args.article_id),
  },
  Mutation: {
    createUser: async (parent, { first_name, email, user_img}) => await User.create(first_name, email, user_img),
  },
  Article: {
    author: async(parent, args) => await User.getOne(parent.user_id),
    comments: async(parent, args) => await Comment.getAllByArticle(parent.article_id),
  },
  User: {
    articles: async (parent, args) => await Article.getArticlesByAuthor(parent.user_id)
  },
  Comment: {
    author: async(parent, args) => await User.getOne(parent.user_id),
  },
}


module.exports = resolvers;