/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      userId
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
      userId
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
      userId
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
