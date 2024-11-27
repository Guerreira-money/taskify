import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import logoutRoute from './routes/logoutRouter.js'; 
import taskRoutes from './routes/taskRouts.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();


// Middleware para parsear JSON
app.use(bodyParser.json());

// Usando as rotas de usuários
app.use('/api/users', userRoutes);
app.use('/api/users', logoutRoute);
app.use("/api/users", taskRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running`);
});
