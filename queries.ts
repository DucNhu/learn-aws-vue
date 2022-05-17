/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTagModel = /* GraphQL */ `
  query GetTagModel($id: ID!) {
    getTagModel(id: $id) {
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
export const listTagModels = /* GraphQL */ `
  query ListTagModels(
    $filter: ModelTagModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTagModels = /* GraphQL */ `
  query SyncTagModels(
    $filter: ModelTagModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTagModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTestModel = /* GraphQL */ `
  query GetTestModel($id: ID!) {
    getTestModel(id: $id) {
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
export const listTestModels = /* GraphQL */ `
  query ListTestModels(
    $filter: ModelTestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        Test1nModels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTestModels = /* GraphQL */ `
  query SyncTestModels(
    $filter: ModelTestModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTestModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        Test1nModels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTest1nModel = /* GraphQL */ `
  query GetTest1nModel($id: ID!) {
    getTest1nModel(id: $id) {
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
export const listTest1nModels = /* GraphQL */ `
  query ListTest1nModels(
    $filter: ModelTest1nModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTest1nModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncTest1nModels = /* GraphQL */ `
  query SyncTest1nModels(
    $filter: ModelTest1nModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTest1nModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getPhotoModel = /* GraphQL */ `
  query GetPhotoModel($id: ID!) {
    getPhotoModel(id: $id) {
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
export const listPhotoModels = /* GraphQL */ `
  query ListPhotoModels(
    $filter: ModelPhotoModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotoModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPhotoModels = /* GraphQL */ `
  query SyncPhotoModels(
    $filter: ModelPhotoModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPhotoModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
