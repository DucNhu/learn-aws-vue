import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LikeModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PhotoModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReplyCommentModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UntitledModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UntitledFkModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogModelTagModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserModel {
  readonly id: string;
  readonly full_name?: string | null;
  readonly avatar?: string | null;
  readonly age?: number | null;
  readonly email?: string | null;
  readonly gender?: string | null;
  readonly birthday?: string | null;
  readonly phone_number?: string | null;
  readonly BlogModels?: (BlogModel | null)[] | null;
  readonly UntitledModels?: (UntitledModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserModel, UserModelMetaData>);
  static copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel, UserModelMetaData>) => MutableModel<UserModel, UserModelMetaData> | void): UserModel;
}

export declare class BlogModel {
  readonly id: string;
  readonly title?: string | null;
  readonly share?: string | null;
  readonly status?: boolean | null;
  readonly usermodelID: string;
  readonly TagModels?: (BlogModelTagModel | null)[] | null;
  readonly LikeModels?: (LikeModel | null)[] | null;
  readonly PhotoModels?: (PhotoModel | null)[] | null;
  readonly ReplyCommentModels?: (ReplyCommentModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BlogModel, BlogModelMetaData>);
  static copyOf(source: BlogModel, mutator: (draft: MutableModel<BlogModel, BlogModelMetaData>) => MutableModel<BlogModel, BlogModelMetaData> | void): BlogModel;
}

export declare class TagModel {
  readonly id: string;
  readonly name?: string | null;
  readonly blogmodels?: (BlogModelTagModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TagModel, TagModelMetaData>);
  static copyOf(source: TagModel, mutator: (draft: MutableModel<TagModel, TagModelMetaData>) => MutableModel<TagModel, TagModelMetaData> | void): TagModel;
}

export declare class LikeModel {
  readonly id: string;
  readonly blogmodelID: string;
  readonly UserModel?: UserModel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly likeModelUserModelId?: string | null;
  constructor(init: ModelInit<LikeModel, LikeModelMetaData>);
  static copyOf(source: LikeModel, mutator: (draft: MutableModel<LikeModel, LikeModelMetaData>) => MutableModel<LikeModel, LikeModelMetaData> | void): LikeModel;
}

export declare class PhotoModel {
  readonly id: string;
  readonly name?: string | null;
  readonly desciption?: string | null;
  readonly tagId?: string | null;
  readonly view?: number | null;
  readonly status?: boolean | null;
  readonly blogmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PhotoModel, PhotoModelMetaData>);
  static copyOf(source: PhotoModel, mutator: (draft: MutableModel<PhotoModel, PhotoModelMetaData>) => MutableModel<PhotoModel, PhotoModelMetaData> | void): PhotoModel;
}

export declare class ReplyCommentModel {
  readonly id: string;
  readonly content?: string | null;
  readonly blogmodelID: string;
  readonly commentmodelID: string;
  readonly like?: number | null;
  readonly UserModel?: UserModel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly replyCommentModelUserModelId?: string | null;
  constructor(init: ModelInit<ReplyCommentModel, ReplyCommentModelMetaData>);
  static copyOf(source: ReplyCommentModel, mutator: (draft: MutableModel<ReplyCommentModel, ReplyCommentModelMetaData>) => MutableModel<ReplyCommentModel, ReplyCommentModelMetaData> | void): ReplyCommentModel;
}

export declare class UntitledModel {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly UntitledFkModels?: (UntitledFkModel | null)[] | null;
  readonly usermodelID: string;
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

export declare class CommentModel {
  readonly id: string;
  readonly content?: string | null;
  readonly like?: number | null;
  readonly blogmodelID: string;
  readonly ReplyCommentModels?: (ReplyCommentModel | null)[] | null;
  readonly UserModel?: UserModel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentModelUserModelId?: string | null;
  constructor(init: ModelInit<CommentModel, CommentModelMetaData>);
  static copyOf(source: CommentModel, mutator: (draft: MutableModel<CommentModel, CommentModelMetaData>) => MutableModel<CommentModel, CommentModelMetaData> | void): CommentModel;
}

export declare class BlogModelTagModel {
  readonly id: string;
  readonly blogModel: BlogModel;
  readonly tagModel: TagModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BlogModelTagModel, BlogModelTagModelMetaData>);
  static copyOf(source: BlogModelTagModel, mutator: (draft: MutableModel<BlogModelTagModel, BlogModelTagModelMetaData>) => MutableModel<BlogModelTagModel, BlogModelTagModelMetaData> | void): BlogModelTagModel;
}