const {User, Grocery, List, Store} =  require('../models');
const {dropUndefined} = require('../utils/dropUndefined');

module.exports = {
    Query: {
        getUsers: async () => {
          try {
            const users = await User.find({});
            return users;
          } catch (error) {
            console.log(error);
          }
        },
        getUser: async (parent, {_id}) => {
          try {
            const user = await User.findById(_id);
            return user;
          } catch (error) {
            console.log(error);
          }
        }, 
        // getList: async (_id) => {
        //   try {
        //     return await List.findById(_id);
        //   } catch (error) {
        //     console.log(error);
        //   }
        // },
        // getGrocery: async (_id) => {
        //   try {
        //     return await g.findById(_id);
        //   } catch (error) {
        //     console.log(error);
        //   }
        // },
    },
    Mutation: {
      addUser: async (parents, {input:user}, context) => {
        try {
          const newUser = await User.create(user);
          console.log(newUser);
          return newUser;
        } catch (error) {
          console.log(error);
        }
      },
      updateUser: async (parents, {input: {_id, set, unset, push, pull}}) => {
        try {
          const unformattedParameters = {$set: set, $unset: unset, $push: push, $pull: pull};
          const formattedParameters = dropUndefined(unformattedParameters);
          return await User.findByIdAndUpdate(_id, formattedParameters, {new: true});
        } catch (error) {
          console.log(error);
        }
      },
      deleteUser: async (parents, {input:{_id}}, context) => {
        try {
          return await User.findByIdAndDelete(_id);
        } catch (error) {
          console.log(error);
        }
      },
      // addList: async (parents, list, context) => {
      //   try {
      //     return await List.create(list);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
      // updateList: async (parents, {_id, list}, context) => {
      //   try {
      //     return await List.findByIdAndUpdate(_id, list, {new: true});
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
      // deleteList: async (parents, {_id}, context) => {
      //   try {
      //     return await List.findByIdAndDelete(_id);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },

      // addGrocery: async (parents, grocery, context) => {
      //   try {
      //     return await Grocery.create(grocery);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
      // updateGrocery: async (parents, {_id, grocery}, context) => {
      //   try {
      //     return await Grocery.findByIdAndUpdate(_id, grocery, {new: true});
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },

      // addStore: async (parents, store, context) => {
      //   try {
      //     return await Store.create(store);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
      // updateStore: async (parents, {_id, store}, context) => {
      //   try {
      //     return await Store.findByIdAndUpdate(_id, store, {new: true});
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
    }
};