const db = require("./connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  await User.create({
    firstName: "Derimar",
    lastName: "Gray",
    email: "dg@email.com",
    password: "password",
  });

  console.log("users seeded");

  process.exit();
});
