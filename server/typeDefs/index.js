const { ApolloServer, gql } = require('apollo-server-express');
const UserTypes = require('./user');
const GroceryTypes = require('./grocery');
const ListTypes = require('./list');
const GroceryOnListTypes = require('./groceryOnList');
const LogTypes = require('./log');

module.exports = gql`
    ${UserTypes}
    ${GroceryTypes}
    ${GroceryOnListTypes}
    ${ListTypes}
    ${LogTypes}

    type Query {
        getUsers: [User],
        getUser(_id: ID): User,

        getGroceries: [Grocery],
        getGrocery(_id: ID): Grocery,

        getGroceriesOnList: [GroceryOnList],
        getGroceryOnList(_id: ID): GroceryOnList,

        getLists: [List],
        getList(_id: ID): List,
    }
    
    type Mutation {
      addUser(input: addUserInput!): User,
      updateUser(input: updateUserInput!): User,
      deleteUser(input: deleteUserInput!): User,

      addGrocery(input: addGroceryInput!): Grocery,
      updateGrocery(input: updateGroceryInput!): Grocery,
      deleteGrocery(input: deleteGroceryInput!): Grocery,

      addGroceryOnList(input: addGroceryOnListInput!): GroceryOnList,
      updateGroceryOnList(input: updateGroceryOnListInput!): GroceryOnList,
      deleteGroceryOnList(input: deleteGroceryOnListInput!): GroceryOnList,


      addList(input: addListInput!): List,
      updateList(input: updateListInput!): List,
      deleteList(input: deleteListInput!): List,
    }
`;