import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TagModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PhotoModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UntitledModelMetaData = {
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

export declare class UntitledModel {
  readonly id: string;
  readonly name?: string | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UntitledModel, UntitledModelMetaData>);
  static copyOf(source: UntitledModel, mutator: (draft: MutableModel<UntitledModel, UntitledModelMetaData>) => MutableModel<UntitledModel, UntitledModelMetaData> | void): UntitledModel;
}