// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LikeCommentModel, BlogModel, CommentModel, ReplyCommentModel, LikeBlogModel, TagModel, PhotoModel, UntitledModel, UntitledFkModel } = initSchema(schema);

export {
  LikeCommentModel,
  BlogModel,
  CommentModel,
  ReplyCommentModel,
  LikeBlogModel,
  TagModel,
  PhotoModel,
  UntitledModel,
  UntitledFkModel
};