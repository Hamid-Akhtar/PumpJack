
const db = require("../src/models");
const User = db.user;

exports.users = (req) => {
  return User.findByPk(req)
    .then(user => {
      if (!user) {
        return "User Not found.";
      }
      return user;
    })
    .catch(err => {
      console.log('----------The Error From The Model Is----------')
      return { message: err.message };
    });
}

exports.AllUsers = () => {
  return User.findAll()
    .then(users => {
      if (!users) {
        return "User Not found.";
      }
     console.log("users", users)
      return users;
    })
    .catch(err => {
      console.log("----------The Error From The Model Is----------", err);
      return { message: err.message };
    });
}