// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BlogModel, CommentModel, ReplyCommentModel, LikeModel, TagModel, PhotoModel, UntitledModel, UntitledFkModel } = initSchema(schema);

export {
  BlogModel,
  CommentModel,
  ReplyCommentModel,
  LikeModel,
  TagModel,
  PhotoModel,
  UntitledModel,
  UntitledFkModel
};