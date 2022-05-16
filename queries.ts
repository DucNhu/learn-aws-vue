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
