import {Router} from 'express'
import {registerSchema,loginSchema}from "../schemas/auth_schema.js";
import {authRequired} from "../middlewares/Validation_token.js";
import {validateSchema} from "../middlewares/Validation_Middleware.js";
import {RegisterMyUser} from "../controllers/auth_controller.js";


const router = Router();

///routes:
router.post('/register',validateSchema(registerSchema),RegisterMyUser);
//router.post('/login',validateSchema(loginSchema),login);
//router.post('/logout',logout);

//routes for authentication
//router.get('/profile',authRequired,profile);
//router.get('/verify',verifyToken);



export default router;