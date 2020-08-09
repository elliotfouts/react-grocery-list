module.exports = `
    type List {
      name: String!,
      users: [User],

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
      date: Date,
    }
`;