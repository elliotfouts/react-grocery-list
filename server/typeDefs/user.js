module.exports = `
    type User {
      _id: ID, 
      name: String!,
      password: String,
      email: String,
      googleId: String,
      lists: [String]
    }

    input addUserInput {
      name: String,
      email: String, 
      password: String,
      googleId: String,
      lists: String,
    }

    input updateUserInput {
      _id: ID!,
      set: addUserInput,
      unset: addUserInput,
      push: addUserInput,
      pull: addUserInput,
    }

    input deleteUserInput {
      _id: ID!,
    }
`;