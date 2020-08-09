module.exports = `
    type List {
      _id: ID,
      name: String!,
      users: [User],
      stores: [Store],
      categories: [String]
      groceries: [GroceryOnList],
    }

    type GroceryOnList {
      grocery: Grocery,
      quantity: String,
      note: String,
      log: [LogItem],
    }

    type LogItem {
      user: User,
      message: String,
      date: String,
    }

    input addListInput {
      name: String,
      users: [ID], 
      stores: [ID],
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