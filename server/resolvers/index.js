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

        getGroceries: async () => {
          try {
            return await Grocery.find({});
          } catch (error) {
            console.log(error);
          }
        },
        getGrocery: async (parent, {_id}) => {
          try {
            return await Grocery.findById(_id);
          } catch (error) {
            console.log(error);
          }
        },

        getStores: async () => {
          try {
            return await Store.find({});
          } catch (error) {
            console.log(error);
          }
        },
        getStore: async (parent, {_id}) => {
          try {
            return await Store.findById(_id);
          } catch (error) {
            console.log(error);
          }
        },

        getLists: async () => {
          try {
            return await List.find({});
          } catch (error) {
            console.log(error);
          }
        },
        getList: async (parent, {_id}) => {
          try {
            return await List.findById(_id);
          } catch (error) {
            console.log(error);
          }
        },
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
      
      addGrocery: async (parents, {input:grocery}, context) => {
        try {
          const newGrocery = await Grocery.create(grocery);
          console.log(newGrocery);
          return newGrocery;
        } catch (error) {
          console.log(error);
        }
      },
      updateGrocery: async (parents, {input: {_id, set, unset, push, pull}}) => {
        try {
          const unformattedParameters = {$set: set, $unset: unset, $push: push, $pull: pull};
          const formattedParameters = dropUndefined(unformattedParameters);
          return await Grocery.findByIdAndUpdate(_id, formattedParameters, {new: true});
        } catch (error) {
          console.log(error);
        }
      },
      deleteGrocery: async (parents, {input:{_id}}, context) => {
        try {
          return await Grocery.findByIdAndDelete(_id);
        } catch (error) {
          console.log(error);
        }
      },

      addStore: async (parents, {input:store}, context) => {
        try {
          const newStore = await Store.create(store);
          console.log(newStore);
          return newStore;
        } catch (error) {
          console.log(error);
        }
      },
      updateStore: async (parents, {input: {_id, set, unset, push, pull}}) => {
        try {
          const unformattedParameters = {$set: set, $unset: unset, $push: push, $pull: pull};
          const formattedParameters = dropUndefined(unformattedParameters);
          return await Store.findByIdAndUpdate(_id, formattedParameters, {new: true});
        } catch (error) {
          console.log(error);
        }
      },
      deleteStore: async (parents, {input:{_id}}, context) => {
        try {
          return await Store.findByIdAndDelete(_id);
        } catch (error) {
          console.log(error);
        }
      },

      addList: async (parents, {input:list}, context) => {
        try {
          const newList = await List.create(list);
          console.log(newList);
          return newList;
        } catch (error) {
          console.log(error);
        }
      },
      updateList: async (parents, {input: {_id, set, unset, push, pull}}) => {
        try {
          const unformattedParameters = {$set: set, $unset: unset, $push: push, $pull: pull};
          const formattedParameters = dropUndefined(unformattedParameters);
          return await List.findByIdAndUpdate(_id, formattedParameters, {new: true});
        } catch (error) {
          console.log(error);
        }
      },
      deleteList: async (parents, {input:{_id}}, context) => {
        try {
          return await List.findByIdAndDelete(_id);
        } catch (error) {
          console.log(error);
        }
      },

    }
};