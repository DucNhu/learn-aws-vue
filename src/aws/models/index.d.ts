import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





<<<<<<< HEAD
type BlogModelMetaData = {
=======
type LikeCommentModelMetaData = {
>>>>>>> main
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

<<<<<<< HEAD
type ReplyCommentModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LikeModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PhotoModelMetaData = {
=======
type CommentModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReplyCommentModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LikeBlogModelMetaData = {
>>>>>>> main
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PhotoModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

<<<<<<< HEAD
=======
type UntitledModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UntitledFkModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class LikeCommentModel {
  readonly id: string;
  readonly user_id?: string | null;
  readonly comment_id?: string | null;
  readonly blog_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<LikeCommentModel, LikeCommentModelMetaData>);
  static copyOf(source: LikeCommentModel, mutator: (draft: MutableModel<LikeCommentModel, LikeCommentModelMetaData>) => MutableModel<LikeCommentModel, LikeCommentModelMetaData> | void): LikeCommentModel;
}

>>>>>>> main
export declare class BlogModel {
  readonly id: string;
  readonly title?: string | null;
  readonly share?: string | null;
  readonly status?: boolean | null;
<<<<<<< HEAD
=======
  readonly ratio?: string | null;
  readonly zoom?: number | null;
  readonly user_id?: string | null;
  readonly tag_id?: string | null;
>>>>>>> main
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BlogModel, BlogModelMetaData>);
  static copyOf(source: BlogModel, mutator: (draft: MutableModel<BlogModel, BlogModelMetaData>) => MutableModel<BlogModel, BlogModelMetaData> | void): BlogModel;
}

export declare class CommentModel {
  readonly id: string;
  readonly content?: string | null;
<<<<<<< HEAD
  readonly like?: number | null;
=======
  readonly user_id?: string | null;
  readonly blog_id?: string | null;
>>>>>>> main
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CommentModel, CommentModelMetaData>);
  static copyOf(source: CommentModel, mutator: (draft: MutableModel<CommentModel, CommentModelMetaData>) => MutableModel<CommentModel, CommentModelMetaData> | void): CommentModel;
<<<<<<< HEAD
}

export declare class ReplyCommentModel {
  readonly id: string;
  readonly content?: string | null;
  readonly like?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ReplyCommentModel, ReplyCommentModelMetaData>);
  static copyOf(source: ReplyCommentModel, mutator: (draft: MutableModel<ReplyCommentModel, ReplyCommentModelMetaData>) => MutableModel<ReplyCommentModel, ReplyCommentModelMetaData> | void): ReplyCommentModel;
=======
>>>>>>> main
}

export declare class ReplyCommentModel {
  readonly id: string;
<<<<<<< HEAD
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<LikeModel, LikeModelMetaData>);
  static copyOf(source: LikeModel, mutator: (draft: MutableModel<LikeModel, LikeModelMetaData>) => MutableModel<LikeModel, LikeModelMetaData> | void): LikeModel;
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
  readonly status?: boolean | null;
=======
  readonly content?: string | null;
  readonly like?: number | null;
  readonly comment_id?: string | null;
  readonly blog_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ReplyCommentModel, ReplyCommentModelMetaData>);
  static copyOf(source: ReplyCommentModel, mutator: (draft: MutableModel<ReplyCommentModel, ReplyCommentModelMetaData>) => MutableModel<ReplyCommentModel, ReplyCommentModelMetaData> | void): ReplyCommentModel;
}

export declare class LikeBlogModel {
  readonly id: string;
  readonly user_id?: string | null;
  readonly blog_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<LikeBlogModel, LikeBlogModelMetaData>);
  static copyOf(source: LikeBlogModel, mutator: (draft: MutableModel<LikeBlogModel, LikeBlogModelMetaData>) => MutableModel<LikeBlogModel, LikeBlogModelMetaData> | void): LikeBlogModel;
}

export declare class TagModel {
  readonly id: string;
  readonly name?: string | null;
>>>>>>> main
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TagModel, TagModelMetaData>);
  static copyOf(source: TagModel, mutator: (draft: MutableModel<TagModel, TagModelMetaData>) => MutableModel<TagModel, TagModelMetaData> | void): TagModel;
}

<<<<<<< HEAD
=======
export declare class PhotoModel {
  readonly id: string;
  readonly name?: string | null;
  readonly desciption?: string | null;
  readonly blog_i?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PhotoModel, PhotoModelMetaData>);
  static copyOf(source: PhotoModel, mutator: (draft: MutableModel<PhotoModel, PhotoModelMetaData>) => MutableModel<PhotoModel, PhotoModelMetaData> | void): PhotoModel;
}

>>>>>>> main
export declare class UntitledModel {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UntitledModel, UntitledModelMetaData>);
  static copyOf(source: UntitledModel, mutator: (draft: MutableModel<UntitledModel, UntitledModelMetaData>) => MutableModel<UntitledModel, UntitledModelMetaData> | void): UntitledModel;
}

export declare class UntitledFkModel {
  readonly id: string;
  readonly content: string;
<<<<<<< HEAD
=======
  readonly untitle_id?: string | null;
>>>>>>> main
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UntitledFkModel, UntitledFkModelMetaData>);
  static copyOf(source: UntitledFkModel, mutator: (draft: MutableModel<UntitledFkModel, UntitledFkModelMetaData>) => MutableModel<UntitledFkModel, UntitledFkModelMetaData> | void): UntitledFkModel;
}