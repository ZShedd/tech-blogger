const { Post } = require("../models");

const postdata = [
  {
    title: "Goober Man",
    content: "I am a goober.",
    user_id: "1",
  },
  {
    title: "Who is Bob?",
    content:
      "Bob is a cat that knows where it is at. They have been seen playing the horn.",
    user_id: "2",
  },
  {
    title: "How to Eat",
    content: "Lets discuss the finest food there is. Pickled Eggs.",
    user_id: "3",
  },
  {
    title: "HTML is HTMcooL.",
    content: "I like html, it creates websites and doesn't afraid of anything.",
    user_id: "4",
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;