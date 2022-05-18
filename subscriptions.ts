/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserModel = /* GraphQL */ `
  subscription OnCreateUserModel {
    onCreateUserModel {
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
export const onUpdateUserModel = /* GraphQL */ `
  subscription OnUpdateUserModel {
    onUpdateUserModel {
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
export const onDeleteUserModel = /* GraphQL */ `
  subscription OnDeleteUserModel {
    onDeleteUserModel {
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
export const onCreateBlogModel = /* GraphQL */ `
  subscription OnCreateBlogModel {
    onCreateBlogModel {
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
export const onUpdateBlogModel = /* GraphQL */ `
  subscription OnUpdateBlogModel {
    onUpdateBlogModel {
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
export const onDeleteBlogModel = /* GraphQL */ `
  subscription OnDeleteBlogModel {
    onDeleteBlogModel {
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
export const onCreateCommentModel = /* GraphQL */ `
  subscription OnCreateCommentModel {
    onCreateCommentModel {
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
export const onUpdateCommentModel = /* GraphQL */ `
  subscription OnUpdateCommentModel {
    onUpdateCommentModel {
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
export const onDeleteCommentModel = /* GraphQL */ `
  subscription OnDeleteCommentModel {
    onDeleteCommentModel {
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
export const onCreateReplyCommentModel = /* GraphQL */ `
  subscription OnCreateReplyCommentModel {
    onCreateReplyCommentModel {
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
export const onUpdateReplyCommentModel = /* GraphQL */ `
  subscription OnUpdateReplyCommentModel {
    onUpdateReplyCommentModel {
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
export const onDeleteReplyCommentModel = /* GraphQL */ `
  subscription OnDeleteReplyCommentModel {
    onDeleteReplyCommentModel {
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
export const onCreateLikeModel = /* GraphQL */ `
  subscription OnCreateLikeModel {
    onCreateLikeModel {
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
export const onUpdateLikeModel = /* GraphQL */ `
  subscription OnUpdateLikeModel {
    onUpdateLikeModel {
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
export const onDeleteLikeModel = /* GraphQL */ `
  subscription OnDeleteLikeModel {
    onDeleteLikeModel {
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
export const onCreateTagModel = /* GraphQL */ `
  subscription OnCreateTagModel {
    onCreateTagModel {
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
export const onUpdateTagModel = /* GraphQL */ `
  subscription OnUpdateTagModel {
    onUpdateTagModel {
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
export const onDeleteTagModel = /* GraphQL */ `
  subscription OnDeleteTagModel {
    onDeleteTagModel {
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
export const onCreatePhotoModel = /* GraphQL */ `
  subscription OnCreatePhotoModel {
    onCreatePhotoModel {
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
export const onUpdatePhotoModel = /* GraphQL */ `
  subscription OnUpdatePhotoModel {
    onUpdatePhotoModel {
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
export const onDeletePhotoModel = /* GraphQL */ `
  subscription OnDeletePhotoModel {
    onDeletePhotoModel {
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
export const onCreateUntitledModel = /* GraphQL */ `
  subscription OnCreateUntitledModel {
    onCreateUntitledModel {
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
export const onUpdateUntitledModel = /* GraphQL */ `
  subscription OnUpdateUntitledModel {
    onUpdateUntitledModel {
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
export const onDeleteUntitledModel = /* GraphQL */ `
  subscription OnDeleteUntitledModel {
    onDeleteUntitledModel {
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
export const onCreateUntitledFkModel = /* GraphQL */ `
  subscription OnCreateUntitledFkModel {
    onCreateUntitledFkModel {
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
export const onUpdateUntitledFkModel = /* GraphQL */ `
  subscription OnUpdateUntitledFkModel {
    onUpdateUntitledFkModel {
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
export const onDeleteUntitledFkModel = /* GraphQL */ `
  subscription OnDeleteUntitledFkModel {
    onDeleteUntitledFkModel {
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
export const onCreateBlogModelTagModel = /* GraphQL */ `
  subscription OnCreateBlogModelTagModel {
    onCreateBlogModelTagModel {
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
export const onUpdateBlogModelTagModel = /* GraphQL */ `
  subscription OnUpdateBlogModelTagModel {
    onUpdateBlogModelTagModel {
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
export const onDeleteBlogModelTagModel = /* GraphQL */ `
  subscription OnDeleteBlogModelTagModel {
    onDeleteBlogModelTagModel {
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
