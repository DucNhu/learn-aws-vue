// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TagModel, PhotoModel, UntitledModel } = initSchema(schema);

export {
  TagModel,
  PhotoModel,
  UntitledModel
};