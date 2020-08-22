const { ApolloServer, gql } = require('apollo-server-express');
const UserTypes = require('./user');
const GroceryTypes = require('./grocery');
const ListTypes = require('./list');
const StoreTypes = require('./store');

module.exports = gql`
    ${UserTypes}
    ${GroceryTypes}
    ${StoreTypes}
    ${ListTypes}

    type Query {
        getUsers: [User],
        getUser(_id: String): User,

        getGroceries: [Grocery],
        getGrocery(_id: String): Grocery,

        getStores: [Store],
        getStore(_id: String): Store,

        getLists: [List],
        getList(_id: String): List,
    }
    
    type Mutation {
      addUser(input: addUserInput!): User,
      updateUser(input: updateUserInput!): User,
      deleteUser(input: deleteUserInput!): User,

      addGrocery(input: addGroceryInput!): Grocery,
      updateGrocery(input: updateGroceryInput!): Grocery,
      deleteGrocery(input: deleteGroceryInput!): Grocery,

      addStore(input: addStoreInput!): Store,
      updateStore(input: updateStoreInput!): Store,
      deleteStore(input: deleteStoreInput!): Store,

      addList(input: addListInput!): List,
      updateList(input: updateListInput!): List,
      deleteList(input: deleteListInput!): List,
      addGroceryToList(input: addGroceryToListInput!): List,
      updateGroceryOnList(input: updateGroceryOnListInput!): List,
      removeGroceryFromList(input: removeGroceryFromListInput!): List,
      updateGroceryLog(input: updateGroceryLogInput): List, 
      addStoreToList(input: addStoreToListInput): List,
      addCategoryToList(input: addCategoryToList): List,
      addMemeberToList(input: addMemberToList): List,
    }
`;