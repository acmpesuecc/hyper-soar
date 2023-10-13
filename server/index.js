import express from 'express';
const app = express();
// import env from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import authRoutes from '../server/routes/auth.js';
import { check, validationResult } from 'express-validator';
const { application } = express;

//routes
// const authRoutes = require('./routes/auth');

//environment variables
// env.config();

mongoose.connect(``).then (() => 
{
    console.log('Database connected');
});

// Middleware to parse request body
//app.use(bodyParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api' , authRoutes);

app.post('/data', (req, res, next) => {
    console.log(req.body);
    res.status(200).json({ 
      message: req.body });
  });
  const signin = (req, res) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          if (user.authenticate(req.body.password)) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
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
        return res.status(400).json({ message: 'Something went wrong' });
      });
  };
  
  app.post('/signin',[
   
    check('email')
    .isEmail()
    .withMessage('Vaild email is required'),
    check('password')
    .isLength({ min: 6})
    .withMessage('Password must be at least characters long'),

], signin);
app.get('/', (req, res) => {
    res.send('Server is up!');
});

const startServer = async () => {
    const port = process.env.PORT || 8080;

    app.listen(port, () => console.log('Server is running on port '+port));
}

startServer();