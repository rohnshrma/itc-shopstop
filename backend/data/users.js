import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("12345"),
    isAdmin: true,
  },
  {
    name: "john doe",
    email: "john@email.com",
    password: bcrypt.hashSync("12345"),
    isAdmin: false,
  },
  {
    name: "jane doe",
    email: "jane@email.com",
    password: bcrypt.hashSync("12345"),
    isAdmin: false,
  },
];

export default users;
