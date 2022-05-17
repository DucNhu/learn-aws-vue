import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TagModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type Test1nModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PhotoModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TagModel {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TagModel, TagModelMetaData>);
  static copyOf(source: TagModel, mutator: (draft: MutableModel<TagModel, TagModelMetaData>) => MutableModel<TagModel, TagModelMetaData> | void): TagModel;
}

export declare class TestModel {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly Test1nModels?: (Test1nModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TestModel, TestModelMetaData>);
  static copyOf(source: TestModel, mutator: (draft: MutableModel<TestModel, TestModelMetaData>) => MutableModel<TestModel, TestModelMetaData> | void): TestModel;
}

export declare class Test1nModel {
  readonly id: string;
  readonly content?: string | null;
  readonly testmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Test1nModel, Test1nModelMetaData>);
  static copyOf(source: Test1nModel, mutator: (draft: MutableModel<Test1nModel, Test1nModelMetaData>) => MutableModel<Test1nModel, Test1nModelMetaData> | void): Test1nModel;
}

export declare class PhotoModel {
  readonly id: string;
  readonly name?: string | null;
  readonly desciption?: string | null;
  readonly tagId?: string | null;
  readonly view?: number | null;
  readonly userId?: string | null;
  readonly status?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PhotoModel, PhotoModelMetaData>);
  static copyOf(source: PhotoModel, mutator: (draft: MutableModel<PhotoModel, PhotoModelMetaData>) => MutableModel<PhotoModel, PhotoModelMetaData> | void): PhotoModel;
}