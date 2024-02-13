import express from 'express';
import mongoose from 'mongoose';
import uri from './uri';

function start() {
  try{
    const app = express();
    app.use(express.json());
    
    mongoose.connect(uri),

    //rotas
    app.use('/users',require('./routes/users'));

    app.listen(3000, () => {
      console.log(`Servidor rodando em http://localhost:3000`);
    });
  }
  catch(e){
    console.log(e);
  }
}

start();


