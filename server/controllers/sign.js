import User from '../models/user.js';
import jwt from 'jsonwebtoken';
export const signin = (req, res) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          if (user.authenticate(req.body.password)) {
            const token = jwt.sign({ _id: user._id }, "turtle", { expiresIn: '1h' });
            const { _id, firstName, lastName, email, role, fullName } = user;
            res.status(200).json({
              token,
              user: {
                _id, firstName, lastName, email, role, fullName
              }
            });
          } else {
            res.status(400).json({
              message: 'Invalid Password'
            });
          }
        } else {
          return res.status(400).json({ message: 'User not found' });
        }
      })
      .catch(error => {
        return res.status(400).json({ message: error.message });
      });
  };
  
