// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserModel, BlogModel, TagModel, LikeModel, PhotoModel, ReplyCommentModel, UntitledModel, UntitledFkModel, CommentModel, BlogModelTagModel } = initSchema(schema);

export {
  UserModel,
  BlogModel,
  TagModel,
  LikeModel,
  PhotoModel,
  ReplyCommentModel,
  UntitledModel,
  UntitledFkModel,
  CommentModel,
  BlogModelTagModel
};