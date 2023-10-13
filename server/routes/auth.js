import express from 'express';
import { signup } from '../controllers/auth.js';
import { signin } from '../controllers/sign.js';
const router = express.Router(); 
import { check, validationResult } from 'express-validator';


router.post('/signup' ,[
    check('firstName')
    .not()
    .isEmpty()
    .withMessage('First Name is required'),
    check('lastName')
    .not()
    .isEmpty()
    .withMessage('Last Name is required'),
    check('email')
    .isEmail()
    .withMessage('Vaild email is required'),
    check('password')
    .isLength({ min: 6})
    .withMessage('Password must be at least characters long'),

], signup);
router.post('/signin',[
   
    check('email')
    .isEmail()
    .withMessage('Vaild email is required'),
    check('password')
    .isLength({ min: 6})
    .withMessage('Password must be at least characters long'),

], signin);

// router.post('/profile', requireSignin, (req,res) => {
//     res.status(200).json({ user : 'profile' });
// });

export default router;