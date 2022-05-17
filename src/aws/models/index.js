// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TagModel, TestModel, Test1nModel, PhotoModel } = initSchema(schema);

export {
  TagModel,
  TestModel,
  Test1nModel,
  PhotoModel
};