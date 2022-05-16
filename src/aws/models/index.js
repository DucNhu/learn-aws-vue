// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CommentModel, PostModel, TagModel, PhotoModel, UntitledModel, UntitledFkModel, PostModelTagModel } = initSchema(schema);

export {
  CommentModel,
  PostModel,
  TagModel,
  PhotoModel,
  UntitledModel,
  UntitledFkModel,
  PostModelTagModel
};