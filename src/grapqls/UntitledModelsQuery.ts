export const UntitledModelsQuery = `

query MyQuery {
  listUntitledModels {
    items {
      updatedAt
      name
      id
      usermodelID
      description
    }
  }
}
`;
// mutation MyMutation {
//   createUntitledModel(input: {name: "Test create", usermodelID: "123456"}) {
//     id
//     usermodelID
//   }
// }
