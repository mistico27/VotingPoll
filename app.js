import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(cors({
    origin:'http://localhost:5173', 
   credentials:true,
   optionSuccessStatus:200,
}));
app.use(morgan('dev'));
app.use(express.json());

//app.use("/api",taskRoutes);





export default app;