module.exports = `
  type Grocery {
    _id: ID!,
    name: String!,
    imageUrl: String!,
    upc: String,
    popularity: Int,
  }

  input addGroceryInput {
    name: String,
    imageUrl: String, 
    upc: String,
  }

  input updateGroceryInput {
    _id: ID!,
    set: addGroceryInput,
    unset: addGroceryInput,
    push: addGroceryInput,
    pull: addGroceryInput,
  }

  input deleteGroceryInput {
    _id: ID!,
  }
`;