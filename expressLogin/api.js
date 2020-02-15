const userModel = require("./model");

module.exports = {
  getAllUsers: () =>
    new Promise((resolve, reject) => {
      userModel.find({}, {}, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    }),

  getUserByEmail: userEmail =>
    new Promise((resolve, reject) => {
      userModel.findOne({ email: userEmail }, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    }),

  getUserByGoogleId: userGoogleId =>
    new Promise((resolve, reject) => {
      userModel.findOne({ googleId: userGoogleId }, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    }),

  addUser: newUser => userModel.create(newUser)
};
