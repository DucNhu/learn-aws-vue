/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlogModel = /* GraphQL */ `
  query GetBlogModel($id: ID!) {
    getBlogModel(id: $id) {
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
export const listBlogModels = /* GraphQL */ `
  query ListBlogModels(
    $filter: ModelBlogModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBlogModels = /* GraphQL */ `
  query SyncBlogModels(
    $filter: ModelBlogModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlogModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCommentModel = /* GraphQL */ `
  query GetCommentModel($id: ID!) {
    getCommentModel(id: $id) {
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
export const listCommentModels = /* GraphQL */ `
  query ListCommentModels(
    $filter: ModelCommentModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        like
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
export const syncCommentModels = /* GraphQL */ `
  query SyncCommentModels(
    $filter: ModelCommentModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommentModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        like
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
export const getReplyCommentModel = /* GraphQL */ `
  query GetReplyCommentModel($id: ID!) {
    getReplyCommentModel(id: $id) {
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
export const listReplyCommentModels = /* GraphQL */ `
  query ListReplyCommentModels(
    $filter: ModelReplyCommentModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReplyCommentModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        like
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
export const syncReplyCommentModels = /* GraphQL */ `
  query SyncReplyCommentModels(
    $filter: ModelReplyCommentModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReplyCommentModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        like
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
export const getLikeModel = /* GraphQL */ `
  query GetLikeModel($id: ID!) {
    getLikeModel(id: $id) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLikeModels = /* GraphQL */ `
  query ListLikeModels(
    $filter: ModelLikeModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikeModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
export const syncLikeModels = /* GraphQL */ `
  query SyncLikeModels(
    $filter: ModelLikeModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikeModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
export const getUntitledModel = /* GraphQL */ `
  query GetUntitledModel($id: ID!) {
    getUntitledModel(id: $id) {
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
export const listUntitledModels = /* GraphQL */ `
  query ListUntitledModels(
    $filter: ModelUntitledModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUntitledModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
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
export const syncUntitledModels = /* GraphQL */ `
  query SyncUntitledModels(
    $filter: ModelUntitledModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUntitledModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
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
export const getUntitledFkModel = /* GraphQL */ `
  query GetUntitledFkModel($id: ID!) {
    getUntitledFkModel(id: $id) {
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
export const listUntitledFkModels = /* GraphQL */ `
  query ListUntitledFkModels(
    $filter: ModelUntitledFkModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUntitledFkModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
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
export const syncUntitledFkModels = /* GraphQL */ `
  query SyncUntitledFkModels(
    $filter: ModelUntitledFkModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUntitledFkModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
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
