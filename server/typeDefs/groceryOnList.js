module.exports = `
  type GroceryOnList {
    _id: ID, 
    grocery: Grocery, 
    quantity: String,
    category: String,
    note: String,
    log: [Log],
  }

  input addGroceryOnListInput {
    groceryInfo: groceryInfoOnListInput,
    listId: ID
  }

  input groceryInfoOnListInput {
    grocery: ID, 
    quantity: String,
    category: String,
    note: String,
  }

  input updateGroceryOnListInput {
    _id: ID!,
    name: String,
    imageUrl: String
    quantity: String,
    category: String,
    note: String,
    set: addGroceryOnListInput,
    unset: addGroceryOnListInput,
    push: addGroceryOnListInput,
    pull: addGroceryOnListInput,
  }

  input deleteGroceryOnListInput {
    _id: ID!,

  }
`;