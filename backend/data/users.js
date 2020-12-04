import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "jezos",
    email: "jezos@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "chocobot",
    email: "bot@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
