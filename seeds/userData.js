const { User } = require("../models");

const userdata = [
  {
    username: "GooberGobber",
    email: "goober.gobber@gmail.com",
    password: "123456789",
  },
  {
    username: "FleximusPrime",
    email: "felix.glen@gmail.com",
    password: "1234finalstand",
  },
  {
    username: "JumpyPup",
    email: "test.thing@yahoo.com",
    password: "PooFlinger",
  },
  {
    username: "JimtheBob",
    email: "my.email@msn.com",
    password: "blibBlop",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;