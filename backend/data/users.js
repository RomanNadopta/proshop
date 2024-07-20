import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('test1234', 12),
    isAdmin: true,
  },
  {
    name: 'Jennifer Hardy',
    email: 'jennifer@example.com',
    password: bcrypt.hashSync('test1234', 12),
    isAdmin: false,
  },
  {
    name: 'Kate Morrison',
    email: 'kate@example.com',
    password: bcrypt.hashSync('test1234', 12),
    isAdmin: false,
  },
];

export default users;
