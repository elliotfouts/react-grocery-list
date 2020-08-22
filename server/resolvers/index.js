const {User, Grocery, GroceryOnList, List} =  require('../models');
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

        getGroceriesOnList: async (_id) => {
          try {
            const list = List.findById(_id).populate('groceries');
            console.log(list);
          } catch (error) {
            console.log(error);
          }
        },

        getLists: async () => {
          try {
            return await List.find({}).populate({path: 'groceries', populate: {path: 'grocery'}});
          } catch (error) {
            console.log(error);
          }
        },
        getList: async (parent, {_id}) => {
          try {
            return await List.findById(_id).populate({path: 'groceries', populate: {path: 'grocery'}});
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

      addGroceryOnList: async (parents, {input: {groceryInfo, listId}}, context) => {
        try {
          const newGroceryOnList = await GroceryOnList.create(groceryInfo);
          const {groceries: groceryList} = await List.findByIdAndUpdate(listId, {$push: {groceries: newGroceryOnList._id}}, {new: true}).populate({path: 'groceries', populate: {path: 'grocery'}});
          for (let i = 0; i < groceryList.length; i++) {
            if (JSON.stringify(groceryList[i]._id) == JSON.stringify(newGroceryOnList._id)) return groceryList[i]
          }
        } catch (error) {
          console.log(error);
        }
      },
      updateGroceryOnList: async (parents, {input: {_id, name, imageUrl, quantity, category, note}}, context) => {
        try {
          const unformattedGroceryOnListParameters = {quantity, category, note};
          const formattedGroceryOnListParameters = dropUndefined(unformattedGroceryOnListParameters);
          const updatedGroceryOnList = await GroceryOnList.findByIdAndUpdate(_id, formattedGroceryOnListParameters, {new: true});

          const unformattedGroceryParameters = {name, imageUrl};
          const formattedGroceryParameters = dropUndefined(unformattedGroceryParameters);
          Grocery.findByIdAndUpdate(updatedGroceryOnList.grocery, formattedGroceryParameters, {new: true});
          
          return updatedGroceryOnList;
        } catch (error) {
          console.log(error);
        }
      },
      deleteGroceryOnList: async (parents, {input: {_id}}, context) => {
        try {
          const deletedGrocery = await GroceryOnList.findByIdAndDelete(_id);
          return deletedGrocery;
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