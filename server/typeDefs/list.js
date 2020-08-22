module.exports = `
    type List {
      _id: ID,
      name: String!,
      users: [User],
      categories: [String]
      groceries: [GroceryOnList],
    }

    input addListInput {
      name: String,
      users: [ID], 
      categories: [String],
      groceries: [ID]
    }

    input updateListInput {
      _id: ID!,
      set: addListInput,
      unset: addListInput,
      push: addListInput,
      pull: addListInput,
    }

    input deleteListInput {
      _id: ID!,
    }
`;