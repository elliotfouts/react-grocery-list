module.exports = `
  type Store {
    _id: ID, 
    name: String,
    imageUrl: String
  }

  input addStoreInput {
    name: String,
    imageUrl: String, 
  }

  input updateStoreInput {
    _id: ID!,
    set: addStoreInput,
    unset: addStoreInput,
    push: addStoreInput,
    pull: addStoreInput,
  }

  input deleteStoreInput {
    _id: ID!,
  }
`;