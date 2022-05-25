/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlogModel = /* GraphQL */ `
  mutation CreateBlogModel(
    $input: CreateBlogModelInput!
    $condition: ModelBlogModelConditionInput
  ) {
    createBlogModel(input: $input, condition: $condition) {
      id
      title
      share
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBlogModel = /* GraphQL */ `
  mutation UpdateBlogModel(
    $input: UpdateBlogModelInput!
    $condition: ModelBlogModelConditionInput
  ) {
    updateBlogModel(input: $input, condition: $condition) {
      id
      title
      share
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBlogModel = /* GraphQL */ `
  mutation DeleteBlogModel(
    $input: DeleteBlogModelInput!
    $condition: ModelBlogModelConditionInput
  ) {
    deleteBlogModel(input: $input, condition: $condition) {
      id
      title
      share
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCommentModel = /* GraphQL */ `
  mutation CreateCommentModel(
    $input: CreateCommentModelInput!
    $condition: ModelCommentModelConditionInput
  ) {
    createCommentModel(input: $input, condition: $condition) {
      id
      content
      like
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCommentModel = /* GraphQL */ `
  mutation UpdateCommentModel(
    $input: UpdateCommentModelInput!
    $condition: ModelCommentModelConditionInput
  ) {
    updateCommentModel(input: $input, condition: $condition) {
      id
      content
      like
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCommentModel = /* GraphQL */ `
  mutation DeleteCommentModel(
    $input: DeleteCommentModelInput!
    $condition: ModelCommentModelConditionInput
  ) {
    deleteCommentModel(input: $input, condition: $condition) {
      id
      content
      like
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createReplyCommentModel = /* GraphQL */ `
  mutation CreateReplyCommentModel(
    $input: CreateReplyCommentModelInput!
    $condition: ModelReplyCommentModelConditionInput
  ) {
    createReplyCommentModel(input: $input, condition: $condition) {
      id
      content
      like
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateReplyCommentModel = /* GraphQL */ `
  mutation UpdateReplyCommentModel(
    $input: UpdateReplyCommentModelInput!
    $condition: ModelReplyCommentModelConditionInput
  ) {
    updateReplyCommentModel(input: $input, condition: $condition) {
      id
      content
      like
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteReplyCommentModel = /* GraphQL */ `
  mutation DeleteReplyCommentModel(
    $input: DeleteReplyCommentModelInput!
    $condition: ModelReplyCommentModelConditionInput
  ) {
    deleteReplyCommentModel(input: $input, condition: $condition) {
      id
      content
      like
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createLikeModel = /* GraphQL */ `
  mutation CreateLikeModel(
    $input: CreateLikeModelInput!
    $condition: ModelLikeModelConditionInput
  ) {
    createLikeModel(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLikeModel = /* GraphQL */ `
  mutation UpdateLikeModel(
    $input: UpdateLikeModelInput!
    $condition: ModelLikeModelConditionInput
  ) {
    updateLikeModel(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLikeModel = /* GraphQL */ `
  mutation DeleteLikeModel(
    $input: DeleteLikeModelInput!
    $condition: ModelLikeModelConditionInput
  ) {
    deleteLikeModel(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTagModel = /* GraphQL */ `
  mutation CreateTagModel(
    $input: CreateTagModelInput!
    $condition: ModelTagModelConditionInput
  ) {
    createTagModel(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTagModel = /* GraphQL */ `
  mutation UpdateTagModel(
    $input: UpdateTagModelInput!
    $condition: ModelTagModelConditionInput
  ) {
    updateTagModel(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTagModel = /* GraphQL */ `
  mutation DeleteTagModel(
    $input: DeleteTagModelInput!
    $condition: ModelTagModelConditionInput
  ) {
    deleteTagModel(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPhotoModel = /* GraphQL */ `
  mutation CreatePhotoModel(
    $input: CreatePhotoModelInput!
    $condition: ModelPhotoModelConditionInput
  ) {
    createPhotoModel(input: $input, condition: $condition) {
      id
      name
      desciption
      tagId
      view
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePhotoModel = /* GraphQL */ `
  mutation UpdatePhotoModel(
    $input: UpdatePhotoModelInput!
    $condition: ModelPhotoModelConditionInput
  ) {
    updatePhotoModel(input: $input, condition: $condition) {
      id
      name
      desciption
      tagId
      view
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePhotoModel = /* GraphQL */ `
  mutation DeletePhotoModel(
    $input: DeletePhotoModelInput!
    $condition: ModelPhotoModelConditionInput
  ) {
    deletePhotoModel(input: $input, condition: $condition) {
      id
      name
      desciption
      tagId
      view
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUntitledModel = /* GraphQL */ `
  mutation CreateUntitledModel(
    $input: CreateUntitledModelInput!
    $condition: ModelUntitledModelConditionInput
  ) {
    createUntitledModel(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUntitledModel = /* GraphQL */ `
  mutation UpdateUntitledModel(
    $input: UpdateUntitledModelInput!
    $condition: ModelUntitledModelConditionInput
  ) {
    updateUntitledModel(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUntitledModel = /* GraphQL */ `
  mutation DeleteUntitledModel(
    $input: DeleteUntitledModelInput!
    $condition: ModelUntitledModelConditionInput
  ) {
    deleteUntitledModel(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUntitledFkModel = /* GraphQL */ `
  mutation CreateUntitledFkModel(
    $input: CreateUntitledFkModelInput!
    $condition: ModelUntitledFkModelConditionInput
  ) {
    createUntitledFkModel(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUntitledFkModel = /* GraphQL */ `
  mutation UpdateUntitledFkModel(
    $input: UpdateUntitledFkModelInput!
    $condition: ModelUntitledFkModelConditionInput
  ) {
    updateUntitledFkModel(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUntitledFkModel = /* GraphQL */ `
  mutation DeleteUntitledFkModel(
    $input: DeleteUntitledFkModelInput!
    $condition: ModelUntitledFkModelConditionInput
  ) {
    deleteUntitledFkModel(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
