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
export const createTestModel = /* GraphQL */ `
  mutation CreateTestModel(
    $input: CreateTestModelInput!
    $condition: ModelTestModelConditionInput
  ) {
    createTestModel(input: $input, condition: $condition) {
      id
      name
      description
      Test1nModels {
        items {
          id
          content
          testmodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTestModel = /* GraphQL */ `
  mutation UpdateTestModel(
    $input: UpdateTestModelInput!
    $condition: ModelTestModelConditionInput
  ) {
    updateTestModel(input: $input, condition: $condition) {
      id
      name
      description
      Test1nModels {
        items {
          id
          content
          testmodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTestModel = /* GraphQL */ `
  mutation DeleteTestModel(
    $input: DeleteTestModelInput!
    $condition: ModelTestModelConditionInput
  ) {
    deleteTestModel(input: $input, condition: $condition) {
      id
      name
      description
      Test1nModels {
        items {
          id
          content
          testmodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTest1nModel = /* GraphQL */ `
  mutation CreateTest1nModel(
    $input: CreateTest1nModelInput!
    $condition: ModelTest1nModelConditionInput
  ) {
    createTest1nModel(input: $input, condition: $condition) {
      id
      content
      testmodelID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTest1nModel = /* GraphQL */ `
  mutation UpdateTest1nModel(
    $input: UpdateTest1nModelInput!
    $condition: ModelTest1nModelConditionInput
  ) {
    updateTest1nModel(input: $input, condition: $condition) {
      id
      content
      testmodelID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTest1nModel = /* GraphQL */ `
  mutation DeleteTest1nModel(
    $input: DeleteTest1nModelInput!
    $condition: ModelTest1nModelConditionInput
  ) {
    deleteTest1nModel(input: $input, condition: $condition) {
      id
      content
      testmodelID
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
