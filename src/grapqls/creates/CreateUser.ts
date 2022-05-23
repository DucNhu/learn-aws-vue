export const createUserModel = `
mutation createUserModel(
    $id: ID!,
    $full_name: String!,
    
    $email: String!
  ) {
    createUserModel(input: {id: $id, full_name: $full_name, email: $email}) {
      id
    }
  }
`;
