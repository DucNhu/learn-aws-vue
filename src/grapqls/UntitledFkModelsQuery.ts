export const UntitledFkModelsQuery = `query UntitledFkModelsQuery($id: ID) {
  listUntitledModels(filter: {id: {eq: $id}}) {
    items {
      name
      id
      Description
      UntitledFkModels {
        items {
          content
          createdAt
          id
          _version
          untitledmodelID
        }
      }
    }
  }
}`
