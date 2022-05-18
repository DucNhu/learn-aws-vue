/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserModel = /* GraphQL */ `
  mutation CreateUserModel(
    $input: CreateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    createUserModel(input: $input, condition: $condition) {
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
export const updateUserModel = /* GraphQL */ `
  mutation UpdateUserModel(
    $input: UpdateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    updateUserModel(input: $input, condition: $condition) {
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
export const deleteUserModel = /* GraphQL */ `
  mutation DeleteUserModel(
    $input: DeleteUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    deleteUserModel(input: $input, condition: $condition) {
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
export const createCommentModel = /* GraphQL */ `
  mutation CreateCommentModel(
    $input: CreateCommentModelInput!
    $condition: ModelCommentModelConditionInput
  ) {
    createCommentModel(input: $input, condition: $condition) {
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
export const updateCommentModel = /* GraphQL */ `
  mutation UpdateCommentModel(
    $input: UpdateCommentModelInput!
    $condition: ModelCommentModelConditionInput
  ) {
    updateCommentModel(input: $input, condition: $condition) {
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
export const deleteCommentModel = /* GraphQL */ `
  mutation DeleteCommentModel(
    $input: DeleteCommentModelInput!
    $condition: ModelCommentModelConditionInput
  ) {
    deleteCommentModel(input: $input, condition: $condition) {
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
export const createReplyCommentModel = /* GraphQL */ `
  mutation CreateReplyCommentModel(
    $input: CreateReplyCommentModelInput!
    $condition: ModelReplyCommentModelConditionInput
  ) {
    createReplyCommentModel(input: $input, condition: $condition) {
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
export const updateReplyCommentModel = /* GraphQL */ `
  mutation UpdateReplyCommentModel(
    $input: UpdateReplyCommentModelInput!
    $condition: ModelReplyCommentModelConditionInput
  ) {
    updateReplyCommentModel(input: $input, condition: $condition) {
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
export const deleteReplyCommentModel = /* GraphQL */ `
  mutation DeleteReplyCommentModel(
    $input: DeleteReplyCommentModelInput!
    $condition: ModelReplyCommentModelConditionInput
  ) {
    deleteReplyCommentModel(input: $input, condition: $condition) {
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
export const createLikeModel = /* GraphQL */ `
  mutation CreateLikeModel(
    $input: CreateLikeModelInput!
    $condition: ModelLikeModelConditionInput
  ) {
    createLikeModel(input: $input, condition: $condition) {
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
export const updateLikeModel = /* GraphQL */ `
  mutation UpdateLikeModel(
    $input: UpdateLikeModelInput!
    $condition: ModelLikeModelConditionInput
  ) {
    updateLikeModel(input: $input, condition: $condition) {
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
export const deleteLikeModel = /* GraphQL */ `
  mutation DeleteLikeModel(
    $input: DeleteLikeModelInput!
    $condition: ModelLikeModelConditionInput
  ) {
    deleteLikeModel(input: $input, condition: $condition) {
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
export const createTagModel = /* GraphQL */ `
  mutation CreateTagModel(
    $input: CreateTagModelInput!
    $condition: ModelTagModelConditionInput
  ) {
    createTagModel(input: $input, condition: $condition) {
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
export const updateTagModel = /* GraphQL */ `
  mutation UpdateTagModel(
    $input: UpdateTagModelInput!
    $condition: ModelTagModelConditionInput
  ) {
    updateTagModel(input: $input, condition: $condition) {
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
export const deleteTagModel = /* GraphQL */ `
  mutation DeleteTagModel(
    $input: DeleteTagModelInput!
    $condition: ModelTagModelConditionInput
  ) {
    deleteTagModel(input: $input, condition: $condition) {
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
      blogmodelID
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
      blogmodelID
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
      blogmodelID
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
export const updateUntitledModel = /* GraphQL */ `
  mutation UpdateUntitledModel(
    $input: UpdateUntitledModelInput!
    $condition: ModelUntitledModelConditionInput
  ) {
    updateUntitledModel(input: $input, condition: $condition) {
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
export const deleteUntitledModel = /* GraphQL */ `
  mutation DeleteUntitledModel(
    $input: DeleteUntitledModelInput!
    $condition: ModelUntitledModelConditionInput
  ) {
    deleteUntitledModel(input: $input, condition: $condition) {
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
export const createUntitledFkModel = /* GraphQL */ `
  mutation CreateUntitledFkModel(
    $input: CreateUntitledFkModelInput!
    $condition: ModelUntitledFkModelConditionInput
  ) {
    createUntitledFkModel(input: $input, condition: $condition) {
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
export const updateUntitledFkModel = /* GraphQL */ `
  mutation UpdateUntitledFkModel(
    $input: UpdateUntitledFkModelInput!
    $condition: ModelUntitledFkModelConditionInput
  ) {
    updateUntitledFkModel(input: $input, condition: $condition) {
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
export const deleteUntitledFkModel = /* GraphQL */ `
  mutation DeleteUntitledFkModel(
    $input: DeleteUntitledFkModelInput!
    $condition: ModelUntitledFkModelConditionInput
  ) {
    deleteUntitledFkModel(input: $input, condition: $condition) {
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
export const createBlogModelTagModel = /* GraphQL */ `
  mutation CreateBlogModelTagModel(
    $input: CreateBlogModelTagModelInput!
    $condition: ModelBlogModelTagModelConditionInput
  ) {
    createBlogModelTagModel(input: $input, condition: $condition) {
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
export const updateBlogModelTagModel = /* GraphQL */ `
  mutation UpdateBlogModelTagModel(
    $input: UpdateBlogModelTagModelInput!
    $condition: ModelBlogModelTagModelConditionInput
  ) {
    updateBlogModelTagModel(input: $input, condition: $condition) {
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
export const deleteBlogModelTagModel = /* GraphQL */ `
  mutation DeleteBlogModelTagModel(
    $input: DeleteBlogModelTagModelInput!
    $condition: ModelBlogModelTagModelConditionInput
  ) {
    deleteBlogModelTagModel(input: $input, condition: $condition) {
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
