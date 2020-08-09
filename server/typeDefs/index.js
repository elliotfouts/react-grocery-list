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
    }
`;



// type List {
//       name: String!,
//       users: [User],
//       stores: [Store],
//       categories: [String],
//       log: [{
//         date: String,
//         message: String,
//         user: User
//       }]
//     }

//     type Grocery {
//       name: String!,
//       imageUrl: String!,
//       upc: String
//     }

//     type Store {
//       name: String!,
//       imageUrl: String!
//     }



    //   updateUser(_id: String, user: {name: String!, email: String!, password: String, google: {displayName: String, googleId: String}}): User,
    //   deleteUser(_id: String): User,

    //   addGrocery(name: String!, imageUrl: String!, upc: String): Grocery,
    //   updateGrocery(name: String!, imageUrl: String!, upc: String): Grocery,

    //   addList(name: String!, users: [User], stores: [Store], categories: [String], log: [{ date: String, message: String, user: User }]): List,
    //   updateList(_id: String, list: {name: String!, users: [User], stores: [Store], categories: [String], log: [{ date: String, message: String, user: User }]}): List,
    //   deleteList(_id: String): List,

    //   addStore: Store,
    //   updateStore: Store,
    //   deleteStore: Store,
    // }




        // getList(id: String!): List,

        // getGroceries(): [Grocery],
        // getGrocery(): Grocery,

        // getStores: [Store],