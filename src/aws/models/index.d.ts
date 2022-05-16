import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CommentModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PhotoModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UntitledModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UntitledFkModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostModelTagModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CommentModel {
  readonly id: string;
  readonly content?: string | null;
  readonly postID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CommentModel, CommentModelMetaData>);
  static copyOf(source: CommentModel, mutator: (draft: MutableModel<CommentModel, CommentModelMetaData>) => MutableModel<CommentModel, CommentModelMetaData> | void): CommentModel;
}

export declare class PostModel {
  readonly id: string;
  readonly caption?: string | null;
  readonly PhotoModels?: (CommentModel | null)[] | null;
  readonly likes?: string | null;
  readonly Comments?: (CommentModel | null)[] | null;
  readonly TagModels?: (PostModelTagModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PostModel, PostModelMetaData>);
  static copyOf(source: PostModel, mutator: (draft: MutableModel<PostModel, PostModelMetaData>) => MutableModel<PostModel, PostModelMetaData> | void): PostModel;
}

export declare class TagModel {
  readonly id: string;
  readonly name?: string | null;
  readonly posts?: (PostModelTagModel | null)[] | null;
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
  readonly postID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PhotoModel, PhotoModelMetaData>);
  static copyOf(source: PhotoModel, mutator: (draft: MutableModel<PhotoModel, PhotoModelMetaData>) => MutableModel<PhotoModel, PhotoModelMetaData> | void): PhotoModel;
}

export declare class UntitledModel {
  readonly id: string;
  readonly name?: string | null;
  readonly Description?: string | null;
  readonly UntitledFkModels?: (UntitledFkModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UntitledModel, UntitledModelMetaData>);
  static copyOf(source: UntitledModel, mutator: (draft: MutableModel<UntitledModel, UntitledModelMetaData>) => MutableModel<UntitledModel, UntitledModelMetaData> | void): UntitledModel;
}

export declare class UntitledFkModel {
  readonly id: string;
  readonly content: string;
  readonly untitledmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UntitledFkModel, UntitledFkModelMetaData>);
  static copyOf(source: UntitledFkModel, mutator: (draft: MutableModel<UntitledFkModel, UntitledFkModelMetaData>) => MutableModel<UntitledFkModel, UntitledFkModelMetaData> | void): UntitledFkModel;
}

export declare class PostModelTagModel {
  readonly id: string;
  readonly postModel: PostModel;
  readonly tagModel: TagModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PostModelTagModel, PostModelTagModelMetaData>);
  static copyOf(source: PostModelTagModel, mutator: (draft: MutableModel<PostModelTagModel, PostModelTagModelMetaData>) => MutableModel<PostModelTagModel, PostModelTagModelMetaData> | void): PostModelTagModel;
}