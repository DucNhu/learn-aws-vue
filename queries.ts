/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserModel = /* GraphQL */ `
  query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
      id
      full_name
      avatar
      age
      email
      gender
      birthday
      phone_number
      BlogModels {
        items {
          id
          title
          share
          status
          usermodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      UntitledModels {
        items {
          id
          name
          description
          usermodelID
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
export const listUserModels = /* GraphQL */ `
  query ListUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        full_name
        avatar
        age
        email
        gender
        birthday
        phone_number
        BlogModels {
          nextToken
          startedAt
        }
        UntitledModels {
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
export const syncUserModels = /* GraphQL */ `
  query SyncUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        full_name
        avatar
        age
        email
        gender
        birthday
        phone_number
        BlogModels {
          nextToken
          startedAt
        }
        UntitledModels {
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
export const getBlogModel = /* GraphQL */ `
  query GetBlogModel($id: ID!) {
    getBlogModel(id: $id) {
      id
      title
      share
      status
      usermodelID
      TagModels {
        items {
          id
          blogModelID
          tagModelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      LikeModels {
        items {
          id
          blogmodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          likeModelUserModelId
        }
        nextToken
        startedAt
      }
      PhotoModels {
        items {
          id
          name
          desciption
          tagId
          view
          status
          blogmodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ReplyCommentModels {
        items {
          id
          content
          blogmodelID
          commentmodelID
          like
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          replyCommentModelUserModelId
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
        usermodelID
        TagModels {
          nextToken
          startedAt
        }
        LikeModels {
          nextToken
          startedAt
        }
        PhotoModels {
          nextToken
          startedAt
        }
        ReplyCommentModels {
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
        usermodelID
        TagModels {
          nextToken
          startedAt
        }
        LikeModels {
          nextToken
          startedAt
        }
        PhotoModels {
          nextToken
          startedAt
        }
        ReplyCommentModels {
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
export const getCommentModel = /* GraphQL */ `
  query GetCommentModel($id: ID!) {
    getCommentModel(id: $id) {
      id
      content
      like
      blogmodelID
      ReplyCommentModels {
        items {
          id
          content
          blogmodelID
          commentmodelID
          like
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          replyCommentModelUserModelId
        }
        nextToken
        startedAt
      }
      UserModel {
        id
        full_name
        avatar
        age
        email
        gender
        birthday
        phone_number
        BlogModels {
          nextToken
          startedAt
        }
        UntitledModels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      commentModelUserModelId
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
        blogmodelID
        ReplyCommentModels {
          nextToken
          startedAt
        }
        UserModel {
          id
          full_name
          avatar
          age
          email
          gender
          birthday
          phone_number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        commentModelUserModelId
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
        blogmodelID
        ReplyCommentModels {
          nextToken
          startedAt
        }
        UserModel {
          id
          full_name
          avatar
          age
          email
          gender
          birthday
          phone_number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        commentModelUserModelId
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
      blogmodelID
      commentmodelID
      like
      UserModel {
        id
        full_name
        avatar
        age
        email
        gender
        birthday
        phone_number
        BlogModels {
          nextToken
          startedAt
        }
        UntitledModels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      replyCommentModelUserModelId
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
        blogmodelID
        commentmodelID
        like
        UserModel {
          id
          full_name
          avatar
          age
          email
          gender
          birthday
          phone_number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        replyCommentModelUserModelId
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
        blogmodelID
        commentmodelID
        like
        UserModel {
          id
          full_name
          avatar
          age
          email
          gender
          birthday
          phone_number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        replyCommentModelUserModelId
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
      blogmodelID
      UserModel {
        id
        full_name
        avatar
        age
        email
        gender
        birthday
        phone_number
        BlogModels {
          nextToken
          startedAt
        }
        UntitledModels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      likeModelUserModelId
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
        blogmodelID
        UserModel {
          id
          full_name
          avatar
          age
          email
          gender
          birthday
          phone_number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        likeModelUserModelId
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
        blogmodelID
        UserModel {
          id
          full_name
          avatar
          age
          email
          gender
          birthday
          phone_number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        likeModelUserModelId
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
      blogmodels {
        items {
          id
          blogModelID
          tagModelID
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
        blogmodels {
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
        blogmodels {
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
export const getPhotoModel = /* GraphQL */ `
  query GetPhotoModel($id: ID!) {
    getPhotoModel(id: $id) {
      id
      name
      desciption
      tagId
      view
      status
      blogmodelID
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
        blogmodelID
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
        blogmodelID
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
      UntitledFkModels {
        items {
          id
          content
          untitledmodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      usermodelID
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
        UntitledFkModels {
          nextToken
          startedAt
        }
        usermodelID
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
        UntitledFkModels {
          nextToken
          startedAt
        }
        usermodelID
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
      untitledmodelID
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
        untitledmodelID
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
        untitledmodelID
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
export const getBlogModelTagModel = /* GraphQL */ `
  query GetBlogModelTagModel($id: ID!) {
    getBlogModelTagModel(id: $id) {
      id
      blogModelID
      tagModelID
      blogModel {
        id
        title
        share
        status
        usermodelID
        TagModels {
          nextToken
          startedAt
        }
        LikeModels {
          nextToken
          startedAt
        }
        PhotoModels {
          nextToken
          startedAt
        }
        ReplyCommentModels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      tagModel {
        id
        name
        blogmodels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBlogModelTagModels = /* GraphQL */ `
  query ListBlogModelTagModels(
    $filter: ModelBlogModelTagModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogModelTagModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        blogModelID
        tagModelID
        blogModel {
          id
          title
          share
          status
          usermodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        tagModel {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
export const syncBlogModelTagModels = /* GraphQL */ `
  query SyncBlogModelTagModels(
    $filter: ModelBlogModelTagModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlogModelTagModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        blogModelID
        tagModelID
        blogModel {
          id
          title
          share
          status
          usermodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        tagModel {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
